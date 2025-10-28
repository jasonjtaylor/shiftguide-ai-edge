import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const PilotSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    facilitySize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 2 business days.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      facilitySize: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="pilot" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"></div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge
              variant="outline"
              className="border-secondary text-secondary px-4 py-2 text-sm"
            >
              Limited Spots Available
            </Badge>

            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              We're Launching{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pilot Programs
              </span>{" "}
              in 2025
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're partnering with 3-5 manufacturers ready to modernize their
              operations with AI.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-foreground"
                  >
                    Company *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="facilitySize"
                    className="text-sm font-medium text-foreground"
                  >
                    Facility Size
                  </label>
                  <Input
                    id="facilitySize"
                    name="facilitySize"
                    placeholder="e.g., 200 employees"
                    value={formData.facilitySize}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Tell us about your use case
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What challenges are you trying to solve?"
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-white hover:opacity-90 transition-opacity text-lg glow-effect-orange"
              >
                Apply for Pilot
              </Button>

              <div className="text-center">
                <Badge variant="secondary" className="text-sm">
                  Free 90-Day Pilot • White-Glove Setup Included
                </Badge>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotSection;
