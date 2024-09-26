import React from "react";
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

const CustomCardV1 = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.to('#box',
      {scrollTrigger:'#box',
        opacity:1,stagger:0.5
      
      }
    )
  })
  return (
    <>
      <div id="box"
        className={`w-[600px] rounded overflow-hidden shadow-lg sm:px-[100px] px-10 py-3 greenBrdr flex sm:flex-nowrap flex-wrap opacity-0
          ${props.idx == 2 ? "flex-row-reverse" : "flex-row"}
           items-center sm:justify-between justify-center border-2 my-5 bg-white`}
      >
        <img className="w-[200px]" src={props.imgSrc} alt="Image here" />

        <div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl greenFont ">{props.title}</div>
            <div className="font-bold text-xl mb-2">{props.subTitle}</div>
            <p className="text-gray-700 text-base">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCardV1;
