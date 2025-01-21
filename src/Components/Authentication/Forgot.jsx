import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Config/axios";

function Forgot() {
  const [Email,SetEmail] = useState("")
  const useNav = useNavigate()

  const handleforgot = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/auth/forgot-password',{email:Email})
      if(response){
        toast.success("OTP successfully sent to your registered email id")
        useNav('/verify')
      }

    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div className="w-full h-full">
      <div className="p-6">
        <p className="font-Inknut text-xl p-6 ">Aspire Connect</p>
      </div>
      <div className="flex justify-center gap-10 px-32">
        <div className="left p-8 w-[45%] h-[75vh]  flex flex-col justify-between">
          <div className="flex items-center">
            <img src="back.svg" />
            <Link to="/login">
            <p className="font-Poppins text-[14px]">Back to login</p>
            </Link>
            
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[40px] font-Poppins font-medium ">
              Forgot your password?
            </p>
            <p className="font-Poppins text-[16px] text-gray-500">
              Don’t worry, happens to all of us. Enter your email below to
              recover your password
            </p>
          </div>
          <form onSubmit={handleforgot}>
          <div className="flex flex-col gap-10">
            <div className="relative border w-[90%] border-gray-500 rounded-md">
              <label
                htmlFor="email"
                className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[16px]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={Email}
                onChange={(e)=>(SetEmail(e.target.value))}
                placeholder="john.doe@gmail.com"
                className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
              />
            </div>
            <button type="submit" className="font-Poppins w-[90%] cursor-pointer text-center bg-[#FF8C42] text-white p-2 rounded-md">
              Submit
            </button>
          </div>
          </form>
          <hr className="w-[90%] mt" />
          <p className="font-Poppins text-[14px] text-gray-400 absolute top-[74vh] left-[23vw] bg-white px-1">
            Or login with
          </p>
          <div className="flex justify-between w-[90%] ">
            <div className="border border-[#515DEF] rounded-lg p-2 px-14">
              <img src="./facebook.svg" className="" />
            </div>
            <div className="border border-[#515DEF] rounded-lg p-2 px-14">
              <img src="./google.svg" />
            </div>
            <div className="border border-[#515DEF] rounded-lg p-2 px-14">
              <img src="./apple.svg" />
            </div>
          </div>
        </div>
        <div className="right w-[50%]">
          <img
            src="forgot.png"
            className="w-[450px] h-[600px] -translate-y-12"
          />
        </div>
      </div>
    </div>
  );
}

export default Forgot;
