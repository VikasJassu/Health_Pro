import React, { useState } from "react";
import "./slider.css";
const Slider = () => {
  const [value, setValue] = useState(1);

  const handleSliderChange = (e) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-9">
      {/* slider div element */}
      <div className="relative w-full sm:w-96">
        {/* Tooltip showing current number */}
        <div
          className="sm:w-10 px-3 sm:px-0 pt-1 w-8 h-6 sm:h-7 sm:p-1 absolute sm:-top-10 -top-8 left-0 transform sm:-translate-x-4 -translate-x-3  bg-[#F48265] text-white text-sm font-medium rounded-md shadow-md"
          style={{
            left: `calc(${((value - 1) / 4) * 100}% + (${8 - value * 4}px))`,
          }}
        >
          {value}
          <div className="bg-[#F48265] w-4 h-4 rotate-45 absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 -z-10"></div>
        </div>

        {/* Slider */}
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={handleSliderChange}
          className="slider w-full sm:h-2 h-[6px] appearance-none bg-gray-200 rounded-full outline-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #F48265 0%, #F48265 ${
              ((value - 1) / 4) * 100
            }%, #e5e7eb ${((value - 1) / 4) * 100}%, #e5e7eb 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
