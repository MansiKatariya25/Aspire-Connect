import React, { useContext } from 'react'
import Navbar from '../Common/Navbar'
import Sidebar from './Sidebar'
import Content from './Content'
import { DataContext } from '../../App'
import Jobs from './Jobs'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const {dashboard,setDashboard} = useContext(DataContext)
  return (
    <div className='w-full h-full'>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      {dashboard == 0 && <Content/>}
      {dashboard == 1 && <Jobs/>}
      </div>
      
    </div>
  )
}

export default Dashboard
