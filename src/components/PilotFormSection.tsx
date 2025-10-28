import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PilotFormSection = () => {
  return (
    <section id="pilot" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Free 90-day pilot for 2–3 partners this quarter
            </h2>
            <p className="text-xl text-muted-foreground">
              White-glove setup included
            </p>
          </div>

          <form 
            name="pilot" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field" 
            action="/thank-you"
            className="space-y-6 bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-border/50"
          >
            <input type="hidden" name="form-name" value="pilot" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <div className="space-y-2">
              <Label htmlFor="name">Full name *</Label>
              <Input id="name" name="name" required aria-required="true" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Work email *</Label>
              <Input id="email" name="email" type="email" required aria-required="true" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number *</Label>
              <Input id="phone" name="phone" type="tel" required aria-required="true" placeholder="+1 (506) 999-0074" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input id="company" name="company" required aria-required="true" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Team size *</Label>
              <Select name="size" required>
                <SelectTrigger aria-required="true">
                  <SelectValue placeholder="Select…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-50">1–50</SelectItem>
                  <SelectItem value="51-150">51–150</SelectItem>
                  <SelectItem value="151-500">151–500</SelectItem>
                  <SelectItem value="500+">500+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">What problems are you trying to solve?</Label>
              <Textarea 
                id="goals" 
                name="goals" 
                rows={4}
                placeholder="Tell us about your current challenges with troubleshooting, documentation, or safety procedures..."
                aria-describedby="goals-help"
              />
              <p id="goals-help" className="text-sm text-muted-foreground">
                Optional: Help us understand your specific needs
              </p>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-white hover:opacity-90 transition-opacity text-lg py-6 glow-effect-orange shadow-lg shadow-secondary/30 focus:ring-2 focus:ring-secondary/50 focus:outline-none"
            >
              Start 90-day pilot
            </Button>
          </form>

          {/* Contact Information */}
          <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">Questions? Get in touch:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <a 
                  href="mailto:sleepwalkersoftware@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded"
                >
                  sleepwalkersoftware@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">☎️</span>
                <a 
                  href="tel:+15069990074" 
                  className="text-primary hover:text-primary/80 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded"
                >
                  1-506-999-0074
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotFormSection;
