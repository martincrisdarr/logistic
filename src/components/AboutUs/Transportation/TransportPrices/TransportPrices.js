import React from 'react'
import TransportSinglePrice from './TransportSinglePrice'


function TransportPrices({firstKg,firstPrice,secondKg,secondPrice,thirdKg,thirdPrice,fourthKg,fourthPrice,fifthKg,fifthPrice}) {
  return (
    <>
        <div className='flex flex-col w-full mt-16'>
          <div className='w-full flex justify-between text-xl font-semibold pl-6 pr-24'>
            <p>Weight</p>
            <p>Price</p>
          </div>
          <TransportSinglePrice kg={firstKg} price={firstPrice}/>
          <TransportSinglePrice kg={secondKg} price={secondPrice}/>
          <TransportSinglePrice kg={thirdKg} price={thirdPrice}/>
          <TransportSinglePrice kg={fourthKg} price={fourthPrice}/>
          <TransportSinglePrice kg={fifthKg} price={fifthPrice}/>
        </div>
    </>
  )
}

export default TransportPrices