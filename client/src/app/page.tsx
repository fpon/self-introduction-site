import { BrainsAboutSection } from "@/components/brains/brains-about-section";
import { BrainsContactSection } from "@/components/brains/brains-contact-section";
import { BrainsHeroSection } from "@/components/brains/brains-hero-section";
import { BrainsWorksSection } from "@/components/brains/brains-works-section";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <BrainsHeroSection />
        <BrainsWorksSection />
        <BrainsAboutSection />
        <BrainsContactSection />
      </main>
    </PageTransition>
  );
}
