// pages/ContactPage.js
import React from "react";
import TransitBackground from "../components/TransitBackground";
import { Mail, MapPin } from "lucide-react";

const InstagramIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
    alt="Instagram"
    className="w-10 h-10"
  />
);

const ContactPage = () => {
  const contactInfo = [
    {
      title: "General Inquiries",
      email: "example@.edu",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const locations = [
    {
      name: "Student Union",
      address: "Room 205, Student Union Building",
      hours: "Office Hours: Mon-Fri 9AM-5PM",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <TransitBackground>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Contact Information
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto"></p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Mail className="w-6 h-6 text-pink-500 mr-3" />
                Contact Us
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`${info.bgColor} rounded-lg p-4 border ${info.borderColor}`}
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-700">{info.email}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/stuyjuniorcaucus/"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-purple-500 mr-3" />
                Find Us
              </h2>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className={`${location.bgColor} rounded-lg p-4 border ${location.borderColor}`}
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {location.name}
                    </h3>
                    <p className="text-gray-700">{location.address}</p>
                    <p className="text-gray-600 text-sm">{location.hours}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Suggestion Box
                </h3>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200">
                  <p className="text-gray-700 mb-4">
                    Have ideas or feedback? We want to hear from you!
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Suggestion box form coming soon - stay tuned for ways to
                    share your thoughts with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitBackground>
  );
};

export default ContactPage;
