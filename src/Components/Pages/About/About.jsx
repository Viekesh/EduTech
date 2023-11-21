import React from "react";
import "./About";
import TopNav from "../../FeaturedComponents/Navigation/TopNav";
import Footer from "../Footer/Footer";
import MainHeading from "../../FeaturedComponents/Headings/MainHeading/MainHeading";



const About = () => {
    return (
        <>
            <TopNav />
            <MainHeading headingTitle="About" />

            <div className="about_description">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolorum earum, aliquam voluptatum optio officiis at cupiditate quisquam sequi eius. Beatae temporibus tempore nesciunt sapiente incidunt dolor veritatis maiores consequatur voluptatum culpa!
                </p>

                <br />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo totam at quasi optio nemo, quam maiores aut! Quisquam, aliquid nostrum. Asperiores illo unde repellat molestiae impedit saepe officiis, molestias expedita voluptas adipisci tenetur maxime pariatur facilis ratione, nesciunt est sed doloremque, soluta error esse? Blanditiis temporibus quod tempora autem, deserunt consequuntur veritatis modi odio quas quis molestiae recusandae natus illum suscipit officia aliquam sapiente nesciunt.
                </p>
            </div>
            <Footer />
        </>
    )
};



export default About;
