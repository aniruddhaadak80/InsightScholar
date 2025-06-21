
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Loader2, Download, Copy } from "lucide-react";
import { toast } from "sonner";
import { analyzeDocument } from "@/services/geminiAPI";
import { useResearch } from "@/contexts/ResearchContext";

interface AIFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  analysisType: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const AIFeatureModal: React.FC<AIFeatureModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  analysisType,
  icon: Icon
}) => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { currentDocument, addAnalysisResult } = useResearch();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setInputText(text);
      };
      reader.readAsText(file);
    } else {
      toast.error('Please upload a text file');
    }
  };

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      toast.error('Please provide text to analyze');
      return;
    }

    setIsAnalyzing(true);
    try {
      const response = await analyzeDocument(inputText, analysisType);
      
      if (response.success) {
        setResult(response.content);
        addAnalysisResult({
          id: Date.now().toString(),
          type: analysisType,
          title: title,
          content: response.content,
          timestamp: new Date(),
          documentName: currentDocument?.name
        });
        toast.success('Analysis completed successfully!');
      } else {
        toast.error(response.error || 'Analysis failed');
      }
    } catch (error) {
      toast.error('An error occurred during analysis');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success('Result copied to clipboard!');
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}_analysis.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Analysis downloaded!');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Icon className="h-6 w-6 text-scholar-blue" />
            <span>{title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-gray-600">{description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <Upload className="h-4 w-4 mr-2" />
                Upload Text File
                <input
                  type="file"
                  accept=".txt"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </Button>
              <span className="text-sm text-gray-500">or paste text below</span>
            </div>

            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your research text here..."
              className="min-h-[200px]"
            />

            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing || !inputText.trim()}
              className="w-full bg-gradient-to-r from-scholar-blue to-scholar-purple"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Analyze with AI
                </>
              )}
            </Button>
          </div>

          {result && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Analysis Result</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap font-sans text-sm">{result}</pre>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
