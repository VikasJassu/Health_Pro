import React, { useState } from "react";

const AgeRange = () => {
  const [selectedAge, setSelectedAge] = useState("");

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
          className="flex items-center space-x-3 text-gray-900 cursor-pointer"
        >
          <input
            type="radio"
            name="ageRange"
            value={range}
            className="sm:w-5 w-4 h-4 sm:h-5 accent-red-500 border-2 border-red-500"
          />
          <span className="sm:text-xl text-sm font-poppins text-[#1E231E] opacity-80 sm:leading-[45px] leading-8">
            {range}
          </span>
        </label>
      ))}
    </div>
  );
};

export default AgeRange;
