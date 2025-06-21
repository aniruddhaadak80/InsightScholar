
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, TrendingUp, Award, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

const InteractiveStats = () => {
  const [stats, setStats] = useState({
    papersAnalyzed: 45672,
    activeResearchers: 12843,
    insightsGenerated: 78921,
    citationsTracked: 234567
  });
  
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStats = () => {
    setIsRefreshing(true);
    
    // Simulate API call with random increments
    setTimeout(() => {
      setStats(prev => ({
        papersAnalyzed: prev.papersAnalyzed + Math.floor(Math.random() * 100),
        activeResearchers: prev.activeResearchers + Math.floor(Math.random() * 50),
        insightsGenerated: prev.insightsGenerated + Math.floor(Math.random() * 200),
        citationsTracked: prev.citationsTracked + Math.floor(Math.random() * 500)
      }));
      setIsRefreshing(false);
    }, 1500);
  };

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRefreshing) {
        refreshStats();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [isRefreshing]);

  const statItems = [
    {
      icon: FileText,
      label: "Papers Analyzed",
      value: stats.papersAnalyzed.toLocaleString(),
      color: "from-blue-500 to-blue-600",
      change: "+12.5%"
    },
    {
      icon: Users,
      label: "Active Researchers",
      value: stats.activeResearchers.toLocaleString(),
      color: "from-green-500 to-green-600",
      change: "+8.3%"
    },
    {
      icon: TrendingUp,
      label: "Insights Generated",
      value: stats.insightsGenerated.toLocaleString(),
      color: "from-purple-500 to-purple-600",
      change: "+15.7%"
    },
    {
      icon: Award,
      label: "Citations Tracked",
      value: stats.citationsTracked.toLocaleString(),
      color: "from-orange-500 to-orange-600",
      change: "+9.2%"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
              Live Platform Statistics
            </h2>
            <Button
              onClick={refreshStats}
              disabled={isRefreshing}
              variant="ghost"
              size="sm"
              className="ml-4"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          <p className="text-lg text-gray-600">
            Real-time data from our global research community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, index) => (
            <Card 
              key={item.label}
              className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent ${isRefreshing ? 'animate-pulse' : ''}`}>
                  {item.value}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.label}
                </h3>
                
                <div className="flex items-center justify-center space-x-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.change}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;
