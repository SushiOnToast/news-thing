import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Article } from "@/lib/types";

type Props = { article: Article };

function formatDate(iso: string) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function ArticleCard({ article }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="secondary">{article.source}</Badge>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        <CardTitle className="text-lg leading-snug">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {article.title}
          </a>
        </CardTitle>
      </CardHeader>
      {article.summary && (
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {article.summary}
          </p>
        </CardContent>
      )}
    </Card>
  );
}
