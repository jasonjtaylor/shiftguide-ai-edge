const StatsSection = () => {
  const stats = [
    {
      value: "68%",
      label: "faster issue resolution",
      subtext: "(60 min → 19 min)"
    },
    {
      value: "40%",
      label: "less supervisor time",
      subtext: "on routine escalations"
    },
    {
      value: "Auto-documentation",
      label: "for audits",
      subtext: "(ISO/OSHA ready)"
    },
    {
      value: "Runs on devices",
      label: "you already have",
      subtext: "(iOS, Android, web)"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why ShiftGuide
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
