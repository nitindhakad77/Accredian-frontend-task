import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex items-center">
            <a href="#" className="flex items-center text-gray-700">
              <img src="Logo.png" alt="Logo" className="h-8 w-18 mr-2" />
            </a>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                Courses
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Course 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Course 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Course 3</a>
                </div>
              )}
            </div>
            <a href="#" className="py-2 px-4 text-gray-700 hover:text-gray-900">Refer & Earn</a>
            <a href="#" className="py-2 px-4 text-gray-700 hover:text-gray-900">Resources</a>
            <a href="#" className="py-2 px-4 text-gray-700 hover:text-gray-900">About Us</a>
          </div>

          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="#" className="py-2 px-4 text-gray-700 hover:text-gray-900">Login</a>
            <a href="#" className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Try for free</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fillRule="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-gray-700">Courses</a>
          <a href="#" className="block px-4 py-2 text-gray-700">Refer & Earn</a>
          <a href="#" className="block px-4 py-2 text-gray-700">Resources</a>
          <a href="#" className="block px-4 py-2 text-gray-700">About Us</a>
          <a href="#" className="block px-4 py-2 text-gray-700">Login</a>
          <a href="#" className="block px-4 py-2 bg-blue-600 text-white rounded-lg">Try for free</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
