// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj9Q_Ky7Pl-ZmdIBxdz_jwSeTK_qqSYJQ",
  authDomain: "mwg-donate.firebaseapp.com",
  projectId: "mwg-donate",
  storageBucket: "mwg-donate.appspot.com",
  messagingSenderId: "1015920196654",
  appId: "1:1015920196654:web:962dee72b42704405cf3bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = app