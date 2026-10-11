import { Suspense } from "react";
import { Feed, FeedSkeleton } from "@/components/feed";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">Your feed</h1>
      <Suspense fallback={<FeedSkeleton />}>
        <Feed />
      </Suspense>
    </main>
  );
}
