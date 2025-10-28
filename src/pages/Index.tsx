import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ROISection from "@/components/ROISection";
import DemoSection from "@/components/DemoSection";
import UseCasesSection from "@/components/UseCasesSection";
import PilotSection from "@/components/PilotSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ROISection />
      <DemoSection />
      <UseCasesSection />
      <PilotSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
