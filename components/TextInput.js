import React from 'react';

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col items-start mb-6">
      <label className="text-lg font-bold mb-2">{label}</label>
      <input
        type="text"
        className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;