// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDz_uBQ8PWed_gkoGzlQM6bXjbAmdLGN80",
    authDomain: "edutech-6116f.firebaseapp.com",
    projectId: "edutech-6116f",
    storageBucket: "edutech-6116f.appspot.com",
    messagingSenderId: "159287279677",
    appId: "1:159287279677:web:4085f1eca10aabf2c82a54",
    measurementId: "G-Y641X7Q9MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);