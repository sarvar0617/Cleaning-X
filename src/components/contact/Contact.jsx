import React from "react";
import phoneIcon from "../../assets/icons/phone.png";
function Contact() {
  return (
    <div className="mx-auto container pt-60 pb-20 flex flex-col lg:flex-row justify-between items-start gap-10">
    <div className="w-full lg:w-1/2  flex flex-col lg:items-start items-center text-center lg:text-left ">
      <h1 className="text-[#211F54] pb-10 text-[26px] md:text-[40px] lg:text-[48px] font-bold">
        Contact Us
      </h1>
      <p className="text-[18px] pb-5 sm:text-[21px] text-[#000000a1] max-w-[484px]">
        In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.
      </p>
      <div className="flex items-center gap-2">
        <img src={phoneIcon} className="w-[50px] md:w-[72px] h-[50px] md:h-[72px]" alt="Phone" />
        <span className="text-black text-[18px] md:text-[24px] xl:text-[28px] hidden sm:block">
          (414) 567 - 2109
        </span>
      </div>
      <hr className="w-full max-w-[486px] h-[1px] text-[#0000004f] pb-10" />
      <h1 className="text-[28px] pb-5 font-bold">Not convinced yet?</h1>
      <p className="text-[18px] pb-10 sm:text-[21px] text-[#000000a1] max-w-[484px]">
        In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.
      </p>
      <a
        href="#"
        className="text-black border border-[#0000001d] text-[16px] md:text-[18px] w-[130px] md:w-[174px] h-[48px] md:h-[54px] rounded-[14px] flex items-center justify-center"
      >
        Browse our packages
      </a>
    </div>
  

    <div className="w-full lg:w-[673px]  flex flex-col items-center">
    <form className=" w-full max-w-[673px] min-h-[600px] bg-white p-6 rounded-xl shadow-md space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="pt-5">
      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
      <input type="text" id="fullname" className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div className="pt-5">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div className="pt-5">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
      <input type="text" id="address" className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div className="pt-5">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div className="pt-5">
      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Requested service</label>
      <input type="text" id="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div className="pt-5">
      <label htmlFor="day" className="block text-sm font-medium text-gray-700 mb-2">Day of service</label>
      <input type="text" id="day" className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>
  </div>

  <div className="pt-5">
    <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-2">Add a note</label>
    <textarea id="note" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
  </div>

  <div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition duration-200">
      Submit message
    </button>
  </div>
</form>

    </div>
  </div>
  
  );
}

export default Contact;
