import React, { useState } from 'react'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorCode, errorMessage)
      });
  }

  return (
    <div className='w-screen h-screen '>
      <div className='w-screen h-screen border border-amber-900 z-[99999] fixed top-0 right-0 text-amber-900 bg-primary grid justify-items-center'>
        <Toaster/>
        <h1 className='mt-10 section-header'>Login</h1>

        {/* Install zodd or formink for form validation */}
        <form onSubmit={handleSubmit} className='grid justify-items-center w-10/12'>
          <input className='h-10 max-input' placeholder='Your email' type='email' onChange={(e) => setEmail(e.target.value)}></input>
          <input className='h-10 max-input' placeholder='Your password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          <button type='submit' className='h-8 w-auto text-primary bg-green-700 px-2 focus-state'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login