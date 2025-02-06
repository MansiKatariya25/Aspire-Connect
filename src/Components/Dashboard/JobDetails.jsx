import React from "react";

function JobDetails({ job, closeJobDetails }) {
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
          <p className="text-3xl font-bold mb-2">{job.name}</p>{" "}
          {/*jobPosition*/}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-xl font-medium">Fyle</p>{" "}
              {/*compName*/}
              <p className="text-gray-600 text-[18px]">Stippend : 20,000</p>
              <p className="text-gray-600 text-[18px]">
                Location : Work from Home
              </p>
              <p className="text-gray-700 text-[18px]">Duration : 6 months</p>
            </div>
            <div>
              <img src="amazon.jpg" className="w-[50px] h-[60px]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Description</p>
            <p className="text-gray-600 p-2">
              1. Develop frontend modules using TypeScript, HTML5, SCSS,
              Tailwind, AngularJS, Angular 16+, etc. <br />
              2. Use versioning and containerization tools like Git, etc. <br />
              3. Tackle technical challenges in a fast-paced environment.
              <br /> 4. Handle product features from conception to deployment
              and support.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Skill(s) required</p>
            <p className="text-gray-600 p-2">
              HTML , CSS , React.js , Express.js , MongoDB
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Other Requirements</p>
            <p className="text-gray-600 p-2">
              1. We require the candidate to have no prior commitments, like
              attending classes every day, etc. <br />
              2. This is a full-time internship where the candidate is expected
              to work 8 hours daily.
              <br />
              3. If you are a student, we require an NOC from your college to
              confirm that you can work with us full-time.
              <br /> 4. Candidates who have graduated in 2024 or will graduate
              in 2025 will only be considered.
            </p>
          </div>
          <div className="mt-2 ">
            <p className="text-xl text-black font-medium">Perks</p>
            <div className="flex gap-2">
              <p className="text-gray-600 p-2 bg-gray-100 rounded-full w-[10%] flex  justify-center">
                Certificate
              </p>
              <p className="text-gray-600 p-2 bg-gray-100 rounded-full w-[10%] flex  justify-center">
                Job offer
              </p>
              <p className="text-gray-600 p-2 bg-gray-100 rounded-full w-[10%] flex  justify-center">
                LOR
              </p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Number of Openings</p>
            <p className="text-gray-600 p-2">5</p>
          </div>
          <div className="mt-2">
            <p className="text-xl text-black font-medium">Abount Fyle</p>
            <p className="text-gray-600 p-2">
              We are Fyle, a SaaS product startup based out of Bangalore are
              founded by startup veterans. We are building a first-of-its-kind
              expense management product for enterprises around the world.
              {/*CompDescription*/}{" "}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xl py-2 text-black font-medium">
              Enter your Resume URL
            </p>
            <input
              type="text"
              className="w-[30%] p-2 border border-gray-300 rounded-md outline-none"
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
