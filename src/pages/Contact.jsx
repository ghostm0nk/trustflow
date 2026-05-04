import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-128px)] flex items-center justify-center p-4 bg-gray-50 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="your@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;