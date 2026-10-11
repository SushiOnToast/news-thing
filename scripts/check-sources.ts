import Parser from "rss-parser";
import { SOURCES } from "../lib/sources";
import type { Source } from "../lib/types";

const parser = new Parser({
  timeout: 10_000,
  headers: {
    "User-Agent": "Mozilla/5.0 (compatible; newsfeed-prototype/0.1)",
    Accept: "*/*",
  },
});

type Result =
  | { source: Source; ok: true; items: number; newest: string | null }
  | { source: Source; ok: false; error: string };

async function check(source: Source): Promise<Result> {
  try {
    const feed = await parser.parseURL(source.url);
    const dates = feed.items
      .map((item) => item.isoDate)
      .filter((d): d is string => Boolean(d))
      .sort();
    return {
      source,
      ok: true,
      items: feed.items.length,
      newest: dates.at(-1) ?? null,
    };
  } catch (err) {
    return {
      source,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

async function main() {
  const results = await Promise.all(SOURCES.map(check));
  const monthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  let healthy = 0;

  for (const r of results) {
    const id = r.source.id.padEnd(22);
    if (!r.ok) {
      console.log(`FAIL   ${id} ${r.error}`);
    } else if (r.items === 0) {
      console.log(`EMPTY  ${id} feed parsed but has no items`);
    } else if (!r.newest || Date.parse(r.newest) < monthAgo) {
      console.log(`STALE  ${id} newest item: ${r.newest ?? "no dates"}`);
    } else {
      healthy++;
    }
  }

  console.log(`\n${healthy}/${results.length} feeds look healthy`);
}

main();
