import React, { useRef, useEffect } from 'react'
import { useAnimation, motion, useInView } from "framer-motion";
import map from '../Images/map.jpg'


const Map = () => {
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
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
      }}
      transition={{duration: 1}}
      className='py-32'>
      <img src={map} alt="" className='w-full' />
    </motion.div>
  )
}

export default Map
