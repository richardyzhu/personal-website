"use client";
import React, { ReactNode, useState, useRef, useEffect } from "react";
import { MdOpenInNew } from "react-icons/md";

interface ProjectCardProps {
  title: string;
  image: string;
  bulletPoints: string[];
  chips: ReactNode[];
  awards?: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  bulletPoints,
  chips,
  awards,
  link,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "50px",
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const renderBulletPoint = (point: string) => {
    const parts = point.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <strong key={index} className="font-bold">
            {part.slice(1, -1)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div
      ref={cardRef}
      className={`
        bg-gradient-to-b from-gray-800 to-gray-900 
        rounded-2xl shadow-lg overflow-hidden
        transform transition-all duration-700 ease-out
        border border-gray-700
        ${
          isVisible
            ? "opacity-100 translate-y-0 hover:scale-[1.02] hover:shadow-2xl"
            : "opacity-0 translate-y-[100px]"
        }
      `}
    >
      <div className="relative h-48 sm:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            {awards && awards.length > 0 && (
              <div className="text-green-400 text-sm font-medium">
                {awards.join(", ")}
              </div>
            )}
          </div>

          {link && (
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-indigo-600 text-white font-semibold py-2 px-3 rounded-full 
                       transition duration-200 hover:bg-indigo-500 flex items-center space-x-2
                       mt-3 sm:mt-0"
            >
              <span>View Project</span>
              <MdOpenInNew />
            </button>
          )}
        </div>

        <ul className="list-disc list-outside space-y-2 pl-6 text-gray-300 mb-6">
          {bulletPoints.map((item, index) => (
            <li key={index} className="text-base leading-6">
              {renderBulletPoint(item)}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 justify-start items-center mt-4">
          {chips && chips.map((chip, index) => <div key={index}>{chip}</div>)}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
