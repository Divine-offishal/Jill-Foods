import React from 'react'
import { NavLink } from 'react-router-dom'

const Empty = () => {
  return (
    <div className='text-5xl font-bold text-amber-900 text-center h-screen mt-20'>
      <h1>The cart is empty</h1>
      <NavLink to='/'>
        <h1 className='text-3xl text-green-700 mt-20'>Go back home</h1>
      </NavLink>
    </div>
  )
}

export default Empty