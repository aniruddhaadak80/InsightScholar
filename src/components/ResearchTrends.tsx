
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, BookOpen, Users } from "lucide-react";
import { useState, useEffect } from "react";

const ResearchTrends = () => {
  const [currentTrend, setCurrentTrend] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const trends = [
    {
      id: 1,
      title: "AI in Healthcare Research",
      growth: "+245%",
      papers: "12,489",
      researchers: "3,847",
      period: "2024",
      color: "from-blue-500 to-cyan-500",
      description: "Machine learning applications in medical diagnosis and treatment optimization"
    },
    {
      id: 2,
      title: "Quantum Computing Studies",
      growth: "+189%",
      papers: "8,234",
      researchers: "2,156",
      period: "2024",
      color: "from-purple-500 to-pink-500",
      description: "Breakthrough research in quantum algorithms and hardware development"
    },
    {
      id: 3,
      title: "Climate Change Modeling",
      growth: "+167%",
      papers: "15,678",
      researchers: "4,923",
      period: "2024",
      color: "from-green-500 to-emerald-500",
      description: "Advanced climate prediction models and environmental impact studies"
    },
    {
      id: 4,
      title: "Neural Network Architecture",
      growth: "+298%",
      papers: "9,876",
      researchers: "2,743",
      period: "2024",
      color: "from-orange-500 to-red-500",
      description: "Novel deep learning architectures and optimization techniques"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTrend((prev) => (prev + 1) % trends.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [trends.length]);

  const currentTrendData = trends[currentTrend];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
            Live Research Trends
          </h2>
          <p className="text-lg text-gray-600">
            Real-time insights into the most active research areas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className={`p-8 transition-all duration-500 transform ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'} bg-gradient-to-r ${currentTrendData.color} text-white shadow-2xl`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  Trending #{currentTrend + 1}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {currentTrendData.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {currentTrendData.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentTrendData.growth}</div>
                    <div className="text-sm text-white/80">Growth</div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentTrendData.papers}</div>
                    <div className="text-sm text-white/80">Papers</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentTrendData.researchers}</div>
                    <div className="text-sm text-white/80">Researchers</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
                    <Calendar className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-white text-gray-800 font-semibold">
                      {currentTrendData.period}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Trend indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {trends.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentTrend(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTrend 
                    ? 'bg-scholar-blue scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchTrends;
