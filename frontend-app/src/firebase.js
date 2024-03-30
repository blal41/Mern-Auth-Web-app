// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-67ccf.firebaseapp.com",
  projectId: "mern-auth-67ccf",
  storageBucket: "mern-auth-67ccf.appspot.com",
  messagingSenderId: "339557939216",
  appId: "1:339557939216:web:da332590967a082e6df295",
  measurementId: "G-WXFW5XCBR7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);