import { useContext } from "react";
import AppContext from "../ContextAPI/AppContext";



const AllBlogs = () => {

    const context = useContext(AppContext);

    const { mode } = context;

    return (
        <>
            <section className="all_blogs"></section>
        </>
    )
}



export default AllBlogs;