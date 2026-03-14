import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSummary from "@/components/AboutSummary";
import ComplianceSection from "@/components/ComplianceSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Top RERA Consultants in Bangalore | Expert Registration & Compliance",
  description: "Get your real estate projects RERA-registered with zero friction. Pooja Gowda M & Associates provides expert RERA consultancy, audits, and legal services in Bangalore and Karnataka.",
};
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RERA Consultants by Pooja Gowda M",
    "image": "https://rerabypooja.com/rera-logo.png",
    "@id": "https://rerabypooja.com",
    "url": "https://rerabypooja.com",
    "telephone": "+917691030591",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jayanagar 2nd Block",
      "addressLocality": "Bangalore",
      "addressRegion": "KA",
      "postalCode": "560011",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9341,
      "longitude": 77.5843
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://rerabypooja.com"
    ]
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
