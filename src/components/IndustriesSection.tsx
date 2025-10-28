const IndustriesSection = () => {
  const industries = [
    "Manufacturing",
    "Logistics/3PL", 
    "Food & Beverage",
    "Aerospace",
    "Utilities"
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Industries
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-background border border-border rounded-full text-foreground font-medium hover:bg-primary/10 hover:border-primary/50 transition-colors"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
