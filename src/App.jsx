import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import MobileNav from './Components/Navbar/MobileNav'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import AppRoutes from './Routes/AppRoutes'

function App() {

  return (
    <div className=" bg-primary w-screen overflow-x-hidden">
      <Navbar/>
      <MobileNav/>
      {/* <Home/> */}
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App
