import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Forgot from "./Components/Authentication/Forgot";
import Verify from "./Components/Authentication/Verify";
import Newpass from "./Components/Authentication/Newpass";
import Dashboard from "./Components/Dashboard/Dashboard";
import Jobs from "./Components/Dashboard/Jobs";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Protected from "./Components/Protected";
import JobDetails from "./Components/Dashboard/JobDetails";

import api from "./Components/Config/axios";

export const DataContext = createContext();

function App() {
  const [dashboard, setDashboard] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [question, setQue] = useState([]);
  const [chats, setChats] = useState([]);
  const [userData,setUserData] = useState([])
  console.log(userData)

  return (
    <DataContext.Provider
      value={{ dashboard, setDashboard, token, setToken, question, setQue,chats,setChats,userData,setUserData }}
    >
      <BrowserRouter>
        <ToastContainer autoClose={2000} theme="dark" />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/dashboard/details" element={<JobDetails />} />
          <Route path="/newpass" element={<Protected component={Newpass} />} />
          <Route
            path="/dashboard"
            element={<Protected component={Dashboard} />}
          />
          <Route
            path="/dashboard/jobs"
            element={<Protected component={Jobs} />}
          />
          {/* Protected this route too */}
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
