import { AboutSection } from "@/components/organisms/AboutSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { WorksSection } from "@/components/organisms/WorksSection";
import { PageTransition } from "@/components/PageTransition";

const Home = () => {
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
};

export default Home;
