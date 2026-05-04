import React from 'react';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-128px)] flex flex-col items-center justify-center p-4 bg-gray-50 text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center animate-fade-in-up">
        Welcome to TrustFlow
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl mb-8 animate-fade-in-up delay-100">
        Empowering transparency in business insurance. Search for businesses and view their flagged insurance details.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-lg">
          Search Businesses
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-lg">
          Flag Your Insurance
        </button>
      </div>
    </div>
  );
};

export default Home;