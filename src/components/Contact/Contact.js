import React from 'react'
import EachWayServices from '../Services/WayServices/EachWayServices'
import warehouse from '../../assets/services/warehouse.png'
import office from '../../assets/services/office.png'
import contact from '../../assets/services/contact.png'
import map from '../../assets/services/map.png'

function Contact() {
  return (
    <>
      <div className='px-16 xl:px-48 mt-24 lato' id='contact'>
      <h1 className='text-3xl text-[#0D253E] font-semibold'>Contact Us</h1>
      <p className='text-[#2F303599] text-lg mt-6'><span className='text-[#222222BF] font-semibold'>Contact Us</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry.</p>
      <div className='w-full flex flex-col lg:flex-row mt-16 gap-8'>
        <div className='lg:pr-32 w-full lg:w-1/2'>
          <EachWayServices serviceImage={warehouse} title='Warehouse' description='Jl. Tanjung Barat Selatan, Gang 100 no. 26 Jakarta Selatan'/>
          <EachWayServices serviceImage={office} title='Main Office' description='Jl. Tanjung Barat Selatan, Gang 100 no. 26 Jakarta Selatan'/>
          <EachWayServices serviceImage={contact} title='Contact Us' description='Mobile : +62813 8075 0179' secondText='Email : billy@fathlogistik.com' thirdText='Office : Ph: 021 2270 2243'/>
        </div>
          <img src={map} alt="map" className='w-full h-[400px] w-full lg:w-1/2 lg:h-full' />       
      </div>
      </div>
    </>
  )
}

export default Contact