import React from "react";
import cleaner from "../../assets/images/cleaner.png";
import plisos from "../../assets/images/plisos.png";
function Resourse() {
  return (
    <div className="container mx-auto mb-20">
      <div className="flex  items-center sm:flex-row flex-col  justify-between gap-4 mt-15 md:gap-0">
        <h1 className="text-[#211F54] text-[26px] md:text-[40px] lg:text-[48px] font-bold ">
          Articles & resources
        </h1>
        <div className="flex gap-5">
          <a
            href="#"
            className="text-white text-[18px] w-[130px] md:w-[174px] h-[50px] md:h-[54px] rounded-[14px] flex items-center justify-center bg-[#0075FF]"
          >
            Get a free
          </a>
          <a
            href="#"
            className="text-black border border-[#00000037] text-[16px] md:text-[18px] w-[130px] md:w-[174px] h-[48px] md:h-[54px] rounded-[14px] flex items-center justify-center"
          >
            Explore services
          </a>
        </div>
      </div>

      <div className="flex flex-wrap xl:gap-10 gap-75 justify-center mt-10">
        <div className="flex flex-col relative items-center max-w-[600px] w-full">
          <div>
            <img src={plisos} alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[60%] bg-white flex flex-col gap-5 w-[90%] max-w-[536px] h-[324px] border border-[#00000049] rounded-3xl pt-8 px-6 sm:px-10">
            <h1 className="text-xl sm:text-2xl font-bold w-full">
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h1>
            <p className="text-[18px] sm:text-[21px] text-[#000000a1] w-full">
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] sm:text-[18px] font-bold">
                Jan 28, 2022
              </span>
              <div className="w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] bg-blue-500"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col relative items-center max-w-[600px] w-full">
          <div>
            <img src={cleaner} alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[60%] bg-white flex flex-col gap-5 w-[90%] max-w-[536px] h-[324px] border border-[#00000049] rounded-3xl pt-8 px-6 sm:px-10">
            <h1 className="text-xl sm:text-2xl font-bold w-full">
              How to properly disinfect your phone and other electronics
            </h1>
            <p className="text-[18px] sm:text-[21px] text-[#000000a1] w-full">
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] sm:text-[18px] font-bold">
                Jan 28, 2022
              </span>
              <div className="w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resourse;
