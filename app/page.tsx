import ExperienceSection from "@/src/sections/ExperienceSection";
import NavBar from "@/src/components/NavBar";
import ProjectsSection from "@/src/sections/ProjectsSection";
import LinksSection from "@/src/sections/LinksSection";
import LandingSection from "@/src/sections/LandingSection";

export default function Home() {
  return (
    <div
      id="home"
      className="relative min-h-screen sm:p-8 pb-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-300"
    >
      {/* TODO: add animations ? portrait ? idk.... typing animation probably */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col gap-12 sm:gap-16 row-start-2 items-center sm:items-start w-full">
        <section className="flex flex-col sm:flex-row items-center justify-center sm:justify-start min-h-screen p-6 sm:p-10">
          {/* <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
              Hello, I'm <span className="text-blue-400">Richard Zhu</span>
            </h1>
            <p className="text-md sm:text-xl md:text-2xl text-gray-300 mb-2 sm:mb-4">
              A third-year student at the{" "}
              <span className="text-yellow-400">University of Waterloo</span>{" "}
              studying <span className="text-green-400">CS/Stats</span>.
            </p>
            <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-4">
              Previously at <span className="text-indigo-400">Jitto</span> and{" "}
              <span className="text-indigo-400">Gelenk Networks</span>.
            </p>

            <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-start">
              <LinksSection />
            </div>
          </div> */}
          <LandingSection />
        </section>

        <section
          className="w-full flex flex-col gap-10 sm:gap-16 p-6 sm:p-10"
          id="experience"
        >
          <ExperienceSection />
        </section>

        <section
          className="w-full flex flex-col gap-10 sm:gap-16 p-6 sm:p-10"
          id="projects"
        >
          <ProjectsSection />
        </section>
      </main>
    </div>
  );
}
