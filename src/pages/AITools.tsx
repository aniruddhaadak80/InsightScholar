
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, BarChart3, Network, Lightbulb, Upload, Search, Brain, Users, 
  TrendingUp, MessageSquare, Map, Clock, GitCompare, Award, Shield,
  PenTool, Sparkles, Target, BookOpen, Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AIFeatureModal } from "@/components/shared/AIFeatureModal";

const AITools = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const aiFeatures = [
    {
      id: 'summary',
      icon: FileText,
      title: "Smart Document Summarizer",
      description: "Generate multi-level summaries from academic papers with key findings and insights",
      color: "from-blue-500 to-blue-600",
      category: "Analysis"
    },
    {
      id: 'questions',
      icon: MessageSquare,
      title: "Research Question Generator",
      description: "AI generates relevant research questions from your uploaded content",
      color: "from-green-500 to-green-600",
      category: "Planning"
    },
    {
      id: 'gaps',
      icon: Target,
      title: "Literature Gap Analyzer",
      description: "Identifies missing research areas and opportunities in your field",
      color: "from-purple-500 to-purple-600",
      category: "Analysis"
    },
    {
      id: 'citations',
      icon: BookOpen,
      title: "Citation Recommendation Engine",
      description: "Suggests relevant papers and sources to cite in your research",
      color: "from-orange-500 to-orange-600",
      category: "Writing"
    },
    {
      id: 'methodology',
      icon: BarChart3,
      title: "Methodology Validator",
      description: "Analyzes and validates research methodologies with improvement suggestions",
      color: "from-teal-500 to-teal-600",
      category: "Analysis"
    },
    {
      id: 'statistics',
      icon: TrendingUp,
      title: "Statistical Analysis Assistant",
      description: "Interprets data and statistical results with expert insights",
      color: "from-indigo-500 to-indigo-600",
      category: "Analysis"
    },
    {
      id: 'trends',
      icon: Sparkles,
      title: "Research Trend Predictor",
      description: "Predicts future research directions using current data and patterns",
      color: "from-pink-500 to-pink-600",
      category: "Prediction"
    },
    {
      id: 'review',
      icon: Users,
      title: "Peer Review Assistant",
      description: "Provides constructive feedback and review comments on research papers",
      color: "from-red-500 to-red-600",
      category: "Review"
    },
    {
      id: 'grant',
      icon: Award,
      title: "Grant Proposal Helper",
      description: "Assists in writing compelling grant applications and funding proposals",
      color: "from-yellow-500 to-yellow-600",
      category: "Writing"
    },
    {
      id: 'writing',
      icon: PenTool,
      title: "Academic Writing Coach",
      description: "Improves writing style, clarity, and academic impact",
      color: "from-cyan-500 to-cyan-600",
      category: "Writing"
    },
    {
      id: 'ethics',
      icon: Shield,
      title: "Research Ethics Checker",
      description: "Identifies potential ethical considerations and compliance issues",
      color: "from-emerald-500 to-emerald-600",
      category: "Review"
    },
    {
      id: 'concept',
      icon: Map,
      title: "Concept Map Generator",
      description: "Creates visual mind maps and concept relationships from research content",
      color: "from-violet-500 to-violet-600",
      category: "Visualization"
    },
    {
      id: 'timeline',
      icon: Clock,
      title: "Research Timeline Creator",
      description: "Generates realistic project timelines with milestones and deliverables",
      color: "from-rose-500 to-rose-600",
      category: "Planning"
    },
    {
      id: 'compare',
      icon: GitCompare,
      title: "Multi-Document Comparator",
      description: "Compares multiple research papers side-by-side for analysis",
      color: "from-amber-500 to-amber-600",
      category: "Analysis"
    },
    {
      id: 'impact',
      icon: Zap,
      title: "Research Impact Predictor",
      description: "Estimates potential citation impact and research influence",
      color: "from-lime-500 to-lime-600",
      category: "Prediction"
    },
    {
      id: 'chatbot',
      icon: Brain,
      title: "AI Research Chatbot",
      description: "Interactive Q&A assistant for uploaded documents and research queries",
      color: "from-sky-500 to-sky-600",
      category: "Interactive"
    }
  ];

  const categories = ['All', 'Analysis', 'Writing', 'Planning', 'Review', 'Prediction', 'Visualization', 'Interactive'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFeatures = selectedCategory === 'All' 
    ? aiFeatures 
    : aiFeatures.filter(feature => feature.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-scholar-lightBlue to-scholar-lightPurple">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
              AI-Powered Research Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your research workflow with our comprehensive suite of AI-powered analysis tools
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-to-r from-scholar-blue to-scholar-purple" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* AI Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFeatures.map((feature, index) => (
              <Card 
                key={feature.id}
                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedFeature(feature)}
              >
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {feature.category}
                  </Badge>
                  
                  <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-scholar-blue transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Button 
                    className="mt-4 w-full bg-gradient-to-r from-scholar-blue to-scholar-purple hover:opacity-90"
                    size="sm"
                  >
                    Try Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* AI Feature Modal */}
      {selectedFeature && (
        <AIFeatureModal
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          title={selectedFeature.title}
          description={selectedFeature.description}
          analysisType={selectedFeature.id}
          icon={selectedFeature.icon}
        />
      )}

      <Footer />
    </div>
  );
};

export default AITools;
