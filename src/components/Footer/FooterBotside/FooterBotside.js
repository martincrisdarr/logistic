import React from 'react'
import FooterEachPart from './FooterEachPart'
import line from '../../../assets/socialMedia/line.png'
import instagram from '../../../assets/socialMedia/instagram.png'
import twitter from '../../../assets/socialMedia/twitter.png'
function FooterBotside() {
  return (
    <>
      <div className='w-full flex flex-wrap gap-12 justify-around lato'>
        <FooterEachPart title='What we do' firstText='Lorem Ipsum' secondText='Lorem Ipsum' thirdText='Lorem Ipsum' fourthText='Lorem Ipsum' />
        <FooterEachPart title='About Us' firstText='Lorem Ipsum' secondText='Lorem Ipsum' thirdText='Lorem Ipsum'/>
        <FooterEachPart title='Impact' firstText='Global' secondText='Indonesia'/>
        <FooterEachPart title='Berita dan penelitian' firstText='Blog' secondText='Report' thirdText='News Letter' />
        <div className='flex flex-col gap-6 mb-12 text-[#172029] '>
          <p className='font-semibold text-lg'>Social Media</p>
          <p className='flex gap-2'><img src={line} alt="line" />Line</p>
          <p className='flex gap-2'><img src={instagram} alt="instagram" />Instagram</p>
          <p className='flex gap-2'><img src={twitter} alt="twitter" />twitter</p>
          
        </div>
      </div>
    </>
  )
}

export default FooterBotside