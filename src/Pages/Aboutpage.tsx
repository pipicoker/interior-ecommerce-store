import React from 'react'
import Summer from '../Components/Summer'
import WhatAbout from '../Components/WhatAbout'
import WhyAbout from '../Components/WhyAbout'

const Aboutpage = () => {
  return (
    <div className='px-6 lg:px-[60px] bg-background pt-14'>
      <WhatAbout />
      <WhyAbout />
      <Summer />
    </div>
  )
}

export default Aboutpage
