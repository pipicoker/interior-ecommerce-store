import React from 'react'
import { motion } from 'framer-motion'
import ContactUs from '../Components/ContactUs'
import Map from '../Components/Map'

const Contactpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='pt-14 px-6 md:px-[60px] bg-background'>
      <ContactUs />
      <Map />
    </motion.div>
  )
}

export default Contactpage
