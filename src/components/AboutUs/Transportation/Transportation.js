import React, { useState } from 'react'
import TransportSingleCard from './TransportSingleCard/TransportSingleCard'
import checked from '../../../assets/about/checked.png'
function Transportation() {
  const [card, setCard] = useState("")
  return (
    <>
      <div>
        <h1 className='text-3xl font-semibold text-[#595959] mt-32 '>Handling In Out & Transportation</h1>
        <p className='text-[#222222BF] text-lg mt-6 '><span className='font-semibold text-black'>We can manage end to end Logistics </span>helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring.</p>
        <div className='grid grid-cols-4 text-center mt-24 gap-8 items-center'>
          <div className='px-8 text-start'>
            <img src={checked} alt="" />
            <p className='text-xl font-semibold mt-4'>Guarantee safe, fast and convenient</p>
          </div>
          <TransportSingleCard 
          clicked={()=> setCard("courier")} 
          packet={"01"} 
          transport={"Courier"} 
          backgroundColorCard={card == "courier" ? '#5CB30B' : 'white'}
          textColor={card == "courier" ? 'white' : 'black'} 
          backgroundColorButton={card == "courier" ? 'white' : '[#979797]/20'} />
          <TransportSingleCard 
          clicked={()=> setCard("truck")} 
          packet={"02"} 
          transport={"Truck"}
          backgroundColorCard={(card == "truck" || "") ? '#5CB30B' : 'white'}
          textColor={card == "truck" ? 'white' : 'black'}
          backgroundColorButton={card == "truck" ? 'white' : '[#979797]/20' } />
          <TransportSingleCard 
          clicked={()=> setCard("container")} 
          packet={"03"} 
          transport={"Container"} 
          backgroundColorCard={card == "container" ? '#5CB30B' : 'white'}
          textColor={card == "container" ? 'white' : 'black'}
          backgroundColorButton={card == "container" ? 'white' : '[#979797]/20'}/>
        </div>
        
      </div>
    </>
  )
}

export default Transportation