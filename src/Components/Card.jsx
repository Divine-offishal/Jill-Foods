import React from 'react'
import Images from '../Images/images'
import {IonIcon} from '@ionic/react'
import { addCircleSharp } from 'ionicons/icons'

const Card = () => {
  return (
    <div className='h-72 w-56 bg-yellow-200 border-2 border-amber-900 text-amber-900 m-2'>
      <img src={Images.image2} alt="" className=' h-56 w-56 '/>
      <div className='flex py-2'>
        <div className='ml-2'>
          <h1 className=' font-semibold text-2xl'>Item name</h1>
          <h1 className=' font-medium text-md'>$2222</h1>
        </div>
        <div className='text-4xl text-green-700 ml-auto'>
          <IonIcon icon={addCircleSharp}/>
        </div>
      </div>
    </div>
  )
}

export default Card