import React from "react";

const RadioButtonOne = ({ label, options, selected, onChange }) => {
  return (
    <div className="flex flex-row items-centre justify-center mb-2 gap-2">
      <label className="text-lg font-medium mb-2">{label}</label>
      <div className="flex flex-row gap-2">
         {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only" // Hide the default radio button
                name={label} // Group by label (or unique name)
                checked={selected === option}
                onChange={() => onChange(option)}
              />
              <div className="max-w-xl rounded-full text-orange-400 hover:text-orange-500 hover:peer-checked:text-orange-500  ring-2 ring-transparent transition-all hover:shadow peer-checked:text-orange-600 peer-checked:ring-orange-400 peer-checked:ring-offset-2">
                <div>
                  {/* Custom icon or content when selected */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path
                      fill="currentColor"
                      d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                    />
                  </svg>
                </div>
              </div>
            </label>
            <span className="text-lg ml-2">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonOne;
