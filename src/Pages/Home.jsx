import React from 'react'
import Card from '../Components/Card'
import Caroursel from '../Components/Caroursel'
import Meals from '../Components/Meals'
import Newsletter from '../Components/Newsletter'
import Specials from '../Components/Specials'
import Team from '../Components/Team/Team'

const Home = () => {
  return (
    <div>
      <Caroursel/>
      <Meals/>
      <Specials/>
      <Team/>
      <Newsletter/>
    </div>
  )
}

export default Home