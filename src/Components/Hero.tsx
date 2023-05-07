import React from 'react'
import HeroData from '../Data/HeroData'

const Hero = () => {
  return (
      <main >
          <section className='bg-hero-bg h-[638px]  flex flex-col justify-center items-center'>
              <h1 className='text-5xl md:text-7xl text-center  font-semibold text-white'>Best furniture to <br />
                  your doorstep</h1>
              
              <button className='mt-8 w-48 h-12 font-semibold rounded-lg bg-pry text-white'>
                  Explore
              </button>
          </section>

          <section className='flex justify-center space-x-4 -mt-8'>
              {HeroData.map((data) =>
                  <div  key={data.id} className="w-[315px] h-[184px] flex flex-col justify-center items-center rounded-2xl  bg-white border border-graay font-semibold space-y-3">
                      <h2 className='text-6xl  text-pry'>{data.figure}</h2>
                      <div className='text-2xl '>
                           <p>{data.title1}</p>
                      <p>{data.title2}</p>
                      </div>
                     
              </div>    
              )}
          </section>
          
    </main>
  )
}

export default Hero

