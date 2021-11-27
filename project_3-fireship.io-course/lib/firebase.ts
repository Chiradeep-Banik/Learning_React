import { getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD6JClBRCZuC1T6NBBU0OXXvLHBtHT52l4",
    authDomain: "fireship-course-projec.firebaseapp.com",
    projectId: "fireship-course-projec",
    storageBucket: "fireship-course-projec.appspot.com",
    messagingSenderId: "346626892375",
    appId: "1:346626892375:web:4867bc6ea60bbdb9c53912",
    measurementId: "G-L8X7RJFJRV"
};

if (getApps().length === 0) {
    let app = initializeApp(firebaseConfig);
}

export let auth = getAuth();
export const provider = new GoogleAuthProvider();


export let firestore = getFirestore();

