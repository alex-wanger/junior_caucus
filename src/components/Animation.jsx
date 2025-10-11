import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const LoadingAnimation = ({ onAnimationComplete }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const stepDuration = duration / steps;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onAnimationComplete(), 300);
          return 100;
        }
        return prev + 1;
      });
    }, stepDuration);
    return () => clearInterval(timer);
  }, [onAnimationComplete]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-purple-200 px-4"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-12 md:mb-20"
      >
        <div className="h-70 w-90 sm:h-80 sm:w-96 md:h-96 md:w-[36rem] mx-auto overflow-hidden mb-4">
          <img
            src="juniorcaucus.webp"
            className="w-full h-full object-contain"
            alt="Junior Caucus Logo"
          />
        </div>
        <p className="text-3xl sm:text-4xl md:text-5xl text-white tracking-widest font-light">
          JUNIOR CAUCUS
        </p>
      </motion.div>
      {/* Progress bar container */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "80%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative max-w-xs w-full"
      >
        <div className="w-full h-2 md:h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="h-full bg-white rounded-full shadow-lg"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        {/* Progress percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2"
        >
          <span className="text-white text-xs md:text-sm font-medium">
            {progress}%
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default LoadingAnimation;
