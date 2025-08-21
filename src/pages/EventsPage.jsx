import React, { useState } from "react";
import TransitBackground from "../components/TransitBackground";
import Footer from "../components/Footer";

const EventsPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const upcomingEvents = [
    {
      title: "Study Session",
      date: "2025-10-25",
      description: "Example",
    },
    {
      title: "Meeting",
      date: "2025-10-01",
      description: "Example",
    },
  ];

  const pastEvents = [{}, {}];

  const allEvents = [...upcomingEvents, ...pastEvents];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return allEvents.filter((event) => event.date === dateStr);
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDate(day);
      const hasEvents = events.length > 0;
      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === currentDate.getMonth() &&
        new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`p-2 min-h-[60px] border border-gray-100 relative group cursor-pointer hover:bg-pink-50 transition-colors ${
            isToday ? "bg-pink-100 border-pink-300" : "bg-white/50"
          }`}
        >
          <div
            className={`text-sm font-medium mb-1 ${
              isToday ? "text-pink-600" : "text-gray-700"
            }`}
          >
            {day}
          </div>
          {hasEvents && (
            <div className="space-y-1">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="text-xs bg-purple-100 text-purple-700 px-1 py-0.5 rounded truncate group-hover:bg-purple-200 transition-colors"
                  title={`${event.title} - ${event.description}`}
                >
                  {event.title}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <TransitBackground>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Events
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay connected with all Junior Caucus activities and important
              dates.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Upcoming Events
                  </h3>
                  <p className="text-gray-600">What's coming next</p>
                </div>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-pink-200"
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
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Past Events
                  </h3>
                  <p className="text-gray-600">Recent activities</p>
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

          {/* Interactive Calendar */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-pink-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Event Calendar
              </h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors"
                >
                  ← Previous
                </button>
                <h3 className="text-lg font-semibold text-gray-700 min-w-[180px] text-center">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50/80 to-purple-50/80 backdrop-blur-sm rounded-lg border border-pink-200 overflow-hidden">
              {/* Calendar Header */}
              <div className="grid grid-cols-7 bg-gradient-to-r from-pink-100 to-purple-100">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="p-3 text-center font-semibold text-gray-700 border-r border-pink-200 last:border-r-0"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">{renderCalendar()}</div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-2">
                <span className="inline-block w-3 h-3 bg-pink-100 border border-pink-300 rounded mr-2"></span>
                Today
                <span className="inline-block w-3 h-3 bg-purple-100 rounded ml-4 mr-2"></span>
                Events
              </p>
              <p className="text-gray-500 text-sm">
                Hover over event titles for more details
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TransitBackground>
  );
};

export default EventsPage;
