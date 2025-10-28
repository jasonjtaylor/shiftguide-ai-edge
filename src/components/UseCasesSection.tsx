import { Factory, Truck, Zap, Wrench } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Factory,
      title: "Manufacturing",
      examples: ["Diagnose motor failure", "Run quality checks", "Troubleshoot line stops"],
    },
    {
      icon: Truck,
      title: "Logistics",
      examples: ["Loading sequence help", "Equipment inspections", "Safety protocol checks"],
    },
    {
      icon: Zap,
      title: "Utilities",
      examples: ["System diagnostics", "Safety compliance", "Emergency procedures"],
    },
    {
      icon: Wrench,
      title: "Field Maintenance",
      examples: ["Equipment repair steps", "Parts identification", "Service logging"],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Built for the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frontline
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ShiftGuide adapts to your industry's unique challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <useCase.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4">
                {useCase.title}
              </h3>

              <ul className="space-y-2">
                {useCase.examples.map((example, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">→</span>
                    <span className="group-hover:text-foreground transition-colors">
                      {example}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
