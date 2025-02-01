"use client";

import React, { useEffect, useState } from "react";
// import Typed from "react-typed";
import LinksSection from "./LinksSection";

interface LandingSectionProps {
  onTypingComplete: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({
  onTypingComplete,
}) => {
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showLinks, setShowLinks] = useState(false);

  const texts = [
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
    ". ",
  ];

  const calculateCharIndex = (index: number) => {
    return texts[index].substring(
      0,
      charIndex -
        texts.slice(0, index).reduce((acc, text) => acc + text.length, 0),
    );
  };

  useEffect(() => {
    const firstLineCutoff = texts[0].length + texts[1].length;
    const secondLineCutoff =
      texts[0].length +
      texts[1].length +
      texts[2].length +
      texts[3].length +
      texts[4].length +
      texts[5].length +
      texts[6].length;

    let delay = charIndex > firstLineCutoff ? 30 : 50;
    const totalLength = texts.reduce((acc, text) => acc + text.length, 0);

    if (charIndex == firstLineCutoff || charIndex == secondLineCutoff) {
      delay = 300;
    }

    if (charIndex < totalLength) {
      const intervalId = setInterval(() => {
        setCharIndex(charIndex + 1);
        clearInterval(intervalId);
      }, delay);

      return () => clearInterval(intervalId);
    } else {
      setShowLinks(true);
      onTypingComplete();
    }
  }, [charIndex, texts]);

  useEffect(() => {
    if (window.innerWidth > 430) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    } else {
      setShowCursor(false);
    }
  }, []);

  const getCursorPosition = () => {
    let totalChars = 0;
    for (let i = 0; i < texts.length; i++) {
      totalChars += texts[i].length;
      if (charIndex <= totalChars) {
        return i;
      }
    }
    return texts.length - 1;
  };

  const cursor = showCursor ? "|" : "";
  const cursorLine = getCursorPosition();

  return (
    <div className="text-center sm:text-left">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
        {calculateCharIndex(0)}
        <span className="text-blue-400">{calculateCharIndex(1)}</span>
        {cursorLine <= 1 && cursor}
      </h1>
      <p className="text-md sm:text-xl md:text-2xl text-gray-300 mb-2 sm:mb-4">
        {calculateCharIndex(2)}
        <span className="text-yellow-400">{calculateCharIndex(3)}</span>
        {calculateCharIndex(4)}
        <span className="text-green-400">{calculateCharIndex(5)}</span>
        {calculateCharIndex(6)}
        {cursorLine > 1 && cursorLine <= 6 && cursor}
      </p>
      <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-4">
        {calculateCharIndex(7)}
        <span className="text-indigo-400">{calculateCharIndex(8)}</span>
        {calculateCharIndex(9)}
        <span className="text-indigo-400">{calculateCharIndex(10)}</span>
        {calculateCharIndex(11)}
        {cursorLine > 6 && cursor}
      </p>

      <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-start">
        <div
          className={`transition-opacity duration-500 ${
            showLinks ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!showLinks}
        >
          <LinksSection />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
