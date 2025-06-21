
import { Card } from "@/components/ui/card";
import { FileText, BarChart3, Network, Lightbulb, Upload, Search, Brain, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "PDF Document Analysis",
      description: "Upload and analyze research papers with advanced AI algorithms that extract key insights and summaries",
      color: "bg-gradient-to-br from-scholar-blue to-blue-600",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      icon: BarChart3,
      title: "Interactive Visualizations",
      description: "Generate beautiful charts and graphs from research data with real-time interaction capabilities",
      color: "bg-gradient-to-br from-scholar-purple to-purple-600",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      icon: Network,
      title: "Citation Network Mapping",
      description: "Visualize connections between papers and authors to discover research relationships and trends",
      color: "bg-gradient-to-br from-scholar-teal to-teal-600",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
    },
    {
      icon: Lightbulb,
      title: "Hypothesis Generation",
      description: "AI-powered insights that suggest new research directions and potential hypotheses",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      icon: Upload,
      title: "Multi-format Support",
      description: "Support for various document formats including PDF, DOC, and research databases",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Intelligent search across your document library with semantic understanding",
      color: "bg-gradient-to-br from-indigo-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
            Powerful Research Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to accelerate your research workflow and unlock deeper insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${feature.color} opacity-80 group-hover:opacity-70 transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-scholar-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
