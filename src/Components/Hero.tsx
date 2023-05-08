import React, {useRef, useEffect} from 'react'
import HeroData from '../Data/HeroData'
import { useAnimation, motion, useInView } from "framer-motion";


const Hero = () => {
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
      <motion.main
          ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {opacity: 0, x: 75},
        visible: {opacity: 1, x: 0},
      }}
      transition={{duration: 0.5, delay: 0.25}}
      >
          <section
            
              className='bg-hero-bg h-[638px]  flex flex-col justify-center items-center'>
              <h1 className='text-5xl md:text-7xl text-center  font-semibold text-white'>Best furniture to <br />
                  your doorstep</h1>
              
              <button className='mt-8 w-48 h-12 font-semibold rounded-lg bg-pry text-white'>
                  Explore
              </button>
          </section>

          <section className='flex justify-center space-x-4 -mt-8'>
              {HeroData.map((data) =>
                  <div  key={data.id} className="w-[280px] md:w-[315px] h-[184px] flex flex-col justify-center items-center rounded-2xl  bg-white border border-graay font-semibold space-y-3">
                      <h2 className='text-4xl md:text-6xl  text-pry'>{data.figure}</h2>
                      <div className='text-xl md:text-2xl '>
                           <p>{data.title1}</p>
                      <p>{data.title2}</p>
                      </div>
                     
              </div>    
              )}
          </section>
          
    </motion.main>
  )
}

export default Hero

