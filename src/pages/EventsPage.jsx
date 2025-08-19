// pages/EventsPage.js
import React from "react";
import TransitBackground from "../components/TransitBackground";

const EventsPage = () => {
  const upcomingEvents = [{}, {}];
  const pastEvents = [{}, {}];

  return (
    <TransitBackground>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Events
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto"></p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">UP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Upcoming Events
                  </h3>
                  <p className="text-gray-600"></p>
                </div>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-pink-200 ${event.bgColor} ${event.borderColor}`}
                  >
                    <h4 className="font-semibold text-gray-800">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                    <p className="text-gray-700 text-sm mt-2">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">PA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Past Events
                  </h3>
                  <p className="text-gray-600"></p>
                </div>
              </div>
              <div className="space-y-4">
                {pastEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-800">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                    <p className="text-gray-700 text-sm mt-2">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-pink-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Event Calendar
            </h2>
            <div className="bg-gradient-to-r from-pink-50/80 to-purple-50/80 backdrop-blur-sm rounded-lg p-8 text-center border border-pink-200">
              <p className="text-lg text-gray-700 mb-4"></p>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
    </TransitBackground>
  );
};

export default EventsPage;
