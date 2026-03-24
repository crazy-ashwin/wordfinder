import type { Metadata } from "next";
import AnagramSolverPage from "./AnagramSolverPage";

export const metadata: Metadata = {
  title: "Anagram Solver - Unscramble Letters to Find Words | Find Word Finder",
  description: "Find all possible anagrams and word combinations from your letters. Perfect for word games, puzzles, Scrabble, and Words with Friends. Enter any combination of letters and get instant results.",
  keywords: "anagram solver, word unscrambler, word games, word puzzles, word search, scrabble helper, words with friends",
  alternates: {
    canonical: "/anagram-solver",
  },
};

export default function Page() {
  return <AnagramSolverPage />;
}