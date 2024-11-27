import React, { useState } from "react";

const Procedures = () => {
  const [icsi, setIcsi] = useState(null);
  const [pgt, setPgt] = useState(null);

  return (
    <div className="text-center space-y-6">
      <h1 className="text-[28px] leading-10 text-[#1E231E] font-poppins font-medium">
        Have you undergone these procedures before?
      </h1>
      <div className="mt-4 flex justify-center space-x-16">
        {/* ICSI Procedure */}
        <div className="flex items-center space-x-3">
          <label className="text-lg font-semibold font-poppins text-[#1E231E] leading-7">
            ICSI Procedure:
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="icsi"
              value="yes"
              className="w-5 h-5 accent-red-500 border-2 border-red-500"
              onChange={() => setIcsi(true)}
            />
            <span className="text-lg font-poppins text-[#1E231E] leading-7 opacity-80">
              Yes
            </span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="icsi"
              value="no"
              className="w-5 h-5 accent-red-500 border-2 border-red-500"
              onChange={() => setIcsi(false)}
            />
            <span className="text-lg font-poppins text-[#1E231E] leading-7 opacity-80">
              No
            </span>
          </label>
        </div>

        {/* PGT Testing */}
        <div className="flex items-center space-x-3">
          <label className="text-lg font-semibold font-poppins text-[#1E231E] leading-7">
            PGT Testing:
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="pgt"
              value="yes"
              className="w-5 h-5 accent-red-500 border-2 border-red-500"
              onChange={() => setPgt(true)}
            />
            <span className="text-lg font-poppins text-[#1E231E] leading-7 opacity-80">
              Yes
            </span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="pgt"
              value="no"
              className="w-5 h-5 accent-red-500 border-2 border-red-500"
              onChange={() => setPgt(false)}
            />
            <span className="text-lg font-poppins text-[#1E231E] leading-7 opacity-80">
              No
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Procedures;
