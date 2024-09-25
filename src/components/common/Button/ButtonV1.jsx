import React from 'react'

export const  ButtonV1= (props) => {
  return (
    <>
    <button id={props.id} className='w-[150px] h-[50px] border-4  border-white rounded-full text-lg hover:bg-green-500 greenBg ' >{props.content}</button>
    </>
  )
}
