
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { FileText, BarChart3, Network, Lightbulb, Upload, Search, Brain, Users, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AnalysisSection from "@/components/AnalysisSection";
import VisualizationDemo from "@/components/VisualizationDemo";
import Footer from "@/components/Footer";
import ResearchTrends from "@/components/ResearchTrends";
import InteractiveStats from "@/components/InteractiveStats";
import { ResearchChatbot } from "@/components/ai-features/ResearchChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-scholar-lightBlue to-scholar-lightPurple">
      <Header />
      <Hero />
      <Features />
      <ResearchTrends />
      <HowItWorks />
      <InteractiveStats />
      
      {/* AI Chatbot Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
              AI Research Assistant
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get instant help with your research questions, methodology advice, and academic guidance
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ResearchChatbot />
          </div>
        </div>
      </section>
      
      <AnalysisSection />
      <VisualizationDemo />
      <Footer />
    </div>
  );
};

export default Index;
