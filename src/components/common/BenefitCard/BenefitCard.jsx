import React from 'react'

const BenefitCard = (props) => {
  return (
    <>
    <div className='flex items-center justify-between w-[400px] h-[120px] border-red-300 border-2 absolute right-0 p-3 '>
        <img src={props.imgSrc} alt="" className='w-[100px] h-[100px]   rounded-full' />
        <div className='w-[80%] h-full '>
            <p className='text-2xl font-bold text-black'>{props.Heading}</p>
            <p className='text-lg text-black'>{props.subHeading}</p>
             </div>

    </div>
    </>
  )
}

export default BenefitCard