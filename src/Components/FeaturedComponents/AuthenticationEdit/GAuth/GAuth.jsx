import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { authInitialise, dataBase } from "../../../../FirebaseConfiguration";
import { GoogleAuthProvider, getRedirectResult, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";



const GAuth = () => {

    const afterLoggedIn = useNavigate();

    const onGoogleClick = async () => {

        try {
            const authenticate = authInitialise;
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(authenticate, provider);
            const user = result.user;

            console.log(user);

            const docRef = doc(dataBase, "EduTechUsers", user.uid);

            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timeStamp: serverTimestamp(),
                });
            }

            alert("Registered Successfully");
            afterLoggedIn("/");

        } catch (error) {
            alert(error.message);
            console.log(error.message);
        }

    }




    const onGoogleClickOnAndi = async () => {

        try {
            const authenticate = authInitialise;
            const provider = new GoogleAuthProvider();
            const res = await getRedirectResult(authenticate, provider);
            const user = res.user;

            console.log(user);

            const docRef = doc(dataBase, "EduTechUsers", user.uid);

            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timeStamp: serverTimestamp(),
                });
            }

            alert("Registered Successfully");
            afterLoggedIn("/");
        } catch (error) {
            alert(error.message);
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="form_buttons for_desktop">
                <button type="submit" className="x_y_axis_center" onClick={onGoogleClick}>
                    <FcGoogle className="oauth_icon" />
                    &nbsp; Continue With Google
                </button>
            </div>

            <div className="form_buttons for_andi">
                <button type="button" className="x_y_axis_center" onClick={onGoogleClickOnAndi}>
                    <FcGoogle className="oauth_icon" />
                    &nbsp; Continue With Google
                </button>
            </div>
        </>
    )
};



export default GAuth;
