import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";

function Response() {
  const { question, setQue } = useContext(DataContext);
  const [parsedQuestions, setParsedQuestions] = useState([]);

  useEffect(() => {
    try {
      const cleanJson = question.response
        .replace(/```json/g, "") 
        .replace(/```/g, "") 
        .trim(); 

      const parsedArray = JSON.parse(cleanJson);
      console.log(parsedArray);

      setParsedQuestions(parsedArray);
    } catch (error) {
      console.error("Error parsing response:", error);
      setParsedQuestions([]);
    }
  }, [question]);

  return (
    <div className="absolute z-20 w-screen h-screen bg-gray-950/30 backdrop-blur-[2px] flex justify-center items-center">
      <div className="w-3/4 h-3/4 bg-white rounded-lg p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Interview Questions</h2>
        {parsedQuestions.length > 0 ? (
          <div className="space-y-4">
            {parsedQuestions.map((item) => (
              <div
                key={item.id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.question}</p>
                    <span className="text-sm text-gray-500 mt-1 inline-block">
                      Category: {item.category}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">#{item.id}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Loading.....</p>
        )}
      </div>
    </div>
  );
}

export default Response;
