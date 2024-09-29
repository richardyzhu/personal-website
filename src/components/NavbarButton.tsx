"use client";

import React from "react";

interface NavbarButtonProps {
  sectionName: string;
  scrollTarget: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  sectionName,
  scrollTarget,
}) => {
  const handleClick = () => {
    const section = document.getElementById(scrollTarget);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="hover:text-gray-300 transition-colors duration-200 text-lg font-semibold"
      onClick={handleClick}
    >
      {sectionName}
    </button>
  );
};

export default NavbarButton;
