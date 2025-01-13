import React, { useState } from "react";

function Content() {
  const [mentorData, setData] = useState([
    {
      image: "/man.png",
      name: "Abdulahi Omotayo Amuda ",
      position: "Senior Designer at AEL Solutions",
      message: "28 sessions (13 reviews)",
      experience: "7 years",
      attendance: "100%",
    },
    {
      image: "/women.png",
      name: "Federica Lamera ",
      position: "Service Design Lead at MING Labs",
      message: "142 sessions (26 reviews)",
      experience: "10 years",
      attendance: "100%",
    },
    {
        image: "/man.png",
        name: "Abdulahi Omotayo Amuda ",
        position: "Senior Designer at AEL Solutions",
        message: "28 sessions (13 reviews)",
        experience: "7 years",
        attendance: "100%",
      },
      {
        image: "/women.png",
        name: "Federica Lamera ",
        position: "Service Design Lead at MING Labs",
        message: "142 sessions (26 reviews)",
        experience: "10 years",
        attendance: "100%",
      },
  ]);
  return (
    <div className="w-[80vw] h-[92vh] p-6">
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
                className="w-[300px] h-[450px] border rounded-md p-2 "
              >
                <img src={items.image} />
                <div className="p-2 flex flex-col justify-between h-[180px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-Manrope text-[16px] font-medium">
                      {items.name}
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
                        {items.message}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-100 rounded-md">
                    <div>
                      <p className="font-Manrope text-[12px] text-gray-500">
                        Experience
                      </p>
                      <p className="font-Manrope text-[14px]">
                        {items.experience}
                      </p>
                    </div>
                    <div>
                      <p className="font-Manrope text-[12px] text-gray-500">
                        Avg. Attendance
                      </p>
                      <p className="font-Manrope text-[14px]">
                        {items.attendance}
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

export default Content;
