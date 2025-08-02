// pages/JPromPage.js
import React from 'react';

const JPromPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
            JProm
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-pink-100 max-w-3xl mx-auto">
            <div className="w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse">
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Coming Soon!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur recusandae architecto nihil laborum natus similique necessitatibus eum perferendis tempora impedit, expedita cumque officia. Sapiente corrupti rerum eum non necessitatibus aspernatur.
            </p>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200">
              <p className="text-gray-700 italic">
                "JPROM"
              </p>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Stay Updated
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JPromPage;