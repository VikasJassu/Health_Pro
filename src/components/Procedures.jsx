import React, { useState } from "react";

const Procedures = () => {
  const [icsi, setIcsi] = useState(null);
  const [pgt, setPgt] = useState(null);

  return (
    <div className="sm:text-center sm:space-y-6 space-y-2">
      <h1 className="sm:text-[28px] sm:leading-10 leading-6 mt-6 sm:mt-0 text-[#1E231E] font-poppins font-medium">
        Have you undergone these procedures before?
      </h1>
      <div className="sm:mt-4 flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center sm:space-x-16">
        {/* ICSI Procedure */}
        <div className="flex items-center space-x-3">
          <label className="sm:text-lg text-sm font-semibold font-poppins text-[#1E231E] leading-7">
            ICSI Procedure:
          </label>
          <label className="flex items-center space-x-1">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center border-[#F48265] cursor-pointer`}
            >
              {icsi === true && (
                <div className="w-3 h-3 bg-[#F48265] rounded-full cursor-pointer"></div>
              )}
            </div>
            <input
              type="radio"
              name="icsi"
              value="yes"
              onChange={() => setIcsi(true)}
              className="hidden"
            />
            <span className="sm:text-lg text-sm font-poppins text-[#1E231E] leading-7 opacity-80">
              Yes
            </span>
          </label>
          <label className="flex items-center space-x-1">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center border-[#F48265] cursor-pointer`}
            >
              {icsi === false && (
                <div className="w-3 h-3 bg-[#F48265] rounded-full cursor-pointer"></div>
              )}
            </div>
            <input
              type="radio"
              name="icsi"
              value="no"
              onChange={() => setIcsi(false)}
              className="hidden"
            />
            <span className="sm:text-lg text-sm font-poppins text-[#1E231E] leading-7 opacity-80">
              No
            </span>
          </label>
        </div>

        {/* PGT Testing */}
        <div className="flex items-center space-x-3">
          <label className="sm:text-lg text-sm font-semibold font-poppins text-[#1E231E] leading-7">
            PGT Testing:
          </label>
          <label className="flex items-center space-x-1 translate-x-5 sm:translate-x-0">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center border-[#F48265] cursor-pointer`}
            >
              {pgt === true && (
                <div className="w-3 h-3 bg-[#F48265] rounded-full cursor-pointer"></div>
              )}
            </div>
            <input
              type="radio"
              name="pgt"
              value="yes"
              onChange={() => setPgt(true)}
              className="hidden"
            />
            <span className="sm:text-lg text-sm font-poppins text-[#1E231E] leading-7 opacity-80">
              Yes
            </span>
          </label>
          <label className="flex items-center space-x-1 translate-x-5 sm:translate-x-0">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center border-[#F48265] cursor-pointer`}
            >
              {pgt === false && (
                <div className="w-3 h-3 bg-[#F48265] rounded-full cursor-pointer"></div>
              )}
            </div>
            <input
              type="radio"
              name="pgt"
              value="no"
              onChange={() => setPgt(false)}
              className="hidden"
            />
            <span className="sm:text-lg text-sm font-poppins text-[#1E231E] leading-7 opacity-80">
              No
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Procedures;
