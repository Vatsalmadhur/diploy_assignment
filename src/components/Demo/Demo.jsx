import React, { useEffect, useState } from "react";
import DemoCardMobile from "../common/Cards/DemoCardMobile";
import DemoCardDesktop from "../common/Cards/DemoCardDesktop";
import { demoCardData } from "../../data";

const Demo = () => {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  console.log(mobile);
  return (
    <>
      <div className="w-screen min-h-[70vh] h-auto flex items-center justify-center ">
        {mobile===true
          ? demoCardData.map((data) => (
            <DemoCardMobile
              imageSrc={data.imageSrc}
              title={data.title}
              description={data.description}
            />
          )):demoCardData.map((data) => (
              <DemoCardDesktop
                imageSrc={data.imageSrc}
                title={data.title}
                description={data.description}
              />
          ))
          
            }
      </div>
    </>
  );
};

export default Demo;
