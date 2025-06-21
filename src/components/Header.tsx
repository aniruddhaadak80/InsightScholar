
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-gradient-to-r from-scholar-blue to-scholar-purple p-2 rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
                InsightScholar
              </h1>
              <Badge variant="secondary" className="text-xs">AI Research Assistant</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-scholar-blue transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-scholar-blue transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('analysis')}
              className="text-gray-700 hover:text-scholar-blue transition-colors"
            >
              Analysis
            </button>
            <button 
              onClick={() => scrollToSection('visualization')}
              className="text-gray-700 hover:text-scholar-blue transition-colors"
            >
              Visualization
            </button>
            <Button 
              onClick={() => scrollToSection('analysis')}
              className="bg-gradient-to-r from-scholar-blue to-scholar-purple hover:opacity-90"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-slide-up">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-700 hover:text-scholar-blue transition-colors py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-gray-700 hover:text-scholar-blue transition-colors py-2"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('analysis')}
              className="block w-full text-left text-gray-700 hover:text-scholar-blue transition-colors py-2"
            >
              Analysis
            </button>
            <button 
              onClick={() => scrollToSection('visualization')}
              className="block w-full text-left text-gray-700 hover:text-scholar-blue transition-colors py-2"
            >
              Visualization
            </button>
            <Button 
              onClick={() => scrollToSection('analysis')}
              className="w-full bg-gradient-to-r from-scholar-blue to-scholar-purple hover:opacity-90"
            >
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
