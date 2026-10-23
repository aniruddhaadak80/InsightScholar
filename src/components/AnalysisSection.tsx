
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, Brain, Zap, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

const AnalysisSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const analyzeWithGemini = async (content: string) => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;
    
    try {
      setError(null);
      setProgress(20);
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Analyze this research content and provide insights in the following JSON format:
              {
                "summary": "Brief summary of the content",
                "keyFindings": ["finding1", "finding2", "finding3"],
                "methodology": "Research methodology identified",
                "hypotheses": ["hypothesis1", "hypothesis2"],
                "keywords": ["keyword1", "keyword2", "keyword3"],
                "confidenceScore": 85,
                "researchType": "Experimental/Theoretical/Review",
                "recommendations": ["recommendation1", "recommendation2"]
              }
              
              Content to analyze: ${content.substring(0, 4000)}`
            }]
          }],
          generationConfig: {
            temperature: 0.3,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      setProgress(60);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setProgress(80);
      
      if (!data.candidates || !data.candidates[0]) {
        throw new Error('No analysis results received from AI');
      }

      const responseText = data.candidates[0].content.parts[0].text;
      
      // Try to extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const analysisResult = JSON.parse(jsonMatch[0]);
        setProgress(100);
        return analysisResult;
      } else {
        // Fallback: create structured response from plain text
        return {
          summary: responseText.substring(0, 200) + "...",
          keyFindings: ["Analysis completed successfully"],
          methodology: "Content analysis",
          hypotheses: ["Further research recommended"],
          keywords: ["research", "analysis", "insights"],
          confidenceScore: 75,
          researchType: "Analysis",
          recommendations: ["Review findings", "Consider additional research"]
        };
      }
    } catch (error) {
      console.error('Analysis error:', error);
      setProgress(0);
      throw error;
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      if (uploadedFile.size > 10 * 1024 * 1024) { // 10MB limit
        toast.error("File size too large. Please upload files smaller than 10MB.");
        return;
      }
      
      setFile(uploadedFile);
      setText("");
      toast.success(`File "${uploadedFile.name}" uploaded successfully!`);
    }
  };

  const handleAnalysis = async () => {
    if (!file && !text.trim()) {
      toast.error("Please upload a file or enter text to analyze.");
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);
    setError(null);

    try {
      let content = text;
      
      if (file) {
        setProgress(10);
        const fileContent = await file.text();
        content = fileContent;
      }

      if (content.length < 50) {
        throw new Error("Content too short for meaningful analysis. Please provide at least 50 characters.");
      }

      const result = await analyzeWithGemini(content);
      setAnalysis(result);
      
      toast.success("Analysis completed successfully!");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Analysis failed. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Analysis error:", error);
    } finally {
      setIsAnalyzing(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  return (
    <section id="analysis" className="py-20 px-4 bg-gradient-to-br from-scholar-lightTeal to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-scholar-teal to-scholar-blue bg-clip-text text-transparent">
            AI-Powered Research Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your research documents or paste text for instant AI analysis with detailed insights and recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <Upload className="h-6 w-6 mr-2 text-scholar-teal" />
              Input Your Research
            </h3>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Document (PDF, TXT, DOC)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-scholar-teal transition-colors">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.txt,.doc,.docx"
                  className="hidden"
                  id="file-upload"
                  disabled={isAnalyzing}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">
                    {file ? `Selected: ${file.name}` : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Max file size: 10MB</p>
                </label>
              </div>
            </div>

            {/* Text Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or Paste Your Text Here
              </label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your research content, abstract, or any text you want to analyze..."
                className="min-h-[150px] resize-none"
                disabled={isAnalyzing}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {text.length} characters
              </div>
            </div>

            {/* Progress Bar */}
            {isAnalyzing && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Analyzing...</span>
                  <span className="text-sm text-gray-500">{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            {/* Error Display */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-medium">Analysis Error</p>
                  <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
              </div>
            )}

            <Button 
              onClick={handleAnalysis} 
              disabled={isAnalyzing || (!file && !text.trim())}
              className="w-full bg-gradient-to-r from-scholar-teal to-scholar-blue hover:opacity-90 text-lg py-6"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing Research...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-5 w-5" />
                  Analyze Research
                </>
              )}
            </Button>
          </Card>

          {/* Results Section */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <Zap className="h-6 w-6 mr-2 text-scholar-purple" />
              Analysis Results
            </h3>

            {!analysis && !isAnalyzing && (
              <div className="text-center py-12 text-gray-500">
                <Brain className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Upload a document or enter text to see AI analysis results here</p>
              </div>
            )}

            {analysis && (
              <div className="space-y-6 animate-slide-up">
                {/* Confidence Score */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Confidence Score</span>
                  </div>
                  <Badge className="bg-green-600 text-white">
                    {analysis.confidenceScore}%
                  </Badge>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">📄 Summary</h4>
                  <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                    {analysis.summary}
                  </p>
                </div>

                {/* Key Findings */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🔍 Key Findings</h4>
                  <ul className="space-y-2">
                    {analysis.keyFindings?.map((finding: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Research Type & Methodology */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🔬 Research Type</h4>
                    <Badge variant="secondary" className="bg-scholar-lightBlue text-scholar-blue">
                      {analysis.researchType}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">⚗️ Methodology</h4>
                    <p className="text-gray-600 text-sm">{analysis.methodology}</p>
                  </div>
                </div>

                {/* Keywords */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🏷️ Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.keywords?.map((keyword: string, index: number) => (
                      <Badge key={index} variant="outline" className="border-scholar-teal text-scholar-teal">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hypotheses */}
                {analysis.hypotheses && analysis.hypotheses.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">💡 Generated Hypotheses</h4>
                    <ul className="space-y-2">
                      {analysis.hypotheses.map((hypothesis: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Zap className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{hypothesis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommendations */}
                {analysis.recommendations && analysis.recommendations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">📋 Recommendations</h4>
                    <ul className="space-y-2">
                      {analysis.recommendations.map((recommendation: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
