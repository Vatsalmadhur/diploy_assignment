import React from 'react'
import { UserFeedbackCard } from '../common/Cards/UserFeedbackCard'
import Marquee from 'react-fast-marquee'
import { userFeedbackData } from '../../data'

const FeedBack = () => {
  return (
   <>
   <div className='w-screen h-screen flex items-center justify-center   border-2 border-red-400 flex-col' >
    <div className='w-screen h-[40%] flex items-center justify-center border-2 border-red-400 '  >
        <div className='w-[400px] h-[100px] border-2 border-red-400' >
            <p className='text-4xl font-bold' >Trusted by over 8M sellers around the world</p>
        </div>
        <div className='w-[400px] h-[100px] border-2 border-red-400' >
            <p className='text-sm text-gray-400'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
        </div>
    </div>
    <div className='border-2 border-red-400 w-full h-[200px]' >
        <Marquee speed={20} pauseOnHover  >
            {userFeedbackData.map((ele)=>(
                <UserFeedbackCard imageSrc={ele.imageSrc} username={ele.name} designation={ele.designation} description={ele.description}/>
            ))}
        </Marquee>
    </div>
   </div>

   
   </>
  )
}

export default FeedBack