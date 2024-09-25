import React from "react";
import Marquee from "react-fast-marquee";
import { marqueeData1, marqueeData2 } from "../../data";
const ConnectStore = () => {
  return (
    <>
      <div className="w-screen h-auto min-h-[60vh] flex flex-col items-start justify-center sm:justify-start gap-[70px] p-5 ">
        <div>
        <p className="text-5xl font-semibold text-black text-start my-3 sm:px-[100px]">
          Connect your Store
        </p>
        <p className="text-2xl  text-black text-start sm:px-[100px]">
          Printify easily integrates with major e-commerce platforms and
          marketplaces.
        </p>
        </div>
        <div className="flex flex-col gap-[100px] items-center justify-center  w-screen" >
      <div className="sm:w-[70vw] w-screen ">
        <Marquee gradientColor="#ffffff" gradientWidth={70} gradient speed={20} >
          {marqueeData1.map((ele, index) => (
            <img
              key={index}
              src={ele}
              alt=""
              className="sm:w-[120px] sm:h-[80px] mx-[60px] w-[80px] "
            />
          ))}
        </Marquee>
      </div>
      <div className="sm:w-[70vw] w-screen ">
      <Marquee gradientColor="#ffffff" gradientWidth={70} gradient speed={20} direction="right">
          {marqueeData2.map((ele, index) => (
            <img
              key={index}
              src={ele}
              alt=""
              className="sm:w-[120px] sm:h-[80px] mx-[60px] w-[80px] "
            />
          ))}
        </Marquee>
      </div>
      </div>
      </div>
    </>
  );
};

export default ConnectStore;
