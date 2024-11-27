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
    <div className="text-center">
      <h1 className="text-[28px] leading-10 text-[#1E231E] font-poppins font-medium">
        Do you have any of these medical conditions?
      </h1>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-4">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 text-gray-900 cursor-pointer"
          >
            <input
              type="checkbox"
              value={option}
              className="w-6 h-6 border-2 rounded-md accent-[#F48265] checked:border-[#F48265] checked:bg-[#F48265]"
              onChange={() => toggleCondition(option)}
            />
            <span className="text-xl leading-9 opacity-80 font-poppins text-[#1E231E]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Conditions;
