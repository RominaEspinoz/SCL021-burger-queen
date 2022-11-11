// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5sYyZpsJNE_VRAu4mNkKi7R2F1KXtJPI",
  authDomain: "veggiequeen-lab021.firebaseapp.com",
  projectId: "veggiequeen-lab021",
  storageBucket: "veggiequeen-lab021.appspot.com",
  messagingSenderId: "727196569989",
  appId: "1:727196569989:web:0bcd5dd42fb8f888c7f4ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
