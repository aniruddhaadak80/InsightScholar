
import { toast } from "sonner";

const GEMINI_API_KEY = 'AIzaSyCtg7BzgzFDqfgQpQB0QfV-Pd-QVcnf_RU';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export interface GeminiRequest {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
}

export interface GeminiResponse {
  content: string;
  success: boolean;
  error?: string;
}

export const callGeminiAPI = async (request: GeminiRequest): Promise<GeminiResponse> => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: request.prompt
          }]
        }],
        generationConfig: {
          temperature: request.temperature || 0.7,
          maxOutputTokens: request.maxTokens || 1000,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return {
        content: data.candidates[0].content.parts[0].text,
        success: true
      };
    } else {
      throw new Error('Invalid response format from Gemini API');
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      content: '',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const analyzeDocument = async (text: string, analysisType: string): Promise<GeminiResponse> => {
  const prompts = {
    summary: `Please provide a comprehensive summary of this research document. Include key findings, methodology, and conclusions:\n\n${text}`,
    questions: `Based on this research document, generate 5-7 relevant research questions that could guide future studies:\n\n${text}`,
    gaps: `Analyze this research document and identify potential research gaps, unexplored areas, and opportunities for future investigation:\n\n${text}`,
    citations: `Based on this research content, suggest 8-10 relevant academic papers and sources that should be cited. Provide titles and brief relevance explanations:\n\n${text}`,
    methodology: `Evaluate the research methodology in this document. Provide feedback on strengths, weaknesses, and suggestions for improvement:\n\n${text}`,
    statistics: `Analyze any statistical data, methods, or results mentioned in this document. Provide interpretation and validation:\n\n${text}`,
    trends: `Based on this research content, predict future research trends and directions in this field:\n\n${text}`,
    review: `Provide a constructive peer review of this research document, including strengths, areas for improvement, and overall assessment:\n\n${text}`,
    grant: `Based on this research, help create a compelling grant proposal outline with key points and funding justification:\n\n${text}`,
    writing: `Analyze the academic writing style in this document and provide suggestions for improvement in clarity, structure, and impact:\n\n${text}`,
    ethics: `Review this research document for potential ethical considerations, concerns, and recommendations:\n\n${text}`,
    concept: `Create a structured concept map outline based on the key concepts and relationships in this research document:\n\n${text}`,
    timeline: `Based on this research content, suggest a realistic project timeline with milestones and deliverables:\n\n${text}`,
    impact: `Analyze the potential research impact and citation potential of this work. Provide predictions and recommendations:\n\n${text}`
  };

  const prompt = prompts[analysisType as keyof typeof prompts] || prompts.summary;
  
  return await callGeminiAPI({
    prompt,
    maxTokens: 1500,
    temperature: 0.7
  });
};
