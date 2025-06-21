
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, BarChart3, Network, Lightbulb, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Badge className="mb-6 bg-gradient-to-r from-scholar-blue/10 to-scholar-purple/10 text-scholar-blue border-scholar-blue/20">
            🚀 AI-Powered Research Innovation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-scholar-blue via-scholar-purple to-scholar-teal bg-clip-text text-transparent leading-tight">
            InsightScholar
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Transform your research workflow with AI-powered analysis, 
            <br className="hidden md:block" />
            visual data insights, and intelligent hypothesis generation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('analysis')}
              className="bg-gradient-to-r from-scholar-blue to-scholar-purple hover:opacity-90 text-lg px-8 py-6 animate-pulse-glow"
            >
              Start Analyzing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('features')}
              className="text-lg px-8 py-6 border-scholar-blue text-scholar-blue hover:bg-scholar-lightBlue"
            >
              Explore Features
            </Button>
          </div>

          {/* Floating Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: FileText, label: "PDF Analysis", color: "text-scholar-blue" },
              { icon: BarChart3, label: "Data Visualization", color: "text-scholar-purple" },
              { icon: Network, label: "Citation Mapping", color: "text-scholar-teal" },
              { icon: Lightbulb, label: "Hypothesis Generation", color: "text-orange-500" }
            ].map((feature, index) => (
              <div 
                key={feature.label}
                className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-float cursor-pointer group`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => scrollToSection('features')}
              >
                <feature.icon className={`h-8 w-8 ${feature.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                <p className="text-sm font-medium text-gray-700">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-scholar-blue/20 to-scholar-purple/20 rounded-3xl blur-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&crop=center"
            alt="AI Research Assistant Dashboard"
            className="relative rounded-3xl shadow-2xl mx-auto max-w-5xl w-full animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
