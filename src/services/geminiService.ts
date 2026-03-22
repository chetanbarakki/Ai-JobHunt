import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getResumeInsights(resumeText: string, jobDescription: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this resume against the job description. Provide 3 specific, actionable insights for an architectural engineer.
      
      Resume: ${resumeText}
      Job Description: ${jobDescription}`,
      config: {
        systemInstruction: "You are a senior technical recruiter and career strategist for elite engineers.",
        responseMimeType: "application/json",
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
