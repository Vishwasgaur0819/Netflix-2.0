
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHhWPfJtIU7i63V8sf19VDU8ZxW8nHm_E",
    authDomain: "ntflx-missionweb.firebaseapp.com",
    projectId: "ntflx-missionweb",
    storageBucket: "ntflx-missionweb.appspot.com",
    messagingSenderId: "823048069196",
    appId: "1:823048069196:web:6c37dbc6cf0b80fb7094e9",
    measurementId: "G-FFELZKSKGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();