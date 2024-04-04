// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMFVPr9RWACV-5hGNuXDXxdQsmQX2xEP8",
  authDomain: "react-dragon-news-auth-ff99e.firebaseapp.com",
  projectId: "react-dragon-news-auth-ff99e",
  storageBucket: "react-dragon-news-auth-ff99e.appspot.com",
  messagingSenderId: "403841099134",
  appId: "1:403841099134:web:037b3c6527db1af49e7f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;