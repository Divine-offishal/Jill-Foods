// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth' 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCdursLfN3Yj-8Mzz2AlcZ4DtMysbLD1o",
  authDomain: "jill-s-kitchen.firebaseapp.com",
  projectId: "jill-s-kitchen",
  storageBucket: "jill-s-kitchen.appspot.com",
  messagingSenderId: "64582990503",
  appId: "1:64582990503:web:3263eb5dee5e5ae0f67982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const provider = new GoogleAuthProvider();



