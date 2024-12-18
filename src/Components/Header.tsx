import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import NavData from '../Data/NavData';

import logo from '../Images/logo.png'
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const location = useLocation()

  const [activeNav, setActiveNav] = useState("one")
  const [mobileNav, setMobileNav] = useState(false)

  const handleNav = (id: string) => {
    setActiveNav(id)
    setMobileNav(false)
  }

  // handle mobile menu
  const handleMenu = () => {
    setMobileNav(!mobileNav)
  }
  return (
    <header className=''>
      <div className='bg-[#F5F5F5]  h-[101px] px-8 lg:px-14 pb-10  flex items-center justify-between'>
          <div className="logo">
              <img src={logo} alt="logo" />
          </div>
          
          <nav>
            <div className="hidden md:flex items-end md:space-x-6 lg:space-x-8  ">
              {NavData.map((data) => 
                 <Link to={data.path as string} key={data.id} className={`text-lg font-semibold cursor-pointer transform transition duration-300 hover:scale-110 hover:text-gray-800 ${location.pathname === data.path ? 'bg-pry text-white px-3 pt-8 pb-2 rounded-b-lg' : 'bg-[#F5F5F5] text-blac pb-2'}`} onClick={() => handleNav(data.id)}>{data.title}</Link>
              )}
            </div>
          </nav>

              
        
          <div className='flex items-center space-x-4 text-blac'>
            <BiUser className='h-7 w-5'/>
            <AiOutlineHeart className='h-6 w-7 hidden md:block'/>
            <Link to="/Cart"><RiShoppingCartLine className='h-7 w-7' /></Link>
            <RxHamburgerMenu className='md:hidden h-7 w-6 text-pry ' onClick={handleMenu}/>
          </div>
      

              
      </div>

      <div className={` md:hidden items-end md:space-x-8 pt-12  text-left  ${mobileNav ? 'block fixed top-0 h-screen w-screen  bg-[#F5F5F5] z-50 ease-in duration-500 ' : 'fixed top-[-100%] ease-out duration-100 '}`}>
        <div className='flex justify-end px-12 text-pry text-4xl ' onClick={() => setMobileNav(false)}>
          <AiOutlineClose  />
        </div>
            <div className='flex flex-col space-y-6 divide-y divide-pry '>
              {NavData.map((data) => 
                <Link to={data.path as string}
                  key={data.id}
                  className={` text-lg font-semibold cursor-pointer pl-8 pt-6 ${data.id === activeNav ? 'bg-[#F5F5F5] text-pry  pt-8  rounded-b-lg' : 'bg-[#F5F5F5] text-blac '}`
                    
                  } onClick={() => handleNav(data.id)}>{data.title}</Link>
              )}
            </div>
          </div>
          
    </header>
  )
}

export default Header
