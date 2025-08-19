import React from "react";
import TransitBackground from "../components/TransitBackground";

const HomePage = ({ setCurrentPage }) => {
  return (
    <TransitBackground>
      <div className="min-h-screen relative">
        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500 text-center">
              <h1 className="text-4xl font-bold mb-2">
                Welcome to the Junior Caucus!
              </h1>
              <p>
                New York runs on the the subway, but your junior year runs on
                us!
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">EVENTS</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  exercitationem debitis pariatur tenetur consequuntur soluta,
                  esse similique iure consectetur doloremque? Aliquam porro
                  accusamus maxime praesentium sit qui nulla voluptatum
                  similique.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">JPROM</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas, et pariatur! Ea, officiis quibusdam? Sed enim
                  delectus itaque. Libero voluptates necessitatibus provident
                  explicabo consectetur tempora distinctio, recusandae eum ipsa
                  ad.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-600">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  RESOURCES
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam rem, labore harum deleniti minima quasi, molestias
                  iusto doloremque nostrum quos ipsam animi! Nesciunt, vero.
                  Magnam cum quod nostrum quibusdam corporis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitBackground>
  );
};

export default HomePage;
