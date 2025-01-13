import React, { useContext } from "react";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Sidebar() {
 const {dashboard,setDashboard} = useContext(DataContext)
 const navigate = useNavigate()

  return (
    <div className="w-[16vw] h-[92vh] p-6 shadow-md">
      <div className="flex flex-col gap-4">
        <div className="border border-gray-300 rounded-sm p-2 w-[90%] flex justify-start items-center gap-4 ">
          <img src="search.svg" className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] outline-none"
          />
        </div>
        <div className="h-[80vh] flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-slate-100 w-[90%] p-2 rounded-sm">
            <img src="home.svg" />
            <p onClick={()=>setDashboard(0)} className="font-Roboto text-[14px] text-[#FF4500] font-medium">
              Community
            </p>
          </div>
          <div className="flex items-center gap-4 w-[90%] p-2 rounded-sm">
            <img src="jobs.svg" />
            <p onClick={()=>setDashboard(1)} className="font-Roboto text-[14px] font-medium">Jobs & Internship</p>
          </div>
          <div className="flex items-center gap-4 w-[90%] p-2 rounded-sm">
            <img src="notification.svg" />
            <p className="font-Roboto text-[14px] font-medium">Notification</p>
          </div>
          <div className="flex items-center gap-4 w-[90%] p-2 rounded-sm">
            <img src="network.svg" />
            <p className="font-Roboto text-[14px] font-medium">Network</p>
          </div>
          
          <div className="flex items-center gap-4 w-[90%] p-2 rounded-sm">
            <img src="mock.svg" />
            <p className="font-Roboto text-[14px] font-medium">Mock Test</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
