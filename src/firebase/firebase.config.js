// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIIayMQktWM1iplczN_lQ59qOjikUYDiE",
    authDomain: "dragon-news-42df3.firebaseapp.com",
    projectId: "dragon-news-42df3",
    storageBucket: "dragon-news-42df3.appspot.com",
    messagingSenderId: "450242939653",
    appId: "1:450242939653:web:94927409ed550e6686c56c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;