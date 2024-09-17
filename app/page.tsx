import ExperienceSection from "@/src/sections/ExperienceSection";
import NavBar from "@/src/components/NavBar";
import ProjectsSection from "@/src/sections/ProjectsSection";
import LinksSection from "@/src/sections/LinksSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-300">
      {/* <header>
    <NavBar />
  </header> */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full">
        <section className="flex items-center justify-start h-screen p-10">
          <div className="text-left">
            <h1 className="text-6xl font-bold text-white mb-4">
              Hello, I'm <span className="text-blue-400">Richard Zhu</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              A third-year student at the{" "}
              <span className="text-yellow-400">University of Waterloo</span>{" "}
              studying <span className="text-green-400">CS/Stats</span>.
            </p>
            <p className="text-xl text-gray-400">
              Previously at <span className="text-indigo-400">Jitto</span> and{" "}
              <span className="text-indigo-400">Gelenk Networks</span>.
            </p>

            <div className="mt-12 flex flex-row gap-8">
              <LinksSection />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col gap-16 p-10 bg-gray-800 rounded-xl shadow-md">
          <ExperienceSection />
          <ProjectsSection />
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-400 bg-gray-900 w-full p-6 rounded-xl shadow-md">
        © 2024 Richard Zhu. All rights reserved.
      </footer>
    </div>
  );
}
