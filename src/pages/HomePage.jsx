import React from "react";
import TransitBackground from "../components/TransitBackground";
import Footer from "../components/Footer";

const HomePage = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <TransitBackground>
      <div className="min-h-screen relative">
        {}
        <div className="relative">
          <img
            src="/midtown.jpg"
            alt="Junior Caucus Team Photo"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Welcome to Stuyvesant's Junior Caucus!
              </h1>
              <p className="text-xl md:text-2xl drop-shadow-md">
                New York runs on the subway, but your junior year runs on us!
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div
                onClick={() => handleNavigation("events")}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-pink-400 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                  EVENTS
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  From workshops to fundraisers, stay connected with events that
                  support our class, ease the stress of junior year, and bring
                  our community together.
                </p>
                <div className="mt-4 text-pink-500 font-semibold">
                  Click to explore →
                </div>
              </div>

              <div
                onClick={() => handleNavigation("jprom")}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-purple-400 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  JPROM
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Get ready for the highlight of our junior year! Find updates
                  on themes, ticket info, and the yacht that make JProm an
                  unforgettable experience.
                </p>
                <div className="mt-4 text-purple-500 font-semibold">
                  Click to explore →
                </div>
              </div>

              <div
                onClick={() => handleNavigation("resources")}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-pink-600 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-700 transition-colors">
                  RESOURCES
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  From study guides to college prep, explore resources designed
                  to support you through academics, career guidance, and
                  everything in between.
                </p>
                <div className="mt-4 text-pink-600 font-semibold">
                  Click to explore →
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement and Cabinet Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Mission Statement
                </h3>
                <p className="text-gray-600">
                  The Junior Caucus aims to serve as a proactive and dedicated
                  body for the junior class, promoting community, collaboration,
                  and student engagement. By offering resources, hosting events,
                  and advocating for students, the Junior Caucus strives to
                  create a supportive environment where students can succeed
                  academically, connect socially, and enjoy a meaningful and
                  memorable junior year.
                </p>
              </div>

              <div
                onClick={() => handleNavigation("cabinet")}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-400 cursor-pointer group"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  Meet Our Team
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                  Get to know the dedicated students working hard to make your
                  junior year amazing. Learn about our cabinet members, their
                  roles, and how they're here to support you.
                </p>
                <div className="mt-4 text-blue-500 font-semibold">
                  Click to explore →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TransitBackground>
  );
};

export default HomePage;
