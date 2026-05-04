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
    </div>
  );
};

export default Home;