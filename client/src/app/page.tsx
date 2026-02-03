import { AboutSection } from "@/organisms/AboutSection";
import { ContactSection } from "@/organisms/ContactSection";
import { Footer } from "@/organisms/Footer";
import { Header } from "@/organisms/Header";
import { HeroSection } from "@/organisms/HeroSection";
import { WorksSection } from "@/organisms/WorksSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
