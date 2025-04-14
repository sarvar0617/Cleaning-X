import React from "react";
import home from "../../assets/images/house.png";
import office from "../../assets/images/office.png";
import factory from "../../assets/images/factory.png";
const Services = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="flex  items-center  justify-between gap-4 mt-15 md:gap-0">
  <h1 className="text-[#211F54] text-[26px] md:text-[40px] lg:text-[48px] font-bold">
    Our Services
  </h1>
  <a
    href="#"
    className="text-black border border-[#00000037] text-[16px] md:text-[18px] w-[130px] md:w-[174px] h-[48px] md:h-[54px] rounded-[14px] flex items-center justify-center"
  >
    Explore services
  </a>
</div>
      {/* <div className="flex">
        <div className="w-full max-w-[388px] h-[494px] flex flex-col gap-10 items-center border-1 border-[#00000020] rounded-[16px]">
          <div className="pt-15">
            <img src={home} alt="" />
          </div>
          <div>
            <h1 className="text-[24px] text-[#211F54] font-bold text-center">
              House cleaning
            </h1>
            <p className="text-[#6E7191] text-[21px] text-center pt-5 ">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[388px] h-[494px] flex flex-col gap-10 items-center border-1 border-[#00000020] rounded-[16px]">
          <div className="pt-15">
            <img src={home} alt="" />
          </div>
          <div>
            <h1 className="text-[24px] text-[#211F54] font-bold text-center">
              House cleaning
            </h1>
            <p className="text-[#6E7191] text-[21px] text-center pt-5 ">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[388px] h-[494px] flex flex-col gap-10 items-center border-1 border-[#00000020] rounded-[16px]">
          <div className="pt-15">
            <img src={home} alt="" />
          </div>
          <div>
            <h1 className="text-[24px] text-[#211F54] font-bold text-center">
              House cleaning
            </h1>
            <p className="text-[#6E7191] text-[21px] text-center pt-5 ">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full max-w-[388px] h-[494px] flex flex-col gap-10 items-center border border-[#00000020] rounded-[16px]">
          <div className="pt-15">
            <img src={home} alt="" />
          </div>
          <div>
            <h1 className="text-[24px] text-[#211F54] font-bold text-center">
              House cleaning
            </h1>
            <p className="text-[#6E7191] text-[21px] text-center pt-5">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[388px] h-[494px] flex flex-col gap-10 items-center border border-[#00000020] rounded-[16px]">
          <div className="pt-15">
            <img src={home} alt="" />
          </div>
          <div>
            <h1 className="text-[24px] text-[#211F54] font-bold text-center">
              House cleaning
            </h1>
            <p className="text-[#6E7191] text-[21px] text-center pt-5">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[388px] h-[494px] flex flex-col gap-10 items-center border border-[#00000020] rounded-[16px]">
          <div className="pt-15">
            <img src={home} alt="" />
          </div>
          <div>
            <h1 className="text-[24px] text-[#211F54] font-bold text-center">
              House cleaning
            </h1>
            <p className="text-[#6E7191] text-[21px] text-center pt-5">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
