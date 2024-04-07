// import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import { authInitialise, dataBase } from "../../../FirebaseConfiguration";




// const GAuth = () => {

//     const navigateAfterSignInWithGoogle = useNavigate();

//     const provider = new GoogleAuthProvider();

//     const [user, setUser] = useState(null);

//     const [error, setError] = useState(null);

//     useEffect(() => {

//         const handleRedirectResult = async () => {

//             try {


//                 const result = await getRedirectResult(authInitialise);

//                 const { userOfGetRedRes } = result;

//                 setUser(userOfGetRedRes);

//             } catch (error) {

//                 setError(error);

//             }

//         }

//         handleRedirectResult();

//     }, []);



//     const handleGoogleSignIn = async () => {

//         try {

//             const result = await signInWithRedirect(authInitialise, provider);

//             const user = result.user;

//             alert("User signed in:", user);

//             const docRef = doc(dataBase, "ApplicationUsers", user.uid);

//             const docSnap = await getDoc(docRef);

//             if (!docSnap.exists()) {
//                 await setDoc(docRef, {
//                     name: user.displayName,
//                     email: user.email,
//                     timestamp: serverTimestamp(),
//                 });

//                 console.log("New user registered in database");
//             };

//             navigateAfterSignInWithGoogle("/Profile"); // Redirect after successful sign-in

//         } catch (error) {

//             alert(error.message); // More user-friendly error message
//             console.log(error.message);

//         }
//     };

//     return (
//         <>
//             <section className="g_auth x_y_axis_center" onClick={handleGoogleSignIn}>
//                 <div className="for_andi x_y_axis_center">
//                     <FcGoogle />
//                 </div>
//             </section>
//         </>
//     )
// }



// export default GAuth;




import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { authInitialise, dataBase } from "../../../FirebaseConfiguration";

const GAuth = () => {

    const navigateAfterSignInWithGoogle = useNavigate();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleRedirectResult = async () => {
            setIsLoading(true); // Indicate loading state

            try {
                const result = await getRedirectResult(authInitialise);
                const userOfGetRedRes = result.user;
                setUser(userOfGetRedRes);
                setIsLoading(false); // Clear loading state
            } catch (error) {
                setError(error);
                setIsLoading(false); // Clear loading state
            }
        };

        handleRedirectResult();
    }, []);



    const handleGoogleSignIn = async () => {
        setIsLoading(true); // Indicate loading state
        try {
            const result = await signInWithRedirect(authInitialise, provider);

            // **Crucial Fix for "auth/unauthorized domain":**
            // Add your domain to the "Authorized Domains" list in the Firebase Console
            // under Authentication -> Sign-in method -> Authorized domains

            const user = result.user;
            console.log("User signed in:", user);

            const docRef = doc(dataBase, "ApplicationUsers", user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
                console.log("New user registered in database");
            }

            navigateAfterSignInWithGoogle("/Profile"); // Redirect after successful sign-in
            setIsLoading(false); // Clear loading state

        } catch (error) {

            setError(error);
            setIsLoading(false); // Clear loading state
            alert(error.message); // User-friendly error message

        }
    };

    return (
        <>
            <section className="g_auth x_y_axis_center">

                <button onClick={handleGoogleSignIn} disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign in with Google"}
                </button>

                <div className="for_andi x_y_axis_center">
                    <FcGoogle />
                </div>

                {error && <div className="error">{error.message}</div>}

            </section>
        </>
    );
};

export default GAuth;
