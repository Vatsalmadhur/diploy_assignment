import React from 'react'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
const DemoCardDesktop = ({imageSrc,title,description}) => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.from('#text',
      {scrollTrigger:'#text',
        opacity:1,stagger:0.1,x:100

      }
    )})
  return (
   <>
    <div className='w-screen h-screen flex items-center justify-center ' >
    <div className='xl:w-[70vw] xl:h-[450px] w-[85vw] lg:h-[410px]  md:h-[300px]  rounded-2xl   relative flex items-center justify-end bg-gray-200   '>
        <img src={imageSrc} alt="" className='xl:w-[600px] lg:w-[550px] lg:h-[450px] md:w-[350px] md:h-[300px] w-[300px] rounded-2xl absolute top-[-80px] left-[-30px] ' />

        <div className='lg:w-[450px] w-[350px] min-h-[200px] h-auto mr-[40px] ' >
            <p id='text' className='lg:text-4xl text-3xl text-black font-bold mb-3'>{title}</p>
            <p id='text' className='text-md text-black mb-3'>{description}</p>

            <span className="flex items-center gap-2">
          <p id='text' className="greenFont  text-lg font-bold">All Products </p>
          <img src="assets/rightArrow.png" alt="arrow" className="w-8 h-6" />
        </span>
        </div>
    </div>
    </div>
   </>
  )
}

export default DemoCardDesktop