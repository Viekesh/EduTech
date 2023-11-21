import React from "react";
import { UseAuthStatus } from "../Components/FeaturedComponents/Authentication/Profile/UseAuthStatus";
import Loader from "../Components/FeaturedComponents/Spinner/Loader";
import { Navigate, Outlet } from "react-router-dom";



const PrivateRoutes = () => {

    const { loggedIn, checkingStatus } = UseAuthStatus();

    if (checkingStatus) {
        return <Loader />
    }

    return loggedIn ? <Outlet /> : <Navigate to="/LogIn" />
}



export default PrivateRoutes;