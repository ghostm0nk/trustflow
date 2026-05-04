import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 animate-fade-in-down">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
          TrustFlow
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200">
            Home
          </Link>
          <Link to="/businesses" className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200">
            Businesses
          </Link>
          <Link to="/submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200 text-lg font-medium">
            Flag Insurance
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors duration-200"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-50 rounded-lg shadow-lg py-2 transition-all duration-300 ease-in-out transform animate-fade-in-down">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/businesses"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Businesses
          </Link>
          <Link
            to="/submit"
            className="block px-4 py-2 text-blue-600 font-bold hover:bg-blue-50 transition-colors duration-200 text-base"
            onClick={() => setIsOpen(false)}
          >
            Flag Insurance
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;