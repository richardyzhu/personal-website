import React from "react";
import NavbarButton from "./NavbarButton";



const NavBar: React.FC = () => {
    return (
        <div className="flex flex-row">
            <NavbarButton sectionName={"Home"} />
            <NavbarButton sectionName={"Experience"} />
            <NavbarButton sectionName={"Projects"} />
        </div>
    );
}

export default NavBar;