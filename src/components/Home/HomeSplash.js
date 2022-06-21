import React from 'react'
import bikeMan from '../../assets/home/bikeMan.png'
function HomeSplash() {
  return (
    <>
      <div className='lato flex  '>
        <img src={bikeMan} alt="bike rider" className='h-screen w-full object-cover relative top-32 md:top-0' />
        <div className='absolute top-36 right-0 md:right-16 flex flex-col gap-8 w-[400px] '>
          <h1 className='text-3xl'>Lorem Ipsum Dolor Sit Amet</h1>
          <p className='text-lg'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p className='px-6 py-4 text-center text-white bg-[#5CB30B] w-36 rounded-2xl cursor-pointer '>Learn More</p>
        </div>
      </div>
    </>
  )
}

export default HomeSplash