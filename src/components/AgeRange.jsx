import React from "react";

const AgeRange = ({ selectedAge, setSelectedAge }) => {
  const ageRanges = [
    "Under 30",
    "Between 30 - 34",
    "Between 35 - 37",
    "Between 38 - 40",
    "Between 41 - 43",
    "Above 43",
  ];

  return (
    <div className="mx-auto sm:w-6/12 flex flex-wrap justify-center flex-col sm:flex-row sm:space-x-8">
      {ageRanges.map((range, index) => (
        <label
          key={index}
          className={`flex items-center space-x-3 text-gray-900 cursor-pointer ${
            index > 2 ? "sm:-translate-x-4" : ""
          }`}
        >
          {/* Custom Radio Button */}
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center border-[#F48265]`}
          >
            {selectedAge === range && (
              <div className="w-3 h-3 bg-[#F48265] rounded-full"></div>
            )}
          </div>

          {/* Hidden Input */}
          <input
            type="radio"
            name="ageRange"
            value={range}
            onChange={() => setSelectedAge(range)}
            className="hidden"
          />

          {/* Text Label */}
          <span className="sm:text-xl text-sm font-poppins text-[#1E231E] opacity-80 sm:leading-[45px] leading-9">
            {range}
          </span>
        </label>
      ))}
    </div>
  );
};

export default AgeRange;
