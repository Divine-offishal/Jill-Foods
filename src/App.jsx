import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import MobileNav from './Components/Navbar/MobileNav'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'

function App() {

  return (
    <div className=" bg-yellow-200 w-screen overflow-x-hidden">
      <Navbar/>
      <MobileNav/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
