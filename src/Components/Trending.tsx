import React from 'react'

import Line from '../Images/Line.png'
import Arrow from '../Images/Arrow.png'

import TrendingData from '../Data/TrendingData'

const Trending = () => {
  return (
    <div className='mt-32 pb-32 px-[60px] font-semibold'>
      <div className='  flex justify-between items-center'>
                <div>
                <div className='flex items-center space-x-3 text-3xl  text-pry'>
                <img src={Line} alt="" />
                <p>Trending</p>
                </div>
            
                <h3 className='mt-2 text-5xl text-left'>Our Trending Products</h3>   
            </div>
            
            <div className='md:flex items-center space-x-4 text-blac' >
                <p className=''>Explore All</p>
                <img src={Arrow} alt="" />
            </div>
        
          </div>
          
          <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {TrendingData.map((data) => 
                  <div key={data.id} className="h-[415px] pt-[18px]  px-4 bg-white border border-graay rounded-2xl">
                      <img src={data.pix} className='w-[281px] h-[275px]' alt="" />

                      <div className='mt-2 space-y-3'>
                            <p className='text-sm'>{data.design}</p>
                            <p className='text-lg'>{data.type}</p>
                            <p className='text-2xl text-pry'>{data.price}</p>
                        </div>
                  </div>
              )}
          </div>
    </div>
  )
}

export default Trending
