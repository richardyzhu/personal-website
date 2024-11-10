import React, { ReactNode, useEffect, useRef, useState } from "react";

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string[];
  location: string;
  bulletPoints: string[];
  chips: ReactNode[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  date,
  location,
  bulletPoints,
  chips,
}) => {
  // TODO: maybe extract this functionality ?
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
        p-6 rounded-2xl shadow-lg
        transform transition-all duration-700 ease-out
        border border-gray-700
        ${
          isVisible
            ? "opacity-100 translate-y-0 hover:scale-105 hover:shadow-2xl"
            : "opacity-0 translate-y-[100px]"
        }
      `}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="text-xl font-semibold text-white">
          {company} - <span className="text-blue-400">{role}</span>
        </div>
        <div className="text-sm text-gray-400 hidden lg:block">
          {date.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
      <div className="text-sm text-gray-400 italic mb-4">{location}</div>
      <ul className="list-disc list-outside space-y-2 pl-6 text-gray-300 mb-4">
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
  );
};

export default ExperienceCard;
