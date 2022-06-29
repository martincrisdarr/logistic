import React from 'react'
import EachWayServices from './EachWayServices'
import airfreight from '../../../assets/services/airfreight.png'
import express from '../../../assets/services/express.png'
import packageMan from '../../../assets/services/packageMan.png'
import seafreight from '../../../assets/services/seafreight.png'
import trucking from '../../../assets/services/trucking.png'
import warehouse from '../../../assets/services/warehouse.png'

function WayServices() {
  return (
    <>
      <div className='px-16 lg:px-48 lato w-full mt-32'>
        <div>
          <h1 className='text-3xl text-[#0D253E] font-semibold'>Our Service</h1>
          <p className='text-[#2F303599] text-lg mt-8 '>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry.</p>
          <div className='w-full mt-24 flex flex-col md:flex-row '>
            <div className='w-full md:w-1/2 px-4'>
              <p className='text-xl font-semibold'>We have many ways to deliver your goods</p>
              <p className='text-[#2F303599] text-lg mt-4'>High-Impact Entrepreneurs dream of becoming the next great success story, but having launched in emerging countries, face considerable barriers to growth:</p>
              <EachWayServices serviceImage={airfreight} title='Airfreight' description='Freight with schedule - Unschedule Charter & Clearance' />
              <EachWayServices serviceImage={seafreight} title='Seafreight' description='FCL – LCL Freight & Clearance' />
              <EachWayServices serviceImage={trucking} title='Trucking' description='Support all type trucking from CDE until Special Heavy Lift' />
            </div>
            <div className='w-full md:w-1/2 px-4  md:mt-0'>
              <EachWayServices serviceImage={express} title='Express' description='Transport 24/7 with TMS & Tracking' className='order-' />
              <EachWayServices serviceImage={warehouse} title='Warehouse' description='Provide Fullfilment & WMS' />
              <img src={packageMan} alt="man with a package"  className='mt-6' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WayServices