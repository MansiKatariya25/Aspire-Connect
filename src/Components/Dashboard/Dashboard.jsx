import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Common/Navbar";
import Sidebar from "./Sidebar";
import Content from "./Mentors";
import { DataContext } from "../../App";
import Jobs from "./Jobs";
import MockTest from "./MockTest";
import Response from "./Response";
import Chat from "../Common/Chat";
import Profile from "../Common/Profile";
import Loading from "../Common/Loading";

function Dashboard() {
  const { dashboard, setDashboard } = useContext(DataContext);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dashboard]);
  return (
    <div className="w-full h-full ">
      <Navbar />
      <div className="flex justify-between">
        <Sidebar />
        {dashboard == 0 && <Content />}
        {dashboard == 1 && <Jobs />}
        {dashboard == 4 && <MockTest />}
        {dashboard == 5 && <Response />}
        {dashboard == 6 && <Chat />}
        {dashboard == 7 && <Profile />}
        {isLoading && <Loading />}
      </div>
    </div>
  );
}

export default Dashboard;
