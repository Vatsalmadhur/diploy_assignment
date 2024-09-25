import React from 'react'

export const UserFeedbackCard = ({imageSrc,username,designation,description}) => {
  return (
    <>
    <div className="min-w-[250px] w-[350px] h-[400px] rounded overflow-hidden shadow-lg bg-white flex items-center justify-center flex-col p-5 m-5 border-[1px] greenBrdr">
        <div className='flex items-center justify-evenly gap-5 h-[100px]'>
        <img className="w-[70px] h-[70px] " src={imageSrc}/> 
        <div className='w-[200px] h-auto'>
            <p className='text-xl font-bold'>{username}</p>
            <p className='greenFont text-sm '>{designation}</p>
            <div>⭐⭐⭐⭐⭐</div>
        </div>
        </div>
      



      <div className=" py-4">

        <p className="text-gray-700 text-base">{description}</p>
    
      </div>
    </div>
    </>
  )
}
