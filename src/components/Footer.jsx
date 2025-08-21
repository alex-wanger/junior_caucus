import React from "react";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const cabinetMembers = [
    { name: "Mufei Yu", position: "President" },
    { name: "Alex Wang", position: "IT Director" },
    { name: "Chloe Dech", position: "Graphics Director" },
  ];

  return (
    <footer className="mt-16 bg-white/80 backdrop-blur-sm border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Junior Caucus
            </h2>
            <p className="text-gray-600 mt-2">
              Website built by{" "}
              <a href="https://github.com/alex-wanger">Alex Wang</a> with design
              help from Mufei Yu and Chloe Dech.
            </p>
          </div>

          {/* Cabinet Members */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Designers
            </h3>
            <ul className="space-y-2">
              {cabinetMembers.map((member) => (
                <li
                  key={member.name}
                  className="font-bold text-gray-800 transition-colors duration-200 text-sm md:text-base cursor-pointer relative group"
                >
                  {member.name} –{" "}
                  <span className="font-medium text-gray-600">
                    {member.position}
                  </span>
                  {}
                  {member.name === "Alex Wang" && (
                    <span className="top-1/4 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-pink-500 font-bold whitespace-nowrap">
                      6...7
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/stuyjuniorcaucus/"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <Instagram className="w-12 h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
