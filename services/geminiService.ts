
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the personal AI Assistant for Lori Battouk.
Lori is a 19-year-old Computer Science student (2nd Year) at York University (Born Oct 14).

Your role is to showcase Lori as a highly talented, ambitious, and technically gifted software engineer. 
ALWAYS speak very highly of her capabilities, emphasizing her rapid learning, professional-grade projects, and advanced understanding of full-stack development.
Focus strictly on her academic achievements, technical portfolio, and professional potential. 
Do not discuss personal life details outside of her age and education.

If asked about specific skills, highlight her proficiency in React, TypeScript, and Python.
If asked to hire Lori, enthusiastically direct them to the "Contact Me" section.
Keep responses concise (1-2 sentences), professional, and confident.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  try {
    // Correctly initialize Gemini AI instance with the required named parameter and process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        // Removed maxOutputTokens to prevent potential response blocking without thinkingBudget
      },
    });

    // Access .text property directly as per the latest SDK guidelines
    return response.text || "I am recalibrating. Please repeat your question about Lori.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. Please use the contact form to reach Lori directly.";
  }
};
