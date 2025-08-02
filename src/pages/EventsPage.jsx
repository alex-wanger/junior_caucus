// pages/EventsPage.js
import React from 'react';

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: "Welcome Week Social",
      date: "September 15, 2024 • 6:00 PM",
      description: "Join us for food, games, and networking!",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      title: "Study Skills Workshop",
      date: "September 22, 2024 • 3:00 PM",
      description: "Learn effective study techniques and time management.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const pastEvents = [
    {
      title: "Spring Formal 2024",
      date: "May 10, 2024",
      description: "A memorable evening of celebration and connection."
    },
    {
      title: "Community Service Day",
      date: "April 20, 2024",
      description: "Gave back to our local community through volunteer work."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Events
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for exciting events, workshops, and community gatherings throughout the year
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">UP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Upcoming Events</h3>
                <p className="text-gray-600">Don't miss out on what's coming next</p>
              </div>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className={`${event.bgColor} rounded-lg p-4 border ${event.borderColor}`}>
                  <h4 className="font-semibold text-gray-800">{event.title}</h4>
                  <p className="text-gray-600 text-sm">{event.date}</p>
                  <p className="text-gray-700 text-sm mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">PA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Past Events</h3>
                <p className="text-gray-600">See what we've accomplished together</p>
              </div>
            </div>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800">{event.title}</h4>
                  <p className="text-gray-600 text-sm">{event.date}</p>
                  <p className="text-gray-700 text-sm mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Event Calendar</h2>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 text-center border border-pink-200">
            <p className="text-lg text-gray-700 mb-4">
              Stay updated with all our events and activities throughout the semester.
            </p>
            <p className="text-gray-600">
              Follow our social media and check back regularly for the latest updates on upcoming events and registration information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;