import { AboutCon } from "../../../ServiceDataBase/ManualData/AboutContent";
import Testimonials from "../../Common/Testimonials/Testimonials";
import MainHeading from "../../FeaturedComponents/Headings/MainHeading/MainHeading";
import SubHead from "../../FeaturedComponents/Headings/SubHeadings/SubHeading";
import TopNav from "../../FeaturedComponents/Navigation/TopNav";
import SocialLinks from "../../FeaturedComponents/SocialLinks/SocialLinks";
import Footer from "../Footer/Footer";
import "./About.css";




const About = () => {
    return (
        <>
            <section className="about">
                <TopNav />
                <SocialLinks />
                <MainHeading headingTitle="About" />



                <div className="about_content">
                    {
                        AboutCon.map((data) => {
                            return (
                                <>
                                    <p>{data.contentOne}</p>
                                    <p>{data.contentTwo}</p>
                                </>
                            )
                        })
                    }
                </div>

                <SubHead headTitle="Our Team:" />
                <Testimonials />

                <div className="about_content">
                    {
                        AboutCon.map((data) => {
                            return (
                                <>
                                    <p>{data.contentThree}</p>
                                    <p>{data.contentFour}</p>
                                </>
                            )
                        })
                    }
                </div>

                <Footer />
            </section>
        </>
    )
}



export default About;