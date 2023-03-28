import { useState } from 'react'
import './App.css'
import MobileNav from './Components/MobileNav'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

function App() {

  return (
    <div className=" bg-yellow-200 w-screen overflow-x-hidden">
      <Navbar/>
      <MobileNav/>
      <Home/>
    </div>
  )
}

export default App
