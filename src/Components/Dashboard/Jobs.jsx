import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import JobDetails from "./JobDetails"; // Import the JobDetails component
import api from "../Config/axios";

function Jobs() {
  const { dashboard, setDashboard, userData, setUserData } = useContext(DataContext);
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Job title, position, keyword search
  const [locationQuery, setLocationQuery] = useState(""); // Location search
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get("/jobs/getPost");

        if (response && response.data) {
          setJobs(response.data);
        } else {
          console.log("No jobs found");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobs();
  }, []);

  // Function to handle job card selection
  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  // Close job details modal
  const closeJobDetails = () => {
    setSelectedJob(null);
  };

  // Filtering jobs based on search queries
  const filteredJobs = jobs.filter((job) => {
    return (
      (searchQuery === "" ||
        job.jobPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.user?.compName?.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (locationQuery === "" ||
        job.user?.compAddress?.toLowerCase().includes(locationQuery.toLowerCase()))
    );
  });

  return (
    <div className="absolute top-12 w-[85vw] h-[92vh] p-6 right-0 bg-white">
      <div className="p-2 flex flex-col gap-2">
        <p className="font-Roboto text-[20px] font-medium">Jobs And Internship</p>
        <div className="w-full h-[5%] border rounded-md p-2">
          <div className="flex items-center justify-between">
            {/* Job Title / Position Search */}
            <div className="flex w-[50%]">
              <img src="search.svg" alt="Search Icon" />
              <input
                type="text"
                className="w-[80%] font-Inter text-[13px] text-[#9199A3] p-2 outline-none"
                placeholder="Search by: Job title, Position, Keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Location Search */}
            <div className="flex w-[30%]">
              <img src="location.svg" alt="Location Icon" />
              <input
                type="text"
                className="w-[80%] font-Inter text-[13px] text-[#9199A3] p-2 outline-none"
                placeholder="City, state or zip code"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-1 items-center bg-[#F1F2F4] p-2 px-6">
              <img src="filter.svg" alt="Filter Icon" />
              <p className="font-Inter text-[13px] font-medium">Filters</p>
            </div>

            {/* <p className="bg-[#0A65CC] text-white font-Inter text-[16px] font-medium p-2 px-4 cursor-pointer">
              Find Job
            </p> */}
          </div>
        </div>

        {/* Job Listings */}
        <div className="py-2 cards-outer flex flex-wrap gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-2 border rounded-md w-[32%] h-[20vh] p-4 cursor-pointer"
                onClick={() => handleCardClick(item)}
              >
                <div className="flex flex-col gap-1">
                  <p className="font-Inter text-[16px] font-medium">{item.jobPosition}</p>
                  <div className="flex items-center gap-2">
                    <p className="font-Inter text-[12px] text-[#0BA02C] bg-[#E7F6EA] font-medium p-1 w-[24%] flex items-center justify-center">
                      {item.jobType}
                    </p>
                    <p className="font-Inter text-[14px] text-[#767F8C]">
                      {item.stipend}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start gap-3">
                  <img src="logo.svg" alt="Company Logo" />
                  <div className="flex flex-col w-[80%]">
                    <p className="font-Inter text-[14px] font-medium">
                      {item.user?.compName || "Unknown Company"}
                    </p>
                    <div className="flex items-center">
                      <img src="location.svg" alt="Location Icon" />
                      <p className="text-[#767F8C] font-Inter text-[14px]">
                        {item.user?.compAddress || "Location not specified"}
                      </p>
                    </div>
                  </div>
                  <img src="bookmark.svg" alt="Bookmark Icon" />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 font-Inter text-lg">No jobs found</p>
          )}
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetails job={selectedJob} closeJobDetails={closeJobDetails} />
      )}
    </div>
  );
}

export default Jobs;
