import React from "react";
import "./Footer.css";
import { IoMdContact } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FcRules } from "react-icons/fc";



const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="f_elements">
                    <a className="y_axis_center"><IoMdContact /> &nbsp; contact us</a>
                    <a className="y_axis_center"><IoShareSocial /> &nbsp; social media</a>
                    <a className="y_axis_center"><MdOutlinePrivacyTip /> &nbsp; privacy and policy</a>
                    <a className="y_axis_center"><FcRules /> &nbsp; terms and coditions</a>
                </div>
            </section>
        </>
    )
}



export default Footer;