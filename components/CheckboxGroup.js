import React from "react";

const CheckboxGroup = ({ options, selected, onChange }) => {
  const handleCheckboxChange = (option) => {
    const updatedSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onChange(updatedSelected);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 mx-4 md:mx-0 py-4">
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type="checkbox"
            className="mr-3 cursor-pointer w-5 h-5 rounded-sm border-2 border-gray-400 checked:border-orange-500 checked:bg-orange-500 focus:ring-2 focus:ring-orange-500 appearance-none"
            checked={selected.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <span className="text-lg text-gray-700">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
