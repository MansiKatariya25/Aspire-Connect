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

export const DataContext = createContext();

function App() {
  const [dashboard, setDashboard] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token"));

 
  return (
    <DataContext.Provider value={{ dashboard, setDashboard, token, setToken}}>
      <BrowserRouter>
        <ToastContainer autoClose={2000} theme="dark" />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/verify" element={<Verify />} />
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
