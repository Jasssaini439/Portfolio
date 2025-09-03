import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { FaMailBulk, FaInstagram } from 'react-icons/fa'

const Sidebar = () => {
  return (
   
    <>
     <div className="bg-[#1e1e1e] flex flex-row md:flex-col text-white  pl-6  py-6 md:p-6 w-[319px] md:w-64  min-h-fit mt-5 md:mt-24 ml-1 md:ml-40 rounded-xl md:fixed ">
      <div className="flex flex-row md:flex-col items-center gap-6 ">
        <img src="/p1.jpg" alt="Profile" className="rounded-full mb-4 h-32  md:h-auto p-3" />
        <h2 className="text-xl font-bold -mt-6 p-6 md:p-0">Jashanvir Singh</h2>
        <div className="text-center hidden md:block">
        <p className="text-gray-400  ">Web Developer</p>
        </div>
      </div>
      <div className="mt-8 space-y-5 text-sm text-gray-300 hidden md:block">
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
  <div className="flex justify-center gap-4 text-gray-500  pt-24 pr-[4.8rem] md:pt-8">
         
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