import React from 'react'

function EachSize({weight, price, background}) {
  return (
    <>
      <div className={`flex w-full py-4 pl-4 pr-16 md:pr-12   rounded-xl font-semibold ${background}`}   >
        <p className='w-[90%] '>More than {weight}KG </p>
        <p className='w-[10%] '>${price}USD </p>
      </div>
    </>
  )
}

export default EachSize