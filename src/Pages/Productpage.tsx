import React from 'react'
import { motion } from 'framer-motion'
import AllProducts from '../Components/AllProducts'
import ProductNAv from '../Components/ProductNAv'





const Productpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='font-manrope'>
      
        <ProductNAv />

      <AllProducts />
      
    </motion.div>
  )
}

export default Productpage
