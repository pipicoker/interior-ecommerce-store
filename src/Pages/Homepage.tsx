import React, {useEffect, useRef} from 'react'
import Benefits from '../Components/Benefits'
import BestSelling from '../Components/BestSelling'
import ClientsReview from '../Components/ClientsReview'
import Hero from '../Components/Hero'
import Trending from '../Components/Trending'


// const squareVariants = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
//   hidden: { opacity: 0, scale: 0 }
// };

const Homepage = () => {

  return (
    <div
  
      className='bg-background font-manrope'>
      <Hero />
      <Benefits />
      <BestSelling />
      <ClientsReview />
      <Trending />
    </div>
  )
}

export default Homepage
