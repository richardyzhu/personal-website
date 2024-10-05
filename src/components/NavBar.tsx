import React from "react";
import NavbarButton from "./NavbarButton";

const NavBar: React.FC = () => {
  return (
    <div className="fixed top-0 sm:right-0 flex sm:w-auto space-x-4 sm:space-x-8 px-4 sm:px-8 py-2 sm:py-4 text-white z-50 shadow-md">
      <NavbarButton sectionName="Home" scrollTarget="home" />
      <NavbarButton sectionName="Experience" scrollTarget="experience" />
      <NavbarButton sectionName="Projects" scrollTarget="projects" />
    </div>
  );
};

export default NavBar;
