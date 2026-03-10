import HeroSection from "@/components/HeroSection";
import AboutSummary from "@/components/AboutSummary";
import ComplianceSection from "@/components/ComplianceSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <HeroSection />
      <AboutSummary />
      <ComplianceSection />
      <ProjectCarousel />
      <TestimonialsSection />
      <StatsCounter />
      <Footer />
    </main>
  );
}
