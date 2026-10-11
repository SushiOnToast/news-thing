import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({}); 

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: "Say hello in five words.",
  });

  console.log(response.text);
}

main();