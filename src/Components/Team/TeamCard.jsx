import React from 'react'
import { IonIcon } from '@ionic/react'
import { arrowForwardCircleSharp } from 'ionicons/icons'

const TeamCard = ({name, image, title}) => {
  return (
    <div className=' h-auto w-64 border border-amber-900 bg-yellow-200 text-amber-900 my-3 pb-2'>
      <div>
        <img src={image} />
      </div>
      <span>
        <h1 className='text-2xl font-semibold text-center mt-4'>{name}</h1>
        <h1 className='text-xl font-medium text-center'>{title}</h1>
      </span>
      <div className=' text-5xl text-green-700 text-center cursor-pointer'>
        <IonIcon icon={arrowForwardCircleSharp}/>
      </div>
    </div>
  )
}

export default TeamCard