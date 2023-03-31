import React from 'react'
import Card from './Card'
import SpecialData from '../Data/SpecialsData'

const Specials = () => {
  return (
    <div className='mt-32'>
      <h1 className='section-header'>Chef's Specials</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3  justify-items-center'>
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}

        {
          SpecialData.map((item, i) => (
            <Card image={item.image} name={item.name} key={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default Specials