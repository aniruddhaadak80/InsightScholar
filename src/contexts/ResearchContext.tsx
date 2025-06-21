
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnalysisResult {
  id: string;
  type: string;
  title: string;
  content: string;
  timestamp: Date;
  documentName?: string;
}

interface ResearchContextType {
  currentDocument: File | null;
  setCurrentDocument: (file: File | null) => void;
  analysisResults: AnalysisResult[];
  addAnalysisResult: (result: AnalysisResult) => void;
  clearResults: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const ResearchContext = createContext<ResearchContextType | undefined>(undefined);

export const useResearch = () => {
  const context = useContext(ResearchContext);
  if (!context) {
    throw new Error('useResearch must be used within a ResearchProvider');
  }
  return context;
};

export const ResearchProvider = ({ children }: { children: ReactNode }) => {
  const [currentDocument, setCurrentDocument] = useState<File | null>(null);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addAnalysisResult = (result: AnalysisResult) => {
    setAnalysisResults(prev => [result, ...prev]);
  };

  const clearResults = () => {
    setAnalysisResults([]);
  };

  return (
    <ResearchContext.Provider value={{
      currentDocument,
      setCurrentDocument,
      analysisResults,
      addAnalysisResult,
      clearResults,
      isLoading,
      setIsLoading
    }}>
      {children}
    </ResearchContext.Provider>
  );
};
