import React from 'react'

function FooterBar() {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between lg:px-16 px-4 py-12 greenGradient rounded-2xl shadow-xl mt-32 mb-16 lato'>
        <div className='text-white'>
          <h2 className='text-2xl font-semibold mb-2'>Lorem Ipsum Dolor Sit amet?</h2>
          <p>Go submit your great Idea, and let us make it awesome!</p>
        </div>
        <div className='flex justify-center gap-6 mt-12 lg:mt-0'>
          <p className='px-8 sm:px-12 py-4 bg-[#61C702] rounded-lg text-white font-semibold shadow-lg flex justify-center items-center cursor-pointer'>Try Now</p>
          <div className='bg-white opacity-50 h-full w-[2px] '></div>
          <p className='px-8 sm:px-12 py-4 bg-white text-[#003156] rounded-lg text-white font-semibold shadow-lg flex justify-center items-center cursor-pointer'>Sign Up</p>
        </div>
      </div>
    </>
  )
}

export default FooterBar