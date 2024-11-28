import React from "react";

const CheckboxGroup = ({ options, selected, onChange }) => {
  const handleCheckboxChange = (option) => {
    const updatedSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onChange(updatedSelected);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-0 md:gap-10 mx-4 md:mx-0 py-4">
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            className="mr-2 cursor-pointer"
            checked={selected.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <span className="text-lg">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
