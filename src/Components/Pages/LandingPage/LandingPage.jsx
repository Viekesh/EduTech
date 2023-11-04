import React from "react";
import "./LandingPage.css";
import TopNav from "../../FeaturedComponents/Navigation/TopNav";
// import Loader from "../../FeaturedComponents/Spinner/Loader";



const LandingPage = () => {
    return (
        <>
            <div className="landing_page">
                <TopNav />
                {/* <Loader /> */}
            </div>
        </>
    )
};



export default LandingPage;
