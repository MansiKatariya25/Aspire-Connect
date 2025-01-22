import React, { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../../App";

function Jobs() {
  const {dashboard,setDashboard} = useContext(DataContext)

  const [jobs, setJobs] = useState([
    {
      name: "Techical Support Specialist",
      type: "Part-time",
      salary: "Salary: $20,000 - $25,000",
      location: "Dhaka, Bangladesh",
    },
    {
      name: "Senior UX Designer",
      type: "Full-Time",
      salary: "Salary: $20,000 - $25,000",
      location: "Dhaka, Bangladesh",
    },
    {
      name: "Marketing Officer",
      type: "Internship",
      salary: "Salary: $20,000 - $25,000",
      location: "Dhaka, Bangladesh",
    },
    {
      name: "Junior Graphic Designer",
      type: "Internship",
      salary: "Salary: $20,000 - $25,000",
      location: "Dhaka, Bangladesh",
    },
    {
      name: "Interaction Designer",
      type: "Part-Time",
      salary: "Salary: $20,000 - $25,000",
      location: "Dhaka, Bangladesh",
    },
    {
      name: "Project Manager",
      type: "Full-Time",
      salary: "Salary: $20,000 - $25,000",
      location: "Dhaka, Bangladesh",
    },
  ]);

  return (
    <div className="absolute top-12 w-[85vw] h-[92vh] p-6 right-0 bg-white">
      <div className="p-2 flex flex-col gap-2">
        <p className="font-Roboto text-[20px] font-medium">
          Jobs And Internship
        </p>
        <div className="w-full h-[5%] border rounded-md p-2">
          <div className="flex items-center justify-between ">
            <div className="flex w-[50%]">
              <img src="search.svg" />
              <input
                type="text"
                className="w-[50%] font-Inter text-[13px] text-[#9199A3] p-2 outline-none"
                placeholder="Search by: Job tittle, Position, Keyword..."
              />
            </div>
            <div className="flex w-[30%]">
              <img src="location.svg" alt="" />
              <input
                type="text"
                className="w-[50%] font-Inter text-[13px] text-[#9199A3] p-2 outline-none"
                placeholder="City, state or zip code"
              />
            </div>
            <div className="flex gap-1 items-center bg-[#F1F2F4] p-2 px-6">
              <img src="filter.svg" alt="" />
              <p className="font-Inter text-[13px font-medium]">Filters</p>
            </div>
            <p className="bg-[#0A65CC] text-white font-Inter text-[16px] font-medium p-2 px-4">
              Find Job
            </p>
          </div>
        </div>
        <div className="py-2 cards-outer flex flex-wrap gap-4" >
          {jobs.map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between gap-2 border rounded-md w-[32%] h-[20vh] p-4 cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-Inter text-[16px] font-medium">
                    {items.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-Inter text-[12px] text-[#0BA02C] bg-[#E7F6EA] font-medium p-1 w-[24%] flex items-center justify-center">
                      {items.type}
                    </p>
                    <p className="font-Inter text-[14px] text-[#767F8C]">
                      {items.salary}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start gap-3">
                  <img src="logo.svg" />
                  <div className="flex flex-col w-[80%] ">
                    <p className="font-Inter text-[14px] font-medium">
                      Google Inc.
                    </p>
                    <div className="flex items-center">
                      <img src="location.svg" />
                      <p className="text-[#767F8C] font-Inter text-[14px]">
                        {items.location}
                      </p>
                    </div>
                  </div>
                  <img src="bookmark.svg" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
