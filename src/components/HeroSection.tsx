import { Button } from "@/components/ui/button";
import { Cog, Brain, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Industrial control room"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Animated Pulse Wave */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Cog
          className="absolute top-1/4 left-1/4 text-primary/30 animate-float"
          size={48}
          style={{ animationDelay: "0s" }}
        />
        <Brain
          className="absolute top-1/3 right-1/4 text-accent/30 animate-float"
          size={56}
          style={{ animationDelay: "1s" }}
        />
        <Wrench
          className="absolute bottom-1/3 left-1/3 text-secondary/30 animate-float"
          size={40}
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Built by operators.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powered by AI.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            ShiftGuide is the voice-first co-pilot for frontline teams—guiding troubleshooting, safety, and documentation in real time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("demo")}
              className="text-lg px-8 py-6 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all"
            >
              See 30-sec demo
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("pilot")}
              className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-white hover:opacity-90 transition-opacity text-lg px-8 py-6 glow-effect-orange shadow-lg shadow-secondary/30"
            >
              Start a 90-day pilot
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>Trusted by forward-thinking manufacturers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
