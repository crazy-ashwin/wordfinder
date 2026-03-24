import type { Metadata } from "next";
import RhymeFinderPage from "./RhymeFinderPage";

export const metadata: Metadata = {
  title: "Rhyme Finder - Find Perfect Rhymes for Poetry and Songs | Find Word Finder",
  description: "Find perfect rhymes and similar sounding words for poetry, songwriting, and creative writing. Get instant rhyming suggestions to enhance your creative projects.",
  keywords: "rhyme finder, word games, word puzzles, word search, poetry tools, songwriting, creative writing",
  alternates: {
    canonical: "/rhyme-finder",
  },
};

export default function Page() {
  return <RhymeFinderPage />;
}