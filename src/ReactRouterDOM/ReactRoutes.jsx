import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/Pages/LandingPage/LandingPage";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
            </Routes>
        </>
    )
}



export default ReactRoutes;