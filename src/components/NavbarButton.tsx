import React from "react";

interface NavbarButtonProps {
  sectionName: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ sectionName }) => {
  return <div>{sectionName}</div>;
};

export default NavbarButton;
