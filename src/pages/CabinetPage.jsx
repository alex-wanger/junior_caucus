// pages/CabinetPage.js
import React from "react";

const CabinetPage = () => {
  const positions = ["President", "Vice President"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-purple-500 bg-clip-text text-transparent mb-4">
            Our Cabinet
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated leaders working to make our organization
            exceptional.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-pink-100">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 text-lg">
              Our cabinet members are currently being finalized. Check back soon
              to meet our amazing leadership team!
            </p>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {positions.map((position) => (
                <div
                  key={position}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {position}
                  </h3>
                  <p className="text-gray-600 text-sm">Coming Soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinetPage;
