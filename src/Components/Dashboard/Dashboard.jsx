import React, { useContext } from 'react'
import Navbar from '../Common/Navbar'
import Sidebar from './Sidebar'
import Content from './Mentors'
import { DataContext } from '../../App'
import Jobs from './Jobs'
import { useNavigate } from 'react-router-dom'
import MockTest from './MockTest'
import JobDetails from './JobDetails'
import Response from './Response'
import Chat from '../Common/Chat'

function Dashboard() {
  const navigate = useNavigate()

  const {dashboard,setDashboard} = useContext(DataContext)
  return (
    <div className='w-full h-full '>
      <Navbar/>
      <div className='flex justify-between'>
      <Sidebar/>
      {dashboard == 0 && <Content/>}
      {dashboard == 1 && <Jobs/>}
      {dashboard == 4 && <MockTest/>}
      {dashboard == 5 && <Response/>}
      {dashboard == 6 && <Chat/>}
      </div>
      
    </div>
  )
}

export default Dashboard
