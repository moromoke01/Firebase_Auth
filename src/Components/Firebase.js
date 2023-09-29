import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAmPhtOvP7hymKyOgqF1HQNONPHDPa8JXc",
    authDomain: "jane-portfolio-auth.firebaseapp.com",
    projectId: "jane-portfolio-auth",
    storageBucket: "jane-portfolio-auth.appspot.com",
    messagingSenderId: "970915701214",
    appId: "1:970915701214:web:2e55bcb60f7afe2d11fd4f",
    measurementId: "G-WQKN5W4M2G"
  };



  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);