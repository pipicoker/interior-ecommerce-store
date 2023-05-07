import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import NavData from '../Data/NavData';

import logo from '../Images/logo.png'
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
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
            <ul className="hidden md:flex items-end md:space-x-6 lg:space-x-8  ">
              {NavData.map((data) => 
                <Link to={data.path as string} key={data.id} className={`text-lg font-semibold cursor-pointer ${data.id === activeNav ? 'bg-pry text-white px-3 pt-8 pb-2 rounded-b-lg' : 'bg-[#F5F5F5] text-blac pb-2'}`} onClick={() => handleNav(data.id)}>{data.title}</Link>
              )}
            </ul>
          </nav>

          <div className='flex space-x-3 items-center'>
              
            {/* <form className="flex items-center">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-6 h-7 text-blac" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              
              
                    </div>
                    <input type="text" id="simple-search" className=" text-sm rounded-xl  block w-24 h-6 pl-10 p-2.5 bg-[#F5F5F5]  " placeholder="Search..." required/>
                </div>
                
                    </form> */}
        
            <div className='flex space-x-4 text-blac'>
              <BiUser className='h-7 w-5'/>
              <AiOutlineHeart className='h-6 w-7 hidden md:block'/>
          <Link to="/Cart"><RiShoppingCartLine className='h-7 w-7' /></Link>
          <RxHamburgerMenu className='md:hidden h-7 w-6 text-pry' onClick={handleMenu}/>
            </div>
        

              
          </div>
      </div>
      <nav className={` md:hidden items-end md:space-x-8 pt-12  text-left  ${mobileNav ? 'block absolute h-screen w-screen  bg-[#F5F5F5]' : 'hidden'}`}>
            <ul className='flex flex-col space-y-6 divide-y divide-pry '>
              {NavData.map((data) => 
                <Link to={data.path as string}
                  key={data.id}
                  className={` text-lg font-semibold cursor-pointer pl-8 pt-6 ${data.id === activeNav ? 'bg-[#F5F5F5] text-pry  pt-8  rounded-b-lg' : 'bg-[#F5F5F5] text-blac '}`
                    
                  } onClick={() => handleNav(data.id)}><li>{data.title}</li></Link>
              )}
            </ul>
          </nav>
          
    </header>
  )
}

export default Header
