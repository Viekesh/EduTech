import React, { useState, useEffect } from "react";
import TopNav from "../Navigation/TopNav";
import { authInitialise } from "../../../FirebaseConfiguration";
import { useNavigate } from "react-router-dom";
import { MdOutlineCreate } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";



const Profile = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const navigateTo = useNavigate();

    useEffect(() => {
        // Fetch user data only when user is available
        const unsubscribe = authInitialise.onAuthStateChanged((user) => {
            if (user) {
                setFormData({
                    name: user.displayName,
                    email: user.email,
                });
            }
        });

        // Cleanup function to unsubscribe when component unmounts
        return unsubscribe;

    }, []);

    const onLogOut = () => {
        authInitialise.signOut();
        alert("You Are Successfully Logout");
        navigateTo("/");
    };

    return (
        <>
            <section className="profile">
                <TopNav />
                <div className="user_info">
                    <div className="user_detail y_axis_center">
                        <input value={formData.name} readOnly />
                        <input value={formData.email} readOnly />
                    </div>
                    <div className="user_actions">
                        <button className="create_blog"><MdOutlineCreate /></button>
                        <button className="logout" onClick={onLogOut}><IoMdLogOut /></button>
                    </div>
                </div>
            </section>
        </>
    );
};



export default Profile;
