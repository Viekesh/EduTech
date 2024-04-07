import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/Pages/LandingPage/LandingPage";
import About from "../Components/Pages/About/About";
import Authenticate from "../Components/FeaturedComponents/Auth/Authenticate";
import Register from "../Components/FeaturedComponents/Auth/Register";
import Profile from "../Components/FeaturedComponents/Auth/Profile";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>

                <Route exact path="/Authenticate" element={<Authenticate />}></Route>
                <Route exact path="/Register" element={<Register />}></Route>
                <Route exact path="/Profile" element={<Profile />}></Route>

                <Route path="/About" element={<About />}></Route>
            </Routes>
        </>
    )
}



export default ReactRoutes;