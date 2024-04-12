import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/Pages/LandingPage/LandingPage";
import About from "../Components/Pages/About/About";
import Authenticate from "../Components/FeaturedComponents/Auth/Authenticate";
import Register from "../Components/FeaturedComponents/Auth/Register";
import Profile from "../Components/FeaturedComponents/Auth/Profile";
import AppState from "../Components/FeaturedComponents/ContextAPI/AppState";
import CreateBlog from "../Components/FeaturedComponents/Blogging/CreateBlog";



const ReactRoutes = () => {
    return (
        <>
            <AppState>
                <Routes>
                    <Route exact path="/" element={<LandingPage />}></Route>
                    <Route path="/About" element={<About />}></Route>

                    {/* Authenticate */}
                    <Route exact path="/Authenticate" element={<Authenticate />}></Route>
                    <Route exact path="/Register" element={<Register />}></Route>
                    <Route exact path="/Profile" element={<Profile />}></Route>

                    {/* Blogging */}
                    <Route exact path="/CreateBlog" element={<CreateBlog />}></Route>
                </Routes>
            </AppState>
        </>
    )
}



export default ReactRoutes;