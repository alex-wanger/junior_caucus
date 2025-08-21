import React, { useState } from "react";
import TransitBackground from "../components/TransitBackground";
import Footer from "../components/Footer";

const CabinetPage = () => {
  const cabinetMembers = [
    {
      name: "Mufei Yu",
      position: "President",
      image: "/mufei.png",
    },
    {
      name: "Mitali Jhaveri",
      position: "Co-President",
      image: "/mitali.png",
    },
    {
      name: "Mace Elinson",
      position: "Chief of Staff",
      image: "/IMG_7655 - Mace Elinson.jpeg",
    },
    {
      name: "Adrien Devery-Michaelson",
      position: "Chief of Staff",
      image: "/images/cabinet/sam-thompson.jpg",
    },
    {
      name: "Abbie Lian",
      position: "Internals Director",
      image: "/IMG_3875 - Abbie Lian.jpeg",
    },
    {
      name: "Alex Wang",
      position: "IT Director",
      image: "wang.png",
    },
    {
      name: "Amani Kaushal",
      position: "Outreach Director",
      image: "/IMG_9338 - Amani Kaushal.jpeg",
    },
    {
      name: "Chloe Dech",
      position: "Graphics Director",
      image: "/IMG_8123 - Chloe Dech.jpeg",
    },
    {
      name: "Dylan Lonsk",
      position: "Finance Director",
      image: "/IMG_7841_HEIC - Dylan Lonsk.jpeg",
    },
    {
      name: "Edwin Gelman",
      position: "Finance Director",
      image: "/Edwin Gelman profile picture - Edwin Gelman.jpg",
    },
    {
      name: "Luca Nedelkovic",
      position: "Events Director",
      image: "/IMG_6989 - Luca Nedelkovic.jpeg",
    },
    {
      name: "Marc Haddad",
      position: "Internals Director",
      image: "/IMG_2307 - Marc Haddad.jpeg",
    },
    {
      name: "Rachel Liu",
      position: "Outreach Director",
      image: "/IMG_1648 - Rachel Liu.jpeg",
    },
    {
      name: "Saarah Jawfer",
      position: "Events Director",
      image: "/Saarah Jawfer.jpeg",
    },
    {
      name: "Sophia Chen",
      position: "Finance Director",
      image: "/IMG_8939 - Sophia Chen.jpg",
    },
    {
      name: "Wenxin Zhang",
      position: "Graphics Director",
      image: "/IMG_0925 - Wen Xin Zhang.jpeg",
    },
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  // Avatar component with fallback logic
  const Avatar = ({ name, image }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-200 flex items-center justify-center bg-gray-200 text-gray-700 font-bold text-xl">
        {!imgError && image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          getInitials(name)
        )}
      </div>
    );
  };

  return (
    <TransitBackground>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Our Cabinet
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the dedicated leaders working tirelessly to make junior year
              memorable and meaningful for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cabinetMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-pink-100"
              >
                <div className="text-center">
                  <Avatar name={member.name} image={member.image} />
                  <h3 className="font-bold text-xl text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 font-semibold mb-2 text-sm">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </TransitBackground>
  );
};

export default CabinetPage;
