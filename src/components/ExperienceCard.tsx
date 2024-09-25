import { FaReact, FaAws, FaNode } from "react-icons/fa"; // Example icons

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  location: string;
  bulletPoints: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  date,
  location,
  bulletPoints,
}) => {
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
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xl font-semibold text-white">
          {company} - <span className="text-blue-400">{role}</span>
        </div>
        <div className="text-sm text-gray-400">{date}</div>
      </div>
      <div className="text-sm text-gray-400 italic mb-4">{location}</div>
      <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300 mb-4">
        {bulletPoints.map((item, index) => (
          <li key={index} className="text-base leading-6">
            {renderBulletPoint(item)}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3 justify-start items-center mt-4">
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaReact className="mr-2" /> React
        </span>
        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaAws className="mr-2" /> AWS
        </span>
        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaNode className="mr-2" /> Node.js
        </span>
      </div>
    </div>
  );
};

export default ExperienceCard;
