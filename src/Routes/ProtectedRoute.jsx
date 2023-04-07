import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { auth } from '../firebase'


const ProtectedRoute = ({path, element}) => {

  const [authenticated, setAuthenticated] = useState(true)


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        setAuthenticated(true)
      }
      else{
        setAuthenticated(false)
      }
    })
    return unsubscribe
  }, [])

  return authenticated? (
    <Routes>
      <Route path={path} element={element}/>
    </Routes>
  ): (<Navigate to='/signup'/>)
}

export default ProtectedRoute