import React from "react";

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500 text-center">
          <h1 className="text-4xl font-bold text-pink-500 mb-2">
            Welcome to the Junior Caucus!
          </h1>
        </div>
      </div>
      <div className="bg-gradient-to-br from-pink-100 via-purple-50 px-[5%]">
        <img
          src="./../../midtown.jpg"
          alt="Stuy logo"
          className="w-full h-90 object-cover border-4 rounded-lg mt-4 mb-8"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-400">
            <h3 className="text-xl font-bold text-gray-800 mb-4">EVENTS</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              exercitationem debitis pariatur tenetur consequuntur soluta, esse
              similique iure consectetur doloremque? Aliquam porro accusamus
              maxime praesentium sit qui nulla voluptatum similique.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-400">
            <h3 className="text-xl font-bold text-gray-800 mb-4">JPROM</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, et pariatur! Ea, officiis quibusdam? Sed enim delectus
              itaque. Libero voluptates necessitatibus provident explicabo
              consectetur tempora distinctio, recusandae eum ipsa ad.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-600">
            <h3 className="text-xl font-bold text-gray-800 mb-4">RESOURCES</h3>
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam rem, labore harum deleniti minima quasi, molestias iusto
              doloremque nostrum quos ipsam animi! Nesciunt, vero. Magnam cum
              quod nostrum quibusdam corporis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
