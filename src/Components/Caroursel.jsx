import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, A11y, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Caroursel = () => {
  return (
    <Swiper
      // style={{
      //   '--swiper-navigation-color': '#fff'
      // }}
      modules={[Navigation, A11y, Autoplay]}
      navigation
      autoplay={{delay: 5000}}
      slidesPerView={1}>
        <SwiperSlide>
          <div className='h-44 w-screen bg-white'>Slide 1</div>
        </SwiperSlide>

    </Swiper>
  )
}

export default Caroursel