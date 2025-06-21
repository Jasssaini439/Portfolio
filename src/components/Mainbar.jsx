import React from 'react'
import Navbar from './Navbar'
import Home from '../pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Mainbar = () => {
  return (
    <>
      <div className='bg-black flex flex-col items-center justify-top py-24 -ml-12 min-h-screen'>
        <div className='bg-[#1e1e1e] ml-[25rem] rounded-xl w-3/5 text-white p-4'>
        <Navbar />
        <Router>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
        
        </div>
      </div>
    </>
  )
}

export default Mainbar
