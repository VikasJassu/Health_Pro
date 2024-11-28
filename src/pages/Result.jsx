// File: src/components/Result.jsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import coupleImage from "../assets/project.png";
import Left from "../assets/leftArrow.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Result = ({ successRate = 54 }) => {
  return (
    <div className="bg-[#303030] font-poppins relative min-h-screen overflow-hidden">
      <div className="container mx-auto sm:px-6 sm:py-10 p-5 sm:space-y-10">
        <div className="text-gray-500 text-sm space-x-3 hidden sm:block">
          <span>Home</span>
          <span className="text-gray-500">/</span>
          <span>IVF Success Rate Calculator</span>
          <span className="text-gray-500">/</span>
          <span className="text-white">Result</span>
        </div>

        <div className="flex sm:hidden items-center gap-3 text-white font-poppins text-lg font-medium">
          <FaArrowLeft />
          <div className="flex items-center">IVF Success Rate Calculator</div>
        </div>

        <h1 className="font-poppins font-medium sm:text-[44px] sm:leading-[96px] text-white ml-9 sm:mt-0 mt-7">
          Your estimated IVF Success Rate is
        </h1>

        <div className="flex flex-col items-center relative sm:right-96 sm:top-14 top-5">
          <div className="sm:w-56 sm:h-56 w-48 h-48">
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

        <div className="sm:h-[70vh] sm:fixed absolute sm:bottom-0 sm:-right-24 bottom-20">
          <div className="bg-green-800 w-[450px] absolute aspect-square blur-3xl opacity-55 sm:-z-20 sm:left-56 -top-32 -left-5 rounded-full" ></div>

          <img
            src={coupleImage}
            className="h-[100%] scale-[1.8] sm:scale-[1]"
          />
        </div>
      </div>
      <div className="sm:hidden bg-transparent fixed bottom-0 w-full backdrop-blur-md py-4 flex justify-center">
        <Link to="/result">
          <button className="bg-[#D75555] text-white font-poppins px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition flex items-center gap-3">
           <p> Start private consultation</p>
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
