import React from "react";
import "./MainHeading.css";



const MainHeading = ({ headingTitle }) => {
    return (
        <>
            <div className="main_heading">
                <h1>{headingTitle}</h1>
            </div>
        </>
    )
}



export default MainHeading;
