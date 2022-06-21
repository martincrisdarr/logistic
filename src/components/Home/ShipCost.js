import React from 'react'

function ShipCost() {
  return (
    <>
      <div>
        <div className='flex flex-col gap-6 '>
            <h2 className='text-xl font-semibold'>Shipping Cost</h2>
            <div className='flex gap-2 flex-wrap md:flex-nowrap'>
              <input type="text" placeholder='Place of Origin' className='outline-none border-2 border-slate-200 w-full md:w-[200px] h-12 rounded-xl pr-6 pl-4'/>
              <input type="text" placeholder='Destination area' className='outline-none border-2 border-slate-200 w-full md:w-[200px] h-12 rounded-xl pr-6 pl-4'/>
              <input type="text" placeholder='Weight' className='outline-none border-2 border-slate-200 w-full md:w-1/4 h-12 rounded-xl pr-6 pl-4'/>
              <button className='px-6 py-2 font-semibold text-center bg-[#316FC3] text-white text-lg rounded-xl cursor-pointer w-full md:w-[200px] '>Check Now</button>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default ShipCost