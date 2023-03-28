import React from 'react'
import TeamsData from '../../Data/TeamsData'
import TeamCard from './TeamCard'


const Team = () => {
  return (
    <div>
      <h1 className='section-header mb-10'>Our Team</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center'>
        {
          TeamsData.map((item, i) => (
            <TeamCard image={item.image} name={item.name} title={item.title}/> 
          ))
        }
      </div>
    </div>
  )
}

export default Team