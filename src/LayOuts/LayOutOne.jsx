import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const LayOutOne = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default LayOutOne