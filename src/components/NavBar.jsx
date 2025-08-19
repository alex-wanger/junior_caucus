import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target)
      ) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const pages = {
    home: "Home",
    cabinet: "Cabinet",
    jprom: "JProm",
    events: "Events",
    contact: "Contact Information",
  };

  const resourceItems = [
    { name: "Study Guides", href: "/study-guides" },
    { name: "Course Guides", href: "/course-guides" },
    { name: "Caucus Newsletters", href: "/newsletters" },
    { name: "SYWTBA Articles", href: "/sywtba-articles" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="./../../SU.png"
              alt="Stuy logo"
              className="h-10 w-10 mr-3"
            />
            <h1 className="text-2xl font-bold bg-pink-500 bg-clip-text text-transparent">
              Junior Caucus
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {Object.entries(pages).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setCurrentPage(key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === key
                      ? "bg-gradient-to-r bg-pink-500 text-white"
                      : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  {label}
                </button>
              ))}

              <div className="relative" ref={resourcesRef}>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors duration-200"
                >
                  Resources
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isResourcesOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    {resourceItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors duration-200"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(pages).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentPage(key);
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === key
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                }`}
              >
                {label}
              </button>
            ))}

            <div className="px-3 py-2">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Resources
              </div>
              {resourceItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-pink-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
