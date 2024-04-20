import GBooks from "../../FeaturedComponents/GBooksAPI/GBooks";
import MainHeading from "../../FeaturedComponents/Headings/MainHeading/MainHeading";
import TopNav from "../../FeaturedComponents/Navigation/TopNav";




const Library = () => {
    return (
        <section className="library">
            <TopNav />
            <MainHeading headingTitle="Library" />
            <GBooks />
        </section>
    )
}



export default Library;