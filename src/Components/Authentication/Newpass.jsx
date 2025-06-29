import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Config/axios";

function Newpass() {
  const [Pass,SetPass] = useState("")
  const useNav = useNavigate()

  const handleupdate = async (e) => {
    e.preventDefault()
    try {
      const response = await api.put('/users/auth/update-pass',{password:Pass})
      if(response){
        toast.success("Password updated Successfully")
        useNav('/login')
      }
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div>
      <div className="p-6">
        <p className="font-Inknut text-xl p-6 ">Aspire Connect</p>
      </div>
      <div className="flex justify-center gap-10 px-32">
        <div className="left p-8 w-[45%] h-[65vh]  flex flex-col justify-evenly">
          <div className="flex flex-col gap-2">
            <p className="text-[40px] font-Poppins font-medium ">
              Set a Password
            </p>
            <p className="font-Poppins text-[16px] text-gray-500">
              Your previous password has been reseted. Please set a new password
              for your account.
            </p>
          </div>
          <form onSubmit={handleupdate}>
          <div className="flex flex-col gap-4">
            <div className="relative border w-[90%] border-gray-500 rounded-md">
              <label
                htmlFor="text"
                className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[16px]"
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                value={Pass}
                onChange={(e)=>(SetPass(e.target.value))}
                placeholder="Enter Password"
                className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
              />
            </div>
            <div className="relative border w-[90%] border-gray-500 rounded-md">
              <label
                htmlFor="text"
                className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[16px]"
              >
                Re-Enter Password
              </label>
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
                className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
              />
            </div>
            <button type="submit" className="font-Poppins w-[90%] cursor-pointer text-center bg-[#FF8C42] text-white p-2 rounded-md">
            Set Password
          </button>
          </div>
          </form>
          
        </div>
        
        <div className="right w-[50%]">
          <img
            src="newpass.png"
            className="w-[450px] h-[600px] -translate-y-12"
          />
        </div>
      </div>
    </div>
  );
}

export default Newpass;
