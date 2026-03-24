import type { Metadata } from "next";
import SpellingIndexPage from "./SpellingPage";

export const metadata: Metadata = {
  title: "Spellings Guides | Find Word Finder",
  description: "Master the art of spelling with our comprehensive collection of commonly confused words and their correct spellings.",
  keywords: "spelling, word spellings, word meanings",
  alternates: {
    canonical: "/spelling",
  },
};

export default function Page() {
  return <SpellingIndexPage />;
}