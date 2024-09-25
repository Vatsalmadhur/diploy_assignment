import React from "react";
import { ButtonV1 } from "../common/Button/ButtonV1";
import { ButtonV2 } from "../common/Button/ButtonV2";

const Landing = () => {
  return (
    <>
      <div className="w-screen minh-[80vh] h-auto bg-[url('/assets/home.svg')] bg-center sm:bg-cover bg-auto bg-no-repeat flex items-center   justify-around  sm:flex-nowrap flex-wrap">
        <div className="sm:w-[600px] min-w-[400px] w-[90vw] min-h-[300px] h-auto flex items-start justify-center flex-col sm:mt-10 mt-5 sm:mb-[200px] sm:ml-[50px] md:ml-[100px] flex-wrap p-5 ">
          <p className="text-5xl text-black font-bold ">
            Create and sell custom products.
          </p>
          <div className="my-5">
            {[
              "100% free to use",
              "900+ High-Quality Products",
              "Largest Global Print Network",
            ].map((ele) => (
              <div className="my-3 flex items-center justify-start ">
                <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                  <img
                    src="/assets/tickIcon.png"
                    alt="icon"
                    className="w-5 h-5"
                  />
                </span>
                <p className="text-xl text-black mx-1">{ele}</p>
              </div>
            ))}
            <div className="flex gap-3">
              <ButtonV1 content="Try for free" />
              <ButtonV2 content="How it works" />
            </div>
          </div>
        </div>
        <div className="sm:w-[600px] min-h-[300px] min-w-[300px] w-[90vw]  h-auto items-start justify-center flex-col sm:flex p-5 ">
          <img src="/assets/homeGif.svg" alt="Image here" />
        </div>
      </div>
    </>
  );
};

export default Landing;
