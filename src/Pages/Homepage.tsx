import React from 'react'
import Benefits from '../Components/Benefits'
import BestSelling from '../Components/BestSelling'
import ClientsReview from '../Components/ClientsReview'
import Hero from '../Components/Hero'
import Trending from '../Components/Trending'

const Homepage = () => {
  return (
    <div className='bg-background font-manrope'>
      <Hero />
      <Benefits />
      <BestSelling />
      <ClientsReview />
      <Trending />
    </div>
  )
}

export default Homepage
