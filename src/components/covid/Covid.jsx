import React from "react";
import covid from "../../assets/images/covid.png";
import phoneIcon from "../../assets/icons/phone.png";
function Covid() {
  return (
    <div className="mx-auto mb-20 container w-[600px]: xl:max-w-[1200px] bg-[#211F54] h-auto xl:h-[676px] rounded-[24px] flex flex-col xl:flex-row items-center gap-10 xl:gap-20 justify-center px-6 py-10">
      <div>
        <img className="hidden xl:block" src={covid} alt="Covid-19" />
      </div>
      <div className="text-center xl:text-left">
        <p className="text-white text-[16px] font-bold mb-2">
          Covid-19 sanitization
        </p>
        <h1 className="text-white font-bold text-[32px] md:text-[40px] xl:text-[48px] max-w-[500px] mx-auto xl:mx-0 mb-4">
          We follow guidelines to keep you safe from the COVID-19 virus
        </h1>
        <p className="text-white text-[18px] md:text-[20px] xl:text-[24px] max-w-[474px] mx-auto xl:mx-0 mb-6">
          Lobortis mattis odio leo eget mauris met aliquet semper molestie
          sollicitudin congue massa mauris lectus.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="#"
            className="text-white text-[18px] w-[130px] md:w-[174px] h-[50px] md:h-[54px] rounded-[14px] flex items-center justify-center bg-[#0075FF]"
          >
            Get a free
          </a>
          <div className="flex items-center gap-2">
            <img
              src={phoneIcon}
              className="w-[50px] md:w-[72px] h-[50px] md:h-[72px]"
              alt="Phone"
            />
            <span className="text-white text-[18px] md:text-[24px] xl:text-[28px] hidden sm:block">
              (414) 567 - 2109
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Covid;
