import ProjectCard from "../components/ProjectCard";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "AI Chatbot",
      image: "/api/placeholder/400/300",
      bulletPoints: [
        "Developed using OpenAI's GPT-3 API",
        "Implemented context-aware responses",
        "Integrated with Discord for easy access",
      ],
    },
    {
      title: "E-commerce Platform",
      image: "/api/placeholder/400/300",
      bulletPoints: [
        "Built with React and Node.js",
        "Integrated Stripe for secure payments",
        "Implemented responsive design for mobile users",
      ],
    },
    {
      title: "Data Visualization Dashboard",
      image: "/api/placeholder/400/300",
      bulletPoints: [
        "Created using D3.js and React",
        "Real-time data updates via WebSocket",
        "Customizable charts and graphs",
      ],
    },
    {
      title: "Mobile Fitness App",
      image: "/api/placeholder/400/300",
      bulletPoints: [
        "Developed with React Native",
        "Integrated with health tracking APIs",
        "Implemented gamification features for user engagement",
      ],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
