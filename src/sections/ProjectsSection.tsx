// TODO: addd more projects and a tiny project card for the smaller projects

import ProjectCard from "../components/ProjectCard";
import { RiNextjsFill } from "react-icons/ri";
import { SiTensorflow, SiDjango } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "MotiSpectra",
      image: "/images/motispectra.png",
      bulletPoints: [
        "Developed a real-time attentiveness and emotion analysis software using *Next.js* and *Python* to seamlessly integrate with virtual call platforms (Zoom, Google Meet, MS Teams).",
        "Trained a *CNN* on the FER-2013 dataset using *TensorFlow* to achieve a *70% accuracy*, used data augmentation and ensemble learning to train a separate model on an attentiveness dataset, achieving a *67% accuracy*.",
      ],
      chips: [
        <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <RiNextjsFill className="mr-2" /> Next.js
        </span>,
        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiTensorflow className="mr-2" /> Tensorflow
        </span>,
      ],
      awards: ["2nd Overall at ConUHacks VIII"],
      link: "https://devpost.com/software/motispectra",
    },
    {
      title: "NarratorRL",
      image: "/images/narratorrl.png",
      bulletPoints: [
        "Built a mobile app using *React Native*, *Django*, and *Tesseract OCR* that detects words in images and provides audio narration, empowering individuals with visual impairments.",
        "Implemented advanced features with the Cohere API including text summarization and language detection. Trained two custom NLP models to verify the legibility of text and to summarize text into keywords.",
      ],
      chips: [
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <TbBrandReactNative className="mr-2" /> React Native
        </span>,
        <span className="bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiDjango className="mr-2" /> Django
        </span>,
      ],
      awards: ["1st Place Cohere Challenge, 2nd Overall at MetHacks"],
      link: "https://devpost.com/software/narratorrl",
    },
    {
      title: "Review Recap",
      image: "/images/reviewrecap.png",
      bulletPoints: [
        "Built a Chrome extension in *JavaScript* for Amazon product pages to help users make informed decisions.",
        "Implemented multi-threading with *Beautiful Soup* in Python to scrape *5000+ reviews in seconds*.",
        "Cached results using a RESTful *Django* backend.",
      ],
      chips: [
        <span className="bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiDjango className="mr-2" /> Django
        </span>,
        <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <IoLogoJavascript className="mr-2" /> JavaScript
        </span>,
      ],
      awards: ["1st Place Noibu Challenge at uOttaHack V"],
      link: "https://devpost.com/software/bob-gj5h29",
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
