// Import the functions you need from the SDKs you need
import { initializeApp, } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as fire_auth from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js"
import { } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtbM2MZAiNZPqQw34pVdH5iRsTKAdxP-U",
    authDomain: "fir-basics-c5925.firebaseapp.com",
    projectId: "fir-basics-c5925",
    storageBucket: "fir-basics-c5925.appspot.com",
    messagingSenderId: "89730462453",
    appId: "1:89730462453:web:9972f7b3829a207e708bbc",
    measurementId: "G-R1T614LVRB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(fire_auth);