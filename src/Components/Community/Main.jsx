import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PostAction from "./PostAction";
import Content from "./Content";
import api from "../Config/axios";
import { DataContext } from "../../App";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setDashboard, setChats } = useContext(DataContext);
  // Function to fetch users based on searchTerm
  useEffect(() => {
    if (searchTerm.length > 1) {
      setLoading(true);
      api
        .get(`users/get-user-data-by-query/${searchTerm}`)
        .then((response) => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setUsers([]);
          setLoading(false);
        });
    } else {
      setUsers([]); // Clear users if search term is too short
    }
  }, [searchTerm]);

  const handleView = (post) => {
    setChats(post);
    setDashboard(12);
  };

  return (
    <div className="flex justify-center items-center font-Manrope">
      <div className="absolute top-12 w-[50vw] p-6 right-[20vw] bg-white shadow-md">
        <div className="p-2 flex flex-col gap-2">
          <p className="font-Roboto text-[25px] font-medium">Community</p>
          <div>
            <div className="border border-gray-300 rounded-md p-3 w-[95%] flex justify-start items-center gap-4">
              <img src="search.svg" className="text-gray-500" alt="Search" />
              <input
                type="text"
                value={searchTerm}
                placeholder="Search users here...."
                className="searchbar w-full outline-none font-Manrope"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Show Loading State */}
          {loading && <p className="text-center text-gray-500">Searching...</p>}

          {/* Display Search Results */}
          {!loading && users.length > 0 && (
            <div className="bg-white border border-gray-300 rounded-md p-3 w-[95%] mt-2">
              <p className="text-gray-600 font-medium">Search Results:</p>
              {users.map((user) => (
                <div
                  onClick={() => handleView(user)}
                  key={user.id}
                  className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  <img
                    src={user?.profile_pic} // Replace with actual user profile image if available
                    alt="User"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div>
                    <p className="font-medium">
                      {user.fname.toUpperCase()} {user.lname.toUpperCase()}
                    </p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Show No Results Message */}
          {!loading && searchTerm.length > 1 && users.length === 0 && (
            <p className="text-center text-gray-500 mt-2">No users found.</p>
          )}

          <PostAction />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Main;
