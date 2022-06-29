import React from 'react'
function TransportCard({packet, transport, backgroundColorCard, textColor, clicked}) {
  return (
    <>
      <div className={`h-64 lg:h-[350px] bg-[${backgroundColorCard}] shadow-2xl mt-6 rounded-3xl transition-all duration-300 text-${textColor} flex flex-col items-center py-12 font-semibold`} >
        <p className='text-lg'>Packet - {packet}</p>
        <h2 className='text-4xl xl:text-5xl mt-4'>{transport}</h2>
        <p onClick={clicked} className={`py-4 px-8 bg-white cursor-pointer relative top-6 lg:top-28 text-[#5CB30B] rounded-3xl`} >Choose plan</p>
      </div>
    </>
  )
}

export default TransportCard