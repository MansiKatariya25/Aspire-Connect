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
import Main from "../Community/Main";
import Posts from "../Company/Posts";
import Notification from "../Common/Notification";
import ChatDash from "../Common/ChatDash";
import ViewersProfile from "../Common/ViewersProfile";
import FetchJob from "./FetchJob";

function Dashboard() {
  const { dashboard, setDashboard, userData } = useContext(DataContext);
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

        {dashboard == 0 ? (
          userData.role == "Student" ? (
            <Content />
          ) : (
            <Main />
          )
        ) : null}
        {dashboard == 1 && <Jobs />}
        {dashboard == 4 && <MockTest />}
        {dashboard == 5 && <Response />}
        {dashboard == 6 && <ChatDash />}
        {dashboard == 7 && <Profile />}
        {dashboard == 8 && <Main />}
        {dashboard == 9 && <Posts />}
        {dashboard == 10 && <Notification />}
        {dashboard == 11 && <Chat />}
        {dashboard == 12 && <ViewersProfile />}
        {dashboard == 13 && <FetchJob/>}
        {isLoading && <Loading />}
      </div>
    </div>
  );
}

export default Dashboard;
