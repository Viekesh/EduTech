import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactRoutes from "./ReactRoutes";



const ReactRouter = () => {
    return (
        <>
            <BrowserRouter>
                <ReactRoutes />
            </BrowserRouter>
        </>
    )
}



export default ReactRouter;