import React from "react";
import hero from "../../assets/images/hero.png";
import phoneIcon from "../../assets/icons/phone.png";
const Home = () => {
  return (
    <div className="container  ml-auto">
      <div>
        <h1 className="text-[#211F54] text-[68px] w-[518px] font-bold ">Quality cleaning for your home</h1>
        <p className="w-[591px]">
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
          nulla magna lacus penatibus.
        </p>
        <div>
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
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
