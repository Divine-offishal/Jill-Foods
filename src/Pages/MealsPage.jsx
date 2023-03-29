import React from 'react'
import Images from '../Images/images'

const MealsPage = () => {
  return (
    <div className=' w-screen grid justify-items-center'>
      <h1 className='section-header'>Meal Name</h1>
    
      <div className='md:w-8/12 md:h-[20em] grid justify-items-center'>
        <img src={Images.image2} alt="" className=" w-11/12 h-[20em] md:object-cover " />
      </div>
        <h1 className='text-2xl font-bold mt-10'>Ingredients</h1>

      <div className='my-10'>
        <button className='text-primary h-10 w-56 focus:border-4 focus:border-green-700 focus:bg-primary focus:text-green-700 bg-green-700 pl-4'>Add to cart</button>
      </div>
    </div>
  )
}

export default MealsPage