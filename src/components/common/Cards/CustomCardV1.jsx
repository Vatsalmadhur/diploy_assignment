import React from 'react'

const CustomCardV1 = (props) => {
  return (
    <>
      <div className={`w-[600px] rounded overflow-hidden shadow-lg flex ${props.idx == 2 ? 'flex-row-reverse' : 'flex-row'} items-center justify-between border-2 my-5`}>
      <img className="w-[200px]" src={props.imgSrc} alt="Image here" />

      <div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl ">{props.title}</div>
        <div className="font-bold text-xl mb-2">{props.subTitle}</div>
        <p className="text-gray-700 text-base">
          {props.description}
        </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default CustomCardV1