import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Thank you!
            </h1>
            <p className="text-xl text-muted-foreground">
              Thanks for reaching out! We'll contact you shortly from{" "}
              <a 
                href="mailto:sleepwalkersoftware@gmail.com" 
                className="text-primary hover:text-primary/80 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded"
              >
                sleepwalkersoftware@gmail.com
              </a>{" "}
              or{" "}
              <a 
                href="tel:+15069990074" 
                className="text-primary hover:text-primary/80 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded"
              >
                1-506-999-0074
              </a>.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              In the meantime, feel free to explore our demo or learn more about how ShiftGuide can transform your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/#demo">
                  See 30-sec demo
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
