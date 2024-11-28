import React, { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      {/* Tooltip for value */}
      <div className="relative">
        <div
          className="absolute sm:-top-8 -top-6 left-1/2 transform sm:-translate-x-1/2 -translate-x-3 bg-[#F48265] text-white text-sm font-medium rounded-md sm:px-4 sm:py-1 px-3 py-[1px] shadow-md"
          style={{ left: `${(value - 1) * 25}%` }} // Adjust tooltip based on slider value
        >
          {value}
          <div className="bg-[#F48265] w-5 h-3 rotate-45 absolute sm:top-4 sm:right-[11px] top-[10px] right-[7px] -z-20"></div>
        </div>
       
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={(e) => setValue(e.target.value)} 
          className="sm:w-96 w-[90vw] sm:h-2 h-[6px] appearance-none bg-gray-200 rounded-full outline-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #F48265 0%, #F48265 ${
              (value - 1) * 25
            }%, #e5e7eb ${(value - 1) * 25}%, #e5e7eb 100%)`,
          }}
        />
      </div>

      {/* Dots below slider */}
      {/* <div className="flex justify-between w-96 absolute">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              value - 1 === index ? "bg-[#F48265]" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
