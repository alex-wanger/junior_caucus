import React from "react";

import { useNavigate } from "react-router-dom";
import TransitBackground from "../components/TransitBackground";
import Footer from "../components/Footer";

// Mock components for demonstration

const ResourcesPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(`/${page}`);
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
                onClick={() =>
                  handleExternalLink(
                    "https://drive.google.com/drive/folders/1Qb0vlNd3P_jQJIUElcgIFQVbu2MvoGQt?usp=drive_link"
                  )
                }
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-pink-400 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                  STUDY GUIDES
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Comprehensive study materials and guides to help you master
                  your subjects. From AP prep to final exam review, find the
                  resources you need to succeed.
                </p>
                <div className="mt-4 text-pink-500 group-hover:text-pink-600 transition-colors font-semibold">
                  Access guides →
                </div>
              </div>

              <div
                onClick={() =>
                  handleExternalLink(
                    "https://drive.google.com/drive/folders/1ccL-icgaBwdv-fazf1dV6kOmaif-mWeE?usp=drive_link"
                  )
                }
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-purple-400 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  COURSE GUIDES
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Navigate course selection with detailed course information,
                  requirements, and advice from upperclassmen.
                </p>
                <div className="mt-4 text-purple-500 group-hover:text-purple-600 transition-colors font-semibold">
                  Explore courses →
                </div>
              </div>

              <div
                onClick={() =>
                  handleExternalLink(
                    "https://drive.google.com/drive/folders/1ObMiOvc2aZ8ydlR6RdTW6kin-KG8qJtN?usp=drive_link"
                  )
                }
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-pink-600 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-700 transition-colors">
                  CAUCUS NEWSLETTERS
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Stay updated with the latest Junior Caucus news,
                  announcements, and important dates.
                </p>
                <div className="mt-4 text-pink-500 group-hover:text-pink-700 transition-colors font-semibold">
                  Read newsletters →
                </div>
              </div>

              <div
                onClick={() =>
                  handleExternalLink(
                    "https://drive.google.com/drive/folders/1ID-DsUJvOF4_fUEBH8pcuU8JIg0wAJ69?usp=drive_link"
                  )
                }
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-purple-500 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  SYWTBA ARTICLES
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  "So You Want To Be A..." career exploration articles to help
                  you discover potential paths and make informed decisions about
                  your future.
                </p>
                <div className="mt-4 text-purple-500 group-hover:text-purple-600 transition-colors font-semibold">
                  Explore careers →
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Need Help?
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Can't find what you're looking for? Reach out to us!
                </p>
                <button
                  onClick={() => handleNavigation("contact")}
                  className="text-pink-600 hover:text-pink-700 font-semibold mt-4 transition-colors"
                >
                  Contact us →
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

export default ResourcesPage;
