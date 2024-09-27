import ProjectCard from "../components/ProjectCard";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "MotiSpectra",
      image: "/images/motispectra.png",
      bulletPoints: [
        "Developed a real-time attentiveness and emotion analysis software using Next.js and Python to seamlessly integrate with virtual call platforms (Zoom, Google Meet, MS Teams).",
        "Trained a CNN on the FER-2013 dataset using TensorFlow to achieve a 70% accuracy, used data augmentation and ensemble learning to train a separate model on an attentiveness dataset, achieving a 67% accuracy",
      ],
      chips: [],
      awards: ["2nd Overall at ConUHacks VIII"],
    },
    {
      title: "NarratorRL",
      image: "/images/narratorrl.png",
      bulletPoints: [
        "Built a mobile app using React Native, Django, and Tesseract OCR that detects words in images and provides audio narration, empowering individuals with visual impairments.",
        "Implemented advanced features with the Cohere API including text summarization and language detection. Trained two custom NLP models to verify the legibility of text and to summarize text into keywords.",
      ],
      chips: [],
      awards: ["1st Place Cohere Challenge, 2nd Overall at MetHacks"],
    },
    {
      title: "Review Recap",
      image: "/images/reviewrecap.png",
      bulletPoints: [
        "Built a Chrome extension in JavaScript for Amazon product pages to help users make informed decisions.",
        "Implemented multi-threading with Beautiful Soup in Python to scrape 5000+ reviews in seconds.",
        "Cached results using a RESTful Django backend.",
      ],
      chips: [],
      awards: ["1st Place Noibu Challenge at uOttaHack V"],
    },
    {
      title: "Coming Soon...",
      image: "/images/wip.png",
      bulletPoints: [],
      chips: [],
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
