import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../firebase'


const ProtectedRoute = () => {

  const [authenticated, setAuthenticated] = useState(false)
  const authState = localStorage.getItem('authenticated')

  return authState? (
    <Outlet/>
  ): (<Navigate to='/signup'/>)
}

export default ProtectedRoute