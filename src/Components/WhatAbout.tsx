import React from 'react'

import whatcouch from '../Images/whatcouch.png'


const WhatAbout = () => {
  return (
    <div className=' grid lg:grid-cols-2 gap-12 lg:gap-36 justify-center items-center'>
      
          <div className='text-left'>
              <h2 className='text-6xl font-semibold text-blac2'>What <span className='text-pry'>We Do</span></h2>
              <p className='mt-3 text-lg font-normal text-blac2'>We offer a wide selection of unique and beautifully crafted furniture for every room in your home. Our team of designers and craftsmen are dedicated to creating stylish and long-lasting pieces using high-quality materials and ethical sourcing. We pride ourselves on our commitment to customer service and sustainability.</p>
          </div>

          <div>
              <img src={whatcouch} alt="couch"  className='w-[648px] lg:h-[470px]'/>
          </div>
    </div>
  )
}

export default WhatAbout
