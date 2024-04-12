import { useContext, useState } from "react";
import AppContext from "../ContextAPI/AppContext";
import { AiOutlineSearch } from "react-icons/ai";



const SearchDialog = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(AppContext);

    return (
        <>
            <section className="search_dialog">
                <div className="search_icon" onClick={handleOpen(open)}>
                    <AiOutlineSearch />
                </div>

                <div className="input">
                    <input type="text" />
                </div>
            </section>
        </>
    )
}



export default SearchDialog;