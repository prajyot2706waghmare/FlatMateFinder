// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP_ozXAQQbDfZdsQljru43Y1Wy73zirrI",
  authDomain: "otpverficationforflatmate.firebaseapp.com",
  projectId: "otpverficationforflatmate",
  storageBucket: "otpverficationforflatmate.firebasestorage.app",
  messagingSenderId: "398126250168",
  appId: "1:398126250168:web:da34428b25654c18341c4d",
  measurementId: "G-KSKTXDDJV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);