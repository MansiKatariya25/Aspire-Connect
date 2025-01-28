import React from "react";
import Navbar from "../Common/Navbar";

function Hero() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[10%] w-full"></div>
      <div className="px-10">
        <p className="font-Manrope text-[96px] font-medium tracking-wide">
          Unlock your <span className="text-[#FF8C42]">Career</span> Potential
        </p>
        <div className="flex gap-4">
          <p className="-translate-y-12 p-4 text-[48px] tracking-extra">
             -Connect, <span className="text-[#FF8C42]">Learn</span> & Aspire
          </p>
          <p className="w-[34%] -translate-y-4 text-[18px] font-Inter text-[#17171799]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="flex gap-10 p-4">
          <div className="w-[670px] h-[320px] bg-[#FF8C42] rounded-md">
            <div className="p-6 text-[32px] text-white flex items-center gap-2">
              <p className="font-Inter">Mentorship</p>
              <img
                src="./arrow.png"
                className="h-[30px] w-[30px] border border-white rounded-full p-1"
              />
            </div>
            <p className="text-[15px] text-white w-[55%] font-Inter -translate-y-10 p-6">
              We have industry best mentors to lead and help you in your
              professional journey
            </p>
            <img
              src="./box.svg"
              className="-translate-y-[20vh] translate-x-[30vw]"
            />
          </div>
          <div className="w-[670px] h-[320px] border border-gray-300 rounded-md">
            <div className="p-6 text-[32px] text-[#FF8C42] flex items-center gap-2">
              <p className="font-Inter">Network</p>
              <img
                src="./oarrow.png"
                className="h-[30px] w-[30px] border border-[#FF8C42] rounded-full p-1"
              />
            </div>
            <p className="text-[15px] text-[#FF8C42] w-[55%] -translate-y-10 font-Inter p-6">
              We have industry best mentors to lead and help you in your
              professional journey
            </p>
            <img
              src="./box2.svg"
              className="-translate-y-[20vh] translate-x-[30vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
