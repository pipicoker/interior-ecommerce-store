import React from 'react'
import Line from '../Images/Line.png'
import Arrow from '../Images/Arrow.png'

import BestSellingData from '../Data/BestSellingData'

const BestSelling = () => {
    return (
      <section className='mt-32 px-[60px] font-semibold text-blac'>
            <div className='  flex justify-between items-center'>
                <div>
                <div className='flex items-center space-x-3 text-2xl md:text-3xl  text-pry'>
                <img src={Line} alt="" />
                <p>Best Selling</p>
                </div>
            
                <h3 className='mt-2 text-3xl md:text-5xl text-left'>Our Best Selling Products</h3>   
            </div>
            
            <div className='hidden md:flex items-center space-x-4' >
                <p>Explore All</p>
                <img src={Arrow} alt="" />
            </div>
        
            </div> 
            
            <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4  '>
                {BestSellingData.map((data) => 
                    <div key={data.id} className=" h-[415px] border border-graay rounded-3xl">
                        <img src={data.pix} alt="pix" className='w-full h-[275px]' />
                        <div className='mt-2 space-y-3'>
                            <p className='text-sm'>{data.design}</p>
                            <p className='text-lg'>{data.type}</p>
                            <p className='text-2xl text-pry'>{data.price}</p>
                        </div>
                        
                    </div>
                )}
            </div>
      </section>
      
  )
}

export default BestSelling
