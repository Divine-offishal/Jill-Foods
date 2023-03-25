import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen bg-amber-900 h-20 text-yellow-200 hidden md:flex pt-4'>
      <h1 className='font-bold text-4xl ml-4 '>Jill's Foods</h1>

      <div className='ml-auto text-2xl flex mr-4'>
        <h1 className='mx-4'>Home</h1>
        <h1 className='mx-4'>About</h1>
      </div>
    </div>
  )
}

export default Navbar