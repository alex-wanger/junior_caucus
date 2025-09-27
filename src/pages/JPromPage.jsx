import React from "react";
import TransitBackground from "../components/TransitBackground";
import Footer from "../components/Footer";

const JPromPage = ({ setCurrentPage }) => {
  return (
    <TransitBackground backgroundIndex={2}>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              JProm
            </h1>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-pink-100 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Junior Prom
              </h2>

              <img
                src="/disco.webp"
                alt="JProm"
                className="w-64 h-64 mx-auto mb-6"
              />

              <p className="text-xl text-gray-600 mb-8">
                Celebrate the annual junior class dance with us! Enjoy an
                evening full of music, dancing, and fun. This end of the year
                event brings classmates together, fosters school spirit, and
                creates lasting memories through fun activities, themed
                decorations, and a vibrant atmosphere for everyone to
                experience.
              </p>

              <div className="mt-8">
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TransitBackground>
  );
};

export default JPromPage;
