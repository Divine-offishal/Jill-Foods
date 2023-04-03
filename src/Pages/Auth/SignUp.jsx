import React, { useState } from 'react'
import { handleAuth } from '../../firebase'

const Signin = () => {

  const [email, setEmail] = useState('')#
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className='w-screen h-screen '>
      <div className='w-screen h-screen z-[99999] fixed top-0 border border-amber-900 text-amber-900 bg-primary grid justify-items-center'>
        <h1 className='mt-10'>Sign Up</h1>

        {/* Install zodd or formink for form validation */}
        <form onSubmit={handleSubmit}>
          <input className='h-10 w-9/12' placeholder='Your email' type='email' onChange={(e) => setEmail(e.target.value)}></input>
          <input className='h-10 w-9/12' placeholder='Your password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          <button type='submit' className='bg-green-700 h-8 px-2 text-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signin