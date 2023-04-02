import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Cart from '../Pages/Cart/Cart'
import MealsPage from '../Pages/MealsPage'
import TeamPage from '../Pages/TeamPage'
import Login from '../Pages/Auth/Login'
import Signin from '../Pages/Auth/Signin'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/meals/:name' element={<MealsPage/>}/>
      <Route path='/profile/:name' element={<TeamPage/>}/>
    </Routes>
  )
}

export default AppRoutes