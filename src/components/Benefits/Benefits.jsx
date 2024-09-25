import React from 'react'
import BenefitCard from '../common/BenefitCard/BenefitCard'
import { BenefitData } from '../../data'
import { ButtonV1 } from '../common/Button/ButtonV1'
import { ButtonV2 } from '../common/Button/ButtonV2'

const Benefits = () => {
  return (
    <>
    <div className='w-screen h-auto  flex items-center justify-evenly flex-wrap border-2 py-10'>
        <div className='min-w-[400px] md:w-[45vw] w-[95vw] md:h-[60vh] minh-[40vh] h-auto flex items-start justify-center flex-col lg:px-[100px] md:px-[50px] flex-wrappy-5 gap-3 py-5'>
          <p className='text-4xl text-black font-bold px-5'>What we offer?</p>
          <p className='text-xl text-black px-5'>Create and sell beautiful custom-products in minutes. Printify prints, and delivers 950+ products at the lowest prices around. No risk, all reward.</p>
          <p className='text-xl text-black font-bold px-5'>Launch your business in 4 easy steps.</p>
          <div className='px-3'>
          <ButtonV1 content="Try Us" />
          </div>
        </div>
        <div className='md:w-[45vw] w-[95vw] sm:min-h-[60vh]  h-auto   flex items-center sm:justify-end justify-start flex-col'>
          {BenefitData.map((data)=>(
        <BenefitCard imgSrc={data.imgSrc} Heading={data.Heading} subHeading={data.subHeading} /> 
          ))}
        </div>
    </div>
    </>
  )
}

export default Benefits