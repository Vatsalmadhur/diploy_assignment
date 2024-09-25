import React from "react";

const CustomCardV1 = (props) => {
  return (
    <>
      <div
        className={`w-[600px] rounded overflow-hidden shadow-lg sm:px-[100px] px-10 py-3 greenBrdr flex sm:flex-nowrap flex-wrap 
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
