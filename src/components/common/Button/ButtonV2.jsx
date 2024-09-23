import React from 'react'

export const  ButtonV2= (props) => {
  return (
    <>
    <button className='w-[150px] h-[50px]  bg-white rounded-full text-lg hover:bg-green-500 ' >{props.content}</button>
    </>
  )
}
