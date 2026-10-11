import { Article, Source } from "./types";
import Parser from "rss-parser";

export async function fetchFeed(source: Source): Promise<Article[]> {
  const parser = new Parser();
  const feed = await parser.parseURL(
    "https://feeds.bbci.co.uk/news/world/rss.xml",
  );
  const articles: Article[] = feed.items.map((item) => ({
    url: item.link ?? "",
    title: item.title ?? "Untitled",
    source: feed.title ?? "Unknown source",
    publishedAt: item.isoDate ?? "",
    summary: item.contentSnippet ?? "",
  }));

  return articles;
}
