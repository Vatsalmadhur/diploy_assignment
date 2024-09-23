import React from 'react'
import { ButtonV1 } from '../common/Button/ButtonV1'
import { ButtonV2 } from '../common/Button/ButtonV2'

const Landing = () => {
  return (
    <>
    <div className="w-screen h-screen bg-[url('/homeBg.svg')] bg-center bg-cover bg-no-repeat flex   items-center justify-around" >
    <div className='w-[600px] min-h-[300px] h-auto flex items-start justify-center flex-col mb-[200px]' >
        <p className='text-5xl text-black font-bold'>Create and sell custom products.</p>
        <div>
          {  ["100% free to use","900+ High-Quality Products","Largest Global Print Network"].map((ele)=>(
            <div className='my-3 flex items-center justify-start '>
            <span className='bg-white w-8 h-8 rounded-full flex items-center justify-center'>
                <img src="public/tickIcon.png" alt="icon" className='w-5 h-5' />
            </span>
            <p className='text-xl text-black mx-1' >{ele}</p>

            </div>

          ))}
          <div className='flex gap-3' >
          <ButtonV1 content="Try for free"/>
          <ButtonV2 content="How it works"/>
          </div>
        </div>
    </div>
    <div className='w-[600px] min-h-[300px] h-auto flex items-start justify-center flex-col ' >
        <img src="public/homeGif.svg" alt="Image here" />
    </div>
    </div>
    </>
  )
}

export default Landing