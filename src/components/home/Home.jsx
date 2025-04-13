import React from "react";
import hero from "../../assets/images/hero.png";
import phoneIcon from "../../assets/icons/phone.png";
const Home = () => {
  return (
    <div className=" container  mx-auto flex justify-between h-[734px] gap-10 mt-15">
      <div className="flex flex-col gap-5 xl:justify-center">
        <h1 className="text-[#211F54] lg:text-[68px]  text-[43px] w-full xl:max-w-[519px] max-w-[571px]  font-bold lg:leading-[72px] ">
          Quality cleaning for your home
        </h1>
        <p className="w-full max-w-[591px] lg:text-[21px] text-[15px] text-[#6E7191]  ">
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
          nulla magna lacus penatibus.
        </p>
        <div className="flex items-center">
          <a
            href="#"
            className=" text-white text-[16px] md:w-[174px] w-[130px] h-[50px] md:h-[54px] 
          rounded-[14px] flex items-center justify-center bg-[#0075FF]"
          >
            Get a free quote
          </a>
          <div className="flex items-center">
            <img src={phoneIcon} className="w-[72px] h-[72px]" alt="" />
            <span className="text-[28px]">(414) 567 - 2109</span>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <img src={hero} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Home;
