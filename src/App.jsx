import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import Mainbar from './components/Mainbar'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <div className='bg-black overflow-hidden min-h-screen'>
    <Sidebar />
    <Mainbar />
 
    </div>
    </>
  )
}

export default App
