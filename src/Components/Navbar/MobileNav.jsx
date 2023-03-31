import React, {useEffect, useState} from 'react'
import {IonIcon} from '@ionic/react'
import { listSharp, reorderThreeSharp } from 'ionicons/icons'
import { closeSharp } from 'ionicons/icons'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {

  const [windowHeight, setWindowHeight] = useState(window.scrollY)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    console.log(windowHeight);
  }

  return (
    <>
      <div onClick={handleClick} className={` transition-all duration-300 ease-in-out h-20 w-screen flex md:hidden text-primary pt-4 fixed top-0 left-0 z-50 ${windowHeight > 0? 'bg-amber-900': ' bg-amber-900/0 text-shadow' }`}>
        <NavLink to='/'>
          <h1 className='text-4xl ml-4 font-bold'>Jill's Kitchen</h1>
        </NavLink>
        <span className='ml-auto flex mr-4'>
          <NavLink to='/cart'>
            <div className="text-3xl mr-2">
              <IonIcon icon={listSharp}/>
            </div>
          </NavLink>
          <div className='text-4xl ' onClick={()=> setOpen(!open)}>
            {open ? <IonIcon icon={closeSharp}/> : <IonIcon icon={reorderThreeSharp}/>}
          </div>
        </span>
      </div>

      {/* Nav items */}
      <div className={`w-screen h-64 fixed left-0 bg-amber-900 text-2xl text-center text-primary transition-all duration-300 ease-in-out z-40 pt-20 ${open? 'top-0': 'top-[-400px]'}`}>
        <NavLink to='/' onClick={()=> setOpen(!open)}>
          <h1 className=' my-4'>Home</h1>
        </NavLink>
        <NavLink to='/about' onClick={()=> setOpen(!open)}>
          <h1 className=' my-4'>About</h1>
        </NavLink>
      </div>
    </>
  )
}

export default MobileNav