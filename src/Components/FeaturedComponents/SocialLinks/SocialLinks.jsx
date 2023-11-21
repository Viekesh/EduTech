import { BiSolidPhoneCall } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import "./SocialLinks.css";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";



const SocialLinks = () => {

    const [mailIconPosition, setMailIconPosition] = useState(12);

    const [whatsappIconPos, setWhatsAppIconPos] = useState(12);

    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);
        return (
            () => {
                window.removeEventListener("scroll", HandleScroll);
            }
        )
    }, []);

    const HandleScroll = () => {

        if (window.scrollY) {
            setMailIconPosition(23);
            setWhatsAppIconPos(32);
        } else {
            setMailIconPosition(12);
            setWhatsAppIconPos(12);
        }

    };

    const whatsapp = {
        bottom: whatsappIconPos + "vh",
    };

    const mail = {
        bottom: mailIconPosition + "vh",
    }

    return (
        <>
            <div className="portfolio_links x_y_axis_center">

                <div style={whatsapp} id="Mail" className="whatsapp x_y_axis_center">
                    <a href="https://wa.me/+917620174776/?text=What Can I Do For You" className="x_y_axis_center">
                        <IoLogoWhatsapp />
                    </a>
                </div>

                <div style={mail} id="Mail" className="mail x_y_axis_center">
                    <a href="mailto:vikesh.g99@gmail.com" className="x_y_axis_center">
                        <BiLogoGmail />
                    </a>
                </div>

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
