import React from "react";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="container flex items-center justify-between mx-auto mt-[20px]">
      <div className="flex items-center gap-[50px]">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="md:flex md:gap-3 text-[18px] cursor-pointer hidden">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Articles</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <a
          href="#"
          className=" text-white text-[16px] md:w-[174px] w-[130px] h-[50px] md:h-[54px] rounded-[14px] flex items-center justify-center bg-[#0075FF]"
        >
          Get a free quote
        </a>
      </div>
    </div>
  );
};

export default Header;
