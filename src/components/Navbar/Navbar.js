import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {BiMenu} from 'react-icons/bi'
function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const handleNavbar = () =>{
    setNavbar(!navbar)
  }
  return (
    <>
      <div className='lato h-16 w-full px-8 fixed flex justify-between items-center bg-white z-50'>
        <img src={logo} alt="logo" className='w-32' />
        <ul className='hidden md:flex gap-16  text-[#595959] text-lg '>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Service</li>
          <li>Contact</li>
        </ul>
        <BiMenu onClick={handleNavbar} size='2rem' className='flex md:hidden cursor-pointer' />
      </div>
      <div className={navbar ? 
      'w-full h-[300px] z-30 bg-white shadow-2xl transition-all duration-500 lato font-semibold flex items-center justify-center md:hidden fixed top-16 bg-white':
      'w-full h-[300px] z-30 bg-white shadow-2xl transition-all duration-500  lato font-semibold flex items-center justify-center md:hidden fixed -top-full bg-white '}>
        <ul className='flex flex-col gap-8 text-center text-xl'>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Service</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar