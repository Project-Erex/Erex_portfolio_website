"use client";

import React, {useState} from "react";

export default function Dropdown({dropdownItems, onSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => {
    console.log("Option clicked:", value);
    onSelect(value); // Call onSelect with the selected value
    setIsOpen(false);
    setSelectedItem(value);
  };

  return (
    <div className="inline-flex">
      <div className="relative inline-flex min-w-[200px]">
        <button
          onClick={toggleDropdown}
          className="flex items-center w-full px-4 py-2 font-medium border rounded border-gray bg-background text-secondary">
          {selectedItem || "Select Business Type"}
          <svg
            className="w-4 h-4 ml-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            {/* Dropdown icon */}
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 text-purple-600 bg-white rounded-md shadow-lg top-full">
            {dropdownItems.map((item) => (
              <button
                key={item}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => onOptionClicked(item)} // Call onOptionClicked with the selected item
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
