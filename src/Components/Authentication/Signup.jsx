import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown } from "primereact/dropdown";
import api from "../Config/axios";

function Signup() {
  const [Fname, SetFname] = useState("");
  const [Lname, SetLname] = useState("");
  const [Pass, SetPass] = useState("");
  const [Email, SetEmail] = useState("");
  const useNav = useNavigate();
  const [visible, setVisible] = useState(false);

  const [selectedRole, setSelectedRole] = useState(null);
  const roles = [
    { name: "Student" },
    { name: "Mentor" },
    { name: "Alumni" },
    { name: "Comapny" },
  ];

  const handlesignup = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/auth/register", {
        fname: Fname,
        lname: Lname,
        password: Pass,
        email: Email,
        role: selectedRole.name,
      });
      if (response) {
        toast.success("User registered succesfully");
        useNav("/dashboard");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  const handleShowPassword = () => {
    setVisible(!visible);
  };
  return (
    <div className="w-full h-full">
      <p className="font-Inknut text-xl p-8 flex justify-end ">
        Aspire Connect
      </p>
      <div className=" px-20 flex gap-2 ">
        <div className="left w-[50%] pl-48">
          <img src="./signup.png" className="w-[400px] h-[600px] " />
        </div>
        <div className="right flex flex-col gap-8 w-[40%] p-4">
          <div className="flex flex-col gap-2">
            <p className="font-Poppins text-[40px] ">Sign up</p>
            <p className="font-Poppins text-[16px] text-gray-400 ">
              Let’s get you all st up so you can access your personal account.
            </p>
          </div>
          <form onSubmit={handlesignup}>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 w-full">
                <div className="relative border w-[50%] border-gray-500 rounded-md">
                  <label
                    htmlFor="First Name"
                    className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[14px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    placeholder="Jhon"
                    value={Fname}
                    onChange={(e) => SetFname(e.target.value)}
                    className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
                  />
                </div>
                <div className="relative border w-[50%] border-gray-500 rounded-md">
                  <label
                    htmlFor="Last Name"
                    className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[14px]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    placeholder="Doe"
                    value={Lname}
                    onChange={(e) => SetLname(e.target.value)}
                    className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
                  />
                </div>
              </div>
              <div className="flex gap-4 w-full">
                <div className="relative border w-[50%] border-gray-500 rounded-md">
                  <label
                    htmlFor="First Name"
                    className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[14px]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="john.doe@gmail.com"
                    value={Email}
                    onChange={(e) => SetEmail(e.target.value)}
                    className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
                  />
                </div>
                <div className="w-[50%] border px-4 border-gray-500 rounded-md flex justify-center items-center">
                  <Dropdown
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.value)}
                    options={roles}
                    optionLabel="name"
                    placeholder="Select a Role"
                    className="w-full md:w-14rem"
                    highlightOnSelect={false}
                  />
                </div>
              </div>
              <div className="relative border w-full border-gray-500 rounded-md">
                <label
                  htmlFor="password"
                  className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[14px]"
                >
                  Password
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type={visible ? "text" : "password"}
                    id="password"
                    value={Pass}
                    onChange={(e) => SetPass(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
                  />
                  <img
                    onClick={handleShowPassword}
                    src="./hide.png"
                    className="w-[20px] h-[20px] mr-2"
                  />
                </div>
              </div>

              <div className="relative border w-full border-gray-500 rounded-md">
                <label
                  htmlFor="password"
                  className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[14px]"
                >
                  Confirm Password
                </label>
                <input
                  type={visible ? "text" : "password"}
                  id="cpassword"
                  placeholder="Confirm password"
                  className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
                />
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-[14px] font-Poppins">
                  I agree to all the{" "}
                  <span className="text-[#FF8682]">Terms</span> and{" "}
                  <span className="text-[#FF8682]">Privacy Policies</span>
                </p>
              </div>
              <button
                type="submit"
                className="font-Poppins w-full text-center bg-[#FF8C42] cursor-pointer text-white p-2 rounded-md"
              >
                Create account
              </button>

              <p className="text[14px] font-Poppins text-center">
                Already have an account?
                <Link to="/login">
                  <span className="text-[#FF8682]"> Login</span>{" "}
                </Link>
              </p>
              {/* <hr className="w-full " />
              <p className="font-Poppins text-[14px] text-gray-400 absolute top-[88vh] right-[28vw] bg-white px-1">
                Or login with
              </p>
              <div className="flex justify-between w-full pt-2">
                <div className="border border-[#515DEF] rounded-lg p-2 px-14">
                  <img src="./facebook.svg" className="" />
                </div>
                <div className="border border-[#515DEF] rounded-lg p-2 px-14">
                  <img src="./google.svg" />
                </div>
                <div className="border border-[#515DEF] rounded-lg p-2 px-14">
                  <img src="./apple.svg" />
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
