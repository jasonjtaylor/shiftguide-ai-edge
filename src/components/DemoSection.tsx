import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm group-hover:bg-background/30 transition-all">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform glow-effect">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-semibold">
                    ShiftGuide in Action: 30-Second Demo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              See ShiftGuide{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                in Action
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Watch how ShiftGuide resolves a conveyor issue in{" "}
              <span className="text-secondary font-semibold">4 minutes flat</span>{" "}
              — from first alert to logged fix.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">
                  <span className="font-semibold">Voice-activated:</span> Worker
                  describes the problem naturally
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">
                  <span className="font-semibold">AI diagnosis:</span> Instant
                  analysis with step-by-step guidance
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">
                  <span className="font-semibold">Auto-documentation:</span>{" "}
                  Complete incident report generated automatically
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
              >
                Request Live Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
