import React from "react";
import ExperienceCard from "../components/ExperienceCard";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "Jitto",
      date: "Jan 2024 - May 2024 ⠀⠀ Sep 2024 - Dec 2024",
      role: "Full Stack Software Engineering Intern",
      bulletPoints: [
        "Refactored *AWS DynamoDB* schema using Python, resulting in a 99% reduction in monthly AWS costs while ensuring scalability through a transition from relational to non-relational structure.",
        "Overhauled React frontend by building an internal component library based on RadixUI, resulting in a 90% reduction in bundle size and reducing load speeds by up to 45%.",
        "Wrote a Selenium-based Yellow Pages scraper to improve customer outreach, surpassing a previous scraper's coverage by 40% and reducing its runtime by 50%.",
      ],
      location: "Toronto, Canada",
    },
    {
      company: "Gelenk Networks",
      date: "May 2023 - Sep 2023",
      role: "Software Developer Intern",
      bulletPoints: [
        "Built an interactive chat application using React, Node, and Socket.IO, integrating with existing web interface to facilitate real-time communication and enhance user engagement.",
        "Developed multiple full-stack tools with Vue and Node, constructing RESTful APIs, integrating CouchDB for greater flexibility in data management, and utilizing Vuetify to create user-friendly frontends.",
        "Led the development of an AI Travel Planner, automatically generating and deploying itineraries as distinct webpages with a UUID-based URL, resulting in a 20% improvement in SEO engagement.",
      ],
      location: "Markham, Canada",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-800 to-gray-900 py-12 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
