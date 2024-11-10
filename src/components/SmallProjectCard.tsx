"use client";
import { MdOpenInNew } from "react-icons/md";
import React, { ReactNode, useState, useRef, useEffect } from "react";

interface SmallProjectCardProps {
  title: string;
  image: string;
  bulletPoints: string[];
  chips: ReactNode[];
  link?: string;
}

const SmallProjectCard: React.FC<SmallProjectCardProps> = ({
  title,
  image,
  bulletPoints,
  chips,
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
        bg-gray-800 rounded-lg shadow-md border border-gray-700 
        overflow-hidden flex flex-col
        transform transition-all duration-700 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 hover:shadow-lg hover:scale-105"
            : "opacity-0 translate-y-[50px]"
        }
      `}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </div>
      <div className="py-4 px-6 flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          {link && (
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-indigo-600 text-white font-semibold py-2 px-3 rounded-full 
                       transition duration-200 hover:bg-indigo-500 flex items-center space-x-2"
            >
              <MdOpenInNew />
            </button>
          )}
        </div>
        <hr className="border-gray-600 my-2" />
        <ul className="list-disc list-outside space-y-1 text-gray-300">
          {bulletPoints.map((item, index) => (
            <li key={index} className="text-sm leading-relaxed">
              {renderBulletPoint(item)}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 justify-start items-center mt-3 px-4 pb-4">
        {chips && chips.map((chip, index) => <div key={index}>{chip}</div>)}
      </div>
    </div>
  );
};

export default SmallProjectCard;
