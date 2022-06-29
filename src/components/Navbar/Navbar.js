import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import {BiMenu} from 'react-icons/bi'
function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const handleNavbar = () =>{
    setNavbar(!navbar)
  }
  return (
    <>
      <div className='lato h-16 w-full px-8 fixed flex justify-between items-center bg-white z-50'>
      <Link to="home" spy={true} smooth={true} offset={50} duration={850} >
        <img src={logo} alt="logo" className='w-32 cursor-pointer' />
      </Link>
        <ul className='hidden md:flex gap-16  text-[#595959] text-lg '>
          <Link to="home" spy={true} smooth={true} offset={50} duration={850} >
            <li className='cursor-pointer focus:border-b-2 focus:border-red-300'>Home</li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={850} >
            <li className='cursor-pointer'>About Us</li>
          </Link>
          <Link to="service" spy={true} smooth={true} offset={-100} duration={850} >
            <li className='cursor-pointer'>Our Service</li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-80} duration={850} >
            <li className='cursor-pointer'>Contact</li>
          </Link>
        </ul>
        <BiMenu onClick={handleNavbar} size='2rem' className='flex md:hidden cursor-pointer' />
      </div>
      <div className={navbar ? 
      'w-full h-[300px] z-30 bg-white shadow-2xl transition-all duration-500 lato font-semibold flex items-center justify-center md:hidden fixed top-16 bg-white':
      'w-full h-[300px] z-30 bg-white shadow-2xl transition-all duration-500  lato font-semibold flex items-center justify-center md:hidden fixed -top-full bg-white '}>
        <ul className='flex flex-col gap-8 text-center text-xl'>
          <Link to="home" spy={true} smooth={true} offset={50} duration={850} >
            <li onClick={handleNavbar} className='cursor-pointer focus:border-b-2 focus:border-red-300'>Home</li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={850} >
            <li onClick={handleNavbar} className='cursor-pointer'>About Us</li>
          </Link>
          <Link to="service" spy={true} smooth={true} offset={-100} duration={850} >
            <li onClick={handleNavbar} className='cursor-pointer'>Our Service</li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-80} duration={850} >
            <li onClick={handleNavbar} className='cursor-pointer'>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar