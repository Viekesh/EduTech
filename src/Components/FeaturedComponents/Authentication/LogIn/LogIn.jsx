import React from "react";
import "../Register/Register.css";
import TopNav from "../../Navigation/TopNav";
import MainHeading from "../../Headings/MainHeading/MainHeading";



const LogIn = () => {
    return (
        <>
            <section className="user_auth">
                <TopNav />
                <MainHeading headingTitle="Log In" />
            </section>
        </>
    )
}



export default LogIn;
