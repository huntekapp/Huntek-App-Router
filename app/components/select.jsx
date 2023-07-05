"use client"
import { useState } from 'react';

const PseudoSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Respuesta 1', 'Respuesta 2', 'Respuesta 3'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(selectedOption, isOpen);
  };

  return (
    <div className="relative">
      <div
        className=" text-gray-400 shadow-md rounded-xl cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption : 'Select an option'}</span>
        <svg
          className={`w-4 h-4 ml-2 mr-2 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 14l6-6H4l6 6z"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white p-2 shadow rounded">
          {options.map((option, index) => (
            <span
              key={index}
              className="block cursor-pointer hover:bg-gray-100 p-2"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PseudoSelect;