import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataContext } from "../../App";

function Login() {
    const {setToken} = useContext(DataContext)
    const [email,SetEmail] = useState("singhrajtilak65@gmail.com")
    const [password,SetPass]= useState("mansi")
    
    const useNav = useNavigate()
    const handleLogin = async()=>{
      try {
        const response = await axios.post("/users/auth/login",{
          email:email,
          password:password
        })
        if(response){
          console.log(response)
          localStorage.setItem('token',response.data.token)
          setToken(response.data.token)
          toast.success("Login Succesfully")
          useNav("/dashboard")
        }

      } catch (error) {
        toast.error(error.response ? error.response.data.message : "Login failed");
      }

      

    }

  return (
    <div className="w-full h-full">
      <div className="p-4">
        <p className="font-Inknut text-xl p-4 ">Aspire Connect</p>
      </div>
      <div className="w-full flex justify-cwnter items-center px-32">
        <div className="left p-4  w-[50%]">
          <div className="pl-6 flex flex-col gap-4">
            <p className="font-Poppins text-[40px] text-[#313131]">Login</p>
            <p className="font-Poppins text-[16px] text-[#313131]">
              Login to access your travelwise account
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full p-6">
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
                placeholder="john.doe@gmail.com"
                className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
                value={email}
                onChange={(e)=>(SetEmail(e.target.value))}
              />
            </div>
            <div className="relative border flex items-center w-[90%] border-gray-500 rounded-md ">
              <label
                htmlFor="password"
                className="absolute -top-2.5 left-3 bg-white px-1 font-Poppins text-gray-500 text-[16px]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
                value={password}
                onChange={(e)=>(SetPass(e.target.value))}
              />
              <img src="./hide.png" className="w-[20px] h-[20px] mr-2" />
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-[14px] font-Poppins">Remember me</p>
              </div>
              <Link to="/forgot">
              <p className="font-Poppins text-[14px] text-[#FF8682]">
                Forgot Password
              </p>
              </Link>
            </div>
            <p onClick={handleLogin} className="font-Poppins w-[90%] text-center cursor-pointer bg-[#FF8C42] text-white p-2 rounded-md">
              Login
            </p>
            <p className="text-[14px] w-[90%] font-Poppins text-center">
              Don’t have an account?
              <Link to="/signup"><span className="text-[#FF8C42]"> Sign up</span></Link>
              
            </p>
            <hr className="w-[90%] "/>
            <p className="font-Poppins text-[14px] text-gray-400 absolute top-[74vh] left-[24vw] bg-white px-1">Or login with</p>
            <div className="flex justify-between w-[90%] pt-8">
              <div className="border border-[#515DEF] rounded-lg p-2 px-14"><img src="./facebook.svg" className=""/></div>
              <div className="border border-[#515DEF] rounded-lg p-2 px-14"><img src="./google.svg" /></div>
              <div className="border border-[#515DEF] rounded-lg p-2 px-14"><img src="./apple.svg" /></div>
            </div>
          </div>
        </div>
        <div className="right w-[50%] ">
          <img src="./login.png" className="w-[520px] h-[630px] -translate-y-10"/>
        </div>
      </div>
    </div>
  );
}

export default Login;
