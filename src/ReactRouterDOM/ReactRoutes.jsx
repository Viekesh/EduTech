import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/Pages/LandingPage/LandingPage";
import Register from "../Components/FeaturedComponents/Authentication/Register/Register";
import LogIn from "../Components/FeaturedComponents/Authentication/LogIn/LogIn";
import About from "../Components/Pages/About/About";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/LogIn" element={<LogIn />}></Route>
                <Route path="/About" element={<About />}></Route>
            </Routes>
        </>
    )
}



export default ReactRoutes;