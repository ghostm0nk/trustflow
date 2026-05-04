import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition-colors duration-200">
            TrustFlow
          </Link>
          <p className="text-gray-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} TrustFlow. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-lg">
          <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Home
          </Link>
          <Link to="/businesses" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Businesses
          </Link>
          <Link to="/submit" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Submit
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;