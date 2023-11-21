import React from "react";
import "./LandingPage.css";
import TopNav from "../../FeaturedComponents/Navigation/TopNav";
import Footer from "../Footer/Footer";
import RandomQuotes from "../../FeaturedComponents/RandomQuoteGenerator/RandomQuotes";
import { LandingPageHeadline } from "../../../ServiceDataBase/ManualData/Content";
import LibraryFeatures from "../../FeaturedComponents/Carousel/LibraryFeatures";
import SubHead from "../../FeaturedComponents/Headings/SubHeadings/SubHeading";
import SocialLinks from "../../FeaturedComponents/SocialLinks/SocialLinks";



const LandingPage = () => {

    return (
        <>
            <section className="landing_page">
                <TopNav />
                {
                    LandingPageHeadline.map((h) => (
                        <div className="heading1">
                            <h1 className="text1" id="Text1">{h.text1}</h1>
                            <h1 className="text2" id="Text2">{h.text2}</h1>
                        </div>
                    ))
                }

                <SubHead headTitle="Library Features" />
                <LibraryFeatures />

                <div className="qt">
                    <RandomQuotes />
                </div>

                <SocialLinks />

                <Footer />
            </section>

            <section className="dev_profile">
                <h1>
                    developed by
                    <a
                        href="https://www.linkedin.com/in/vikesh-gaikwad-994872194"
                    >
                        &nbsp; Vikesh Gaikwad
                    </a>
                </h1>
            </section>
        </>
    )
};



export default LandingPage;



// Greetings, everyone. I am delighted to welcome you all to the opening ceremony of our new library.This
// library is a result of the hard work and dedication of many people who share a common vision of promoting
// literacy and learning in our community.

// The library offers a wide range of books, magazines, newspapers, and digital resources for all ages and
// interests.You can find books on various topics such as history, science, art, literature, and more.You
// can also access online databases, e - books, audiobooks, and

// Greetings, everyone.I am delighted to welcome you all to the library.The library is a place where you can
// find a treasure of knowledge, information, and entertainment.It is a place where you can explore new
// ideas, learn new skills, and discover new passions.The library is also a place where you can connect with
// other people, share your thoughts, and exchange your views.

// The library offers a variety of resources and services to meet your needs and interests.You can access
// books, magazines, newspapers, journals, e - books, audiobooks, databases, and more.You can also use the
// computers, printers, scanners, copiers, and Wi - Fi.You can also join the library programs, events,
// workshops, and clubs.You can also ask the library staff for help, guidance, and recommendations.