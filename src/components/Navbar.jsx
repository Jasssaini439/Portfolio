import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black/20 rounded-xl text-white w-full md:w-4/6 p-5 mx-auto mt-4 flex flex-col md:-mt-4 md:ml-[24rem] shadow-md mb-9 md:mb-0">

      {/* Hamburger Button (visible on small screens) */}
      <div className='flex justify-center'>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d={isOpen
              ? "M6 18L18 6M6 6l12 12" 
              : "M4 6h16M4 12h16M4 18h16" 
            }
          />
        </svg>
      </button>
      </div>

      {/* Nav Links */}
      <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-9 space-y-4 md:space-y-0 font-serif text-2xl text-center md:text-left mt-4 md:mt-0">
          <li><Link to="">Resume</Link> </li>  
           <li><Link to="about">About</Link></li>
          <li><Link to="portfolio">Projects</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
