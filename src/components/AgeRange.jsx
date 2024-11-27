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
    <div className="mx-auto w-6/12 flex flex-wrap justify-center space-x-8">
      {ageRanges.map((range, index) => (
        <label
          key={index}
          className="flex items-center space-x-3 text-gray-900 cursor-pointer"
        >
          <input
            type="radio"
            name="ageRange"
            value={range}
            className="w-5 h-5 accent-red-500 border-2 border-red-500"
          />
          <span className="text-xl font-poppins text-[#1E231E] opacity-80 leading-[45px]">
            {range}
          </span>
        </label>
      ))}
    </div>
  );
};

export default AgeRange;
