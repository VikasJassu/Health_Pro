// File: src/components/Result.jsx
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import coupleImage from "../assets/project.png";
import sideIcon from "../assets/sideIcon.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Result = () => {
  const [successRate, setSuccessRate] = useState(50);

  useEffect(() => {
    //we generate random percentage every time between 50 - 90 to show in circular chart
    const randomNumber = Math.floor(Math.random() * 40 + 1) + 50;
    setSuccessRate(randomNumber);
  }, []);
  
  return (
    <div className="bg-[#303030] font-poppins relative min-h-screen overflow-x-hidden">
      <div className="container mx-auto sm:px-6 sm:py-10 p-5 sm:space-y-10 mt-16">
        <div className="text-white space-x-3 hidden sm:block">
          <span>Home</span>
          <span className="text-white">/</span>
          <Link to="/">
            {" "}
            <span className=" hover:text-white">
              IVF Success Rate Calculator
            </span>
          </Link>
          <span className="text-white">/</span>
          <span className="text-white font-semibold">Result</span>
        </div>

        <div className="flex sm:hidden items-center gap-3 text-white font-poppins text-lg font-medium">
          <FaArrowLeft />
          <div className="flex items-center">IVF Success Rate Calculator</div>
        </div>
        {/* <img
          src={sideIcon}
          className="absolute sm:translate-x-6 sm:top-[92px] -left-24 top-[72px]"
        />
        <h1 className="font-poppins font-medium sm:text-[44px] sm:leading-[96px] text-white sm:ml-16 ml-12 sm:mt-0 mt-7">
          Your estimated IVF Success Rate is
        </h1> */}

        <div className="flex items-center sm:gap-6 sm:mt-0 mt-1 relative">
          <img
            src={sideIcon}
            className="sm:w-auto w-20 sm:h-auto h-16 sm:-translate-x-32 -translate-x-16 sm:top-[0] -top-1 relative"
            alt="Side Icon"
          />
          <h1 className="font-poppins font-medium text-sm sm:text-[40px] sm:leading-[96px] text-white sm:-translate-x-32 -translate-x-14 -mt-2 sm:-mt-0">
            Your estimated IVF Success Rate is
          </h1>
        </div>

        <div className="flex flex-col items-center relative sm:right-96 sm:top-6 top-5">
          <div className="sm:w-56 sm:h-56 w-48 h-48">
            <CircularProgressbar
              value={successRate}
              text={`${successRate}%`}
              strokeWidth={17}
              styles={buildStyles({
                textSize: "20px",
                textColor: "#ffffff",
                pathColor: "#5BD489", // Green color
                trailColor: "#3d614b", // Dark trail
                strokeLinecap: "butt",
                backgroundColor: "#032706",
              })}
              background
            />
          </div>
          <p className="font-poppins font-medium mt-6 text-xl text-white">
            With 1 IVF Cycle
          </p>
        </div>

        <div className="sm:h-[70vh] absolute sm:bottom-0 sm:-right-24 -bottom-10">
          <div className="bg-green-800 w-[450px] sm:w-[600px] absolute aspect-square blur-3xl opacity-55 sm:left-48 -top-32 -left-5 rounded-full"></div>

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
