import "./InstagramLink.css";
import imgElectrician from "../../../../Assets/Images/studyBoy-removebg-preview (1).png";
import { FaInstagram } from "react-icons/fa";


const Instagram = () => {
    return (
        <>
            <section className="instagram_link y_axis_center">
                <div className="img">
                    <img src={imgElectrician} alt="" />
                </div>

                <a href="https://www.instagram.com/tusha.rdeshmukh2023?igsh=NjBpNzBnYXIxaHBq" className="x_axis_center">
                    <FaInstagram />
                </a>
            </section>
        </>
    )
}



export default Instagram;