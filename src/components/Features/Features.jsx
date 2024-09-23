import React from 'react'
import { FeatureData } from '../../data'
import CustomCardV1 from '../common/Cards/CustomCardV1'

const Features = () => {
  return (
   <>
   <div className='w-screen min-h-screen h-auto flex items-center justify-center flex-wrap border-2 ' >
    {FeatureData.map((data,index)=>(
        <div className= { index%2==0?'w-[80%] flex items-center justify-start'
            :
            'w-[90%] flex items-center justify-end'
        }
        
        > 
        <CustomCardV1 imgSrc={data.imgSrc} title={data.title} subTitle={data.subTitle} description={data.description} idx={data.idx}/>
        </div>
    ))}
    </div></>
  )
}

export default Features