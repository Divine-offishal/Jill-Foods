import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-screen '>
      <div className='w-screen h-screen border border-amber-900 z-[99999] fixed top-0 right-0 text-amber-900 bg-primary grid justify-items-center'>
        <h1 className='mt-10 section-header'>Login</h1>

        {/* Install zodd or formink for form validation */}
        <form>
          <input className='h-10 w-9/12' placeholder='Your email' type='email'></input>
          <input className='h-10 w-9/12' placeholder='Your password' type='password'></input>
        </form>
      </div>
    </div>
  )
}

export default Login