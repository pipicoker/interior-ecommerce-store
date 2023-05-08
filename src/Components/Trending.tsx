import React, {useRef, useEffect} from 'react'

import Line from '../Images/Line.png'
import Arrow from '../Images/Arrow.png'

import TrendingData from '../Data/TrendingData'
import { useAnimation, motion, useInView } from "framer-motion";


const Trending = () => {
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
    <motion.div className='mt-32 pb-32 px-[60px] font-semibold'
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
      }}
      transition={{duration: 3, delay: 0.25}}
    >
      <div className='  flex justify-between items-center'>
                <div>
                <div className='flex items-center space-x-3 text-2xl md:text-3xl  text-pry'>
                <img src={Line} alt="" />
                <p>Trending</p>
                </div>
            
                <h3 className='mt-2 text-3xl md:text-5xl text-left'>Our Trending Products</h3>   
            </div>
            
            <div className='hidden md:flex items-center space-x-4 text-blac' >
                <p className=''>Explore All</p>
                <img src={Arrow} alt="" />
            </div>
        
          </div>
          
          <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4'>
              {TrendingData.map((data) => 
                  <div key={data.id} className="h-[415px] pt-[18px]  px-4 bg-white border border-graay rounded-2xl transform transition duration-500 hover:scale-110">
                      <img src={data.pix} className='w-[281px] h-[275px]' alt="" />

                      <div className='mt-2 space-y-3'>
                            <p className='text-sm'>{data.design}</p>
                            <p className='text-lg'>{data.type}</p>
                            <p className='text-2xl text-pry'>{data.price}</p>
                        </div>
                  </div>
              )}
          </div>
    </motion.div>
  )
}

export default Trending
