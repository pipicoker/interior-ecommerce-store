import React, { useRef, useEffect } from 'react'
import { useAnimation, motion, useInView } from "framer-motion";
import BenefitsData from '../Data/BenefitsData'
import whyfurniture from '../Images/whyfurniture.png'


const WhyAbout = () => {
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
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {opacity: 0, x: 75},
        visible: {opacity: 1, x: 0},
      }}
      transition={{duration: 1}}
      className='pt-24 grid lg:grid-cols-2 items-center '>
      
      <div className='hidden lg:block'>
        <img src={whyfurniture} alt="" />
      </div>

      <div className='text-left md:pl-[68px] '>
        <h2 className='text-6xl font-semibold text-blac2'>What <span className='text-pry'>We Do</span></h2>
        <p className='m-2 text-lg font-normal text-blac opacity-60'>We offer customers a convenient and cost-effective way to find and purchase the furniture they need</p>

        <div className='mt-14 grid  md:grid-cols-2 gap-6'>
          {BenefitsData.map((data) => 
            <div key={data.id} className="flex space-x-4">
              <p className='bg-pry w-[39px] h-[39px] px-[14px] py-[3px] flex justify-center items-center text-whitee'>{data.id}</p>
              <div>
                <h6 className='font-semibold text-2xl text-blac '>{data.summary}</h6>
                <p className='font-normal text-lg text-blac opacity-60'>{data.expression}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default WhyAbout
