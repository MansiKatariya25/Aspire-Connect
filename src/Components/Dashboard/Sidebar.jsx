import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const { dashboard, setDashboard } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="fixed w-[16vw] h-[92vh] top-14 flex flex-col  p-6 shadow-md  bg-white">
      <div className="flex flex-col gap-4 justify-between">
        {/* <div className="border border-gray-300 rounded-sm p-2 w-[90%] flex justify-start items-center gap-4 ">
          <img src="search.svg" className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] outline-none"
          />
        </div> */}

        <div className="h-[80vh] flex flex-col gap-4">
          <div>
            <div className="flex flex-col justify-center items-center w-[90%] p-2 rounded-sm cursor-pointer">
              <img src="profile.png" />
              <p className="text-2xl">Profile</p>
            </div>
          </div>
          <div
            onClick={() => setDashboard(0)}
            className={`flex items-center gap-4 ${
              dashboard == 0 ? "bg-slate-100" : ""
            }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
          >
            <img src="home.svg"  />
            <p className="font-Roboto text-[14px] font-medium">
              Mentors
            </p>
          </div>
          <div
            onClick={() => setDashboard(1)}
            className={`flex items-center gap-4 ${
              dashboard == 1 ? "bg-slate-100" : ""
            }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
          >
            <img src="jobs.svg" />
            <p className="font-Roboto text-[14px] font-medium">
              Jobs & Internship
            </p>
          </div>
          <div
            className={`flex items-center gap-4 ${
              dashboard == 2 ? "bg-slate-100" : ""
            }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
          >
            <img src="notification.svg" />
            <p className="font-Roboto text-[14px] font-medium">Notification</p>
          </div>
          <div
            className={`flex items-center gap-4 ${
              dashboard == 3 ? "bg-slate-100" : ""
            }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
          >
            <img src="network.svg" />
            <p className="font-Roboto text-[14px] font-medium">Network</p>
          </div>
          <div
          onClick={() => setDashboard(4)}
            className={`flex items-center gap-4 ${
              dashboard == 4 ? "bg-slate-100" : ""
            }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
          >
            <img src="mock.svg" />
            <p className="font-Roboto text-[14px] font-medium">Mock Test</p>
          </div>

          <div
          onClick={() => setDashboard(6)}
            className={`flex items-center gap-4 ${
              dashboard == 6 ? "bg-slate-100" : ""
            }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
          >
            <img src="./message.svg" />
            <p className="font-Roboto text-[14px] font-medium">Chats</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
