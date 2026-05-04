import React from 'react';

const Submit = () => {
  return (
    <div className="min-h-[calc(100vh-128px)] flex items-center justify-center p-4 bg-gray-50 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center">Submit Insurance Details</h1>
        <p className="text-gray-600 text-center mb-8">
          Businesses can submit their insurance policy information here for transparency.
        </p>
        {/* Placeholder for InsuranceSubmissionForm */}
        <div className="p-6 bg-gray-100 rounded-md border border-dashed border-gray-300 text-center text-gray-500">
          Insurance Submission Form will go here.
        </div>
      </div>
    </div>
  );
};

export default Submit;