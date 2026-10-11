import { ArticleCard } from "@/components/article-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchFeed } from "@/lib/feeds";
import type { Article, Source } from "@/lib/types";

// Hard-coded for now. Next chunk replaces this with a list of sources.
const source: Source = {
  id: "bbc-world",
  name: "BBC World",
  url: "https://feeds.bbci.co.uk/news/world/rss.xml",
  category: "world"
};

export async function Feed() {
  let articles: Article[];
  try {
    articles = await fetchFeed(source);
  } catch {
    return (
      <p className="text-sm text-muted-foreground">
        Couldn&apos;t load {source.name}.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
}

export function FeedSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-3/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
