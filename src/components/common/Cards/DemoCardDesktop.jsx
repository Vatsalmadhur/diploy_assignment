import React from 'react'

const DemoCardDesktop = ({imageSrc,title,description}) => {
  return (
   <>
    <div className='w-screen h-screen flex items-center justify-center ' >
    <div className='w-[80vw] lg:h-[410px]  md:h-[300px]  rounded-2xl   relative flex items-center justify-end bg-gray-200   '>
        <img src={imageSrc} alt="" className='lg:w-[550px] lg:h-[450px] md:w-[400px] md:h-[300px] rounded-2xl absolute top-[-40px] left-[-30px] ' />

        <div className='lg:w-[450px] w-[350px] min-h-[200px] h-auto mr-[40px] ' >
            <p className='lg:text-4xl text-3xl text-black font-bold mb-3'>{title}</p>
            <p className='text-md text-black mb-3'>{description}</p>

            <p className='greenFont font-semibold text-md' >All Products
                <img src="assets/arrow.svg" alt="arrow" className='w-10 h-10' />
            </p>
        </div>
    </div>
    </div>
   </>
  )
}

export default DemoCardDesktop