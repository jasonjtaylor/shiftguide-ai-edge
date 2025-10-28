import { Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">SG</span>
              </div>
              <span className="text-xl font-heading font-bold">ShiftGuide</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Real-Time AI Guidance for Frontline Workers
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold">Product</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("solution")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("demo")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("roi")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ROI Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("pilot")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pilot Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold">Connect</h4>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2025 ShiftGuide by Sleepwalker Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
