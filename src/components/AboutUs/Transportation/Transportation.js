import React, { useEffect, useState } from 'react'
import TransportSingleCard from './TransportSingleCard/TransportSingleCard'
import checked from '../../../assets/about/checked.png'
import TransportPrices from './TransportPrices/TransportPrices'
function Transportation() {
  const [card, setCard] = useState("")
  useEffect(() =>{
    setCard("truck")
  },[])
  return (
    <>
      { /* ---------------------------------- CARDS --------------------------------- */}
      <div>
        <h1 className='text-3xl font-semibold text-[#595959] mt-32 '>Handling In Out & Transportation</h1>
        <p className='text-[#222222BF] text-lg mt-6 '><span className='font-semibold text-black'>We can manage end to end Logistics </span>helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring.</p>
        <div className='lg:grid lg:grid-cols-4 text-center mt-24 gap-8 items-center'>
          <div className='px-8 text-start'>
            <img src={checked} alt="" />
            <p className='text-xl font-semibold mt-4'>Guarantee safe, fast and convenient</p>
          </div>
          <TransportSingleCard 
          clicked={()=> setCard("courier")} 
          packet={"01"} 
          transport={"Courier"} 
          backgroundColorCard={card === "courier" ? '#5CB30B' : 'white'}
          textColor={card === "courier" ? 'white' : 'black'} />
          <TransportSingleCard 
          clicked={()=> setCard("truck")} 
          packet={"02"} 
          transport={"Truck"}
          backgroundColorCard={card === "truck" ? '#5CB30B' : 'white'}
          textColor={card === "truck" ? 'white' : 'black'}/>
          <TransportSingleCard 
          clicked={()=> setCard("container")} 
          packet={"03"} 
          transport={"Container"} 
          backgroundColorCard={card === "container" ? '#5CB30B' : 'white'}
          textColor={card === "container" ? 'white' : 'black'}/>
        </div>
      </div>
       {/* ------------------------------ PRICES TABLE ------------------------------  */}
      {card === 'truck' ? <TransportPrices firstKg='10' firstPrice='200' secondKg='20' secondPrice='300' thirdKg='50' thirdPrice='500' fourthKg='100' fourthPrice='700' fifthKg='200' fifthPrice='1000'/> : null}
      {card === 'courier' ? <TransportPrices firstKg='5' firstPrice='100' secondKg='10' secondPrice='150' thirdKg='15' thirdPrice='200' fourthKg='25' fourthPrice='350' fifthKg='35' fifthPrice='500'/> : null}
      {card === 'container' ? <TransportPrices firstKg='200' firstPrice='1000' secondKg='500' secondPrice='1500' thirdKg='1000' thirdPrice='2000' fourthKg='2500' fourthPrice='3500' fifthKg='5000' fifthPrice='5000'/> : null}
    </>
  )
}

export default Transportation