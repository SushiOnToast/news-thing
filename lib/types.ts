export const CATEGORIES = [
  "world",
  "business",
  "science",
  "tech",
  "ai",
  "research",
  "health",
  "environment",
  "humanities",
  "internet",
  "entertainment",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  world: "World",
  business: "Business & Economics",
  science: "Science",
  tech: "Tech",
  ai: "AI",
  research: "Research Papers",
  health: "Health & Medicine",
  environment: "Environment & Climate",
  humanities: "History, Philosophy & Ideas",
  internet: "Internet Culture",
  entertainment: "Music, Film & Pop Culture",
};

export type Source = {
  id: string;
  name: string;
  url: string;
  category: Category;
};

export type Article = {
  url: string;
  title: string;
  source: string;
  publishedAt: string;
  summary: string;
};

export type FeedSpec = {
  name: string;
  categories: Category[]; // from the user's confirmed selection
  itemsPerDay: number;    // from the volume question
  stretchRatio: number;   // from the exposure question
  topics: string[];       // keywords from the AI, used for scoring
  exclusions: string[];   // keywords from the AI, used for filtering
};