import type { Metadata } from "next";
import WordUnscramblerPage from "./WordUnscramblerPage";

export const metadata: Metadata = {
  title: "Word Unscrambler - Turn Jumbled Letters into Words | Find Word Finder",
  description: "Turn jumbled letters into meaningful words for word games, puzzles, and brain training. Perfect for Scrabble, Words with Friends, and crossword puzzles. Get instant results with scoring and filtering options.",
  keywords: "word unscrambler, word games, word puzzles, word search, scrabble helper, words with friends, puzzle solver",
  alternates: {
    canonical: "/word-unscrambler",
  },
};

export default function Page() {
  return <WordUnscramblerPage />;
}