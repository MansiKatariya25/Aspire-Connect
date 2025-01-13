import React from 'react'

function Navbar() {
  return (
    <div className=' flex justify-between items-center w-full h-[8vh] '>
      <div >
        <p className='font-Inknut text-xl p-6 '>Aspire Connect</p>
      </div>
      <div className='flex justify-evenly w-[50%] text-black items-center'>
        <p>Mentor</p>
        <p>Companies</p>
        <p>Network</p>
        <p>About</p>
        <p className='bg-[#FF8C42] text-white flex items-center rounded-full gap-2 px-6 p-2'>Community<span><img src="./arrow.png" className='h-[20px] w-[20px]'/></span></p>
      </div>
    </div>
  )
}

export default Navbar
