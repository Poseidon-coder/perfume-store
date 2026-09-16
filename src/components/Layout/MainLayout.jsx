import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import HomePage from '../Page/HomePage'


function MainLayout() {
  return (
    <div>
        <Navbar/>
        <HomePage/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default MainLayout