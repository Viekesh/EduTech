import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/Pages/LandingPage/LandingPage";
import Register from "../Components/FeaturedComponents/Authentication/Register/Register";
import LogIn from "../Components/FeaturedComponents/Authentication/LogIn/LogIn";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/LogIn" element={<LogIn />}></Route>
            </Routes>
        </>
    )
}



export default ReactRoutes;