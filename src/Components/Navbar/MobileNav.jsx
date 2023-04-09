import React, {useEffect, useState} from 'react'
import {IonIcon} from '@ionic/react'
import { fastFoodSharp, reorderThreeSharp } from 'ionicons/icons'
import { closeSharp } from 'ionicons/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useSelector } from 'react-redux'

const MobileNav = () => {

  const [windowHeight, setWindowHeight] = useState(window.scrollY)
  const authState = localStorage.getItem('authenticated')
  const navigate = useNavigate()
  const savedArray = useSelector((state) => state.saveItem.saveContainer)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {

    if (authState) {
      localStorage.removeItem('authenticated')
      signOut(auth).then(() => {
        toast.success('Logged out')
        // Sign-out successful
      }).catch((error) => {
        toast.error(error)
        // An error happened.
      });
      
    } else {
      navigate('/signup')
    }

  }

  return (
    <>
      <div className={` transition-all duration-300 ease-in-out h-20 w-screen flex md:hidden text-primary pt-4 fixed top-0 left-0 z-50 ${windowHeight > 0? 'bg-amber-900': ' bg-amber-900/0 text-shadow' }`}>
        <Toaster/>
        <NavLink to='/'>
          <h1 className='text-4xl ml-4 font-bold'>Jill's Kitchen</h1>
        </NavLink>
        <span className='ml-auto flex mr-4'>
          <NavLink to='/cart'>
            <div className="text-3xl mr-2 relative">
            <div className='absolute top-0 right-0 bg-green-700 h-4 w-4 rounded-full z-20 text-sm'>
                <h1 className='text-sm ml-1'>
                  {savedArray.length}
                </h1>
              </div>
              <IonIcon icon={fastFoodSharp}/>
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
        <h1 className=' my-4' onClick={handleLogout}>{authState? 'Logout': 'Login'}</h1>
      </div>
    </>
  )
}

export default MobileNav