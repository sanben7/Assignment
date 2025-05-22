// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG8EvIKQaGP5LWlkQIGFxpy1Jg5ak9lAM",
    authDomain: "learnhub-san-amit.firebaseapp.com",
    projectId: "learnhub-san-amit",
    storageBucket: "learnhub-san-amit.firebasestorage.app",
    messagingSenderId: "337872299012",
    appId: "1:337872299012:web:79c029ecdf84f37f8bc151",
    measurementId: "G-72NMR39X0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };