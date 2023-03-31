import { IonIcon } from '@ionic/react'
import React from 'react'
import { col1, col2, contact } from '../Data/FooterData'

const Footer = () => {
  return (
    <div className='w-screen h-auto bg-amber-900 text-primary flex md:flex-row flex-col justify-between px-10 pt-10'>
      <h1 className='text-2xl font-bold'>Jill's Kitchen</h1>

      <div className='my-2'>
        <ul>
          {col1.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='my-2'>
        <ul>
          {col2.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='text-4xl flex my-2'>
          {contact.map((item, i) => (
            <div className='mx-2' key={i}>
              <IonIcon icon={item}/>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Footer