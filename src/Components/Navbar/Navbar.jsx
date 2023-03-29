import React, {useEffect, useState} from 'react'

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
    <div className={`w-screen  h-20 text-primary fixed z-50 top-0 hidden md:flex transition-all duration-300 ease-in-out pt-4 ${windowHeight> 0? 'bg-amber-900': 'bg-opacity-0'}`}>
      <h1 className='font-bold text-4xl ml-4 '>Jill's kitchen</h1>

      <div className='ml-auto text-2xl flex mr-4'>
        <h1 className='mx-4'>Home</h1>
        <h1 className='mx-4'>About</h1>
      </div>
    </div>
  )
}

export default Navbar