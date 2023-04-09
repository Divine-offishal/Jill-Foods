import { useState , useEffect} from 'react'
import './App.css'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import Footer from './Components/Footer'
import MobileNav from './Components/Navbar/MobileNav'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import AppRoutes from './Routes/AppRoutes'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" bg-primary w-screen overflow-x-hidden">
      <Navbar/>
      <MobileNav/>
      <SkeletonTheme baseColor='#78350F' highlightColor='#a76731'>
        <AppRoutes/>
      </SkeletonTheme>
      <Footer/>
    </div>
  )
}

export default App
