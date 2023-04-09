import React, { useEffect } from 'react'
import PageTransition from '../../Components/PageTransition'
import CartCard from './CartCard'
import { useSelector, useDispatch } from 'react-redux'
import Empty from './Empty'
import { clear } from '../../Features/Reducers'

const Cart = () => {

  const SavedArray = useSelector((state) => state.saveItem.saveContainer)
  const dispatch = useDispatch()


  return (
    <PageTransition>
      <div className=' w-screen min-h-screen pt-10'>
        <h1 className='text-amber-900 text-center text-4xl font-bold mt-10'>Saved Items</h1>

        {SavedArray.length > 0 ? <div className='my-20'>
          {
            SavedArray.map((item, i) => (
              <CartCard key={i} name={item.strMeal} image={item.strMealThumb} id={item.idMeal}/>
            ))
          }
        </div> : <Empty/>}


        <span className='flex justify-center text-3xl font-semibold text-amber-900'>
          <h1>Number of items: {SavedArray.length}</h1>
        </span>

        <span className='flex justify-center my-10 text-2xl font-semibold'>
          <button className='h-8 w-auto px-2 bg-green-700 text-primary rounded-md' onClick={() => dispatch(clear())}>Clear</button>
        </span>

      </div>
    </PageTransition>
  )
}

export default Cart