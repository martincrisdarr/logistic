import React from 'react'
import sizeTruck from '../../../assets/about/sizeTruck.png'
import EachSize from './EachSize'
function Sizes() {
  return (
    <>
      <div className='w-full mt-24 w-full'>
        <div className='flex justify-between '>
          <p className='text-2xl text-[#595959] font-semibold '>Lorem Ipsum Dolor sit amet</p>
          <p className='px-6 flex items-center text-white bg-[#FFC22B] font-semibold rounded-lg tracking-widest '>BEST OFFER</p>
        </div>
        <div className='mt-12 w-full flex'>
          <img src={sizeTruck} className='w-[45%]  ' />
          <div className='w-[55%] px-4 flex  flex-col gap-2 '>
            <div className='flex justify-between  text-[#6E7A7B] font-semibold text-lg '>
              <p className='w-[90%]'>Cost of Airfreight</p>
              <p className='w-[10%] pr-24'>Price</p>
            </div>
            <EachSize weight={10} price={100} background='bg-slate-200' />
            <EachSize weight={49} price={105} />
            <EachSize weight={99} price={110} background='bg-slate-200' />
            <EachSize weight={499} price={120} />
            <EachSize weight={1000} price={1000} background='bg-slate-200'/>
            <EachSize weight={1200} price={1200} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sizes