import { Button } from "@/components/ui/button";
import { TrendingDown, Clock, DollarSign, TrendingUp } from "lucide-react";

const ROISection = () => {
  const metrics = [
    {
      icon: Clock,
      value: "68%",
      label: "Faster Issue Resolution",
      description: "From 60 to 19 minutes average",
    },
    {
      icon: TrendingDown,
      value: "87%",
      label: "Less Supervisor Time",
      description: "Redirected to strategic work",
    },
    {
      icon: DollarSign,
      value: "$1.15M",
      label: "Annual Savings",
      description: "Per mid-size plant",
    },
    {
      icon: TrendingUp,
      value: "5,025%",
      label: "ROI",
      description: "7-day payback period",
    },
  ];

  return (
    <section id="roi" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            From{" "}
            <span className="text-destructive line-through decoration-4">
              60 Minutes
            </span>{" "}
            to{" "}
            <span className="text-secondary">19 Minutes</span> — Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Data from pilot deployments across manufacturing facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-heading font-bold text-secondary mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all"
          >
            View ROI Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
