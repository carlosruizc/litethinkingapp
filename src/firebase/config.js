// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2vEOrVt8UDi3Ol9L-Ww7mhNsZGoiqUbQ",
  authDomain: "litethinking-c2d91.firebaseapp.com",
  projectId: "litethinking-c2d91",
  storageBucket: "litethinking-c2d91.appspot.com",
  messagingSenderId: "755850820023",
  appId: "1:755850820023:web:1d276c5a819e3467fbd032",
  measurementId: "G-0ZE6VKJG2Z"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth=getAuth(FirebaseApp)
export const FirebaseDB=getFirestore(FirebaseApp)
