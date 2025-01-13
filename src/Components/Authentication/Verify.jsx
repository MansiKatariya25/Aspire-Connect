import React from 'react'

function Verify() {
  return (
    <div>
      <div className="p-6">
        <p className="font-Inknut text-xl p-6 ">Aspire Connect</p>
      </div>
      <div className="flex justify-center gap-10 px-32">
        <div className="left p-8 w-[45%] h-[60vh]  flex flex-col justify-between">
          <div className="flex items-center">
            <img src="back.svg" />
            <p className="font-Poppins text-[14px]">Back to login</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[40px] font-Poppins font-medium ">
              Verify Code
            </p>
            <p className="font-Poppins text-[16px] text-gray-500">
            An authentication code has been sent to your email.
            </p>
          </div>
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
                id="email"
                placeholder="john.doe@gmail.com"
                className="w-full px-3 py-2 outline-none bg-transparent text-[16px] text-gray-800"
              />
            </div>
            <p className="text-[14px] font-Poppins">Didn’t receive a code?  <span className="text-[#FF8682]">Resend</span></p>

            <p className="font-Poppins w-[90%] text-center bg-[#FF8C42] text-white p-2 rounded-md">
              Verify
            </p>
          </div>
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
