import React from 'react';

const Businesses = () => {
  return (
    <div className="min-h-[calc(100vh-128px)] p-8 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in-down">All Businesses</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 animate-fade-in-down delay-100">
        Browse or search for businesses to view their insurance transparency flags.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-12 animate-fade-in-up delay-200">
        {/* Placeholder for SearchBar */}
        <div className="flex-grow p-4 bg-white rounded-lg shadow-md border border-gray-200 text-center text-gray-500">
          Search Bar
        </div>
        {/* Placeholder for FilterControls */}
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 text-center text-gray-500">
          Filter Controls
        </div>
      </div>

      {/* Placeholder for Business List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-300">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center text-gray-500">
          Business Card 1
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center text-gray-500">
          Business Card 2
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center text-gray-500">
          Business Card 3
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center text-gray-500">
          Business Card 4
        </div>
      </div>
    </div>
  );
};

export default Businesses;