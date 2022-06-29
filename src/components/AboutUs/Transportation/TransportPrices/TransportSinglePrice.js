import React from 'react'

function TransportSinglePrice({kg, price, priceBackground}) {
  return (
    <>
      <div className={`w-full flex justify-between mt-6 py-6 pl-6 pr-16 bg-[#979797]/20 font-semibold rounded-2xl`}>
        <p>More than: {kg}KG</p>
        <p>${price} USD </p>
      </div>
    </>
  )
}

export default TransportSinglePrice