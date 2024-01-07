import { CareerSection } from "@/components/sections/career-section";
import { IntroSection } from "@/components/sections/intro-section";
import { MainProjectSection } from "@/components/sections/main-project-section";
import { ProjectSection } from "@/components/sections/project-section";
import "animate.css";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <CareerSection />
      <MainProjectSection />
      <ProjectSection />
    </main>
  );
}
