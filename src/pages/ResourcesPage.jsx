import React from "react";
import TransitBackground from "../components/TransitBackground";
import Footer from "../components/Footer";

const ResourcesPage = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <TransitBackground>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Resources
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your one-stop destination for study materials, course guides, and
              academic support to excel in junior year!
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div
                onClick={() => handleExternalLink("/study-guides")}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-400 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  STUDY GUIDES
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Comprehensive study materials and guides to help you master
                  your subjects. From AP prep to final exam review, find the
                  resources you need to succeed.
                </p>
                <div className="mt-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Access guides →
                </div>
              </div>

              <div
                onClick={() => handleExternalLink("/course-guides")}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-green-400 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                  COURSE GUIDES
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Navigate your academic journey with detailed course
                  information, requirements, and insider tips from upperclassmen
                  who've been there.
                </p>
                <div className="mt-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Explore courses →
                </div>
              </div>

              <div
                onClick={() => handleExternalLink("/newsletters")}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-purple-400 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  CAUCUS NEWSLETTERS
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Stay updated with the latest Junior Caucus news,
                  announcements, and important dates.
                </p>
                <div className="mt-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Read newsletters →
                </div>
              </div>

              <div
                onClick={() => handleExternalLink("/sywtba-articles")}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-orange-400 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                  SYWTBA ARTICLES
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  "So You Want To Be A..." career exploration articles to help
                  you discover potential paths and make informed decisions about
                  your future.
                </p>
                <div className="mt-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Explore careers →
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-1 gap-8">
              {/* <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Quick Tips
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Check resources regularly for updates</li>
                  <li>• Bookmark your most-used study guides</li>
                  <li>• Join study groups through our events</li>
                  <li>• Submit feedback to improve resources</li>
                </ul>
              </div> */}

              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Need Help?
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Can't find what you're looking for? Reach out to us!
                </p>
                <button
                  onClick={() => handleNavigation("contact")}
                  className="text-indigo-500 hover:text-indigo-600 font-semibold mt-4 transition-colors"
                >
                  Contact Us →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      {/* <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500 text-center">
            <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
            <p className="text-gray-700">
              Our resource library is carefully curated to support your academic
              journey. From comprehensive study guides to career exploration
              articles, we're committed to providing you with the tools you need
              to succeed in junior year and beyond. These resources are created
              by students, for students, ensuring they're practical, relevant,
              and truly helpful.
            </p>
          </div>
        </div> */}
      <Footer />
    </TransitBackground>
  );
};

export default ResourcesPage;
