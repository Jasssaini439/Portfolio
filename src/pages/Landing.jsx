import React from 'react'
import Sidebar from '../components/Sidebar'
import Mainbar from '../components/Mainbar'
import { Outlet } from 'react-router-dom'



const Landing = () => {
 


  return (
   <>
   <div className='bg-black overflow-hidden min-h-screen flex'>
   <Sidebar/>
   <Mainbar/>
    </div>
   
   </>
  )
}

export default Landing