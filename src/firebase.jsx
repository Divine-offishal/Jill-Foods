// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth' 

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

// export const handleAuth = (email, password, method) => {
//   const auth = getAuth();
//   const navigate = useNavigate()

//   switch (method) {
//     // Create user
//     case 'createUser':
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         console.log(user);
//         navigate('/login')
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         toast.error(errorCode, errorMessage)
//       });
//       break;

//       // Login User
//     case 'LoginUser':
//       signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//         Navigate('/')
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         toast.error(errorCode, errorMessage)
//       });
//       break;

//     case 'google':
//       signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });

//       break;
  
//     default:
//       break;
//   }
// };


