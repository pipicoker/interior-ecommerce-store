import React from 'react'
import BenefitsData from '../Data/BenefitsData'

import Line from '../Images/Line.png'

// import { BsDashLg } from 'react-icons/bs';


const Benefits = () => {
  return (
    <section className='mt-32 px-[52px] md:px-[60px] font-semibold'>
          <div className='flex items-center space-x-3 text-2xl md:text-3xl  text-pry'>
              <img src={Line} alt="" />
              <p>Why choose us?</p>
          </div>
          
          <h3 className='mt-2 text-3xl md:text-5xl text-left text-blac'>Benefit Of Choosing Us</h3>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
              {BenefitsData.map((data) => 
            <div key={data.id} className="w-72 h-[250px] px-8  border border-graay flex flex-col justify-center items-center rounded-2xl">
                      <h5 className='text-2xl text-blac'>{data.summary}</h5>
                      <p className='text-lg font-normal mt-4 text-blac opacity-60'>{data.expression}</p>
            </div>
              )}
          </div>
          
    </section>
  )
}

export default Benefits
