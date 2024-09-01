// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm0x8TmrAmxER0weYh1Gp9IYJx4fqwLDo",
  authDomain: "news-foxtort.firebaseapp.com",
  projectId: "news-foxtort",
  storageBucket: "news-foxtort.appspot.com",
  messagingSenderId: "631987081775",
  appId: "1:631987081775:web:bda513d9c8e813e1c26cda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;