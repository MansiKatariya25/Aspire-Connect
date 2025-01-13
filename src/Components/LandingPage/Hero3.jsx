import React from "react";

function Hero3() {
  return (
    <div className="w-full h-full">
      <div className="p-32 flex">
        <div className="w-[45%] p-10">
          <p className="font-Manrope text-[84px] leading-none">
            A <span className="text-[#FF8C42]">better</span> way to launch a
            carrier
          </p>
        </div>
        <div className="w-[50%] flex flex-col gap-14 p-10">
          <p className="text-[22px] font-Roboto">
            Lorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesetting
          </p>
          <p className="text-[#FF8C42] border border-[#FF8C42] p-2 px-5 flex items-center gap-4 rounded-full w-[44%] font-Roboto">
            Discover Our Platform
            <span>
              <img src="./oarrow.png" className="w-[20px] h-[20px]" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
