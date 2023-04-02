import React from 'react'

const Signin = () => {
  return (
    <div className='w-screen h-screen z-[99999]'>
      <div className='w-10/12 h-auto border border-amber-900 text-amber-900 bg-primary grid justify-items-center'>
        <h1>Signin</h1>

        {/* Install zodd or formink for form validation */}
        <form>
          <input className='h-10 w-9/12' placeholder='Your email' type='email'></input>
          <input className='h-10 w-9/12' placeholder='Your password' type='password'></input>
        </form>
      </div>
    </div>
  )
}

export default Signin