import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { FaMailBulk, FaInstagram } from 'react-icons/fa'

const Sidebar = () => {
  return (
   
    <>
     <div className="bg-[#1e1e1e] text-white p-6 w-[200px] md:w-64  min-h-fit mt-24 ml-1 md:ml-40 rounded-xl fixed ">
      <div className="flex flex-col items-center">
        <img src="/p1.jpg" alt="Profile" className="rounded-full mb-4" />
        <h2 className="text-xl font-bold">Jashanvir Singh</h2>
        <p className="text-gray-400 ">Web Developer</p>
      </div>
      <div className="mt-8 space-y-5 text-sm text-gray-300">
        <div className="flex items-center gap-3">
          <EnvelopeIcon className="w-5 h-5 text-yellow-400 overflow-clip" />
          <span>Email : jasssaini8900@gmail.
            com</span>
        </div>
        <div className="flex items-center gap-3">
          <PhoneIcon className="w-5 h-5 text-yellow-400" />
          <span>PHONE :<br />+91 75268-68629</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPinIcon className="w-7 h-7 text-yellow-400" />
          <span>ADDRESS : <br /> #439 Jagtar Nagar, Patiala, Punjab</span>
        </div>
      </div>
        {/* Social Icons */}
  <div className="flex justify-center gap-6 text-gray-500 pt-8">
         
          <a href="mailto:jasssaini8900@gmail.com" className="hover:text-orange-600 transition">
            <FaMailBulk size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </a>
        </div>
    </div>

    

    
    </>

  )
}

export default Sidebar