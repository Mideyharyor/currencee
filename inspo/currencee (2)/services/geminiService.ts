import { GoogleGenAI } from "@google/genai";
import { ImageSize } from "../types";

// Helper to check for API key
export const checkApiKey = async (): Promise<boolean> => {
  const win = window as any;
  if (typeof win.aistudio !== 'undefined' && win.aistudio.hasSelectedApiKey) {
    return await win.aistudio.hasSelectedApiKey();
  }
  return !!process.env.API_KEY;
};

// Helper to open key selection dialog
export const selectApiKey = async (): Promise<void> => {
  const win = window as any;
  if (typeof win.aistudio !== 'undefined' && win.aistudio.openSelectKey) {
    await win.aistudio.openSelectKey();
  }
};

export const generateTravelImage = async (
  prompt: string, 
  size: ImageSize
): Promise<string | null> => {
  try {
    // Re-initialize to ensure we pick up the latest selected key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-3-pro-image-preview as requested
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          imageSize: size, // 1K, 2K, or 4K
          aspectRatio: "16:9" 
        }
      }
    });

    // Extract image from response parts
    if (response.candidates && response.candidates.length > 0 && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    throw error;
  }
};