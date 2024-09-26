import React from 'react'
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className='py-2 px-6 bg-primary flex justify-between items-center'>
      <h1 className='text-secondary text-4xl font-semibold'><FaAccusoft /></h1>
      {/* <h1 className='text-white text-2xl font-semibold cursor-pointer' onClick={toggleTheme}>{isDarkMode ? <FaMoon /> : <FaSun />}</h1> */}
    </div>
  )
}

export default Header
