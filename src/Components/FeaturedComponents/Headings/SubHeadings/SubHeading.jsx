import React from "react";
import "./SubHead.css";



const SubHead = ({ headTitle }) => {
    return (
        <>
            <div className="sub_head">
                <h2>{headTitle}</h2>
            </div>
        </>
    )
};



export default SubHead;