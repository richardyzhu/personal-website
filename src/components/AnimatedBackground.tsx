import React, { useState, useEffect, ReactElement } from "react";

interface AnimatedBackgroundProps {
  children: ReactElement;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradientStyle = {
    background: `
      radial-gradient(
        circle at ${mousePosition.x}% ${mousePosition.y}%, 
        rgba(59, 130, 246, 0.15) 0%,
        rgba(0, 0, 0, 0) 35%
      ),
      linear-gradient(
        to bottom right,
        rgb(17, 24, 39),
        rgb(31, 41, 55),
        rgb(0, 0, 0)
      )
    `,
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 transition-all duration-300 ease-out"
        style={gradientStyle}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
