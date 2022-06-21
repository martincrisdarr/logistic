import React from 'react'
import ShipCost from './ShipCost'

function Tracking() {
  return (
    <>
      <div className='w-full px-8 md:px-4 py-8 shadow-xl lato flex items-center justify-start xl:justify-center relative z-40 top-32 md:top-0 gap-4 flex-wrap'>
        <div className='w-full lg:w-[30%] flex flex-col gap-6'>
          <h2 className='text-xl font-semibold'>Track Delivery</h2>
          <div className='flex flex-col md:flex-row gap-2'>
            <input type="text" placeholder='Delivery receipt number' className='outline-none border-2 border-slate-200 w-full h-12 rounded-xl pr-6 pl-4'/>
            <p className='px-8 py-2 font-semibold text-center bg-[#5CB30B] text-white text-lg rounded-xl cursor-pointer '>Search</p>
          </div>
        </div>
        <ShipCost />
      </div>
    </>
  )
}

export default Tracking