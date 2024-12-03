"use client";
import React, { useEffect, useState } from "react";
import { BaseInfo } from "../../../../Data/data";

const positions = [
  "I am frontend developer",
  "Interface Developer",
  "Code Ninja",
  "Design Dreamer",
];

const Hero = () => {
  const [currentPosition, setCurrentPosition] = useState(positions[0]);
  const [fade, setFade] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        index = (index + 1) % positions.length;
        setCurrentPosition(positions[index]);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 pt-10"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mb-4">
          {BaseInfo.greetings}
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-2">
          {BaseInfo.name}
        </h2>
        <h3
          className={`text-lg sm:text-2xl md:text-4xl text-blue-400 font-semibold mb-6 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
            }`}
        >
          {currentPosition}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          {BaseInfo.description}
        </p>
        <button
          onClick={() => scrollToSection("about")}
          className="py-3 px-6 sm:px-8 text-base sm:text-lg font-medium bg-blue-500 text-white rounded-full 
          shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          About Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
