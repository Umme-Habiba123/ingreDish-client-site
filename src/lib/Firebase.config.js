// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1FMSadYRFutyJvSKkyc8X0YTWER88G7k",
  authDomain: "ingredish-e54ad.firebaseapp.com",
  projectId: "ingredish-e54ad",
  storageBucket: "ingredish-e54ad.firebasestorage.app",
  messagingSenderId: "375666798950",
  appId: "1:375666798950:web:5efe0a4149f8f7fa64d8a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);