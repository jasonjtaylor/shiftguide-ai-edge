import { Mic, FileText, TrendingUp } from "lucide-react";
import solutionImage from "@/assets/solution-image.jpg";

const SolutionSection = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice-First Guidance",
      description: "Workers speak naturally, AI responds instantly with step-by-step instructions",
    },
    {
      icon: FileText,
      title: "Auto Documentation",
      description: "Every fix auto-logged for audits and compliance—no paperwork required",
    },
    {
      icon: TrendingUp,
      title: "Learning System",
      description: "AI improves from each interaction, building institutional knowledge",
    },
  ];

  return (
    <section id="solution" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Your Workers.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Empowered by AI.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ShiftGuide puts AI expertise in every worker's pocket
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Image */}
        <div className="relative rounded-2xl overflow-hidden border border-border max-w-5xl mx-auto">
          <img
            src={solutionImage}
            alt="AI interface guiding worker"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <p className="text-lg font-semibold text-white bg-primary/80 backdrop-blur-sm inline-block px-6 py-3 rounded-full">
              Real-time AI guidance at your fingertips
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
