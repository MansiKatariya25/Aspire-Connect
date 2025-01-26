import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../Config/axios";

function Mentors() {
  const [mentorData, setData] = useState([]);
  useEffect(() => {
    const getMentors = async () => {
      try {
        const response = await api.get("/mentors/get-mentors");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMentors();
  }, []);

  return (
    <div className="absolute w-[85vw] h-[92vh] p-6 right-0 bg-white">
      <div>
        <p className="font-Roboto text-[20px] font-medium ">
          Find a Perfect Mentor for Yourself
        </p>
        <div className="flex justify-start items-center gap-6 pt-4">
          <p className="font-Manrope text-[23px] underline underline-offset-8 font-medium">
            Mentors
          </p>
          <p className="font-Manrope text-[23px] font-medium text-gray-500">
            Group Sessions
          </p>
        </div>
        <div className="pt-4">
          <div className="border border-gray-300 rounded-md p-3 w-full flex justify-start items-center gap-4 ">
            <img src="search.svg" className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by name, company, role"
              className="w-full outline-none font-Manrope"
            />
          </div>
        </div>
        <div className="pt-6 flex justify-around items-start gap-6 flex-wrap">
          {mentorData.map((items, key) => {
            return (
              <div
                key={key}
                className="w-[300px] h-[450px] border rounded-lg p-2 flex flex-col justify-evenly items-center "
              >
                <img src={items?.profile_pic || ""} className="rounded-full w-[300px] h-[300px]" />
                <div className="p-2 flex flex-col justify-between h-[180px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-Manrope text-[16px] font-medium">
                      {items?.fname + " " + items?.lname || "Unknown"}
                    </p>
                    <div className="flex items-center gap-2">
                      <img src="position.svg" />
                      <p className="font-Manrope text-[14px] text-gray-500">
                        {items.position}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="message.svg" />
                      <p className="font-Manrope text-[14px] text-gray-500">
                        {items.skills}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-100 rounded-md">
                    <div>
                      <p className="font-Manrope text-[12px] text-gray-500">
                        Experience
                      </p>
                      <p className="font-Manrope text-[14px]">
                        {items.exp}
                      </p>
                    </div>
                    <div>
                      <p className="font-Manrope text-[12px] text-gray-500">
                        Sessions
                      </p>
                      <p className="font-Manrope text-[14px]">
                        {items.sessions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
