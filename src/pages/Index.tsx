import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ROIMetricsSection from "@/components/ROIMetricsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import PilotFormSection from "@/components/PilotFormSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ROIMetricsSection />
      <IndustriesSection />
      <TrustSecuritySection />
      <PilotFormSection />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default Index;
