import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import api from "../Config/axios";
import Loading from "../Common/Loading";

function Sidebar() {
  const { dashboard, setDashboard } = useContext(DataContext);
  const { userData, setUserData } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/users/get-user-data");
        setUserData(response.data); // Store the user data
        setDashboard(0);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setIsLoading(false); // Ensure we stop loading even if there's an error
      }
    };

    getUsers();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="fixed w-[16vw] h-[92vh] top-14 flex flex-col p-6  bg-white">
      <div className="flex flex-col gap-4 justify-between border-r h-full">
        {/* <div className="border border-gray-300 rounded-sm p-2 w-[90%] flex justify-start items-center gap-4 ">
          <img src="search.svg" className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] outline-none"
          />
        </div> */}

        <div className="h-[80vh] flex flex-col gap-4">
          <div className="flex flex-col justify-center overflow-hidden text-[12px] items-center w-[90%] p-4 rounded-lg border-orange-400 border-b-4  border shadow-md">
            {/* Profile Picture */}
            <div className="w-24 h-24">
              <img
                src={
                  userData?.profile_pic ||
                  "https://avatar.iran.liara.run/public"
                } // Fallback to default profile picture
                alt={`${userData?.fname}'s profile`}
                className="w-full h-full rounded-full object-cover border border-gray-300"
              />
            </div>

            {/* Name and Email */}
            <div className="mt-4 text-center">
              <p className="text-2xl font-bold text-gray-800">
                {userData?.fname.toUpperCase() +
                  " " +
                  userData?.lname.toUpperCase() || "Name not available"}
              </p>
              <p className="text-md text-gray-600">
                {userData?.email || "Email not available"}
              </p>
            </div>

            {/* Edit Button */}
            <div
              className="flex justify-end w-full items-end  text-white hover:scale-105  rounded-md transition"
              onClick={() => setDashboard(7)}
            >
              <img
                src="./pen.png"
                className="w-[20px] h-[20px]"
                alt=""
                srcset=""
              />
            </div>
          </div>
          {userData.role === "Student" && (
            <div
              onClick={() => setDashboard(0)}
              className={`flex items-center gap-4 ${
                dashboard == 0 ? "bg-slate-100" : ""
              }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
            >
              <img src="home.svg" />
              <p className="font-Roboto text-[14px] font-medium">Mentors</p>
            </div>
          )}
          {userData.role === "Student" && (
            <div
              onClick={() => setDashboard(1)}
              className={`flex items-center gap-4 ${
                dashboard == 1 ? "bg-slate-100" : ""
              }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
            >
              <img className="w-[20px] h-[20px] mx-1" src="job.png" />
              <p className="font-Roboto text-[14px] font-medium">
                Jobs & Internship
              </p>
            </div>
          )}

          <div
             onClick={() => setDashboard(8)}
            className={`flex items-center gap-4 ${
              dashboard == 8 ? "bg-slate-100" : ""
            }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
          >
            <img className="w-[25px] h-[25px] mx-1" src="comm.png" />
            <p className="font-Roboto text-[14px] font-medium">Community</p>
          </div>

          <div
             onClick={() => setDashboard(10)}
            className={`flex items-center gap-4 ${
              dashboard == 10 ? "bg-slate-100" : ""
            }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
          >
            <img className="w-[20px] h-[20px] mx-1" src="notification.png" />
            <p className="font-Roboto text-[14px] font-medium">Notification</p>
          </div>

          {userData.role === "Student" && (
            <div
              onClick={() => setDashboard(4)}
              className={`flex items-center gap-4 ${
                dashboard == 4 ? "bg-slate-100" : ""
              }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
            >
              <img className="w-[20px] h-[20px] mx-1" src="mock.png" />
              <p className="font-Roboto text-[14px] font-medium">Mock Test</p>
            </div>
          )}
          {userData.role != "Company" && (
            <div
              onClick={() => setDashboard(6)}
              className={`flex items-center gap-4 ${
                dashboard == 6 ? "bg-slate-100" : ""
              }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
            >
              <img width={"20px"} className="mx-0.5" src="./chats.png" />
              <p className="font-Roboto text-[14px] font-medium">Chats</p>
            </div>
          )}

          {userData.role === "Company" && (
            <div
              onClick={() => setDashboard(9)}
              className={`flex items-center gap-4 ${
                dashboard == 9 ? "bg-slate-100" : ""
              }  hover:bg-slate-100 transition-all duration-75 w-[90%] p-2 rounded-sm cursor-pointer`}
            >
              <img width={"20px"} className="mx-0.5" src="./posts.png" />
              <p className="font-Roboto text-[14px] font-medium">Post</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
