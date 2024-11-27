// File: src/components/Result.jsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import coupleImage from "../assets/project.png";

const Result = ({ successRate = 54 }) => {
  return (
    <div className="bg-[#303030] font-poppins relative min-h-screen">
      <div className="container mx-auto px-6 py-10 space-y-10">
        <div className="text-gray-500 text-sm space-x-3">
          <span>Home</span>
          <span className="text-gray-500">/</span>
          <span>IVF Success Rate Calculator</span>
          <span className="text-gray-500">/</span>
          <span className="text-white">Result</span>
        </div>

        <h1 className="font-poppins font-medium text-[44px] leading-[96px] text-white ml-9">
          Your estimated IVF Success Rate is
        </h1>

        <div className="flex flex-col items-center relative right-96 top-14">
          <div className="w-56 h-56">
            <CircularProgressbar
              value={successRate}
              text={`${successRate}%`}
              styles={buildStyles({
                textSize: "24px",
                textColor: "#ffffff",
                pathColor: "#1EC97C", // Green color
                trailColor: "#2C2C2C", // Dark trail
              })}
            />
          </div>
          <p className="font-poppins font-medium mt-6 text-xl text-white">
            With 1 IVF Cycle
          </p>
        </div>

        <div className="h-[70vh] fixed bottom-0 -right-24">
          <div className="bg-green-800 w-96 absolute aspect-square -z-20 blur-3xl left-56 rounded-full"></div>

          <img src={coupleImage} className="h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Result;
