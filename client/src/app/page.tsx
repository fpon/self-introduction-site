import { PageTransition } from "@/components/PageTransition";
import { AboutSection } from "@/organisms/AboutSection";
import { ContactSection } from "@/organisms/ContactSection";
import { HeroSection } from "@/organisms/HeroSection";
import { WorksSection } from "@/organisms/WorksSection";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
    </PageTransition>
  );
}
