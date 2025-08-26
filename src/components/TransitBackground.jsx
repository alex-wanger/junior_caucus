import React, { useState, useEffect } from "react";

const TransitBackground = ({
  children,
  overlayOpacity = "85",
  backgroundIndex = null,
}) => {
  const [currentBackground, setCurrentBackground] = useState(0);

  // Array of 6 different background images
  const backgrounds = [
    "/backgrounds/background.png",
    "/backgrounds/background2.png",
    "/backgrounds/background3.png",
    "/backgrounds/background4.png",
    "/backgrounds/background5.png",
    "/backgrounds/background6.png",
  ];

  useEffect(() => {
    if (backgroundIndex !== null) {
      // Use specific background if index is provided
      setCurrentBackground(backgroundIndex % backgrounds.length);
    }
  }, [backgroundIndex, backgrounds.length]);

  return (
    <div className="min-h-screen relative">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgrounds[currentBackground]}')`,
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
