// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf_VMU8Pmcy8sDLOlVp9vFCgBxnJ15sxQ",
  authDomain: "react-app-658d4.firebaseapp.com",
  projectId: "react-app-658d4",
  storageBucket: "react-app-658d4.appspot.com",
  messagingSenderId: "632361588726",
  appId: "1:632361588726:web:5537899ccb0950d4bf59d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db}