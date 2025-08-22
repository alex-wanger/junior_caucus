import React from "react";

const TransitBackground = ({ children, overlayOpacity = "85" }) => {
  return (
    <div className="min-h-screen relative">
      {}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/transit.png')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default TransitBackground;
