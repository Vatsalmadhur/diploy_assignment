import React from 'react'
import BenefitCard from '../common/BenefitCard/BenefitCard'
import { BenefitData } from '../../data'
import { ButtonV1 } from '../common/Button/ButtonV1'
import { ButtonV2 } from '../common/Button/ButtonV2'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'


const Benefits = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.from('#lBox',{
      scrollTrigger:'#lBox',

      x:-100,opacity:0,stagger:0.3})
  })
  return (
    <>
    <div className='w-screen h-auto  flex items-center justify-evenly flex-wrap'>
        <div className='min-w-[400px] md:w-[45vw] w-[95vw] md:h-[60vh] minh-[40vh] h-auto flex items-start justify-start flex-col lg:px-[100px] md:px-[50px] flex-wrap gap-3 py-5 '>
          <p id='lBox' className='text-4xl text-black font-bold px-5'>What we offer?</p>
          <p id='lBox' className='text-xl text-black px-5'>Create and sell beautiful custom-products in minutes. Printify prints, and delivers 950+ products at the lowest prices around. No risk, all reward.</p>
          <p id='lBox' className='text-xl text-black font-bold px-5'>Launch your business in 4 easy steps.</p>
          <div id='lBox' className='px-3'>
          <ButtonV1 content="Try Us" />
          </div>
        </div>
        <div className='md:w-[45vw] w-[95vw] sm:min-h-[60vh]  h-auto   flex items-center  justify-start flex-col '>
          {BenefitData.map((data)=>(
        <BenefitCard imgSrc={data.imgSrc} Heading={data.Heading} subHeading={data.subHeading} />
          ))}
        </div>
    </div>
    </>
  )
}

export default Benefits