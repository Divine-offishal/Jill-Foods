// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth' 

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

export const handleAuth = (email, password, isSignUp) => {
  const auth = getAuth();
  
  if (isSignUp) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
};


