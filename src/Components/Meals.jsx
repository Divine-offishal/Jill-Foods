import React from 'react'
import Card from './Card'

const Meals = () => {
  return (
    <>
      <h1 className='text-4xl text-amber-900 text-center my-6 font-bold'>Our Meals</h1>
      <div className="flex mx-auto">
        <input type="text" name="" className='border border-amber-900 focus:border-2 focus:border-amber-900 h-10 w-44 bg-yellow-200  text-amber-900' placeholder='Search for a meal'/>
        <button className='h-10 w-auto p-2 text-yellow-200 bg-green-700 cursor-pointer focus:bg-yellow-200 focus:text-amber-900 focus:border-2 focus:border-green-700'>Search</button>
      </div>
      <div className='md:grid grid-cols-4 items-center justify-center'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default Meals