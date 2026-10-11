import { GoogleGenAI } from "@google/genai";
import * as z from "zod";

const client = new GoogleGenAI({}); // reads GEMINI_API_KEY
const MODEL = "gemini-3.8-flash";

export async function generateJSON<T>(
  input: string,
  jsonSchema: Record<string, unknown>,
): Promise<T> {
  const interaction = await client.interactions.create({
    model: MODEL,
    input,
    response_format: {
      type: "text",
      mime_type: "application/json",
      schema: jsonSchema,
    },
  });

  const text = interaction.output_text;
  if (!text) {
    throw new Error("Gemini returned no text");
  }

  const data = JSON.parse(text);
  return z.fromJSONSchema(jsonSchema).parse(data) as T;
}
