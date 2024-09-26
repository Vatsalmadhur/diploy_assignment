import React from 'react'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

const BenefitCard = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.from('#box',
      {scrollTrigger:'#box',
        opacity:0,stagger:0.5,
      })});
  return (
    <>
    <div id='box' className='flex items-center justify-between minw-[500px] max-h-[200px] w-[95w] minh-[120px] h-auto   my-3 opacity-1'>
        <img src={props.imgSrc} alt="" className='w-[100px] h-[100px]   rounded-full px-3' />
        <div className='w-[80%] h-full '>
            <p className='text-xl font-bold text-black'>{props.Heading}</p>
            <p className='text-lg text-black'>{props.subHeading}</p>
             </div>

    </div>
    </>
  )
}

export default BenefitCard