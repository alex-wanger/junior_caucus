import React from "react";
import { Mail, MapPin, Facebook } from "lucide-react";
import TransitBackground from "../components/TransitBackground";
import Footer from "../components/Footer";

const InstagramIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
    alt="Instagram"
    className="w-6 h-6 filter brightness-0 invert"
  />
);

const ContactPage = () => {
  const contactInfo = [
    {
      title: "Mufei Yu",
      email: "mufei.yu@stuysu.org",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      title: "Mitali Jhaveri",
      email: "mitali.jhaveri@stuysu.org",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const locations = [
    {
      name: "Student Union",
      address: "Room 205, Student Union Room",
      hours: "Office Hours: Mon-Fri 8AM-5PM",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "SU Website",
      hours: "https://stuysu.org",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "Stuyvesant Website",
      hours: "https://stuy.enschool.org/",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <TransitBackground backgroundIndex={4}>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Contact Information
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto"></p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-pink-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Mail className="w-6 h-6 text-pink-500 mr-3" />
                Contact us
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
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Facebook className="w-6 h-6 text-purple-500 mr-3" />
                    Follow us
                  </h2>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/stuyjuniorcaucus/"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl p-3"
                      aria-label="Follow us on Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.facebook.com/StuyJuniorCaucus"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl p-3"
                      aria-label="Follow us on Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-purple-500 mr-3" />
                Find us
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TransitBackground>
  );
};

export default ContactPage;
