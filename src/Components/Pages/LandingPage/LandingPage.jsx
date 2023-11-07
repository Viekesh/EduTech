import React from "react";
import "./LandingPage.css";
import TopNav from "../../FeaturedComponents/Navigation/TopNav";
import Footer from "../Footer/Footer";
// import Loader from "../../FeaturedComponents/Spinner/Loader";



const LandingPage = () => {
    return (
        <>
            <div className="landing_page">
                <TopNav />
                {/* <Loader /> */}
                <Footer />
            </div>
        </>
    )
};



export default LandingPage;
