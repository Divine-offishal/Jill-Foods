import React from 'react'
import Images from '../../Images/images'
import {IonIcon} from '@ionic/react'
import { chevronBackCircleSharp} from 'ionicons/icons'
import { chevronForwardCircleSharp} from 'ionicons/icons'

const CartCard = () => {
  return (
    <div className='grid justify-items-center my-8 text-amber-900'>
      <div className='w-10/12 border border-amber-900 flex'>
        <img src={Images.image1} alt="" className=' md:w-52 md:h-52 w-32 h-32'/>
        <span className='md:ml-20 ml-2 md:mt-10 mt-2'>
          <h1 className='text-3xl font-semibold '>Item Name</h1>
          <h1 className=' font-semibold mt-5 text-xl'>$0</h1>


          <div className='flex mt-4 md:text-5xl text-2xl'>
            <span className=''>
              <IonIcon icon={chevronBackCircleSharp}/>
            </span>
            <span className='md:mx-8 mx-3'>
              <h1>0</h1>
            </span>
            <span className=''>
              <IonIcon icon={chevronForwardCircleSharp}/>
            </span>
          </div>
        </span>
      </div>
    </div>
  )
}

export default CartCard