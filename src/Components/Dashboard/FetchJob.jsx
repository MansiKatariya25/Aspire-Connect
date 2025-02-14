import React, { useEffect, useState } from "react";
import api from "../Config/axios";

function FetchJob() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get("/jobs/getPost");
        
        if (response && response.data) {
          setJobs(response.data);
        } else {
        
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="absolute top-20 w-[55vw] h-[80vh] p-6 left-[20vw] bg-white shadow-md">
      <p className="text-3xl text-black font-Manrope font-medium">
        Previously posted job...
      </p>
      <div className="py-4 flex flex-col gap-4">
        {jobs.map((item, index) => {
          return (
            <div key={index} className="p-2 w-full h-[10%] bg-slate-100 rounded-md">
              <p className="text-2xl">Job Position : {item.jobPosition}</p>
              <div className="flex gap-6 text-[17px]">
                <p>Location : {item.jobLocation}</p>
                <p>Job Type : {item.jobType}</p>
              </div>
              <div className="flex gap-6 text-[17px]">
                <p>Stippend : {item.stipend}</p>
                <p>Number of Openings : {item.openings}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchJob;
