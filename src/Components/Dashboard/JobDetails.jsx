import React, { useEffect } from "react";
import api from "../Config/axios";

function JobDetails({ job, closeJobDetails }) {
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

  const renderPerks = (perks) => {
    if (!perks) return null;

    // Split perks if they are in a string separated by commas or other delimiters
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
          <p className="text-3xl font-bold mb-2">{job.jobPosition}</p>{" "}
          {/*jobPosition*/}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-xl font-medium">
                {job.user?.compName || "Unknown Company"}
              </p>{" "}
              {/*compName*/}
              <p className="text-gray-600 text-[18px]">
                Salary : {job.stipend}
              </p>
              <p className="text-gray-600 text-[18px]">
                Job Location : {job.jobLocation}
              </p>
              <p className="text-gray-700 text-[18px]">
                Duration : {job.jobDuration}
              </p>
            </div>
            <div>
              <img src="amazon.jpg" className="w-[50px] h-[60px]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Description</p>
            <p className="text-gray-600 p-2">
              {job.jobDescription}
              <br />
              {/* 2. Use versioning and containerization tools like Git, etc. <br />
              3. Tackle technical challenges in a fast-paced environment.
              <br /> 4. Handle product features from conception to deployment
              and support. */}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Skill(s) required</p>
            <p className="text-gray-600 p-2">{job.jobSkills}</p>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Other Requirements</p>
            <p className="text-gray-600 p-2">
              {job.otherRequirement}
              {/* <br />
              3. If you are a student, we require an NOC from your college to
              confirm that you can work with us full-time.
              <br /> 4. Candidates who have graduated in 2024 or will graduate
              in 2025 will only be considered. */}
            </p>
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
            <p className="text-xl text-black font-medium">Abount Fyle</p>
            <p className="text-gray-600 p-2">
              {job.user?.description || "Unknown Company"}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xl py-2 text-black font-medium">
              Enter your Resume URL
            </p>
            <input
              type="text"
              className="w-[40%] p-2 border border-gray-300 rounded-md outline-none"
              placeholder="Enter URL"
            />
          </div>
          <div className="flex justify-center items-center pt-6">
            <button className="bg-[#FF8C42] text-white p-2 rounded-lg px-4 ">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
