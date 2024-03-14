import React, { useState } from "react";
import "./Profile.css";
import TopNav from "../../Navigation/TopNav";
import Footer from "../../../Pages/Footer/Footer";
import { authInitialise } from "../../../../FirebaseConfiguration";
import { useNavigate } from "react-router-dom";



const Profile = () => {

    const authenticate = authInitialise;

    const afterLogOut = useNavigate();

    const [formData, setFormData] = useState({
        name: authInitialise.currentUser.displayName,
        number: authenticate.currentUser.phoneNumber,
        email: authInitialise.currentUser.email,
    });

    const { name, number, email } = formData;

    const onLogOut = () => {
        authInitialise.signOut();
        afterLogOut("/");
        alert("You Are Successfully Log Out.");
    }



    return (
        <>
            <section className="profile">
                <TopNav />

                <form>
                    <input
                        type="text"
                        id="email"
                        name={name}
                    />

                    <input
                        type="number"
                        id="number"
                        name={number}
                    />

                    <input
                        type="email"
                        id="email"
                        name={email}
                    />

                    <div className="form_buttons">
                        <button type="submit" onClick={onLogOut}>Log Out</button>
                    </div>
                </form>

                <Footer />
            </section>
        </>
    )
};



export default Profile;
