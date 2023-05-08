import React, {useEffect, useRef} from 'react'

import Line from '../Images/Line.png'
import Arrow from '../Images/Arrow.png'
import Arrow2 from '../Images/Arrow2.png'
import man from '../Images/man.png'
import up from '../Images/up.png'
import down from '../Images/down.png'

import { useAnimation, motion, useInView } from "framer-motion";


const ClientsReview = () => {
  const controls = useAnimation();
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    console.log(inView);
    
  }, [controls, inView]);
  return (
    <motion.div className='mt-32 px-[60px] font-semibold'
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
      }}
      transition={{duration: 0.5, delay: 0.25}}
    >
      <div className='  flex justify-between items-center'>
            <div>
                <div className='flex items-center space-x-3 text-2xl md:text-3xl  text-pry'>
                <img src={Line} alt="" />
                <p>Clients Review</p>
                </div>
            
                <h3 className='mt-2 text-3xl md:text-5xl text-left'>What Our Clients Say</h3>   
            </div>
            
            <div className='hidden md:flex items-center space-x-4' >
                <img src={Arrow2} alt="left arrow"  />
                <img src={Arrow} alt="right arrow"  />
            </div>
        
          </div>
          
          <div className='mt-16 lg:ml-[256px] md:ml-12 grid lg:grid-cols-3 '>
              <div className='w-[202px] h-[510px] bg-pry flex items-center justify-center justify-self-center lg:justify-self-start rounded-[32px]'>
                  <img src={man} className="absolute w-[352px] h-[400px] md:w-[427px] md:h-[440px] shrink-0" alt="" />

                
              </div>
              

              <div className='lg:col-span-2 lg:pl-16 pt-4 md:pt-0 lg:px-16 flex flex-col justify-center items-center'>
                  <div>
                      <img src={up} className="flex align-left" alt="" />
                      <p className='mt-8 mb-6 text-left text-xl text-blac2 opacity-60 font-normal'>Shopping for furniture online allows customers to browse and purchase items from the comfort of their own home. Shopping for furniture online allows customers to browse and purchase items from the comfort of their own home. Shopping for furniture online allows customers to browse and purchase items from the comfort of their own home.</p>
                      <div className=' flex  justify-end'>
                        <img src={down} alt="" className='' />
                      </div>
                  </div>
                  
              </div>
          </div>
    </motion.div>
  )
}

export default ClientsReview
