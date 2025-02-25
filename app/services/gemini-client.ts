import { GoogleGenerativeAI } from "@google/generative-ai";

export function gemini(instruction: string) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  return genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: instruction,
    generationConfig: {
      responseMimeType: "application/json",
    },
  });
}
