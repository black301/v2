import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { EquipmentSection } from "@/components/equipment-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { MapSection } from "@/components/map-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FixedContactBar } from "@/components/fixed-contact-bar";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <EquipmentSection />
      <FeaturedProjects />
      <MapSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
      <FixedContactBar />
      <BackToTop />
    </main>
  );
}
