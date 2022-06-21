import React from 'react'

function TransportCard({packet, transport, backgroundColorCard, backgroundColorButton, textColor, clicked}) {
  return (
    <>
      <div className={`h-[350px] bg-[${backgroundColorCard}] rounded-3xl transition-all duration-300 text-${textColor} flex flex-col items-center py-12 font-semibold`} >
        <p className='text-lg'>Packet - {packet}</p>
        <h2 className='text-5xl mt-4'>{transport}</h2>
        <p onClick={clicked} className={`py-4 px-8 bg-${backgroundColorButton} cursor-pointer relative top-28 text-[#5CB30B] rounded-3xl`} >Choose plan</p>
      </div>
    </>
  )
}

export default TransportCard