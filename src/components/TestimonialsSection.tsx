import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "It's like having ChatGPT for our factory floor.",
      author: "Operations Manager",
      company: "Mid-Size Manufacturing Plant",
    },
    {
      quote: "Our downtime dropped by half in the first week.",
      author: "Plant Director",
      company: "Automotive Parts Supplier",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-background border border-border relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
                <p className="text-xl font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="text-center space-y-6 pt-8">
            <h3 className="text-3xl md:text-4xl font-heading font-bold">
              Built by Operators.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Powered by AI.
              </span>
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ShiftGuide is the start of a new era — where AI guides every shift,
              learns every process, and keeps every worker safe.
            </p>

            <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
              <p className="text-sm font-semibold text-primary">
                The future of frontline work starts here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
