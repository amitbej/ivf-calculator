import React from "react";

const Slider = ({ label, value, onChange, min, max }) => {
  const stepWidth = 100 / (max - min); // Calculate width per step

  return (
    <div className="relative w-full max-w-sm mb-6 mt-10 px-4">
      {/* Slider label */}
      <label className="text-lg font-bold mb-4 block text-center">
        {label}
      </label>

      {/* Value inside the pointer */}
      <div
        className="absolute bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-sm -top-7 transform -translate-x-1/2"
        style={{ left: `${((value - min) / (max - min)) * 100}%` }}
      >
        {value}

        <div
          style={{
            position: "absolute",
            bottom: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "0",
            height: "0",
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "12px solid orange",
          }}
        ></div>
      </div>

      {/* Slider input */}
      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{
          accentColor: "transparent", // Hide the default slider thumb
        }}
      />

      {/* Custom pointer for the slider thumb */}

      {/* Custom tick marks */}
      <div className="relative flex justify-between w-full mt-2">
        {[...Array(max - min + 1)].map((_, index) => (
          <span
            key={index}
            className="w-2 h-2 bg-gray-400 rounded-full"
            style={{
              position: "absolute",
              left: `${index * stepWidth}%`,
              transform: "translateX(-50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
