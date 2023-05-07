import React from 'react'
import SummerDetails from './SummerDetails'

const Summer = () => {
  return (
    <div className='mt-24 pb-[72px] grid md:grid-cols-2 gap-5'>
          <div className='bg-summer1-bg h-[365px] rounded-2xl flex items-center justify-end pr-24'>
              <SummerDetails />
          </div>
          
          <div className='bg-summer2-bg  h-[365px] rounded-2xl flex items-center justify-start pl-24'>
              <SummerDetails />
          </div>
    </div>
  )
}

export default Summer
