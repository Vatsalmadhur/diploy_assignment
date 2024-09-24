import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='flex items-center justify-center w-screen' >
   <div class="bg-[url('/assets/banner.svg')]  h-[100px] bg-no-repeat bg-cover bg-center rounded-lg w-[90vw] flex items-center justify-evenly border-2 border-black ">
    <p className='text-2xl text-black font-bold w-[400px] ' >Are you a large business looking for custom solution?</p>
    <button className='border-2 border-black' >Talk to sales</button>
</div>
</div>
    </>
  )
}

export default Banner