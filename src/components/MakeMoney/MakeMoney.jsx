import React from 'react'

const MakeMoney = () => {
  return (
    <>
    <div className='w-screen h-screen flex items-center  justify-center'> 
        <div className='w-[80%] h-full bg-gray-900 flex flex-col justify-center gap-5 p-10 rounded-3xl'>
            <p className='text-4xl text-white '>Make Money,Risk-Free</p>
            <p className='text-sm text-white' >You pay for fulfillment only when you make a sale. </p>
            <div className='w-[200px] h-[auto] bg-gray-950 p-5 rounded-xl flex flex-col gap-5' >
                <div className='flex items-center justify-between'>
                    <p className='text-white text-lg'>You sell a t-shirt</p>
                    <p className='text-white text-lg'>$30</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-white text-lg '>You pay for its productiont</p>
                    <p className='text-white text-lg '>$12</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='greenFont text-lg font-bold '>You Profit</p>
                    <p className='greenFont text-lg font-bold'>$18</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MakeMoney