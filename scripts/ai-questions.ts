import { generateQuestions } from "../lib/questions";

const prompt =
  process.argv.slice(2).join(" ") || "AI and robotics news, but not hype";

generateQuestions(prompt).then((result) => {
  console.log(JSON.stringify(result, null, 2));
});
