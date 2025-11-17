import { HeroSection } from "./components/hero-section";
import { LongVideoProjects } from "./components/long-video-projects";
import { ShortsVideoProjects } from "./components/shorts-video-projects";
import { CaseStudies } from "./components/case-studies";
import { ClientsSection } from "./components/clients-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { AboutSection } from "./components/about-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { FloatingDoodles } from "./components/floating-doodles";
import { HorizontalProjects } from "./components/horizontal-projects";
import { MarqueeTestimonials } from "./components/marquee-testimonials";
import { ProcessTimeline } from "./components/process-timeline";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden scroll-smooth">
      <Header />
      <FloatingDoodles />
      <main>
        <HeroSection />
        <HorizontalProjects />
        <ProcessTimeline />
        <LongVideoProjects />
        <ShortsVideoProjects />
        <CaseStudies />
        <MarqueeTestimonials />
        <ClientsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}