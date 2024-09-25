import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  bulletPoints: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  bulletPoints,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
