import { DollarSign, Clock, Calendar } from "lucide-react";

const ROIMetricsSection = () => {
  const metrics = [
    {
      icon: DollarSign,
      value: "$1.15M/yr",
      label: "savings at a 150-worker plant",
      color: "text-green-600"
    },
    {
      icon: Clock,
      value: "7 days",
      label: "payback on average",
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      value: "2 weeks",
      label: "pilot with your real workflows",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="roi" className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            ROI snapshot
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-background/80 backdrop-blur-sm rounded-lg p-6 text-center space-y-4 border border-border/50">
              <div className="w-12 h-12 mx-auto bg-muted rounded-full flex items-center justify-center">
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {metric.value}
              </div>
              <div className="text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROIMetricsSection;
