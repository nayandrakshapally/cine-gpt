/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxeiBlyuU-yNepiIf-sCdeUQonNmyrEN4",
  authDomain: "cinegpt-619ed.firebaseapp.com",
  projectId: "cinegpt-619ed",
  storageBucket: "cinegpt-619ed.appspot.com",
  messagingSenderId: "875133507525",
  appId: "1:875133507525:web:27e66448f734480707ddac",
  measurementId: "G-272C7QS8M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();