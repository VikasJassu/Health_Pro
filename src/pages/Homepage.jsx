import React from "react";
import AgeRange from "../components/AgeRange";
import Slider from "../components/Slider";
import Procedures from "../components/Procedures";
import Conditions from "../components/Conditions";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-[#FCFAF5] min-h-screen font-poppins">
      <div className="container mx-auto px-6 py-10 space-y-10">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm">
          <span>Home</span> <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">IVF Success Rate Calculator</span>
        </div>

        {/* Title */}
        <h1 className="text-center text-[28px] leading-10 text-[#1E231E] font-poppins font-medium">
          Which age range applies to you?
        </h1>

        {/* Age Range */}
        <AgeRange />

        {/* Slider */}
        <div className="text-center">
          <h1 className="text-center text-[28px] leading-10 text-[#1E231E] font-poppins font-medium">
            Number of IVF Cycles?
          </h1>
          <Slider />
        </div>

        {/* Procedures */}
        <Procedures />

        {/* Conditions */}
        <Conditions />

        {/* Calculate Button */}
        <Link to='/result' className="flex justify-center">
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition">
            Calculate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
