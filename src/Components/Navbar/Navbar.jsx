import { IonIcon } from '@ionic/react';
import { fastFoodSharp } from 'ionicons/icons';
import React, {useEffect, useState} from 'react'
import { toast, Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [windowHeight, setWindowHeight] = useState(window.scrollY)
  const authState = localStorage.getItem('authenticated')
  const navigate = useNavigate()
  const savedArray = useSelector((state) => state.saveItem.saveContainer)

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
        // Sign-out successful.
        toast.success('Logged out')
      }).catch((error) => {
        // An error happened.
        toast.error(error)
      });
      
    } else {
      navigate('/signup')
    }
  }

  return (
    <div className={`w-screen  h-20 text-primary fixed z-50 top-0 hidden md:flex transition-all duration-300 ease-in-out pt-4 ${windowHeight> 0? 'bg-amber-900': 'bg-opacity-0 text-shadow'}`}>
      <Toaster/>
      <NavLink to='/'>
        <h1 className='font-bold text-4xl ml-4 '>Jill's kitchen</h1>
      </NavLink>

      <div className='ml-auto text-2xl flex mr-4'>
        <NavLink to='/' className={({isActive}) => {
          return isActive? 'text-green-700': ''
        }}>
          <h1 className='mx-4'>Home</h1>
        </NavLink>
        <NavLink to='/about' className={({isActive}) => {
          return isActive? 'text-green-700': ''
        }}>
          <h1 className='mx-4'>About</h1>
        </NavLink>
        <h1 className='mx-4' onClick={handleLogout}>{authState ? 'LogOut': 'LogIn'}</h1>

        <NavLink to='/cart' className={({isActive}) => {
          return isActive? 'text-green-700': ''
        }}>
          <div className='text-3xl mr-4 relative'>
              <div className='absolute top-0 right-0 bg-green-700 h-4 w-4 rounded-full z-20 text-sm'>
                <h1 className='text-sm ml-1'>
                  {savedArray.length}
                </h1>
              </div>
            <IonIcon icon={fastFoodSharp}/>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar