import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { remove } from '../../Features/Reducers'

const CartCard = ({image, name, id}) => {

  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(remove(id))
    toast.success('Meal removed')
    
    const CheckStorage = JSON.parse(localStorage.getItem('savedItem'))
    const findID = CheckStorage.find((x) => x.idMeal == id)
    if (findID) {
      const RemoveMeal = CheckStorage.filter((x) => x.idMeal !== id)
      localStorage.setItem('savedItem', JSON.stringify(RemoveMeal))
    }
  }

  return (
    <div className='grid justify-items-center my-8 text-amber-900'>
      <Toaster/>
      <div className='w-10/12 border border-amber-900 flex'>
        <img src={image} alt="" className=' md:w-52 md:h-52 w-32 h-32'/>
        <span className='md:ml-20 ml-2 md:mt-10 mt-2'>
          <h1 className='text-3xl font-semibold '>{name}</h1>


          <div className='flex mt-4 text-2xl'>
            <button className='h-8 w-auto px-2 bg-green-700 text-primary rounded-md' onClick={() => handleClick(id)}>Remove</button>
          </div>
        </span>
      </div>
    </div>
  )
}

export default CartCard