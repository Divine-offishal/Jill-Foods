import React from 'react'
import Card from '../Components/Card'
import Caroursel from '../Components/Caroursel'
import Meals from '../Components/Meals'
import Newsletter from '../Components/Newsletter'
import PageTransition from '../Components/PageTransition'
import Specials from '../Components/Specials'
import Team from '../Components/Team/Team'

const Home = () => {
  return (
      <PageTransition>
        <div>
          <Caroursel/>
          <Meals/>
          <Specials/>
          <Team/>
          <Newsletter/>
        </div>
      </PageTransition>
  )
}

export default Home