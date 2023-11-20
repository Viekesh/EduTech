import React, { useState } from "react";
import "../Register/Register.css";
import "./LogIn.css";
import TopNav from "../../Navigation/TopNav";
import MainHeading from "../../Headings/MainHeading/MainHeading";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { authInitialise } from "../../../../FirebaseConfiguration";
import { signInWithEmailAndPassword } from "firebase/auth";
import GAuth from "../GAuth/GAuth";
import Footer from "../../../Pages/Footer/Footer";



const LogIn = () => {

    const userNavigateAfterSignIn = useNavigate();


    // the initial value of the "useState" hook is an object which is an empty strings

    const [logInData, setLogInData] = useState(
        {
            email: "",
            password: ""
        }
    );

    const [showPass, setShowPass] = useState(false);



    // to access the "formData" we need to destructure it,
    // to destructure the form data(email and password) we can add a bracket then assign the
    // form data to the properties of that backet

    const { email, password } = logInData;



    // the parameter "event" gives us all the information that we are typing in the form
    // whatever value we input in the input field, these value can be also updated in the useState() hook

    const handleFormData = (event) => {

        console.log(event.target.value);

        // we use this previous state to keep the previous information (it is used to get the previous data)
        // we have more than one input hence we use event.target.id, because we just say this input id is email
        // or password

        setLogInData((previousState) => ({

            // here we just get the previous state (preState) and just add the new one
            // here we have two input one is email and other is password
            // instead of getting just sending email, we just target the id of the input element (mention in the html element),
            // if we type in this input and if we type in the input related to the password, then we get password
            // so we just target id of the html element instead of just name

            ...previousState,
            [event.target.id]: event.target.value,
        }))
    };



    const submitLoggedData = async (event) => {

        event.preventDefault();

        const authenticate = authInitialise;

        try {
            if (email && password) {
                const userCredential = await signInWithEmailAndPassword(
                    authenticate,
                    email,
                    password,
                );

                // if the "userCredential.user" is true and it exist then we can just go to the home page
                if (userCredential.user) {
                    alert("You Are Successfully Logged In.");
                    console.log(userCredential.user);
                    userNavigateAfterSignIn("/");
                }
            }


        } catch (error) {
            alert(error.message);
            console.log(error.message);
        }
    };


    return (
        <>
            <section className="user_auth">
                <TopNav />
                <MainHeading headingTitle="Log In" />

                <div className="register">
                    <form onSubmit={submitLoggedData}>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Enter Your Email"
                            onChange={handleFormData}
                        />



                        {
                            showPass ?
                                (
                                    <AiFillEye
                                        className="log_in_eye_invisible"
                                        onClick={() => setShowPass((prevState) => !prevState)}
                                    />
                                )
                                :
                                (
                                    <AiFillEyeInvisible
                                        className="log_in_eye_invisible"
                                        onClick={() => setShowPass((prevState) => !prevState)}
                                    />
                                )
                        }

                        <input
                            type={showPass ? "text" : "password"}
                            id="password"
                            value={password}
                            placeholder="Enter Your Password"
                            onChange={handleFormData
                            }
                        />

                        <div className="form_buttons">
                            <button type="submit">Submit</button>
                        </div>

                    </form>

                    <div className="form_buttons">
                        <NavLink to="/Register">
                            <button>Register</button>
                        </NavLink>
                        <NavLink to="/ForgotPassword">
                            <button>Forgot Password</button>
                        </NavLink>

                    </div>
                    <GAuth />
                </div>

                <Footer />
            </section>
        </>
    )
}



export default LogIn;
