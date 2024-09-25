import React from 'react'
import { UserFeedbackCard } from '../common/Cards/UserFeedbackCard'
import Marquee from 'react-fast-marquee'
import { userFeedbackData } from '../../data'

const FeedBack = () => {
  return (
   <>
   <div className='w-screen h-auto flex items-center justify-center  flex-col p-5 sm:my-[10vh]' >
    <div className='sm:ml-[100px]'>
            <p className='text-5xl font-semibold mb-5' >Trusted by over 8M sellers around the world</p>
   
            <p className='text-xl text-black'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
            </div>
    
    <div className=' w-[90vw] h-auto my-10' >
        <Marquee speed={20} pauseOnHover gradient gradientWidth={50}  >
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