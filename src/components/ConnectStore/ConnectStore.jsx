import React from "react";
import Marquee from "react-fast-marquee";
import { marqueeData1, marqueeData2 } from "../../data";
const ConnectStore = () => {
  return (
    <>
      <div className="w-screen h-screen border-2 flex flex-col items-center justify-start gap-[70px] ">
        <div>
        <p className="text-5xl font-semibold text-black text-center my-3">
          Connect your Store
        </p>
        <p className="text-2xl  text-gray-500 text-center">
          Printify easily integrates with major e-commerce platforms and
          marketplaces.
        </p>
        </div>
        <div className="flex flex-col gap-12" >
      <div className="w-[70vw] ">
        <Marquee gradientColor="#ffffff" gradientWidth={200} gradient speed={20}>
          {marqueeData1.map((ele, index) => (
            <img
              key={index}
              src={ele}
              alt=""
              className="w-[120px] h-[80px] mx-[60px] "
            />
          ))}
        </Marquee>
      </div>
      <div className=" w-[70vw]">
      <Marquee gradientColor="#ffffff" gradientWidth={200} gradient speed={20} direction="right">
          {marqueeData2.map((ele, index) => (
            <img
              key={index}
              src={ele}
              alt=""
              className="w-[120px] h-[80px] mx-[60px] "
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
