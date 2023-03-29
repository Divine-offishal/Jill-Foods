import React from 'react'
import CartCard from './CartCard'

const Cart = () => {
  return (
    <div className=' w-screen pt-10'>
      <h1 className='text-amber-900 text-center text-4xl font-bold'>Cart</h1>

      <div className='my-20'>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
      </div>

      <span className='flex justify-center text-3xl font-semibold text-amber-900'>
        <h1>Total: $999</h1>
      </span>

      <div className='flex justify-center my-10'>
        <button className='bg-green-700 text-primary text-xl font-bold p-2 focus:bg-primary focus:border-2 focus:border-green-700 focus:text-green-700'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart