import React from "react";
import { useNavigate } from "react-router-dom";
import TransitBackground from "../components/TransitBackground";
import Footer from "../components/Footer";

const Tours = () => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank");
  };

  // Links and resources data
  const resources = [
    {
      title: "TOUR SIGN-UP FORM",
      description:
        "Register for the Cornell & Binghamton University Tour on October 18, 2025. $54 per student, first 54 to pay get spots. Form closes September 29 @ 11:59 PM.",
      link: "https://docs.google.com/forms/d/1oLdJawK8RRQwhgkSjOg3_XluVCfNxZoIsG8Msr8N2_Y/viewform?edit_requested=true",
      actionText: "Sign up now →",
    },
    {
      title: "TOUR GUIDE BIOS",
      description:
        "Meet your tour guides and learn about their experiences at Cornell and Binghamton. Get to know the students who will be showing you around campus.",
      link: "https://docs.google.com/document/d/1F_JjkdyqzNEKFnuZPukVYfYL0tkNn7BIpdg5hm7q0bE/edit?usp=drivesdk",
      actionText: "Meet the guides →",
    },
  ];

  return (
    <TransitBackground>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl pb-2 md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Cornell x Bing Campus Tours
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join the Junior and Senior caucus as we tour Cornell and
              Binghamton
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  handleExternalLink(
                    "https://docs.google.com/forms/d/1oLdJawK8RRQwhgkSjOg3_XluVCfNxZoIsG8Msr8N2_Y/viewform?edit_requested=true"
                  )
                }
                className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Sign Up for Tour
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                Contact Page
              </button>
            </div>
          </div>

          {/* Tour Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-pink-400">
              <h3 className="text-xl font-bold text-gray-800 mb-3">📅 When</h3>
              <p className="text-gray-600">
                <span className="font-semibold">October 18, 2025</span>
                <br />
                7:30 AM - 9:30 PM
                <br />
                <span className="text-sm text-gray-500">
                  Arrive at Stuyvesant before 7:30 AM
                </span>
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-purple-400">
              <h3 className="text-xl font-bold text-gray-800 mb-3">💰 Cost</h3>
              <p className="text-gray-600">
                <span className="text-2xl font-bold text-purple-600">$54</span>{" "}
                per student
                <br />
                <span className="text-sm text-gray-500">
                  Bus fare only - food not included
                </span>
                <br />
                <span className="text-sm text-orange-600 font-semibold">
                  Lunch ~$15 at Morrison Dining
                </span>
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-pink-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                👥 Capacity
              </h3>
              <p className="text-gray-600">
                <span className="font-semibold">54 students maximum</span>
                <br />
                First 54 to pay get spots
                <br />
                <span className="text-sm text-gray-500">
                  Waitlist available after capacity
                </span>
              </p>
            </div>
          </div>

          {/* Important Information Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-red-800 mb-2">
                ⚠️ Important Information
              </h3>
              <ul className="text-red-700 space-y-1 text-sm">
                <li>
                  • <strong>Form closes:</strong> Monday, September 29 @ 11:59
                  PM or when sold out
                </li>
                <li>
                  • <strong>Your spot is secured only after payment</strong>
                </li>
                <li>
                  • <strong>Refund Policy:</strong> Only if you find someone to
                  take your spot or someone from waitlist is available
                </li>
                <li>
                  • <strong>No refund</strong> if you miss the tour or can't
                  find a replacement
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                📧 Questions?
              </h3>
              <p className="text-blue-700 text-sm">
                Contact: vanna.lei@stuysu.org, amy.zhou@stuysu.org,
                mufei.yu@stuysu.org, or mitali.jhaveri@stuysu.org
              </p>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Tour Information & Links
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  onClick={() => handleExternalLink(resource.link)}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-pink-400 cursor-pointer group"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {resource.description}
                  </p>
                  <div className="mt-4 text-pink-500 group-hover:text-pink-600 transition-colors font-semibold">
                    {resource.actionText}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tour Itinerary & Details */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Tour Details & Itinerary
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-pink-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🗓️ Daily Schedule
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">7:30 AM</span>
                    <span>Departure from Stuyvesant</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Morning</span>
                    <span>Cornell University Tour</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Lunch</span>
                    <span>Morrison Dining @ Cornell</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Afternoon</span>
                    <span>Binghamton University Tour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">9:30 PM</span>
                    <span>Return to Stuyvesant</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  💳 Payment & Lunch Info
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <p className="font-medium text-gray-800">
                      Lunch Cost: ~$14.91 + tax
                    </p>
                    <p className="text-sm">Morrison Dining @ Cornell</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Accepted Payments:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• VISA, MasterCard, AMEX</li>
                      <li>• Apple Pay, Google Wallet</li>
                      <li>• Cash (Vanna & Amy will exchange)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg mt-4">
                    <p className="text-sm font-medium text-blue-800">
                      Need 2 parent chaperones (attend free!)
                    </p>
                  </div>
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

export default Tours;
