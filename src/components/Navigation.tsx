import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">SG</span>
            </div>
            <span className="text-xl font-heading font-bold">ShiftGuide</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("roi")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ROI Calculator
            </button>
            <button
              onClick={() => scrollToSection("pilot")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pilot Program
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("demo")}
              className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
            >
              See Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("solution")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("roi")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ROI Calculator
            </button>
            <button
              onClick={() => scrollToSection("pilot")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pilot Program
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("demo")}
              className="w-full bg-gradient-to-r from-primary to-accent text-white"
            >
              See Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
