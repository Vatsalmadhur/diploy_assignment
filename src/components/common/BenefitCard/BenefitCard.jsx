import React from 'react'

const BenefitCard = (props) => {
  return (
    <>
    <div className='flex items-center justify-between w-[500px] h-[120px]   my-3 '>
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