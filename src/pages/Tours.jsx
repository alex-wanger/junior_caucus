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

  // Sample tour guide data - replace with actual data
  const tourGuides = [
    {
      name: "Alex Johnson",
      major: "Computer Science",
      year: "Junior",
      bio: "Passionate about technology and campus life, Alex has been leading tours for 2 years and loves sharing Cornell's hidden gems.",
      image: "https://via.placeholder.com/150x150/6366f1/ffffff?text=AJ",
    },
    {
      name: "Sarah Chen",
      major: "Business Administration",
      year: "Junior",
      bio: "With extensive knowledge of Cornell's academic programs and student organizations, Sarah brings energy and insight to every tour.",
      image: "https://via.placeholder.com/150x150/ec4899/ffffff?text=SC",
    },
    {
      name: "Marcus Williams",
      major: "Engineering",
      year: "Junior",
      bio: "An experienced tour guide who knows Cornell inside and out, Marcus specializes in showing prospective students the best of campus life.",
      image: "https://via.placeholder.com/150x150/8b5cf6/ffffff?text=MW",
    },
  ];

  const itinerary = [
    {
      time: "9:00 AM",
      activity: "Meet at Willard Straight Hall",
      description: "Tour group assembly and introductions",
    },
    {
      time: "9:15 AM",
      activity: "Academic Quad Tour",
      description: "Visit key academic buildings and learn about programs",
    },
    {
      time: "10:00 AM",
      activity: "Library & Study Spaces",
      description: "Explore Cornell's world-class library system",
    },
    {
      time: "10:45 AM",
      activity: "Student Life Center",
      description: "Discover dining, recreation, and social spaces",
    },
    {
      time: "11:30 AM",
      activity: "Residence Halls",
      description: "Tour dormitories and housing options",
    },
    {
      time: "12:15 PM",
      activity: "Campus Scenic Views",
      description:
        "Visit Cornell's most beautiful spots and photo opportunities",
    },
    {
      time: "1:00 PM",
      activity: "Q&A Session",
      description: "Ask questions and get insider tips from current students",
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
              Discover Cornell University through the eyes of current junior
              students. Get an authentic, insider's perspective on campus life,
              academics, and everything in between!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  handleExternalLink("https://forms.gle/signup-link")
                }
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Sign Up for Tour
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                Have Questions?
              </button>
            </div>
          </div>

          {/* Tour Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-pink-400">
              <h3 className="text-xl font-bold text-gray-800 mb-3">📅 When</h3>
              <p className="text-gray-600">
                Every June 7th  
                <br />
                Duration: 4 hours
                <br />
                <span className="text-sm text-gray-500">
                  Dig 
                </span>
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-purple-400">
              <h3 className="text-xl font-bold text-gray-800 mb-3">💰 Cost</h3>
              <p className="text-gray-600">
                <span className="text-2xl font-bold text-purple-600">$25</span>{" "}
                per person
                <br />
                <span className="text-sm text-gray-500">
                  Includes refreshments and materials
                </span>
                <br />
                <span className="text-sm font-semibold text-green-600">
                  Free for Cornell students!
                </span>
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-pink-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                👥 Group Size
              </h3>
              <p className="text-gray-600">
                Maximum 15 people per tour
                <br />
                Small groups for personalized experience
                <br />
                <span className="text-sm text-gray-500">
                  Book early to secure your spot!
                </span>
              </p>
            </div>
          </div>

          {/* Itinerary Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Tour Itinerary
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                {itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 pb-6 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-800 mb-1">
                        {item.activity}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tour Guides Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Meet Your Tour Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tourGuides.map((guide, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-200"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {guide.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-1">
                    {guide.major}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">{guide.year}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {guide.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-pink-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ✨ Tour Highlights
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comprehensive campus walkthrough</li>
                  <li>• Access to academic buildings</li>
                  <li>• Residence hall visits</li>
                  <li>• Dining hall experience</li>
                  <li>• Photo opportunities at scenic spots</li>
                  <li>• Insider tips and advice</li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🎁 Bonus Materials
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Campus map and guidebook</li>
                  <li>• Snacks and refreshments</li>
                  <li>• Junior Caucus resource packet</li>
                  <li>• Contact information for follow-up questions</li>
                  <li>• Group photo at iconic Cornell locations</li>
                  <li>• Access to exclusive student insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  What should I wear?
                </h4>
                <p className="text-gray-600 text-sm">
                  Comfortable walking shoes and weather-appropriate clothing.
                  We'll be walking for about 4 hours with some hills!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Can I bring my family?
                </h4>
                <p className="text-gray-600 text-sm">
                  Absolutely! Family members are welcome. Just make sure to
                  register everyone who will be attending.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  What if it rains?
                </h4>
                <p className="text-gray-600 text-sm">
                  We have indoor alternatives and can provide some covered
                  areas. Tours may be rescheduled in severe weather.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  How do I cancel or reschedule?
                </h4>
                <p className="text-gray-600 text-sm">
                  Contact us at least 24 hours in advance for cancellations or
                  rescheduling. Full refunds available with proper notice.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Explore Cornell?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join us for an unforgettable tour experience and see why Cornell
                students love their campus home!
              </p>
              <button
                onClick={() =>
                  handleExternalLink("https://forms.gle/signup-link")
                }
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 mr-4"
              >
                Reserve Your Spot
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="border-2 border-gray-400 text-gray-600 px-8 py-3 rounded-lg font-semibold hover:border-gray-600 hover:text-gray-800 transition-all duration-300"
              >
                Ask a Question
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </TransitBackground>
  );
};

export default Tours;
