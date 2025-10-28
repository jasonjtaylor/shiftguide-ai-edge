import { AlertCircle, Clock, Phone, XCircle } from "lucide-react";
import problemImage from "@/assets/problem-image.jpg";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Phone,
      text: "Workers call supervisors for every issue",
    },
    {
      icon: Clock,
      text: "Supervisors spend 60% of time answering basic questions",
    },
    {
      icon: AlertCircle,
      text: "Critical documentation happens days later (if at all)",
    },
    {
      icon: XCircle,
      text: "Same problems repeat because knowledge isn't captured",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={problemImage}
                alt="Worker with idle machine"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Downtime Costs Manufacturers{" "}
                <span className="text-secondary">$260,000 an Hour</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Most incidents still follow a 1970s workflow — call, wait, guess,
                repeat.
              </p>
            </div>

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground pt-2">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="inline-block px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
                <p className="text-sm text-destructive font-semibold">
                  The old way doesn't scale. There's a better path forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
