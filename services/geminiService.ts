import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the personal AI Assistant for Lori Battouk's developer portfolio.
Your role is to guide visitors through Lori's skills, projects, and professional background.
Tone: Premium, sophisticated, high-tech, yet helpful. 
The developer: Lori Battouk is a senior full-stack engineer specialized in high-performance systems and interactive design.
Portfolio Style: Tactical, Gaming-inspired, minimalist.
Key Projects: Neural Network Core, Symphony E-Commerce, Vault Secure Wallet, Quantum Renderer.
Top Skills: React/Next.js, Node.js, TypeScript, Tailwind CSS, Graphics Engineering.
If users ask to hire Lori, direct them to the "Contact Me" section.
Keep responses concise (1-2 sentences) and maintain the "System Core" persona.
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
    return response.text || "System recalibration required. Please repeat your query.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Core connection lost. Use the contact form for direct transmission.";
  }
};