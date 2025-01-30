import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import api from "../Config/axios";

function Profile() {
  const { userData, setUserData,setDashboard } = useContext(DataContext);
  const [profile_pic, setProfilePic] = useState(
    "https://avatar.iran.liara.run/public"
  );

  const handleFileUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.onchange = async (e) => {
      const file = e.target.files[0];

      if (!file) return;

      // Preview the file (Optional)
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({ ...userData, profile_pic: e.target.result });
      };
      reader.readAsDataURL(file);

      // Upload the file
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await api.post("/files/update-profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Upload Success:", response.data);
      } catch (error) {
        console.error("Upload Failed:", error.response?.data || error.message);
      }
    };
  };

  return (
    <div className="fixed font-Manrope z-50 bg-gray-700/30 backdrop-blur-sm w-screen h-screen flex justify-center items-center">
      <div className="w-[60%] p-4 h-[90%] bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <img onClick={()=>(setDashboard(0))} src="./fback.png" width={"20px"} alt="" srcset="" />
          <h1 className="text-3xl font-bold w-full text-center ">Profile</h1>
          <h1 className="text-xl font-bold text-gray-400 ">
            {userData?.role.toUpperCase()}
          </h1>
        </div>

        <hr className="my-5" />
        <form
          className="w-full flex flex-col justify-center items-center"
          action=""
        >
          <div className="flex flex-col gap-4 items-center">
            <img
              className="w-[100px] border border-orange-400 h-[100px] rounded-full"
              src={
                userData?.profile_pic || "https://avatar.iran.liara.run/public"
              }
              alt=""
            />
            <img
              className="w-[20px] hover:scale-105"
              src="pen.png"
              alt=""
              srcset=""
              onClick={handleFileUpload}
            />
            <p>{userData.email}</p>
            <div className="flex flex-col gap-2 items-center border p-2 rounded-lg">
              <label className="text-gray-400 text-xl">Followers</label>
              <p className="text-sm">{userData?.followers || "2006"}</p>
            </div>
          </div>
          <hr className="my-5" />
          <h1 className="text-lg text-start p-4 w-full">
            Personal Information
          </h1>
          <div className="text-sm w-full p-4 flex gap-2">
            <div>
              <label className="text-gray-400">First Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={userData.fname}
                onChange={(e) =>
                  setUserData({ ...userData, fname: e.target.value })
                }
              />
              <label className="text-gray-400">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={userData.lname}
                onChange={(e) =>
                  setUserData({ ...userData, lname: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-gray-400">Age</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={userData.age}
                placeholder="20"
                onChange={(e) =>
                  setUserData({ ...userData, age: e.target.value })
                }
              />
              <label className="text-gray-400">Gender</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={userData.gender}
                placeholder="Male , Female , Other"
                onChange={(e) =>
                  setUserData({ ...userData, age: e.target.value })
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
