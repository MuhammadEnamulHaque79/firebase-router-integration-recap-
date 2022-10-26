// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3o-4nP71KmBHxdfeU0cHkJucKg3nDe5Y",
  authDomain: "fir-router-app1.firebaseapp.com",
  projectId: "fir-router-app1",
  storageBucket: "fir-router-app1.appspot.com",
  messagingSenderId: "293307302613",
  appId: "1:293307302613:web:b8f6088c9caa7dc2ad585c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;