import React from 'react'
import { Link } from 'react-router-dom'

function AuthNavbar() {
    
  return (
    <div className="fixed bg-white z-10 flex justify-between items-center w-full h-[10vh] ">
    <Link to="/">
      <div>
        <p className="font-Inknut text-xl p-6">Aspire Connect</p>
      </div>
    </Link>
    <div className="flex justify-end p-4 w-[50%] text-black items-center">
      {/* <p className="cursor-pointer">Mentor</p>
      <p className="cursor-pointer">Companies</p>
      <p className="cursor-pointer">Network</p> */}
      <p onClick={()=>{localStorage.removeItem('token');window.location.reload()}} className="bg-[#FF8C42] border-black hover:border-b-4 transition-all duration-100  text-white flex items-center rounded-full gap-2 px-6 p-2 cursor-pointer">
        Logout
        <span>
          <img src="./arrow.png" className="h-[20px] w-[20px] hover:scale-110 transition-all duration-175" />
        </span>
      </p>
    </div>
  </div>
  )
}

export default AuthNavbar