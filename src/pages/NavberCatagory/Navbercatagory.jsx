import React, { useState } from 'react';

const Navbercatagory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="block">Category 1</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="block">Category 2</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="block">Category 3</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};


export default Navbercatagory;