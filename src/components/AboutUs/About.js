import React from 'react'
import Cycle from './Cycle/Cycle'
import Sizes from './Sizes/Sizes'
import Transportation from './Transportation/Transportation'

function About() {
  return (
    <>
      <div className='px-12 md:px-32 lato mt-28'>
        <h1 className='text-3xl font-semibold text-[#595959] mt-56 md:mt-0 '>Any Size With Affordable Prize</h1>
        <p className='text-[#222222BF] text-lg mt-6 '><span className='font-semibold text-black'>Logistics</span> helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring.</p>
        <Sizes />
        <h1 className='text-3xl font-semibold text-[#595959] mt-24'>Complete cycle</h1>
        <p className='text-[#222222BF] text-lg mt-6 '><span className='font-semibold text-black'>We can manage end to end Logistics</span> helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring.</p>
        <Cycle />
        <Transportation />
      </div>
    </>
  )
}

export default About