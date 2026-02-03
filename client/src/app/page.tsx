import { AboutSection } from "@/organisms/AboutSection";
import { ContactSection } from "@/organisms/ContactSection";
import { Footer } from "@/organisms/Footer";
import { Header } from "@/organisms/Header";
import { HeroSection } from "@/organisms/HeroSection";
import { ManagementSection } from "@/organisms/ManagementSection";
import { PhilosophySection } from "@/organisms/PhilosophySection";
import { WorksSection } from "@/organisms/WorksSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <PhilosophySection />
        <ManagementSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
