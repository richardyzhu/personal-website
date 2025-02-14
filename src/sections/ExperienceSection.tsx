import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { FaReact, FaAws, FaNode } from "react-icons/fa";
import { RiNextjsFill, RiVuejsFill } from "react-icons/ri";
import {
  SiSelenium,
  SiRedux,
  SiApachecouchdb,
  SiPytorch,
  SiCplusplus,
} from "react-icons/si";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "University of Waterloo",
      location: "Waterloo, Canada",
      date: ["Jan 2025 - Present"],
      role: "Undergraduate Research Assistant",
      bulletPoints: [
        "Did research on *ML* applications in image compression and super-resolution under Prof. Zhou Wang.",
        "Used *PyTorch* to evaluate and benchmark state-of-the-art ML models on medical imaging datasets.",
      ],
      chips: [
        <span className="bg-[#EE4C2C] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiPytorch className="mr-2" /> PyTorch
        </span>,
        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiCplusplus className="mr-2 text-blue-200" /> C++
        </span>,
      ],
    },
    {
      company: "Jitto",
      date: ["Jan 2024 - May 2024", "Sep 2024 - Dec 2024"],
      role: "Full Stack Software Engineering Intern",
      bulletPoints: [
        "Refactored AWS DynamoDB schema using Python, resulting in a *99% reduction* in monthly AWS costs while ensuring scalability through a transition from relational to non-relational structure.",
        "Overhauled React frontend by building an internal component library based on RadixUI, resulting in a *90% reduction* in bundle size and *reducing load speeds* by up to *45%*.",
        "Wrote a Selenium-based Yellow Pages scraper to improve customer outreach, surpassing a previous scraper's coverage by *40%* and reducing its runtime by *50%*.",
      ],
      location: "Toronto, Canada",
      chips: [
        <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <RiNextjsFill className="mr-2" /> Next.js
        </span>,
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaReact className="mr-2" /> React
        </span>,
        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaAws className="mr-2" /> AWS
        </span>,
        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiSelenium className="mr-2" /> Selenium
        </span>,
      ],
    },
    {
      company: "Gelenk Networks",
      date: ["May 2023 - Sep 2023"],
      role: "Software Developer Intern",
      bulletPoints: [
        "Built an interactive chat application using *React*, *Node*, and *Socket.IO*, integrating with existing web interface to facilitate real-time communication and enhance user engagement.",
        "Developed multiple full-stack tools with *Vue* and *Node*, constructing *RESTful APIs*, integrating *CouchDB* for greater flexibility in data management, and utilizing *Vuetify* to create user-friendly frontends.",
        "Led the development of an AI Travel Planner, automatically generating and deploying itineraries as distinct webpages with a UUID-based URL, resulting in a *20% improvement* in SEO engagement.",
      ],
      location: "Markham, Canada",
      chips: [
        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <RiVuejsFill className="mr-2" /> Vue
        </span>,
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaReact className="mr-2" /> React
        </span>,
        <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiRedux className="mr-2" /> Redux
        </span>,
        <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <FaNode className="mr-2" /> Node.js
        </span>,
        <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
          <SiApachecouchdb className="mr-2" /> CouchDB
        </span>,
      ],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-800 to-gray-900 py-8 sm:py-12 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
