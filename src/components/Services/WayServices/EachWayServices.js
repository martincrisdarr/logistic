import React from 'react'

function EachWayServices({serviceImage, title, description,secondText,thirdText}) {
  return (
    <>
      <div className='flex gap-4 mt-12'>
        <img src={serviceImage} className='h-[40px] bg-slate-50 rounded-[50%] p-2 object-scale-down' />
        <div>
          <p className='text-2xl text-[#2F3035] font-semibold'>{title}</p>
          <p className='text-[#2F303599] text-lg mt-2 '>{description} </p>
          <p className='text-[#2F303599] text-lg mt-2 '>{secondText} </p>
          <p className='text-[#2F303599] text-lg mt-2 '>{thirdText} </p>
        </div>
      </div>
    </>
  )
}

export default EachWayServices