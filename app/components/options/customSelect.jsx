import { useState } from 'react';

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOptions = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevSelected) => prevSelected.filter((item) => item !== option));
    } else {
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
    }
  };

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={toggleOptions}>
        {selectedOptions.length === 0 ? 'Selecciona una opción' : selectedOptions.join(', ')}
      </div>
      {isOpen && (
        <div className="options min-h-1/5 scrollnice">
          {options.map((option) => (
            <div key={option} className="option">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
              />
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;