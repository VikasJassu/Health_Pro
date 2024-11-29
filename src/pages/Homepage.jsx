import React, { useState } from "react";
import AgeRange from "../components/AgeRange";
import Slider from "../components/Slider";
import Procedures from "../components/Procedures";
import Conditions from "../components/Conditions";
import Left from "../assets/leftArrow.svg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [selectedAge, setSelectedAge] = useState("");
  const [icsi, setIcsi] = useState(null);
  const [pgt, setPgt] = useState(null);
  const [conditions, setConditions] = useState([]);
  const navigate = useNavigate();

  //basic validation applied here before calculating the estimated success rate
  const handleClick = () => {
    if (
      selectedAge === "" ||
      icsi === null ||
      pgt === null ||
      conditions.length === 0
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    navigate("/result");
  };
  return (
    <div className="bg-[#FCFAF5] min-h-screen font-poppins">
      <div className="container mx-auto sm:px-6 p-4 sm:pb-10 sm:space-y-10 sm:pt-24 pt-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-[#1E231E]">
          <img src={Left} className="sm:hidden" />
          <div className="flex items-center">
            <span className="hidden sm:inline">Home</span>
            <span className="mx-2 hidden sm:inline-block">/</span>
            <span className="font-medium sm:font-semibold text-lg">
              IVF Success Rate Calculator
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="sm:text-center sm:text-[28px] leading-10 mt-4 sm:mt-0 text-[#1E231E] font-poppins font-medium">
          Which age range applies to you?
        </h1>

        {/* Age Range */}
        <AgeRange selectedAge={selectedAge} setSelectedAge={setSelectedAge} />

        {/* Slider */}
        <div className="sm:text-center">
          <h1 className="sm:text-center sm:text-[28px] leading-10 sm:mt-0 mt-3 text-[#1E231E] font-poppins font-medium">
            Number of IVF Cycles?
          </h1>
          <Slider />
        </div>

        {/* Procedures */}
        <Procedures icsi={icsi} pgt={pgt} setIcsi={setIcsi} setPgt={setPgt} />

        {/* Conditions */}
        <Conditions conditions={conditions} setConditions={setConditions} />

        {/* Calculate Button */}
        <div className="flex justify-center sm:relative fixed bottom-20 left-[50%] right-[50%] sm:left-0 sm:right-0 sm:bottom-0 sm:pt-5 sm:pb-16">
          <button
            onClick={handleClick}
            className="bg-[#D75555] sm:text-lg text-white font-poppins px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
