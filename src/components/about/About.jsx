import React from "react";
import online from "../../assets/images/schudle.png";
import pay from "../../assets/images/paymend.png";
import clean from "../../assets/images/clened.png";
const About = () => {
  return (
    <div className="container mx-auto mt-15">
      <div className="flex flex-col items-center  mt-55 ">
        <h1 className="font-bold text-[48px] text-[#211F54]">About us</h1>
        <p className=" text-[#6E7191] text-[21px] text-center flex  w-full max-w-[648px]  mt-10">
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
      </div>
      <div className="flex lg:justify-between flex-wrap  justify-center  mt-20 gap-20">
        <div className="w-full max-w-[390px] flex flex-col items-center">
          <div>
            <img src={online} alt="" />
          </div>
          <h1 className="text-[28px] mt-5 mb-5 text-center text-[#211F54] font-bold">
            1. Schedule online
          </h1>
          <p className="text-[#6E7191] text-[21px] text-center">
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </div>
        <div className="w-full max-w-[400px] flex flex-col items-center">
          <div>
            <img src={pay} alt="" />
          </div>
          <h1 className="text-[28px] mt-5 mb-5 text-center text-[#211F54] font-bold">
            2. Pay online easily
          </h1>
          <p className="text-[#6E7191] text-[21px] text-center">
            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
            at nunc.
          </p>
        </div>
        <div className="w-full max-w-[390px] flex flex-col items-center">
          <div>
            <img src={clean} alt="" />
          </div>
          <h1 className="text-[28px] mt-5 mb-5 text-center text-[#211F54] font-bold">
            3. Get your house cleaned
          </h1>
          <p className="text-[#6E7191] text-[21px] text-center">
            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus
            eleifend.
          </p>
        </div>
      </div>
      <div className="flex gap-5 justify-center mt-15">
        <a
          href="#"
          className=" text-white text-[18px] md:w-[174px] w-[130px] h-[50px] md:h-[54px] rounded-[14px] flex items-center justify-center bg-[#0075FF]"
        >
          Get a free quote
        </a>
        <a
          href="#"
          className=" text-black border-1 border-[#00000037] text-[18px] md:w-[174px] w-[130px] h-[50px] md:h-[54px] rounded-[14px] flex items-center justify-center "
        >
          Explore services
        </a>
      </div>
    </div>
  );
};

export default About;
