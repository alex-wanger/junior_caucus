import React, { useState } from "react";
import Footer from "../components/Footer";
import TransitBackground from "../components/TransitBackground";

const EventsPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const upcomingEvents = [
    {
      title: "Cornell + Bing Tour",
      date: "2025-10-18",
      description: "Join us on our tour of Cornell and Binghamton.",
      link: "/tours",
    },
    {
      title: "Meeting with the Deputy Director of Rice Admissions",
      date: "2025-10-15",
      description: "Join us at 5:30 PM on October 15th, open to all grades!",
      link: "https://docs.google.com/spreadsheets/d/17H4eJlLtnnENil0qXnHfO4CGSB3NCiCFTcn2N8TGB20/edit?gid=0#gid=0",
    },
  ];

  const pastEvents = [
  {
      title: "Speaker Event",
      date: "2025-09-28",
  },
  {
      title: "YTT - Letters of Rec",
      date: "2025-10-01",
  },
  {
      title: "Junior Atrium Polaroid Day",
      date: "2025-10-07",
  },
];

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

  const handleEventClick = (event) => {
    if (event.link) {
      if (event.link.startsWith("http") || event.link.startsWith("https")) {
        window.open(event.link, "_blank");
      } else {
        window.location.href = event.link;
      }
    }
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
  const dayNamesShort = ["S", "M", "T", "W", "T", "F", "S"];

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-1 sm:p-2"></div>);
    }

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
          className={`p-1 sm:p-2 min-h-[40px] sm:min-h-[60px] border border-gray-100 relative group cursor-pointer hover:bg-pink-50 active:bg-pink-100 transition-colors ${
            isToday ? "bg-pink-100 border-pink-300" : "bg-white/50"
          }`}
        >
          <div
            className={`text-xs sm:text-sm font-medium mb-1 ${
              isToday ? "text-pink-600" : "text-gray-700"
            }`}
          >
            {day}
          </div>
          {hasEvents && (
            <div className="space-y-0.5 sm:space-y-1">
              {events.slice(0, 2).map((event, index) => (
                <div
                  key={index}
                  onClick={() => handleEventClick(event)}
                  className={`text-[10px] sm:text-xs bg-purple-100 text-purple-700 px-0.5 sm:px-1 py-0.5 rounded truncate group-hover:bg-purple-200 transition-colors ${
                    event.link
                      ? "cursor-pointer hover:bg-purple-300 hover:text-purple-800"
                      : ""
                  }`}
                  title={`${event.title} - ${event.description}${
                    event.link ? " (Click to open)" : ""
                  }`}
                >
                  {event.title}
                </div>
              ))}
              {events.length > 2 && (
                <div className="text-[10px] sm:text-xs text-purple-600 font-medium">
                  +{events.length - 2} more
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <TransitBackground backgroundIndex={3}>
      <div className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Events
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Stay connected with all Junior Caucus activities and important
              dates.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    Upcoming Events
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    What's coming next
                  </p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      onClick={() => handleEventClick(event)}
                      className={`bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-pink-200 transition-all duration-200 ${
                        event.link
                          ? "cursor-pointer hover:bg-white hover:shadow-md hover:border-pink-300 hover:scale-[1.02]"
                          : ""
                      }`}
                    >
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {event.title}
                        {event.link && (
                          <svg
                            className="inline-block ml-1 w-3 h-3 text-pink-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        )}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {event.date}
                      </p>
                      <p className="text-gray-700 text-xs sm:text-sm mt-2">
                        {event.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">
                    No upcoming events scheduled.
                  </p>
                )}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    Past Events
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Recent activities
                  </p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {pastEvents.length > 0 ? (
                  pastEvents.map((event, index) => (
                    <div
                      key={index}
                      onClick={() => handleEventClick(event)}
                      className={`bg-white/70 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200 transition-all duration-200 ${
                        event.link
                          ? "cursor-pointer hover:bg-white/80 hover:shadow-md hover:border-gray-300"
                          : ""
                      }`}
                    >
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {event.title}
                        {event.link && (
                          <svg
                            className="inline-block ml-1 w-3 h-3 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        )}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {event.date}
                      </p>
                      <p className="text-gray-700 text-xs sm:text-sm mt-2">
                        {event.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">
                    No past events to display.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Calendar */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-pink-100">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center sm:text-left">
                Event Calendar
              </h2>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-pink-100 hover:bg-pink-200 active:bg-pink-300 text-pink-600 transition-colors touch-manipulation"
                >
                  <span className="hidden sm:inline">← Previous</span>
                  <span className="sm:hidden">←</span>
                </button>
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 min-w-[140px] sm:min-w-[180px] text-center">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-pink-100 hover:bg-pink-200 active:bg-pink-300 text-pink-600 transition-colors touch-manipulation"
                >
                  <span className="hidden sm:inline">Next →</span>
                  <span className="sm:hidden">→</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50/80 to-purple-50/80 backdrop-blur-sm rounded-lg border border-pink-200 overflow-hidden">
              {/* Calendar Header */}
              <div className="grid grid-cols-7 bg-gradient-to-r from-pink-100 to-purple-100">
                {/* Desktop day names */}
                <div className="hidden sm:contents">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="p-2 sm:p-3 text-center font-semibold text-gray-700 border-r border-pink-200 last:border-r-0 text-sm"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                {/* Mobile short day names */}
                <div className="sm:hidden contents">
                  {dayNamesShort.map((day, index) => (
                    <div
                      key={day}
                      className="p-2 text-center font-semibold text-gray-700 border-r border-pink-200 last:border-r-0 text-xs"
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">{renderCalendar()}</div>
            </div>

            <div className="mt-4 sm:mt-6 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-pink-100 border border-pink-300 rounded mr-2"></span>
                  <span className="text-sm text-gray-600">Today</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-purple-100 rounded mr-2"></span>
                  <span className="text-sm text-gray-600">Events</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">
                Click on event titles to view more details
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
