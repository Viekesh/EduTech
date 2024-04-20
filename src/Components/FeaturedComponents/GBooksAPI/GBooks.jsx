// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import BookUI from './BookUI';
// import "./GBooks.scss";




// // Move API key to a secure environment variable
// const API_KEY = `AIzaSyA3aytYK5mHDHROESjmwluGBImS1WE7bk8`;

// const GBooks = () => {

//     const [bookData, setBookData] = useState([]);

//     const [search, setSearch] = useState([]);

//     const [isLoading, setIsLoading] = useState(false);

//     const [error, setError] = useState(null);

//     const handleSubmitReq = async (event) => {
//         // Prevent default form submission behavior if applicable
//         event.preventDefault();

//         if (!search.trim()) {
//             setError('Please enter a search term.');
//             return;
//         };

//         if (event.key === 'Enter' && search.trim()) {
//             setIsLoading(true);
//             setError(null);

//             try {
//                 const response = axios.get(
//                     `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${API_KEY}`
//                 );

//                 setBookData((await response).data.item);
//             } catch (error) {
//                 setError(<p>Some Error Has Occured While Fetching Data. (error.message)</p>);
//             } finally {
//                 setIsLoading(false);
//             };
//         };
//     };



//     const handleSearchReq = (event) => {
//         setSearch(event.target.value.trim());
//     };



//     useEffect(() => {

//         const fetchAPI = async () => {

//             // const API_URL = `https://www.googleapis.com/books/v1/volumes?q` + search + `&key=${API_KEY}  + '&maxResults=40'`;
//             const API_URL = "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + API_KEY + "&maxResults=40";


//             try {
//                 const response = await fetch(API_URL);
//                 if (!response.ok) {
//                     throw new Error(`API request failed with status ${response.status}`);
//                 }

//                 return await response.json();
//             } catch (error) {
//                 // Handle API errors gracefully (e.g., display an error message)
//                 console.error('Error fetching data:', error);
//                 return null;
//             }

//         };

//         const fetchData = async () => {

//             setIsLoading(true);

//             // Clear previous errors before fetching
//             setError(null);

//             const fetchedData = await fetchAPI();
//             console.log(fetchedData);
//             setBookData(fetchedData);
//             setIsLoading(false);
//         };

//         fetchData();

//     }, [search]);



//     return (
//         <section className="g_books">

//             {isLoading && <p>Loading data...</p>}

//             {error && <p>Error: {error.message}</p>}

//             <div className="search_block">
//                 <form className='search_icon' onSubmit={handleSubmitReq}>
//                     <input
//                         type="text"
//                         placeholder="Search for books..."
//                         value={search}
//                         onChange={handleSearchReq}
//                     />
//                 </form>
//             </div>

//             {
//                 bookData && bookData.length > 0 && (
//                     <ul>
//                         {
//                             bookData.map((item) => (
//                                 // Use a unique identifier for each item */
//                                 <li key={item.id || item._id}>
//                                     {/* Access and display data from the fetched items here */}
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 )
//             }

//             <div className="book_data">
//                 {
//                     <BookUI book={bookData} />
//                 }
//             </div>
//         </section>
//     );
// };



// export default GBooks;



// //




// import React from "react";
// import "./GBooks.scss";
// import { useState } from "react";
// import axios from "axios";
// import BookUI from "./BookUI";



// const GBooks = () => {

//     const [search, setSearch] = useState("");
//     const [bookData, setData] = useState([]);

//     const API_KEY = `AIzaSyDz_uBQ8PWed_gkoGzlQM6bXjbAmdLGN80`;

//     const searchBook = (evt) => {
//         if (evt.key === "Enter") {
//             axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyDz_uBQ8PWed_gkoGzlQM6bXjbAmdLGN80`)
//                 .then(res => setData(res.data))
//                 .catch(err => console.log(err))
//         }
//     }

//     console.log("Book Data:", bookData);

//     return (
//         <>
//             <section className="g_books">

//                 <div className="row1">
//                     <h1>A room without books is like<br /> a body without a soul.</h1>
//                 </div>
//                 <div className="row2">
//                     <h2>Find Your Book</h2>
//                     <div className="search">
//                         <input type="text" placeholder="Enter Your Book Name"
//                             value={search} onChange={e => setSearch(e.target.value)}
//                             onClick={searchBook} />
//                         <button><i className="fas fa-search"></i></button>
//                     </div>
//                     <img src="./images/bg2.png" alt="" />
//                 </div>

//                 <div className="container">
//                     {
//                         <BookUI book={bookData} />
//                     }
//                 </div>

//             </section>
//         </>
//     )
// }



// export default GBooks;




import React, { useState, useEffect } from 'react';
import './GBooks.scss'; // Import your CSS file for styling (optional)

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

function App() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`[API_ENDPOINT]?key=${apiKey}`); // Replace with your API endpoint URL
                const data = await response.json();
                setBooks(data.items || []); // Handle potential data structure variations
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBooks();
    }, []); // Empty dependency array to fetch books only once on component mount

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase()); // Lowercase for case-insensitive search
    };

    const filteredBooks = books.filter((book) =>
        book.volumeInfo.title.toLowerCase().includes(searchTerm) ||
        book.volumeInfo.authors?.some((author) => author.toLowerCase().includes(searchTerm))
    );

    return (
        <div className="App">
            <h1>Book Search</h1>
            <input
                type="text"
                placeholder="Search for books..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {filteredBooks.length === 0 && !isLoading && <p>No books found.</p>}
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id}>
                        <img src={book.volumeInfo.imageLinks?.thumbnail || ''} alt={book.volumeInfo.title} />
                        <h2>{book.volumeInfo.title}</h2>
                        <p>
                            {book.volumeInfo.authors?.join(', ') || 'No author information available'}
                        </p>
                        <p>${book.saleInfo?.retailPrice?.amount || 'Price unavailable'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
