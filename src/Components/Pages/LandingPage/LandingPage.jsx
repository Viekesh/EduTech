import React from "react";
import "./LandingPage.css";
import TopNav from "../../FeaturedComponents/Navigation/TopNav";
import Footer from "../Footer/Footer";
import RandomQuotes from "../../FeaturedComponents/RandomQuoteGenerator/RandomQuotes";



const LandingPage = () => {

    return (
        <>
            <section className="landing_page">
                <TopNav />
                <RandomQuotes />
                <Footer />
            </section>
        </>
    )
};



export default LandingPage;
