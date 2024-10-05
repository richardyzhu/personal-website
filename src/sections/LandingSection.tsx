"use client";

import React, { useEffect, useState } from "react";
// import Typed from "react-typed";
import LinksSection from "./LinksSection";

const LandingSection = () => {
  const [charIndex, setCharIndex] = useState(0);

  const texts: string[] = [
    "Hello, I'm ",
    "Richard Zhu",
    "A third-year student at the ",
    "University of Waterloo ",
    "studying ",
    "CS/Stats",
    ".",
    "Previously at ",
    "Jitto ",
    "and ",
    "Gelenk Networks",
    ".",
  ];

  const calculateCharIndex = (index: number) => {
    return texts[index].substring(
      0,
      charIndex -
        texts.slice(0, index).reduce((acc, text) => acc + text.length, 0),
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCharIndex(charIndex + 1);
      console.log(charIndex);
      clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, [charIndex]);

  return (
    <div className="text-center sm:text-left">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
        {calculateCharIndex(0)}
        <span className="text-blue-400">{calculateCharIndex(1)}</span>
      </h1>
      <p className="text-md sm:text-xl md:text-2xl text-gray-300 mb-2 sm:mb-4">
        {calculateCharIndex(2)}
        <span className="text-yellow-400">{calculateCharIndex(3)}</span>
        {calculateCharIndex(4)}
        <span className="text-green-400">{calculateCharIndex(5)}</span>
        {calculateCharIndex(6)}
      </p>
      <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-4">
        {calculateCharIndex(7)}
        <span className="text-indigo-400">{calculateCharIndex(8)}</span>
        {calculateCharIndex(9)}
        <span className="text-indigo-400">{calculateCharIndex(10)}</span>
        {calculateCharIndex(11)}
      </p>

      <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-start">
        <LinksSection />
      </div>
    </div>
  );
};

export default LandingSection;
