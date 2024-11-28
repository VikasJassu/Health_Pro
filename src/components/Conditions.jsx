import React, { useState } from "react";

const Conditions = () => {
  const [conditions, setConditions] = useState([]);

  const toggleCondition = (condition) => {
    if (conditions.includes(condition)) {
      setConditions(conditions.filter((item) => item !== condition));
    } else {
      setConditions([...conditions, condition]);
    }
  };

  const options = [
    "PCOS",
    "Endometriosis",
    "Low Ovarian Reserve",
    "Male Factor Infertility",
  ];

  return (
    <div className="sm:text-center">
      <h1 className="sm:text-[28px] sm:leading-10 leading-6 sm:mt-0 mt-4 text-[#1E231E] font-poppins font-medium">
        Do you have any of these medical conditions?
      </h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-12 gap-y-4 mt-4">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 text-gray-900 cursor-pointer"
          >
            <input
              type="checkbox"
              value={option}
              className="sm:w-6 w-5 sm:h-6 h-5 border-2 rounded-md accent-[#F48265] checked:border-[#F48265] checked:bg-[#F48265]"
              onChange={() => toggleCondition(option)}
            />
            <span className="sm:text-xl text-sm sm:leading-9 leading-5 opacity-80 font-poppins text-[#1E231E]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Conditions;
