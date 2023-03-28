import React, { useState } from 'react'
import { IonIcon } from '@ionic/react'
import { arrowBackCircleSharp } from 'ionicons/icons'
import { arrowForwardCircleSharp } from 'ionicons/icons'
import CarouselData from '../Data/CarouselData'

const Caroursel = () => {

  const [index, setIndex] = useState(1)

  const backClick = () => {
    if (index === 0) {
      setIndex(1)
    }else {
      setIndex(0)
    }
  }

  const forwardClick = () => {
    if(index === 1) {
      setIndex(0)
    }else {
      setIndex(1)
    }
  }

  // setInterval(()=> {
  //   forwardClick()
  // }, 5000)

  return (
    <>
    {/* Carousel Controls */}
        <div className='flex relative text-3xl md:ml-4 top-36 text-yellow-200 z-30 w-screen'>
          <div className='absolute  ' onClick={backClick}>
            <IonIcon icon={arrowBackCircleSharp} />
          </div>
          <div className='absolute lg:ml-[44em] md:ml-[24em] ml-[19rem] md:right-10 right-2' onClick={forwardClick}>
            <IonIcon icon={arrowForwardCircleSharp} />
          </div>
        </div>

      {/* Carousel Body */}
      <div className={`flex translate-x-[-${index}00vw] relative transition-all duration-300 ease-in-out`}>
        {
          CarouselData.map((item, i) => (
            <div className='w-screen h-96 shrink-0 relative' key={i}>
              <img src={item.image} alt={item.text} className=' object-cover h-full w-full'/>
              <h1 className='absolute top-[4em] md:left-[12em] left-[3em] font-bold text-5xl mx-auto text-neutral-50'>{item.text}</h1>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Caroursel