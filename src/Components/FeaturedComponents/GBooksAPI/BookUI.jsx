// import { useState } from "react";
// import Modal from "./Modal";



// const BookUI = ({ book }) => {

//     const [show, setShow] = useState(false);
//     const [bookItem, setItem] = useState();

//     console.log(book)

//     return (
//         <>
//             <section className="books_info"></section>
//         </>
//     )
// };



// export default BookUI;


// import { useState, useMemo } from "react";
// import Modal from "./Modal";

// const BookUI = ({ book }) => {
//     const [showBooks, setShowBooks] = useState(false);

//     const [bookElements, setBookElements] = useState();

// Use useMemo to optimize rendering based on book data
// const filteredBooks = useMemo(() => {
//     return book.filter(
//         (item) => item.volumeInfo.imageLinks && item.saleInfo.listPrice && item.saleInfo.listPrice.amount
//     );
// }, [book]);

//     const handleBookClick = (bookElem) => {
//         setShowBooks(true);
//         setBookElements(bookElem); // Update only when the book changes
//     };

//     return (
//         <section className="book_ui">
//             {book.map((item) => {

//                 return (
//                     <div className="card" key={item.id} onClick={() => handleBookClick(item)}>
//                         <img src={item} alt="" />
//                         <div className="bottom">
//                             <h3 className="title">{item.volumeInfo.title}</h3>
//                             <p className="amount">&#8377;{item.volumeInfo.amount}</p>
//                         </div>
//                     </div>
//                 );
//             })}
//             <Modal show={showBooks} bookElem={bookElements} onClose={() => setShowBooks(false)} />
//         </section>
//     );
// };



// export default BookUI;




import { useState } from "react";
import Modal from "./Modal";

const BookUI = ({ book }) => {

    const [showBooks, setShowBooks] = useState(false);
    const [bookElements, setBookElements] = useState({});

    console.log(book);

    return (
        <section className="book_ui">
            {
                book && book.length > 0 && book.map((item) => {
                    let thumbnail = item.volumeInfo?.imageLinks?.smallThumbnail;
                    let amount = item.saleInfo?.listPrice?.amount;

                    if (thumbnail && amount) { // Use truthy check for both
                        return (
                            <>
                                <div
                                    className="card"
                                    onClick={() => {
                                        setShowBooks(true);
                                        setBookElements(item);
                                    }}
                                >
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <p className="amount">&#8377;{amount}</p>
                                    </div>
                                </div>
                                <Modal show={showBooks} bookElem={bookElements} onClose={() => setShowBooks(false)} />
                            </>
                        );
                    }

                    return null; // Optionally return null to avoid empty elements (consider error handling)
                })
            }
        </section>
    );
};

export default BookUI;





// import { useState } from "react";
// import Modal from "./Modal";

// const BookUI = ({ book }) => {
//     const [showBooks, setShowBooks] = useState(false);
//     const [bookElements, setBookElements] = useState();

//     return (
//         <section className="book_ui">
//             {book.map((item) => {
//                 let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
//                 let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

//                 if (thumbnail !== undefined && amount !== undefined) {
//                     return (
//                         <>
//                             <div className="card" onClick={() => { setShowBooks(true); setBookElements(item); }}>
//                                 <img src={thumbnail} alt="" />
//                                 <div className="bottom">
//                                     <h3 className="title">{item.volumeInfo.title}</h3>
//                                     <p className="amount">&#8377;{amount}</p>
//                                 </div>
//                             </div>
//                             <Modal show={showBooks} bookElem={bookElements} onClose={() => setShowBooks(false)} />
//                         </>
//                     );
//                 }
//             })}
//         </section>
//     );
// };

// export default BookUI;