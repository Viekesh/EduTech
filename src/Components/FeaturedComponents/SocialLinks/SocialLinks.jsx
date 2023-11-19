import { BiSolidPhoneCall } from "react-icons/bi";
import "./SocialLinks.css";



const SocialLinks = () => {
    return (
        <>
            <div className="portfolio_links x_y_axis_center">

                <div className="call_animate x_y_axis_center">
                    <a href="tel:+917620174776" className="links call x_y_axis_center">
                        <BiSolidPhoneCall />
                    </a>
                </div>

            </div>
        </>
    );
};



export default SocialLinks;
