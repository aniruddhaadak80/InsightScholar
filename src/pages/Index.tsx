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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-scholar-lightBlue to-scholar-lightPurple">
      <Header />
      <Hero />
      <Features />
      <ResearchTrends />
      <HowItWorks />
      <InteractiveStats />
      <AnalysisSection />
      <VisualizationDemo />
      <Footer />
    </div>
  );
};

export default Index;
