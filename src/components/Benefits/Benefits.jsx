import React from 'react'
import BenefitCard from '../common/BenefitCard/BenefitCard'
import { BenefitData } from '../../data'

const Benefits = () => {
  return (
    <>
    <div className='w-screen h-screen border-2 flex items-center justify-evenly'>
        <div className='w-[45vw] h-[60vh] border-2 flex items-start justify-center flex-col '>
          <p className='text-3xl text-black font-bold'>What we offer?</p>
          <p className='text-xl text-black'>Create and sell beautiful custom-products in minutes. Printify prints, and delivers 950+ products at the lowest prices around. No risk, all reward.</p>
          <button className='border-2' >Try Us!</button>
        </div>
        <div className='w-[45vw] h-[60vh] border-2 flex items-center justify-center flex-col  relative '>
          {BenefitData.map((data)=>(
        <BenefitCard imgSrc={data.imgSrc} Heading={data.Heading} subHeading={data.subHeading} /> 
          ))}
        </div>
    </div>
    </>
  )
}

export default Benefits