import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import { Navigate } from 'react-router-dom'

const Routes = () => {
    const isLoggedIn = useSelector((state)=> state.Cart.isLoggedIn)
    console.log(isLoggedIn)
  return (
    isLoggedIn ? <Home/>: <Navigate to={"/"} />
   
   
  )
}

export default Routes