import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { authInitialise, dataBase } from "../../../../FirebaseConfiguration";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import TopNav from "../../Navigation/TopNav";
import MainHeading from "../../Headings/MainHeading/MainHeading";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./Register.css";
import Footer from "../../../Pages/Footer/Footer";



// const selectEdu = [
//     "Intermediate",
//     "Graduate",
//     "Graduation (Appear)",
//     "Post Graduate",
//     "Post Graduation (Appear)"
// ];



// const Register = () => {

//     const userNavigate = useNavigate();

//     const [formInput, setFormInput] = useState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         mobile: "",
//         password: "",
//         confirmPass: "",
//     });



//     const [loading, setLoading] = useState(false);

//     const [showPass, setShowPass] = useState("");

//     const [showConfirmPass, setShowConfirmPass] = useState("");



//     const {
//         firstname,
//         lastname,
//         email,
//         mobile,
//         password,
//         confirmPass
//     } = formInput;

//     const manageFormInput = (event) => {
//         console.log(event.target.value);

//         setFormInput((prevState) => ({
//             ...prevState,
//             [event.target.id]: event.target.value,
//         }))
//     };

//     const submitFormInput = async (event) => {
//         event.preventDefault();

//         try {
//             if (firstname && lastname && email && mobile && password && confirmPass) {

//                 if (password !== confirmPass) {
//                     return alert("Password Not Matched");
//                 }

//                 const userCred = await createUserWithEmailAndPassword(
//                     authInitialise,
//                     email,
//                     password
//                 )

//                 await updateProfile(authInitialise.currentUser, {
//                     displayName: `${firstname} ${lastname}`
//                 });

//                 const user = userCred.user;

//                 const formInputCopy = { ...formInput };

//                 delete formInputCopy.password;

//                 formInputCopy.timestamp = serverTimestamp();

//                 await setDoc(doc(dataBase, "EduTechUsers", user.uid), {
//                     ...formInputCopy
//                 });

//                 alert("Registration Successful");

//                 userNavigate("/");
//             };


//         } catch (error) {
//             console.log(error.message);
//             alert(error.message);
//         }
//     }

//     return (
//         <>
//             <section className="user_auth">

//                 <TopNav />
//                 <MainHeading headingTitle="Register" />

//                 <div className="register">
//                     <form onSubmit={submitFormInput}>

//                         <input
//                             type="text"
//                             id="firstname"
//                             value={firstname}
//                             className="input_field"
//                             placeholder="Firstname"
//                             onChange={manageFormInput}
//                         />

//                         <input
//                             type="text"
//                             id="lastname"
//                             value={lastname}
//                             className="input_field"
//                             placeholder="Lastname"
//                             onChange={manageFormInput}
//                         />

// <select
//     id="education"
//     className="input_field quali"
//     placeholder="Qualification"
//     onChange={manageFormInput}
// >
//     <option>Qualification</option>

//     {
//         selectEdu.map((option, index) => (
//             <option value={option || ""} key={index}>
//                 {option}
//             </option>
//         ))
//     }
// </select>


//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             className="input_field"
//                             placeholder="Email"
//                             onChange={manageFormInput}
//                         />

//                         <input
//                             type={showPass ? "text" : "password"}
//                             id="password"
//                             value={password}
//                             className="input_field"
//                             placeholder="Password"
//                             onChange={manageFormInput}
//                         />

//                         {
//                             showPass ?
//                                 (
//                                     <AiFillEye
//                                         className="reg_eye_invisible"
//                                         onClick={() => setShowPass((prevState) => !prevState)}
//                                     />
//                                 )
//                                 :
//                                 (
//                                     <AiFillEyeInvisible
//                                         className="reg_eye_invisible"
//                                         onClick={() => setShowPass((prevState) => !prevState)}
//                                     />
//                                 )
//                         }

//                         <input
//                             type={showConfirmPass ? "text" : "password"}
//                             id="confirmPass"
//                             value={confirmPass}
//                             className="input_field"
//                             placeholder="Confirm Password"
//                             onChange={manageFormInput}
//                         />

//                         {
//                             showConfirmPass ?
//                                 (
//                                     <AiFillEye
//                                         className="confirm_pass_eye_invisible"
//                                         onClick={() => setShowConfirmPass((prevState) => !prevState)}
//                                     />
//                                 )
//                                 :
//                                 (
//                                     <AiFillEyeInvisible
//                                         className="confirm_pass_eye_invisible"
//                                         onClick={() => setShowConfirmPass((prevState) => !prevState)}
//                                     />
//                                 )
//                         }

//                         <div className="form_buttons">
//                             <button type="submit">Register</button>
//                         </div>
//                     </form>
//                 </div>

//             </section>
//             <Footer />
//         </>
//     )
// }



// export default Register;



const selectEdu = [
    "Intermediate",
    "Graduate",
    "Graduation (Appear)",
    "Post Graduate",
    "Post Graduation (Appear)"
];


const Register = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        qualification: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPass: ""
    });

    const { firstname, lastname, qualification, mobileNumber, email, password, confirmPass } = formData;



    const [showPass, setShowPass] = useState(false);



    const [showConfirmPass, setShowConfirmPass] = useState(false);



    const handleFormData = (event) => {
        console.log(event.target.value);

        setFormData((previousState) => ({
            ...previousState,

            [event.target.id]: event.target.value
        }))
    }



    const userNavigateaftersignup = useNavigate();



    const submitFormData = async (event) => {

        event.preventDefault();

        try {

            if (password !== confirmPass) {
                return alert("Password Not Matched");
            }

            if (firstname && lastname && qualification && mobileNumber && email && password && confirmPass) {

                const userCredential = await createUserWithEmailAndPassword(
                    authInitialise,
                    email,
                    password
                )



                await updateProfile(authInitialise.currentUser, {
                    displayName: `${firstname} ${lastname}`
                })



                const user = userCredential.user;


                const formDataCopy = { ...formData };


                delete formDataCopy.password;


                delete formDataCopy.confirmPass;



                formDataCopy.timeStamp = serverTimestamp();


                await setDoc(doc(dataBase, "EduTechUsers", user.uid), {
                    ...formDataCopy,
                });


                alert("Registration Successful");


                userNavigateaftersignup("/");
            } else {

                return alert("All Fields Are Mandatory");

            }

        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    }



    return (
        <>
            <section className="user_auth">
                <TopNav />
                <MainHeading headingTitle="Register" />

                <div className='register'>
                    <form onSubmit={submitFormData}>
                        <input
                            type="text"
                            id="firstname"
                            value={firstname}

                            className="input_field"
                            placeholder="Firstname"
                            onChange={handleFormData}
                        />

                        <input
                            type="text"
                            id="lastname"
                            value={lastname}
                            className="input_field"
                            placeholder="Lastname"
                            onChange={handleFormData}
                        />

                        <select
                            id="qualification"
                            className="input_field quali"
                            placeholder="Qualification"
                            onChange={handleFormData}
                        >
                            <option>Qualification</option>

                            {
                                selectEdu.map((option, index) => (
                                    <option value={option || ""} key={index}>
                                        {option}
                                    </option>
                                ))
                            }
                        </select>

                        <input
                            type="number"
                            id="mobileNumber"
                            value={mobileNumber}
                            className="input_field"
                            placeholder="Mobile Number"
                            onChange={handleFormData}
                        />

                        <input
                            type="email"
                            id="email"
                            value={email}
                            className="input_field"
                            placeholder="Email"
                            onChange={handleFormData}
                        />

                        <input
                            type={showPass ? "text" : "password"}
                            id="password"
                            value={password}
                            className="input_field"
                            placeholder="Password"
                            onChange={handleFormData}
                        />

                        {
                            showPass ?
                                (
                                    <AiFillEye
                                        className="eye_invisible"
                                        onClick={() => setShowPass((prevState) => !prevState)}
                                    />
                                )
                                :
                                (
                                    <AiFillEyeInvisible
                                        className="eye_invisible"
                                        onClick={() => setShowPass((prevState) => !prevState)}
                                    />
                                )
                        }

                        <input
                            type={showConfirmPass ? "text" : "password"}
                            id="confirmPass"
                            value={confirmPass}
                            className="input_field"
                            placeholder="Confirm Password"
                            onChange={handleFormData}
                        />

                        {
                            showConfirmPass ?
                                (
                                    <AiFillEye
                                        className="confirm_pass_eye_invisible"
                                        onClick={() => setShowConfirmPass((prevState) => !prevState)}
                                    />
                                )
                                :
                                (
                                    <AiFillEyeInvisible
                                        className="confirm_pass_eye_invisible"
                                        onClick={() => setShowConfirmPass((prevState) => !prevState)}
                                    />
                                )
                        }

                        <div className="form_buttons">
                            <button type="submit">Register</button>
                        </div>
                    </form>

                </div>
            </section>
            <Footer />
        </>
    )
};



export default Register;
