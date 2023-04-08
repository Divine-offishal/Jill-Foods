import React, { useState, useRef, useEffect} from 'react'
import { IonIcon } from '@ionic/react'
import { arrowBackCircleSharp } from 'ionicons/icons'
import { arrowForwardCircleSharp } from 'ionicons/icons'
import CarouselData from '../Data/CarouselData'

const Caroursel = () => {

  const [index, setIndex] = useState(1)
  const intervalRef = useRef(null);

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


  useEffect(() => {
    // This creates a reference to the index state and changes its value
    intervalRef.current = setInterval(() => {
      setIndex(prevIndex => (prevIndex === 1 ? 0 : 1));
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
    {/* Carousel Controls */}
        <div className='flex relative text-3xl md:ml-4 top-36 text-primary z-30 w-screen'>
          <div className='absolute  ' onClick={backClick}>
            <IonIcon icon={arrowBackCircleSharp} />
          </div>
          <div className='absolute lg:ml-[44em] md:ml-[24em] ml-[19rem] md:right-10 right-2' onClick={forwardClick}>
            <IonIcon icon={arrowForwardCircleSharp} />
          </div>
        </div>

      <div className={`${index == 0 ? 'turn-1': 'turn-2'}`}>
        {
          CarouselData.map((item, i) => (
            <div className='w-screen h-96 shrink-0 relative' key={i}>
              <img src={item.image} alt={item.text} className=' object-cover h-full w-full'/>
              <h1 className='absolute md:top-[4em] top-32 md:left-[25%] left-[10%] font-bold text-5xl mx-auto text-primary'>{item.text}</h1>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Caroursel