import React, { useState } from "react";
import PostAction from "./PostAction";
import Content from "./Content";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex justify-center items-center">
      <div className="absolute top-12 w-[50vw]  p-6 right-[20vw]  bg-white shadow-md ">
        <div className="p-2 flex flex-col gap-2">
          <p className="font-Roboto text-[25px] font-medium">Community</p>
          <div className="">
            <div className="border border-gray-300 rounded-md p-3 w-[95%] flex justify-start items-center gap-4">
              <img src="search.svg" className="text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                placeholder="Search users here...."
                className="searchbar w-full outline-none font-Manrope"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <PostAction />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Main;
