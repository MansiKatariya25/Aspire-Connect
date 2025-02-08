import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import api from "../Config/axios";
import { toast } from "react-toastify";

function Posts() {
  const [jobPosition, SetJobPosition] = useState("");
  const [jobLocation, SetJobLocation] = useState("");
  const [jobType, SetJobType] = useState("");
  const [jobDuration, SetJobDuration] = useState("");
  const [stipend, SetStipend] = useState("");
  const [jobOpening, SetJobOpening] = useState("");
  const [jobSkills, SetJobSkills] = useState("");
  const [jobPerks, SetJobPerks] = useState("");
  const [jobDescr, SetJobDescr] = useState("");
  const [otherReq, SetOtherReq] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const resp = api.post("/jobs/jobPost", {
        jobPosition: jobPosition,
        jobLocation: jobLocation,
        jobType: jobType,
        jobDuration: jobDuration,
        Stipend: stipend,
        openings: jobOpening,
        jobSkills: jobSkills,
        jobPerks: jobPerks,
        jobDescription: jobDescr,
        otherRequirement: otherReq,
      });
      if (resp) {
        toast.success("Jobposted succesfully");
        console.log(resp.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="absolute top-12 w-[85vw] h-[92vh] pt-12 px-12 right-0 bg-white flex flex-col justify-start items-center ">
      <div className="flex justify-start items-center  hover:text-blue-400 cursor-pointer ">
        <img src="back.svg" className="text-black" />
        <p className="text-xl font-Manrope p-4 undeline">
          See Previously posted Jobs here....{" "}
        </p>
      </div>
      <div className="shadow-md h-[85%] w-[70%] p-6 overflow-y-scroll">
        <p className="font-Manrope text-3xl font-bold">Post a Job here</p>
        <form onSubmit={handleSubmit}>
          <div className="text-sm w-full p-4 flex flex-col gap-2">
            <div className="flex flex-col w-full gap-4">
              <div className="flex w-full gap-2">
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Job Position</label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    placeholder="Enter job position"
                    value={jobPosition}
                    onChange={(e) => SetJobPosition(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Job Location</label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    placeholder="Work from home / office"
                    value={jobLocation}
                    onChange={(e) => SetJobLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Job Type</label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    placeholder="Part-time , Full-time , Internship...."
                    value={jobType}
                    onChange={(e) => SetJobType(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Job Duration</label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    placeholder="Enter minimum duration of job"
                    value={jobDuration}
                    onChange={(e) => SetJobDuration(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex w-full gap-2">
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Stipend</label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    placeholder="Enter Stipend"
                    value={stipend}
                    onChange={(e) => SetStipend(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Number of openings</label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    placeholder="Number of openings for the role"
                    value={jobOpening}
                    onChange={(e) => SetJobOpening(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Job Skills</label>
                  <textarea
                    required
                    type="text"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none resize-none"
                    placeholder="skills required for job"
                    value={jobSkills}
                    onChange={(e) => SetJobSkills(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Job Perks</label>
                  <textarea
                    required
                    type="text"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none resize-none"
                    placeholder="Enter Job Perks"
                    value={jobPerks}
                    onChange={(e) => SetJobPerks(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Job Description</label>
                  <textarea
                    required
                    className="w-full p-2 border border-gray-300 rounded-md outline-none resize-none"
                    placeholder="Enter Job Description here......."
                    rows="4"
                    value={jobDescr}
                    onChange={(e) => SetJobDescr(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="text-gray-400">Other Requirements</label>
                  <textarea
                    required
                    className="w-full p-2 border border-gray-300 rounded-md outline-none resize-none"
                    placeholder="Enter other requirements here"
                    rows="4"
                    value={otherReq}
                    onChange={(e) => SetOtherReq(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="Submit"
              className="p-2 text-white bg-[#FF8C42] px-6 rounded-lg cursor-pointer"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Posts;
