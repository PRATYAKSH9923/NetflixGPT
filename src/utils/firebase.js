// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNet6rZjiqwxVj7A-fGNCP07wxIuiD9dw",
  authDomain: "netflix-8ea04.firebaseapp.com",
  projectId: "netflix-8ea04",
  storageBucket: "netflix-8ea04.appspot.com",
  messagingSenderId: "234982533760",
  appId: "1:234982533760:web:f2a43bec13b38205f99465",
  measurementId: "G-8S87N9R6FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const Auth = getAuth();