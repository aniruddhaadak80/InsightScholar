
import { Card } from "@/components/ui/card";
import { Upload, Brain, BarChart3, Download, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Upload your research papers, PDFs, or paste text directly into our platform",
      color: "from-scholar-blue to-blue-600",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze content, extract key insights, and identify patterns",
      color: "from-scholar-purple to-purple-600",
      step: "02"
    },
    {
      icon: BarChart3,
      title: "Visualize Data",
      description: "Generate interactive charts, graphs, and visual summaries of your research findings",
      color: "from-scholar-teal to-teal-600",
      step: "03"
    },
    {
      icon: Download,
      title: "Export Results",
      description: "Download insights, visualizations, and generated hypotheses in various formats",
      color: "from-green-500 to-emerald-600",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your research in four simple steps with our AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full animate-slide-up">
                <div className="p-8 text-center h-full flex flex-col">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className={`text-4xl font-bold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 flex-grow">
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-scholar-blue animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
