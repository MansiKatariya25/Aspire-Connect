import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import api from "../Config/axios";

function Profile({}) {
  const { userData, setUserData, setDashboard, setChats } =
    useContext(DataContext);
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleView = (post) => {
    setChats(post);
    setDashboard(12);
  };

  return (
    <div className="fixed font-Manrope z-50 bg-gray-700/30 backdrop-blur-sm w-screen h-screen flex justify-center items-center ">
      <div className="w-[60%] p-4 h-[90%] bg-white rounded-lg flex flex-col justify-evenly">
        <div className="flex justify-between items-center">
          <img
            onClick={() => setDashboard(0)}
            src="./fback.png"
            width={"20px"}
            alt=""
            srcSet=""
          />
          <h1 className="text-3xl font-bold w-full text-center ">Profile</h1>
          <h1 className="text-xl font-bold text-gray-400 ">
            {userData?.role.toUpperCase()}
          </h1>
        </div>
        <form
          className="w-full flex flex-col justify-center h-full overflow-hidden items-center "
          onSubmit={handleSubmit}
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
              srcSet=""
              onClick={handleFileUpload}
            />
            <p>{userData.email}</p>
            <div className="flex flex-col gap-2 items-center border p-2 rounded-full hover:border-b-4 transition-all duration-150">
              <button
                onClick={() => handleView(userData)}
                className="text-orange-500 text-sm "
              >
                View Profile
              </button>
            </div>
          </div>
          {/* <hr className="my-5" /> */}
          <div className="overflow-y-scroll h-[40%] w-full my-2">
            <h1 className="text-lg text-start w-full my-4 font-medium">
              Personal Information
            </h1>
            {userData.role === "Student" || userData.role === "Mentor" ? (
              <div className="text-sm w-full p-4 flex flex-col gap-2">
                <div className="flex w-full gap-2">
                  <div className="flex flex-col w-[50%]">
                    <label className="text-gray-400">First Name</label>
                    <input
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md outline-none"
                      value={userData.fname}
                      onChange={(e) =>
                        setUserData({ ...userData, fname: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col w-[50%]">
                    <label className="text-gray-400">Last Name</label>
                    <input
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md outline-none"
                      value={userData.lname}
                      onChange={(e) =>
                        setUserData({ ...userData, lname: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex w-full gap-2">
                  <div className="flex flex-col w-[50%]">
                    <label className="text-gray-400">Age</label>
                    <input
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md outline-none"
                      value={userData.age}
                      placeholder="Enter age"
                      onChange={(e) =>
                        setUserData({ ...userData, age: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col w-[50%]">
                    <label className="text-gray-400 ">Gender</label>
                    <input
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md outline-none"
                      value={userData.gender}
                      placeholder="Male , Female , Other"
                      onChange={(e) =>
                        setUserData({ ...userData, gender: e.target.value })
                      }
                    />
                  </div>
                </div>
                {userData.role === "Mentor" ? (
                  <div>
                    <div className="flex w-full gap-2">
                      <div className="flex flex-col w-[50%]">
                        <label className="text-gray-400">Position</label>
                        <input
                          required
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md outline-none"
                          value={userData.position}
                          placeholder="Position"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              position: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-col w-[50%]">
                        <label className="text-gray-400">Skills</label>
                        <input
                          required
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md outline-none"
                          value={userData.skills}
                          placeholder="Enter Your Skills"
                          onChange={(e) =>
                            setUserData({ ...userData, skills: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-2">
                      <div className="flex flex-col w-[50%]">
                        <label className="text-gray-400">Experience</label>
                        <input
                          required
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md outline-none"
                          value={userData.exp}
                          placeholder="Experience"
                          onChange={(e) =>
                            setUserData({ ...userData, exp: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex flex-col w-[50%]">
                        <label className="text-gray-400">Sessions</label>
                        <input
                          required
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md outline-none"
                          value={userData.sessions}
                          placeholder="Enter sessions taken till now"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              sessions: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <label className="text-gray-400">Description</label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    value={userData.gender}
                    placeholder="Description about you"
                    onChange={(e) =>
                      setUserData({ ...userData, gender: e.target.value })
                    }
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            {userData.role === "Company" ? (
              <div className="flex flex-col gap-2">
                <div className="flex w-full gap-2">
                  <div className="flex flex-col w-[50%]">
                    <label className="text-gray-400">Comapny Name</label>
                    <input
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md outline-none"
                      value={userData.compName}
                      placeholder="Comapny Name"
                      onChange={(e) =>
                        setUserData({ ...userData, compName: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col w-[50%]">
                    <label className="text-gray-400">Company address</label>
                    <input
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md outline-none"
                      value={userData.compAddress}
                      placeholder="Enter Company address"
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          compAdress: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400">Comapany Description</label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    value={userData.description}
                    placeholder="Description about your Comapany"
                    onChange={(e) =>
                      setUserData({ ...userData, description: e.target.value })
                    }
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
        <div className=" flex justify-end ">
          <button
            type="submit"
            className="bg-[#FF8C42] p-2 text-white rounded-lg px-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
