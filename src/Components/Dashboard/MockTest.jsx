import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";

function MockTest() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const { question, setQue, setDashboard } = useContext(DataContext);

  const [company, setCompany] = useState([
    { img: "./amazon.jpg", name: "Amazon" },
    { img: "./deloitte.jpg", name: "Deloitte" },
    { img: "./accenture.png", name: "Accenture" },
    { img: "./flipkart.png", name: "Flipkart" },
    { img: "./google.jpeg", name: "Google" },
    { img: "./infosys.jpg", name: "Infosys" },
    { img: "./jpmorgan.png", name: "JP Morgan" },
    { img: "./netflix.jpg", name: "Netflix" },
    { img: "./tcs.jpeg", name: "TCS" },
    { img: "./wipro.png", name: "Wipro" },
  ]);

  // Function to handle company selection
  const handleCompanySelection = (name) => {
    setSelectedCompany(name);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDashboard(5);
    try {
      const resp = await axios.post("https://gemini-python.onrender.com/chat", {
        message: `Create 10 Interview Question of ${selectedCompany} ${
          query ? query : ""
        } return this question in array of objects format only no extra text`,
      });

      setQue(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Filtering companies based on the search query
  const filteredCompanies = company.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="absolute top-12 w-[85vw] h-[92vh] p-6 right-0 bg-white">
      <div>
        <p className="font-Inter text-2xl font-medium p-2">Mock Test</p>
        <div className="flex items-center justify-between border p-2 rounded-md">
          <div className="flex w-[50%]">
            <img src="search.svg" alt="search" />
            <input
              type="text"
              className="w-[50%] font-Inter text-[14px] text-[#9199A3] p-2 outline-none"
              placeholder="Search company by name here......"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <p className="font-Inter text-2xl font-medium py-6">
          Prepare for Most Popular Companies Interviews
        </p>
        <div className="flex flex-wrap gap-16">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((item, index) => {
              const isSelected = selectedCompany === item.name;
              return (
                <div
                  key={index}
                  className={`w-[15%] h-[20%] flex flex-col items-center gap-2 border p-2 rounded-md cursor-pointer ${
                    isSelected ? "bg-blue-100 border-blue-500" : ""
                  }`}
                  onClick={() => handleCompanySelection(item.name)}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[150px] w-[150px] border rounded-full"
                  />
                  <p className="font-Inter text-xl font-medium">{item.name}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 font-Inter text-lg">No companies found</p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-8 w-full flex justify-end gap-2">
            <input
              type="text"
              placeholder="Type your queries or questions if any...."
              className="w-[40%] border outline-none p-2 rounded-lg"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className={`text-xl font-Inter font-medium p-2 px-4 w-[10%] items-center rounded-lg ${
                selectedCompany
                  ? "bg-black text-white"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={!selectedCompany}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MockTest;
