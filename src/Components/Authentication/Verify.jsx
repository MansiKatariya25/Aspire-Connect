import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../Config/axios'

function Verify() {

  const [Code,SetCode] = useState(0)
  const useNav = useNavigate()

  const handleverify = async(e) => {
    e.preventDefault()
    try {
      const response = await api.post('/users/auth/verify-otp',{
        email:localStorage.getItem('email'),
       otp:Code
      })
      if(response){
       toast.success("Otp verified Successfully")
       useNav('/newpass')
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
        <div className="left p-8 w-[45%] h-[60vh]  flex flex-col justify-between">
          <div className="flex items-center">
            <img src="back.svg" />
            <Link toto="/login"><p className="font-Poppins text-[14px]">Back to login</p></Link>
            
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[40px] font-Poppins font-medium ">
              Verify Code
            </p>
            <p className="font-Poppins text-[16px] text-gray-500">
            An authentication code has been sent to your email.
            </p>
          </div>
          <form onSubmit={handleverify}>
          <div className="flex flex-col gap-10">
            <div className="relative border w-[90%] border-gray-500 rounded-md">
              <label
                htmlFor="text"
                className="absolute -top-2.5 left-3 bg-white px-1 text-gray-500 font-Poppins text-[16px]"
              >
                Enter Code
              </label>
              <input
                type="text"
                id="verify"
                placeholder="Enter OTP"
                className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
                value={Code}
                onChange={(e)=>(SetCode(e.target.value))}
              />
            </div>
            <p className="text-[14px] font-Poppins">Didn’t receive a code?  <span className="text-[#FF8682]">Resend</span></p>

            <button className="font-Poppins w-[90%] text-center bg-[#FF8C42] text-white p-2 rounded-md cursor-pointer">
              Verify
            </button>
          </div>
          </form>
          </div>
        <div className="right w-[50%]">
          <img
            src="verify.png"
            className="w-[450px] h-[600px] -translate-y-12"
          />
        </div>
      </div>
    </div>
  )
}

export default Verify
