import React from 'react'
import { motion } from 'framer-motion'
import Summer from '../Components/Summer'
import WhatAbout from '../Components/WhatAbout'
import WhyAbout from '../Components/WhyAbout'

const Aboutpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='px-6 lg:px-[60px] bg-background pt-14'>
      <WhatAbout />
      <WhyAbout />
      <Summer />
    </motion.div>
  )
}

export default Aboutpage
