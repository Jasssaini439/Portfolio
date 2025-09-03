import React from 'react'
import Landing from './pages/Landing'
import Main from './pages/Main'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div>
    <Routes>
    <Route path='/' element= {<Main/>}/>

    <Route path='/landing' element={<Landing/>}>

    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='portfolio' element={<Portfolio />} />
    <Route path='contact' element={<Contact />} />

    </Route>
   </Routes>
    </div>
    </div>
  )
}

export default App