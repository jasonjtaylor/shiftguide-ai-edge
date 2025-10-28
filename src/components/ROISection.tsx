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
    <section id="roi" className="py-20 md:py-32 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent"></div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-background via-background to-card border-2 border-border hover:border-secondary/50 transition-all hover:shadow-2xl hover:shadow-secondary/20 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 via-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <metric.icon className="w-7 h-7 text-secondary" />
              </div>
              <div className="text-5xl font-heading font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-2 text-foreground">{metric.label}</div>
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
