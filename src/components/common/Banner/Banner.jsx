import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='flex items-center justify-center w-screen  p-10 border-2 border-red-600' >
   <div class="bg-[url('/assets/banner.svg')]  sm:h-[100px] min-h-[60px] h-auto bg-no-repeat bg-cover bg-center rounded-lg w-[90vw] flex items-center justify-evenly border-[1px] border-black p-3 sm:p-5 ">
    <p className='sm:text-2xl text-lg text-black font-bold w-[400px] ' >Are you a large business looking for custom solution?</p>
    <button className='border-2 border-black bg-white w-[100px] h-[30px] font-semibold' >Talk to sales</button>
</div>
</div>
    </>
  )
}

export default Banner