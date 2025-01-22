import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed bg-white z-10 flex justify-between items-center w-full h-[10vh] ">
      <Link to="/">
        <div>
          <p className="font-Inknut text-xl p-6">Aspire Connect</p>
        </div>
      </Link>
      <div className="flex justify-evenly w-[50%] text-black items-center">
        <p className="cursor-pointer">Mentor</p>
        <p className="cursor-pointer">Companies</p>
        <p className="cursor-pointer">Network</p>
        <p className="cursor-pointer">About</p>
        <p className="bg-[#FF8C42] text-white flex items-center rounded-full gap-2 px-6 p-2 cursor-pointer">
          Community
          <span>
            <img src="./arrow.png" className="h-[20px] w-[20px]" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
