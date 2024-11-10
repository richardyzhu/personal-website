"use client";

import React, { useState, useEffect } from "react";
import ExperienceSection from "@/src/sections/ExperienceSection";
import NavBar from "@/src/components/NavBar";
import ProjectsSection from "@/src/sections/ProjectsSection";
import LandingSection from "@/src/sections/LandingSection";
import AnimatedBackground from "@/src/components/AnimatedBackground";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const onTypingComplete = () => {
    setShowContent(true);
  };

  useEffect(() => {
    if (!showContent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showContent]);

  return (
    <AnimatedBackground>
      <div
        id="home"
        className="relative min-h-screen sm:p-8 pb-20 font-[family-name:var(--font-geist-sans)]"
      >
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <header
          className={`transition-opacity duration-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!showContent}
        >
          <NavBar />
        </header>
        <main className="flex flex-col gap-12 sm:gap-16 row-start-2 items-center sm:items-start w-full">
          <section className="flex flex-col sm:flex-row items-center justify-center sm:justify-start min-h-screen p-6 sm:p-10">
            <LandingSection onTypingComplete={onTypingComplete} />
          </section>

          <section
            className={`w-full flex flex-col gap-10 sm:gap-16 p-6 sm:p-10 transition-all duration-500 ${
              showContent
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
            id="experience"
            aria-hidden={!showContent}
          >
            <ExperienceSection />
          </section>

          <section
            className={`w-full flex flex-col gap-10 sm:gap-16 p-6 sm:p-10 transition-all duration-500 ${
              showContent
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
            id="projects"
            aria-hidden={!showContent}
          >
            <ProjectsSection />
          </section>
        </main>
      </div>
    </AnimatedBackground>
  );
}
