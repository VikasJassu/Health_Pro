import React, { useState } from "react";

const Conditions = () => {
  const [conditions, setConditions] = useState([]);

  const toggleCondition = (condition) => {
    if (conditions.includes(condition)) {
      setConditions(conditions.filter((item) => item !== condition));
    } else {
      setConditions([...conditions, condition]);
    }
  };

  const options = [
    "PCOS",
    "Endometriosis",
    "Low Ovarian Reserve",
    "Male Factor Infertility",
  ];

  return (
    <div className="sm:text-center">
      <h1 className="sm:text-[28px] sm:leading-10 leading-6 sm:mt-0 mt-4 text-[#1E231E] font-poppins font-medium">
        Do you have any of these medical conditions?
      </h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-12 gap-y-4 mt-4">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 text-gray-900 cursor-pointer"
          >
            {/* Custom Checkbox according to design */}
            <div
              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md border-2 flex items-center justify-center border-[#F48265] cursor-pointer${
                conditions.includes(option) ? " bg-[#F48265]" : "bg-white"
              }`}
              onClick={() => toggleCondition(option)}
            >
              {conditions.includes(option) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            {/* hide original checkbox */}
            <input type="checkbox" value={option} className="hidden" />
            <span className="sm:text-xl text-sm sm:leading-9 leading-5 opacity-80 font-poppins text-[#1E231E]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Conditions;
