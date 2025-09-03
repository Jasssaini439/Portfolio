import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom'

const Mainbar = () => {



  return (
    <>
      <div className='flex flex-col items-center justify-top pt-6 md:py-24  -ml-52 md:-ml-12 min-h-screen'>
        <div className='bg-[#1e1e1e] ml-[13rem] md:ml-[25rem] rounded-xl w-3/5 text-white p-4'>
        <Navbar />  
        <Outlet />
        </div>
      </div>
    </>
  )
}

export default Mainbar
