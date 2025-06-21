
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
    <div className="min-h-screen bg-gradient-to-br from-white via-scholar-lightBlue to-scholar-lightPurple relative">
      {/* Main background image */}
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')"
        }}
      />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero with research background */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.8)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')"
          }}
        >
          <Hero />
        </div>
        
        {/* Features with tech background */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop')"
          }}
        >
          <Features />
        </div>
        
        {/* Research Trends with data visualization background */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.88)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')"
          }}
        >
          <ResearchTrends />
        </div>
        
        {/* How It Works with circuit board background */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')"
          }}
        >
          <HowItWorks />
        </div>
        
        {/* Interactive Stats with mountain background */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.93), rgba(255,255,255,0.89)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop')"
          }}
        >
          <InteractiveStats />
        </div>
        
        {/* AI Chatbot Section with code background */}
        <section className="py-16 px-4 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop')"
          }}
        >
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
        
        {/* Analysis Section with coding background */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop')"
          }}
        >
          <AnalysisSection />
        </div>
        
        {/* Visualization Demo with digital background */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.93), rgba(255,255,255,0.89)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')"
          }}
        >
          <VisualizationDemo />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
