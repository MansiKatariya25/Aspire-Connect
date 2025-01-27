import React, { useEffect, useState } from "react";
import api from "../Config/axios";

function Mentors() {
  const [mentorData, setMentorData] = useState([]); // Holds fetched mentor data
  const [searchTerm, setSearchTerm] = useState(""); // Search term input
  const [filteredMentors, setFilteredMentors] = useState([]); // Filtered mentors

  // Fetch mentor data from API
  useEffect(() => {
    const getMentors = async () => {
      try {
        const response = await api.get("/mentors/get-mentors");
        console.log(response.data);
        setMentorData(response.data); // Store the data in state
        setFilteredMentors(response.data); // Initialize filtered mentors
      } catch (error) {
        console.error("Failed to fetch mentors:", error);
      }
    };

    getMentors();
  }, []);

  // Filter mentors whenever `searchTerm` or `mentorData` changes
  useEffect(() => {
    const filtered = mentorData.filter((mentor) => {
      const fname = mentor.fname ? mentor.fname.toLowerCase()+mentor.lname.toLowerCase() : "";
      const compName = mentor.compName ? mentor.compName.toLowerCase() : "";
     
      return (
        fname.includes(searchTerm.replace(/\s+/g, '').toLowerCase()) ||
        compName.includes(searchTerm.toLowerCase())
      );
    });
  
    setFilteredMentors(filtered);
  }, [searchTerm, mentorData]);
  

  return (
    <div className="absolute w-[85vw] h-[92vh] p-6 right-0 bg-white">
      <div>
        {/* Header */}
        <p className="font-Roboto text-[20px] font-medium">
          Find a Perfect Mentor for Yourself
        </p>
        <div className="flex justify-start items-center gap-6 pt-4">
          <p className="font-Manrope text-[23px] underline underline-offset-8 font-medium">
            Mentors
          </p>
        </div>

        {/* Search Bar */}
        <div className="pt-4">
          <div className="border border-gray-300 rounded-md p-3 w-full flex justify-start items-center gap-4">
            <img src="search.svg" className="text-gray-500" alt="Search Icon" />
            <input
              type="text"
              value={searchTerm}
              placeholder="Search by name & company"
              className="searchbar w-full outline-none font-Manrope"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Mentor Cards */}
        <div className="pt-6 flex justify-around items-start gap-6 flex-wrap">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor) => (
              <div
                key={mentor.id || mentor.fname} // Use a unique key
                className="w-[300px] h-[450px] border rounded-lg p-2 flex flex-col justify-evenly items-center"
              >
                {/* Mentor Profile Picture */}
                <img
                  src={mentor?.profile_pic || "default-avatar.png"} // Fallback to default avatar
                  alt={`${mentor.fname}'s profile`}
                  className="rounded-full w-[300px] h-[300px]"
                />

                {/* Mentor Info */}
                <div className="p-2 flex flex-col justify-between h-[180px] w-full">
                  <div className="flex flex-col gap-1">
                    <p className="font-Manrope text-[16px] font-medium">
                      {mentor?.fname + " " + mentor?.lname || "Unknown"}
                    </p>
                    <div className="flex items-center gap-2">
                      <img src="position.svg" alt="Position" />
                      <p className="font-Manrope text-[14px] text-gray-500">
                        {mentor.position || "Not specified"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="message.svg" alt="Skills" />
                      <p className="font-Manrope text-[14px] text-gray-500">
                        {mentor.skills || "No skills listed"}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-100 rounded-md w-full">
                    <div>
                      <p className="font-Manrope text-[12px] text-gray-500">
                        Experience
                      </p>
                      <p className="font-Manrope text-[14px]">
                        {mentor.exp || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="font-Manrope text-[12px] text-gray-500">
                        Sessions
                      </p>
                      <p className="font-Manrope text-[14px]">
                        {mentor.sessions || 0}
                      </p>
                      <img src="./chat.png" className="hover:scale-105 transition-all duration-100 border-orange-600 hover:border rounded-full absolute translate-x-8 w-[60px]" alt="Chat" />
                    </div>
                   
                  </div>
                 
                </div>
              </div>
            ))
          ) : (
            // Fallback when no mentors match the search term
            <p className="font-Manrope text-gray-500 text-center">
              No mentors found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
