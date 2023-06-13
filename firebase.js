// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnmUuCMskMyugVmATZa_VAQ5amXCx8RBo",
  authDomain: "playunitegg.firebaseapp.com",
  projectId: "playunitegg",
  storageBucket: "playunitegg.appspot.com",
  messagingSenderId: "566300753813",
  appId: "1:566300753813:web:39a38e5c9c48c6685ac09c",
  measurementId: "G-0NB58H6Z91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
