import React, { useContext, useEffect, useState } from "react";
import api from "../Config/axios";
import { DataContext } from "../../App";

function JobDetails({ job, closeJobDetails }) {
  const [url, setUrl] = useState("");
  const [hasApplied, setHasApplied] = useState(false); // To track if the user has applied
  const { userData } = useContext(DataContext);

  useEffect(() => {
    // Check if the user has already applied for the job
    if (job.appliedUsers && job.appliedUsers.some(user => user.userId === userData.id)) {
      setHasApplied(true);
    }
  }, [job, userData.id]);

  const renderPerks = (perks) => {
    if (!perks) return null;

    const perkList = perks.split(",").map((perk, index) => (
      <div
        key={index}
        className="p-3 bg-gray-100 rounded-lg text-gray-600 shadow-md flex justify-center items-center"
      >
        {perk.trim()}
      </div>
    ));

    return perkList;
  };

  const handleSubmit = async (id) => {
    try {
      if (!url) {
        alert("Please enter your resume URL");
        return;
      }
      
      // Proceed to apply for the job only if the user hasn't applied yet
      const resp = await api.post(`/jobs/apply/${id}/${url}/${userData.id}`);

      if (resp.status === 200) {
        alert("Successfully applied for the job!");
        setHasApplied(true); // Set to true once the user has applied
      }
    } catch (error) {
      console.error("Error applying for job:", error);
      alert("There was an error while applying for the job. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-950/30 backdrop-blur-[2px] flex justify-center items-center">
      <div className="relative bg-white p-6 rounded-md w-[70%] h-[90%] shadow-lg overflow-y-scroll">
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-gray-900"
          onClick={closeJobDetails}
        >
          &times;
        </button>
        <div className="p-4">
          <p className="text-3xl font-bold mb-2">{job.jobPosition}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-xl font-medium">
                {job.user?.compName || "Unknown Company"}
              </p>
              <p className="text-gray-600 text-[18px]">Salary: {job.stipend}</p>
              <p className="text-gray-600 text-[18px]">Job Location: {job.jobLocation}</p>
              <p className="text-gray-700 text-[18px]">Duration: {job.jobDuration}</p>
            </div>
            <div>
              <img src="amazon.jpg" className="w-[50px] h-[60px]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Description</p>
            <p className="text-gray-600 p-2">{job.jobDescription}</p>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Skill(s) required</p>
            <p className="text-gray-600 p-2">{job.jobSkills}</p>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Other Requirements</p>
            <p className="text-gray-600 p-2">{job.otherRequirement}</p>
          </div>
          <div className="mt-4">
            <p className="text-xl text-black font-medium mb-2">Perks</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {renderPerks(job.jobPerks)}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Number of Openings</p>
            <p className="text-gray-600 p-2">{job.openings}</p>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">About Company</p>
            <p className="text-gray-600 p-2">{job.user?.description || "Unknown Company"}</p>
          </div>
          <div className="mt-2">
            <p className="text-xl py-2 text-black font-medium">Enter your Resume URL</p>
            <input
              type="text"
              value={url}
              className="w-[40%] p-2 border border-gray-300 rounded-md outline-none"
              placeholder="Enter URL"
              onChange={(e) => setUrl(e.target.value)}
              disabled={hasApplied} // Disable input if already applied
            />
          </div>
          <div className="flex justify-center items-center pt-6">
            <button
              onClick={() => handleSubmit(job.id)}
              className={`bg-[#FF8C42] text-white p-2 rounded-lg px-4 ${hasApplied ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={hasApplied} // Disable the button if already applied
            >
              {hasApplied ? "Already Applied" : "Apply Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
