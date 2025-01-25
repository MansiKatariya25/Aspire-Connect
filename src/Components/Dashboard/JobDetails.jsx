import React from "react";

function JobDetails({ job, closeJobDetails }) {
  return (
    <div className="fixed inset-0 z-50 bg-gray-950/30 backdrop-blur-[2px] flex justify-center items-center">
      <div className="relative bg-white p-6 rounded-md w-[40%] shadow-lg">
        <button
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-900"
          onClick={closeJobDetails}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-2">{job.name}</h2>
        <p className="text-gray-600 mb-1">Type: {job.type}</p>
        <p className="text-gray-600 mb-1">Salary: {job.salary}</p>
        <p className="text-gray-600 mb-4">Location: {job.location}</p>
        <p className="text-gray-700">
          This is a detailed job description. You can add more information about
          the job responsibilities, qualifications, and benefits here.
        </p>
      </div>
    </div>
  );
}

export default JobDetails;
