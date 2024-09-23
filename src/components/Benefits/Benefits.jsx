import React from 'react'
import BenefitCard from '../common/BenefitCard/BenefitCard'
import { BenefitData } from '../../data'
import { ButtonV1 } from '../common/Button/ButtonV1'
import { ButtonV2 } from '../common/Button/ButtonV2'

const Benefits = () => {
  return (
    <>
    <div className='w-screen h-screen  flex items-start justify-evenly'>
        <div className='w-[45vw] h-[60vh]  flex items-start justify-center flex-col pl-[100px]'>
          <p className='text-4xl text-black font-bold'>What we offer?</p>
          <p className='text-xl text-black'>Create and sell beautiful custom-products in minutes. Printify prints, and delivers 950+ products at the lowest prices around. No risk, all reward.</p>
          <p className='text-xl text-black'>Launch your business in 4 easy steps.</p>
          <ButtonV1 content="Try Us"/>
        </div>
        <div className='w-[45vw] min-h-[60vh] h-auto my-5  flex items-center justify-end flex-col  '>
          {BenefitData.map((data)=>(
        <BenefitCard imgSrc={data.imgSrc} Heading={data.Heading} subHeading={data.subHeading} /> 
          ))}
        </div>
    </div>
    </>
  )
}

export default Benefits