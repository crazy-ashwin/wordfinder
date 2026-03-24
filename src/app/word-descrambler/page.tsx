import type { Metadata } from "next";
import WordDescramblerPage from "./WordDescramblerPage";

export const metadata: Metadata = {
  title: "Word Descrambler - Unscramble Letters to Find Words | Find Word Finder",
  description: "Unscramble letters to find all possible words and word combinations. Perfect for word games, puzzles, Scrabble, and Words with Friends. Enter any combination of letters and get instant results.",
  keywords: "word descrambler, word unscrambler, word games, word puzzles, word search, scrabble helper, words with friends",
  alternates: {
    canonical: "/word-descrambler",
  },
};

export default function Page() {
  return <WordDescramblerPage />;
}