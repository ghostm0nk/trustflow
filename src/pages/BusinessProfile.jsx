import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-[calc(100vh-128px)] p-8 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in-down">
        Business Profile for ID: {id}
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Business Details</h2>
        <div className="mb-6 p-4 bg-gray-100 rounded-md border border-dashed border-gray-300 text-center text-gray-500">
          Detailed Business Information for {id} will be displayed here.
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Active Insurance Flags</h2>
        <div className="p-4 bg-gray-100 rounded-md border border-dashed border-gray-300 text-center text-gray-500">
          List of insurance flags for business {id} will go here.
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;