import React from "react";

const DemoCardMobile = ({ imageSrc, title, description }) => {
  return (
    <div className="min-w-[250px] w-[350px] h-[400px] rounded overflow-hidden shadow-lg bg-gray-200">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className='greenFont font-semibold text-md' >All Products
                <img src="assets/arrow.svg" alt="arrow" className='w-10 h-10' />
            </p>
      </div>
    </div>
  );
};

export default DemoCardMobile;
