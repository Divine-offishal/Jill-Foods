import React from 'react'
import Card from './Card'

const Meals = () => {
  return (
    <>
      <h1 className='section-header'>Our Meals</h1>
      <div className='grid justify-items-center'>
        <div className="flex mx-auto">
          <input type="text" name="" className='border border-amber-900 focus:border-2 focus:border-amber-900 h-10 w-44 bg-primary  text-amber-900' placeholder='Search for a meal'/>
          <button className='h-10 w-auto p-2 text-primary bg-green-700 cursor-pointer focus:bg-primary focus:text-amber-900 focus:border-2 focus:border-green-700'>Search</button>
        </div>
        <select className='bg-green-700 text-primary h-8 w-32 my-10'>
          <option>Beef</option>
          <option>Pizza</option>
          <option>Chicken</option>
        </select>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 items-center justify-items-center'>
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