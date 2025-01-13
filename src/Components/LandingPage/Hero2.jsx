import React from "react";

function Hero2() {
  return (
    <div className="w-full p-4 flex">
      <div className="left translate-x-20 w-[50%]">
        <p className="text-[38px] font-semibold font-Manrope p-12">
          We are the ones where learns & carrier made
        </p>
        <img src="./girl.png" className="" />
      </div>
      <div className="right w-[50%] p-14 flex flex-col gap-8">
        <div className="w-[442px] h-[192px] border border-gray-300 rounded-md p-6 flex justify-between gap-4">
          <img
            src="./Ellipse.svg"
            className="p-4 w-[60px] h-[60px]"
          />
          <div className="flex flex-col ">
            <p className="text-[19px] font-Manrope p-2">Mock Test</p>
            <p className="text-[17px] font-Manrope p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl
              consequat iaculis vitae arcu arcu. Ut interdum aenean sit{" "}
            </p>
          </div>
        </div>
        <div className="w-[442px] h-[192px] bg-[#FF8C42] flex items-start p-4 rounded-md">
          <img src="./group.svg" className=" p-6 w-[80px] h-[80px]"/>
          <div className="flex flex-col  text-white p-2">
            <p className="text-[18px] font-Manrope p-2">Networking, Comapnies posts and activities</p>
            <p className="text-[16px] font-Manrope p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl
              consequat iaculis vitae arcu arcu. Ut interdum aenean sit{" "}
            </p>
          </div>
        </div>
        <div className="w-[442px] h-[122px] flex items-start gap-4  border border-gray-300 rounded-md p-6">
          <img src="./certificate.svg" className=""/>
          <p className="text-[20px] font-Manrope font-medium">You get guidance from mentors and specialists</p>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
