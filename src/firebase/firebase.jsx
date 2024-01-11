// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8e4l2uhvtJUliwMQxjqK023KLC_yi53k",
  authDomain: "login-f9070.firebaseapp.com",
  projectId: "login-f9070",
  storageBucket: "login-f9070.appspot.com",
  messagingSenderId: "113429991432",
  appId: "1:113429991432:web:b2bdb69288a623e1fd01bd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
