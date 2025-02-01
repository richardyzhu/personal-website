// TODO: addd more projects and a tiny project card for the smaller projects

import ProjectCard from "../components/ProjectCard";
import SmallProjectCard from "../components/SmallProjectCard"; // Import the new component
import { RiNextjsFill } from "react-icons/ri";
import { SiTensorflow, SiDjango, SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJupyter, SiPytorch, SiFlask } from "react-icons/si";
import { SiAppwrite } from "react-icons/si";
import { FcScatterPlot } from "react-icons/fc";
import { FaAws } from "react-icons/fa";
import { SiTwilio } from "react-icons/si";

const ProjectsSection: React.FC = () => {
  const bigProjects = [
    {
      title: "AI 2048 Player",
      image: "/images/ai2048.jfif",
      bulletPoints: [
        "Built AI models using *PyTorch* to play the game 2048, experimenting with algorithms like *DQN* and *NEAT*.",
        "Deployed to a web application using *Flask* and *React*, allowing users to watch the AI play in real time.",
        "Implemented real-time communication using *WebSockets* to synchronize gameplay updates with the frontend.",
      ],
      chips: [
        <span className="bg-[#EE4C2C] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiPytorch className="mr-2" /> PyTorch
        </span>,
        <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <RiNextjsFill className="mr-2" /> Next.js
        </span>,
        <span className="bg-[#003545] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiFlask className="mr-2" /> Flask
        </span>,
      ],
      awards: [],
      link: "https://ai-2048-player.vercel.app/",
    },
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
  ];

  const smallProjects = [
    {
      title: "QuizCaster",
      image: "/images/quizcaster.png",
      bulletPoints: [
        "Created a dynamic quiz app with *Next.js* and OpenAI APIs.",
        "Trained a *Naïve-Bayes* model to format text with Wikipedia data.",
        "Implement *caching* using a *MongoDB* database.",
      ],
      chips: [
        <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <RiNextjsFill className="mr-2" /> Next.js
        </span>,
        <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiMongodb className="mr-2" /> MongoDB
        </span>,
      ],
      link: "https://devpost.com/software/quizcaster",
    },
    {
      title: "GPT George",
      image: "/images/gptgeorge.png",
      bulletPoints: [
        "Developed a *personalized AI voice assistant* using OpenAI.",
        "Used *WhisperAI* and *Microsoft Azure* for *speech-to-text*, and *HumeAI* for emotion detection.",
      ],
      chips: [
        <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaPython className="mr-2" /> Python
        </span>,
        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiMicrosoftazure className="mr-2" /> Azure
        </span>,
      ],
      link: "https://devpost.com/software/gpt-george",
    },
    {
      title: "Chess",
      image: "/images/chess.jpg",
      bulletPoints: [
        "Made chess in *C++* for an Object Oriented Programming course.",
        "Leveraged techniques like safe pointers and exception handling.",
      ],
      chips: [
        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiCplusplus className="mr-2 text-blue-200" /> C++
        </span>,
      ],
      link: "https://github.com/sammyyyyy1/chess-cs246",
    },
    {
      title: "Cell Classifier",
      image: "/images/cellclassification.png",
      bulletPoints: [
        "Developed a machine learning model with *TensorFlow* to classify diseased cells.",
        "Implemented a *CNN* based on the EfficientNetB0 architecture, achieving *94%* test accuracy.",
      ],
      chips: [
        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiTensorflow className="mr-2 text-orange-200" /> TensorFlow
        </span>,
        <span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiJupyter className="mr-2 text-orange-300" /> Jupyter
        </span>,
      ],
      link: "https://github.com/richardyzhu/ml-cell-classification",
    },
    {
      title: "Quiztopia",
      image: "/images/quiztopia.png",
      bulletPoints: [
        "Built a trivia game mobile application using *React Native*.",
        "Used *AppWrite* to implement *JWT Authentication*.",
        "Implemented a global leaderboard using *MongoDB*.",
      ],
      chips: [
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <TbBrandReactNative className="mr-2" /> React Native
        </span>,
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiAppwrite className="mr-2 text-blue-200" /> AppWrite
        </span>,
      ],
      link: "https://devpost.com/software/quiztopia",
    },
    {
      title: "WLP4 Compiler",
      image: "/images/compiler.jpg",
      bulletPoints: [
        "Developed a compiler for a language similar to *C++* as part of a *Compilers* course.",
        "Used CFGs and bottom-up parsing to define syntax and generate MIPS assembly code.",
      ],
      chips: [
        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiCplusplus className="mr-2 text-blue-200" /> C++
        </span>,
      ],
    },
    {
      title: "GridWorld RL",
      image: "/images/gridworld.png",
      bulletPoints: [
        "Experimented with various *Reinforcement Learning* algorithms (Q-learning, SARSA, etc) on a GridWorld environment as part of an RL course.",
        "Used *Matplotlib* for analysis.",
      ],
      chips: [
        <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaPython className="mr-2" /> Python
        </span>,
        <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FcScatterPlot className="mr-2 text-white" /> Matplotlib
        </span>,
      ],
    },
    {
      title: "AWS Lambda Utilities",
      image: "/images/notifier.jpg",
      bulletPoints: [
        "Built daily notifiers using *AWS Lambda* for class openings, menus, and weather.",
        "Integrated *Twilio* for notifications and *EventBridge* for event-driven messaging.",
      ],
      chips: [
        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaAws className="mr-2 text-white" /> AWS
        </span>,
        <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiTwilio className="mr-2 text-white" /> Twilio
        </span>,
      ],
    },
    {
      title: "Coming soon...",
      image: "/images/wip.png",
      bulletPoints: [],
      chips: [],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-8 sm:py-16 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bigProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {smallProjects.map((project, index) => (
            <SmallProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
