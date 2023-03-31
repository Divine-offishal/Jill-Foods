import { IonIcon } from '@ionic/react';
import { listSharp } from 'ionicons/icons';
import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [windowHeight, setWindowHeight] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-screen  h-20 text-primary fixed z-50 top-0 hidden md:flex transition-all duration-300 ease-in-out pt-4 ${windowHeight> 0? 'bg-amber-900': 'bg-opacity-0 text-shadow'}`}>
      <NavLink to='/'>
        <h1 className='font-bold text-4xl ml-4 '>Jill's kitchen</h1>
      </NavLink>

      <div className='ml-auto text-2xl flex mr-4'>
        <NavLink to='/'>
          <h1 className='mx-4'>Home</h1>
        </NavLink>
        <NavLink to='/about'>
          <h1 className='mx-4'>About</h1>
        </NavLink>
        <NavLink to='/cart'>
          <div className='text-3xl mr-4'>
            <IonIcon icon={listSharp}/>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar