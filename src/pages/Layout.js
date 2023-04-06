import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'layouts/Navbar'
const Layout = () => {
  return (
    
    <div className='flex flex-col  h-full w-full '>
        <Navbar/>

        <Outlet/>
    </div>
  )
}

export default Layout