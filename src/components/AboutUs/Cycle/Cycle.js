import React from 'react'
import cycleTruck from '../../../assets/about/cycleTruck.png'
import EachCycle from './EachCycle'
function Cycle() {
  return (
    <>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img src={cycleTruck} alt="cycle truck" />
          <EachCycle number={'01'} type={'Motorcycle'} description={'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'} />
          <EachCycle number={'02'} type={'Pickup'} description={'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'} />
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-end'>
          <EachCycle number={'03'} type={'Ship'} description={'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'} />
          <EachCycle number={'04'} type={'Airplane'} description={'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'} />
          <EachCycle number={'05'} type={'Document'} description={'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'} />
        </div>
      </div>
    </>
  )
}

export default Cycle