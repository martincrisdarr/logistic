import React from 'react'
import FooterBar from './FooterBar/FooterBar'
import FooterBotside from './FooterBotside/FooterBotside'

function Footer() {
  return (
    <>
      <div className='w-full px-16 bg-[#F7F7FA] '>
        <FooterBar />
        <FooterBotside />
      </div>
    </>
  )
}

export default Footer