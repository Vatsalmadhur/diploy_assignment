import React from "react";

const MakeMoney = () => {
  return (
    <>
      <div className="w-screen min-h-[60vh] h-auto flex items-center  justify-center mb-[50px]">
        <div className="lg:w-[75%] md:w-[85%] sm:w-[95%] lg:h-[430px] md:h-[400px] sm:h-[350px] bg-gray-900 flex  justify-start md:gap-5 sm:gap-2 p-10 rounded-3xl flex-row relative ">
            <div className=" flex items-start flex-col justify-center md:gap-5 sm:gap-2 gap-5 lg:w-[350px]  sm:w-[300px] " >
          <p className="lg:text-4xl text-4xl  text-white font-bold ">Make Money,Risk-Free</p>
          <p className="text-lg text-white">
            You pay for fulfillment only when you make a sale.{" "}
          </p>
          <div className="lg:w-[250px] sm:w-[200px] h-[auto] sm:h-[200px] bg-gray-950 md:p-5 sm:p-2 p-5 rounded-xl flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <p className="text-white text-lg">You sell a t-shirt</p>
              <p className="text-white text-lg">$30</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white text-lg ">You pay for its productiont</p>
              <p className="text-white text-lg ">$12</p>
            </div>
            <div className="border-white border-t-2" ></div>
            <div className="flex items-center justify-between ">
              <p className="greenFont text-xl font-bold ">You Profit</p>
              <p className="greenFont text-xl font-bold">$18</p>
            </div>
          </div>
          </div>
            <img src="/assets/girl.svg" alt="" className="w-auto lg:h-[500px] md:h-[450px] sm:h-[400px]   absolute bottom-0 right-[0px] sm:block hidden" />
        </div>
      </div>
    </>
  );
};

export default MakeMoney;
