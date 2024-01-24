import React, { useState, useEffect, useRef } from "react";

const SelectDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (optionText) => {
    setSelectedOption(optionText);
    setIsActive(false);
  };

  return (
    <>
      <div className={`select-menu w-full ${isActive ? "active" : ""}`}>
        <div className="select-btn" onClick={toggleMenu}>
          <div className="sBtn-text">
            {selectedOption || "Select an option"}
          </div>
        </div>
        <div className="options">
          <div className="option" onClick={() => handleOptionClick("He/her")}>
            <span className="option-text">He/her</span>
          </div>
          <div className="option" onClick={() => handleOptionClick("He/him")}>
            <span className="option-text">He/him</span>
          </div>
          <div
            className="option"
            onClick={() => handleOptionClick("They/them")}
          >
            <span className="option-text">They/them</span>
          </div>
          {/* Add more options as needed */}
        </div>
      </div>
    </>
  );
};

export default SelectDropdown;
