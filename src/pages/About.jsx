import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-128px)] p-8 bg-gray-50 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold mb-6 text-center">About TrustFlow</h1>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          TrustFlow is dedicated to fostering transparency and trust between businesses and their customers by providing a platform for businesses to publicly flag their insurance details.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          In an increasingly complex world, knowing that a business is properly insured offers peace of mind. Our platform allows businesses to voluntarily share their insurance provider, policy numbers, and effective dates, creating a verifiable record for public access.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          For customers, TrustFlow provides an easy way to search for businesses and view their insurance status, helping them make informed decisions. We believe that transparency builds stronger communities and more reliable business relationships.
        </p>
      </div>
    </div>
  );
};

export default About;