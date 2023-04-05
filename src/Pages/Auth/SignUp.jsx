import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { auth, provider} from '../../firebase'
import { createUserWithEmailAndPassword,  signInWithPopup} from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'

const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate


  // This function handles signIn with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorCode, errorMessage)
      });
  }

  // This function handles signin with google
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate('/login')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div className='w-screen h-screen '>
      <Toaster/>
      <div className='w-screen h-screen z-[99999] fixed top-0 border border-amber-900 text-amber-900 bg-primary grid justify-items-center'>
        <h1 className='mt-10'>Sign Up</h1>

        {/* Install zodd or formink for form validation */}
        <form onSubmit={handleSubmit} className='grid justify-items-center'>
          <input className='h-10 w-9/12 max-input' placeholder='Your email' type='email' onChange={(e) => setEmail(e.target.value)}></input>
          <input className='h-10 w-9/12 max-input' placeholder='Your password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          <div>
            <button type='submit' className='bg-green-700 h-8 px-2 text-primary'>Submit</button>
          </div>
        </form>

        <span onClick={handleClick}>
          <div className='h-10 w-auto bg-green-700 text-primary'>Sign-in with Google</div>
        </span>

        <span className='flex justify-center text-amber-900 text-4xl my-2'>
          <h1>Already signed in? <NavLink to='/login'><h1 className='text-green-700'>Login</h1></NavLink></h1>
        </span>
      </div>

    </div>
  )
}

export default Signin