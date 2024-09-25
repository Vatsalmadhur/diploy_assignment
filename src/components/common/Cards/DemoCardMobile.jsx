import React from "react";

const DemoCardMobile = ({ imageSrc, title, description }) => {
  return (
    <div className="min-w-[250px] w-[90vw] minh-[450px] h-auto rounded overflow-hidden shadow-lg bg-gray-200">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <span className="flex items-center gap-2">
          <p className="greenFont  text-lg font-bold">All Products </p>
          <img src="assets/rightArrow.png" alt="arrow" className="w-8 h-6" />
        </span>
      </div>
    </div>
  );
};

export default DemoCardMobile;
