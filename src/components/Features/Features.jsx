import React from 'react'
import { FeatureData } from '../../data'
import CustomCardV1 from '../common/Cards/CustomCardV1'

const Features = () => {
  return (
   <>
   <div className='sm:my-[20vh] relative'>
   <p className='text-5xl text-black font-semibold text-start p-5 sm:ml-[100px]'>Enjoy exclusive features</p>
   <div className='w-screen min-h-screen h-auto flex items-center justify-center flex-wrap ' >
   <img src="assets/line.svg" alt="" className='sm:block absolute z-[-1] hidden' />
   

    {FeatureData.map((data,index)=>(
        <div className= { index%2==0?'w-[80%] flex items-center justify-start'
            :
            'w-[90%] flex items-center sm:justify-end'
        }
        
        > 
        <CustomCardV1 imgSrc={data.imgSrc} title={data.title} subTitle={data.subTitle} description={data.description} idx={data.idx}/>
        </div>
    ))}
    </div>
    </div>
    </>  )
}

export default Features