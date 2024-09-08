
import ExperienceSection from "@/src/components/ExperienceSection";
import NavBar from "@/src/components/NavBar";
import ProjectsSection from "@/src/components/ProjectsSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header><NavBar /></header>
        

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section>
        <div>
          Hello, I'm Richard Zhu
        </div>
        <div>
          a third-year at the University of Waterloo studying CS/Stats.
        </div>
        <div>
          Previously at Jitto and Gelenk Networks.
        </div>
        </section>
        <section>
          <ExperienceSection />
          <ProjectsSection />
        </section>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        this is a footer
      </footer>
    </div>
  );
}
