import React, {useEffect, useRef} from 'react'
import Line from '../Images/Line.png'
import Arrow from '../Images/Arrow.png'

import BestSellingData from '../Data/BestSellingData'

import { useAnimation, motion, useInView } from "framer-motion";


const BestSelling = () => {
    const controls = useAnimation();
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else {
      controls.start("hidden");
    }
    console.log(inView);
    
  }, [controls, inView]);
    return (
        <motion.section className='mt-32 px-[60px] font-semibold text-blac'
            ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {opacity: 0, y: -75},
        visible: {opacity: 1, y: 0},
      }}
      transition={{duration: 3, delay: 0.25}}
        >
            <div className='  flex justify-between items-center'>
                <div>
                <div className='flex items-center space-x-3 text-2xl md:text-3xl  text-pry'>
                <img src={Line} alt="" />
                <p>Best Selling</p>
                </div>
            
                <h3 className='mt-2 text-3xl md:text-5xl text-left'>Our Best Selling Products</h3>   
            </div>
            
            <div className='hidden md:flex items-center space-x-4' >
                <p>Explore All</p>
                <img src={Arrow} alt="" />
            </div>
        
            </div> 
            
            <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4  '>
                {BestSellingData.map((data) => 
                    <div key={data.id} className=" h-[415px] border border-graay rounded-3xl transform transition duration-500 hover:scale-110 ">
                        <img src={data.pix} alt="pix" className='w-full h-[275px]' />
                        <div className='mt-2 space-y-3'>
                            <p className='text-sm'>{data.design}</p>
                            <p className='text-lg'>{data.type}</p>
                            <p className='text-2xl text-pry'>{data.price}</p>
                        </div>
                        
                    </div>
                )}
            </div>
      </motion.section>
      
  )
}

export default BestSelling
