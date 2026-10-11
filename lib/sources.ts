import type { Category, Source } from "./types";

export const SOURCES: Source[] = [
  // ───────── World ─────────
  { id: "bbc-world", name: "BBC World", category: "world", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
  { id: "bbc-top", name: "BBC Top Stories", category: "world", url: "https://feeds.bbci.co.uk/news/rss.xml" },
  { id: "guardian-world", name: "The Guardian World", category: "world", url: "https://www.theguardian.com/world/rss" },
  { id: "aljazeera", name: "Al Jazeera", category: "world", url: "https://www.aljazeera.com/xml/rss/all.xml" },
  { id: "npr-world", name: "NPR World", category: "world", url: "https://feeds.npr.org/1004/rss.xml" },
  { id: "nyt-world", name: "NYT World", category: "world", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml" },
  { id: "dw", name: "Deutsche Welle", category: "world", url: "https://rss.dw.com/rdf/rss-en-all" },
  { id: "france24", name: "France 24", category: "world", url: "https://www.france24.com/en/rss" },
  { id: "sky-world", name: "Sky News World", category: "world", url: "https://feeds.skynews.com/feeds/rss/world.xml" },
  { id: "cbs-world", name: "CBS News World", category: "world", url: "https://www.cbsnews.com/latest/rss/world" },
  { id: "abc-intl", name: "ABC News International", category: "world", url: "https://abcnews.go.com/abcnews/internationalheadlines" },
  { id: "foreign-policy", name: "Foreign Policy", category: "world", url: "https://foreignpolicy.com/feed/" },

  // ───────── Business & Economics ─────────
  { id: "bbc-business", name: "BBC Business", category: "business", url: "https://feeds.bbci.co.uk/news/business/rss.xml" },
  { id: "guardian-business", name: "The Guardian Business", category: "business", url: "https://www.theguardian.com/uk/business/rss" },
  { id: "nyt-business", name: "NYT Business", category: "business", url: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml" },
  { id: "cnbc", name: "CNBC", category: "business", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html" },
  { id: "npr-business", name: "NPR Business", category: "business", url: "https://feeds.npr.org/1006/rss.xml" },
  { id: "marginal-revolution", name: "Marginal Revolution", category: "business", url: "https://marginalrevolution.com/feed" },

  // ───────── Science ─────────
  { id: "bbc-science", name: "BBC Science & Environment", category: "science", url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml" },
  { id: "nasa", name: "NASA", category: "science", url: "https://www.nasa.gov/feed/" },
  { id: "nature", name: "Nature", category: "science", url: "https://www.nature.com/nature.rss" },
  { id: "science-news", name: "Science (AAAS) News", category: "science", url: "https://www.science.org/rss/news_current.xml" },
  { id: "sciencedaily", name: "ScienceDaily", category: "science", url: "https://www.sciencedaily.com/rss/all.xml" },
  { id: "phys-org", name: "Phys.org", category: "science", url: "https://phys.org/rss-feed/" },
  { id: "new-scientist", name: "New Scientist", category: "science", url: "https://www.newscientist.com/feed/home/" },
  { id: "quanta", name: "Quanta Magazine", category: "science", url: "https://www.quantamagazine.org/feed/" },
  { id: "nyt-science", name: "NYT Science", category: "science", url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml" },
  { id: "guardian-science", name: "The Guardian Science", category: "science", url: "https://www.theguardian.com/science/rss" },
  { id: "space-com", name: "Space.com", category: "science", url: "https://www.space.com/feeds/all" },
  { id: "ars-science", name: "Ars Technica Science", category: "science", url: "https://feeds.arstechnica.com/arstechnica/science" },

  // ───────── Tech ─────────
  { id: "ars-technica", name: "Ars Technica", category: "tech", url: "https://feeds.arstechnica.com/arstechnica/index" },
  { id: "the-verge", name: "The Verge", category: "tech", url: "https://www.theverge.com/rss/index.xml" },
  { id: "techcrunch", name: "TechCrunch", category: "tech", url: "https://techcrunch.com/feed/" },
  { id: "wired", name: "WIRED", category: "tech", url: "https://www.wired.com/feed/rss" },
  { id: "engadget", name: "Engadget", category: "tech", url: "https://www.engadget.com/rss.xml" },
  { id: "mit-tech-review", name: "MIT Technology Review", category: "tech", url: "https://www.technologyreview.com/feed/" },
  { id: "mit-news", name: "MIT News", category: "tech", url: "https://news.mit.edu/rss/feed" },
  { id: "bbc-tech", name: "BBC Technology", category: "tech", url: "https://feeds.bbci.co.uk/news/technology/rss.xml" },
  { id: "guardian-tech", name: "The Guardian Technology", category: "tech", url: "https://www.theguardian.com/technology/rss" },
  { id: "ieee-spectrum", name: "IEEE Spectrum", category: "tech", url: "https://spectrum.ieee.org/feeds/feed.rss" },
  { id: "the-register", name: "The Register", category: "tech", url: "https://www.theregister.com/headlines.atom" },
  { id: "lobsters", name: "Lobsters", category: "tech", url: "https://lobste.rs/rss" },
  { id: "techmeme", name: "Techmeme", category: "tech", url: "https://www.techmeme.com/feed.xml" },
  { id: "404-media", name: "404 Media", category: "tech", url: "https://www.404media.co/rss/" },
  { id: "platformer", name: "Platformer", category: "tech", url: "https://www.platformer.news/rss/" },

  // ───────── AI ─────────
  { id: "openai", name: "OpenAI", category: "ai", url: "https://openai.com/news/rss.xml" },
  { id: "deepmind", name: "Google DeepMind", category: "ai", url: "https://deepmind.google/blog/rss.xml" },
  { id: "google-ai", name: "Google AI Blog", category: "ai", url: "https://blog.google/technology/ai/rss/" },
  { id: "huggingface", name: "Hugging Face", category: "ai", url: "https://huggingface.co/blog/feed.xml" },
  { id: "nvidia", name: "NVIDIA Blog", category: "ai", url: "https://blogs.nvidia.com/feed/" },
  { id: "import-ai", name: "Import AI", category: "ai", url: "https://importai.substack.com/feed" },
  { id: "latent-space", name: "Latent Space", category: "ai", url: "https://www.latent.space/feed" },
  { id: "last-week-ai", name: "Last Week in AI", category: "ai", url: "https://lastweekin.ai/feed" },
  { id: "simon-willison", name: "Simon Willison", category: "ai", url: "https://simonwillison.net/atom/everything/" },
  { id: "techcrunch-ai", name: "TechCrunch AI", category: "ai", url: "https://techcrunch.com/category/artificial-intelligence/feed/" },
  { id: "verge-ai", name: "The Verge AI", category: "ai", url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml" },

  // ───────── Research papers (arXiv) ─────────
  { id: "arxiv-ai", name: "arXiv cs.AI", category: "research", url: "https://rss.arxiv.org/rss/cs.AI" },
  { id: "arxiv-lg", name: "arXiv cs.LG", category: "research", url: "https://rss.arxiv.org/rss/cs.LG" },
  { id: "arxiv-cl", name: "arXiv cs.CL", category: "research", url: "https://rss.arxiv.org/rss/cs.CL" },
  { id: "arxiv-cv", name: "arXiv cs.CV", category: "research", url: "https://rss.arxiv.org/rss/cs.CV" },
  { id: "arxiv-ro", name: "arXiv cs.RO", category: "research", url: "https://rss.arxiv.org/rss/cs.RO" },

  // ───────── Health & Medicine ─────────
  { id: "bbc-health", name: "BBC Health", category: "health", url: "https://feeds.bbci.co.uk/news/health/rss.xml" },
  { id: "npr-health", name: "NPR Health", category: "health", url: "https://feeds.npr.org/1128/rss.xml" },
  { id: "nyt-health", name: "NYT Health", category: "health", url: "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml" },
  { id: "stat-news", name: "STAT", category: "health", url: "https://www.statnews.com/feed/" },
  { id: "guardian-health", name: "The Guardian Health", category: "health", url: "https://www.theguardian.com/society/health/rss" },

  // ───────── Environment & Climate ─────────
  { id: "guardian-environment", name: "The Guardian Environment", category: "environment", url: "https://www.theguardian.com/environment/rss" },
  { id: "carbon-brief", name: "Carbon Brief", category: "environment", url: "https://www.carbonbrief.org/feed/" },
  { id: "grist", name: "Grist", category: "environment", url: "https://grist.org/feed/" },
  { id: "mongabay", name: "Mongabay", category: "environment", url: "https://news.mongabay.com/feed/" },

  // ───────── History, Philosophy & Ideas ─────────
  { id: "aeon", name: "Aeon", category: "humanities", url: "https://aeon.co/feed.rss" },
  { id: "psyche", name: "Psyche", category: "humanities", url: "https://psyche.co/feed" },
  { id: "jstor-daily", name: "JSTOR Daily", category: "humanities", url: "https://daily.jstor.org/feed/" },
  { id: "smithsonian", name: "Smithsonian Magazine", category: "humanities", url: "https://www.smithsonianmag.com/rss/latest_articles/" },
  { id: "daily-nous", name: "Daily Nous (Philosophy)", category: "humanities", url: "https://dailynous.com/feed/" },
  { id: "marginalian", name: "The Marginalian", category: "humanities", url: "https://www.themarginalian.org/feed/" },
  { id: "atlas-obscura", name: "Atlas Obscura", category: "humanities", url: "https://www.atlasobscura.com/feeds/latest" },
  { id: "lithub", name: "Literary Hub", category: "humanities", url: "https://lithub.com/feed/" },
  { id: "longreads", name: "Longreads", category: "humanities", url: "https://longreads.com/feed/" },
  { id: "kottke", name: "Kottke.org", category: "humanities", url: "https://feeds.kottke.org/main" },

  // ───────── Internet Culture / Gen Z ─────────
  { id: "know-your-meme", name: "Know Your Meme", category: "internet", url: "https://knowyourmeme.com/newsfeed.rss" },
  { id: "mashable", name: "Mashable", category: "internet", url: "https://mashable.com/feeds/rss/all" },
  { id: "buzzfeed", name: "BuzzFeed", category: "internet", url: "https://www.buzzfeed.com/index.xml" },
  { id: "polygon", name: "Polygon", category: "internet", url: "https://www.polygon.com/rss/index.xml" },
  { id: "kotaku", name: "Kotaku", category: "internet", url: "https://kotaku.com/rss" },
  { id: "ign", name: "IGN", category: "internet", url: "https://feeds.ign.com/ign/all" },
  { id: "gizmodo", name: "Gizmodo", category: "internet", url: "https://gizmodo.com/rss" },
  { id: "dexerto", name: "Dexerto", category: "internet", url: "https://www.dexerto.com/feed/" },
  { id: "rest-of-world", name: "Rest of World", category: "internet", url: "https://restofworld.org/feed/" },

  // ───────── Music, Film & Pop Culture ─────────
  { id: "pitchfork", name: "Pitchfork", category: "entertainment", url: "https://pitchfork.com/feed/feed-news/rss" },
  { id: "consequence", name: "Consequence", category: "entertainment", url: "https://consequence.net/feed/" },
  { id: "billboard", name: "Billboard", category: "entertainment", url: "https://www.billboard.com/feed/" },
  { id: "variety", name: "Variety", category: "entertainment", url: "https://variety.com/feed/" },
  { id: "guardian-culture", name: "The Guardian Culture", category: "entertainment", url: "https://www.theguardian.com/culture/rss" },
];

export function getSourcesByCategory(category: Category): Source[] {
  return SOURCES.filter((source) => source.category === category);
}