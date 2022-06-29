import React from 'react'

function FooterEachPart({title,firstText,secondText,thirdText,fourthText}) {
  return (
    <>
      <div className='flex flex-col gap-6 mb-12 text-[#172029] '>
        <p className='font-semibold text-lg'>{title}</p>
        <p>{firstText}</p>
        <p>{secondText}</p>
        <p>{thirdText}</p>
        <p>{fourthText}</p>
      </div>
    </>
  )
}

export default FooterEachPart