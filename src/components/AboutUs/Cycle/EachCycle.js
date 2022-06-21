import React from 'react'

function EachCycle({number,type, description}) {
  return (
    <>
      <div className='flex gap-8 mt-16'>
        <p className='p-4 rounded-[50%] bg-[#5CB30B] flex justify-center items-center shadow-lg text-lg text-white font-semibold w-12 h-12'>{number}</p>
        <div>
          <h2 className='font-semibold text-xl'>{type}</h2>
          <p className='mt-2 text-[#222222BF] w-4/5 tracking-wide '>{description}</p>
        </div>
      </div>
    </>
  )
}

export default EachCycle