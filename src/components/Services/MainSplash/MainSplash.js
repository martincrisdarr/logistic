import React from 'react'
import sittingMan from '../../../assets/services/sittingMan.png'
function MainSplash() {
  return (
    <>
      <div id='service' className='w-full px-16 gap-16 lg:gap-0 flex flex-col lg:flex-row justify-center items-center mt-40 lato'>
        <div className='w-full lg:w-1/2  pr-24'>
          <h1 className='text-4xl tracking-wider'>Lorem Ipsum Our Service</h1>
          <p className='mt-8'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry.</p>
          <p className='py-4 mt-8 bg-[#5CB30B] w-36 text-center text-white font-semibold text-lg rounded-xl '>Learn More</p>
        </div>
        <div className='w-full lg:w-1/2 '>
          <img src={sittingMan} alt="" />
        </div>
      </div>
    </>
  )
}

export default MainSplash