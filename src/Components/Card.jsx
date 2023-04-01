import React from 'react'
import Images from '../Images/images'
import {IonIcon} from '@ionic/react'
import { addCircleSharp } from 'ionicons/icons'
import { listSharp } from 'ionicons/icons'
import { useSelector, useDispatch} from 'react-redux'
import { saved } from '../Features/Reducers'
import { toast, Toaster } from 'react-hot-toast'

const Card = ({image, name, save, payload}) => {

  const dispatch = useDispatch()

  const handleClick = (payload) => {
    dispatch(saved(payload))
    toast.success('Meal saved')
  }

  return (
    <div className=' h-80 md:w-56 w-64 bg-primary border-2 border-amber-900 text-amber-900 my-6 '>
      <Toaster/>
      <div className='grid justify-items-center md:mt-0 mt-2'>
        <img src={image} alt='' className=' h-56 w-56 '/>
      </div>

      <div className='flex py-2'>
        <div className='ml-2'>
          <h1 className=' font-semibold text-2xl'>{name}</h1>
        </div>

        <div className='md:text-4xl text-5xl text-green-700 ml-auto cursor-pointer focus:text-primary mr-3'>
          {save? <IonIcon icon={listSharp} onClick={() => handleClick(payload) }/>: <IonIcon icon={addCircleSharp}/>}
        </div>
      </div>
    </div>
  )
}

export default Card