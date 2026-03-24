import type { Metadata } from "next";
import ScrabbleCalculatorPage from "./ScrabbleCalculatorPage";

export const metadata: Metadata = {
  title: "Scrabble Calculator - Calculate Word Scores for Scrabble | Find Word Finder",
  description: "Calculate the point value of any word in Scrabble. Perfect for Scrabble players, Words with Friends, and word game enthusiasts. Get instant scoring for your words.",
  keywords: "scrabble calculator, word games, word puzzles, word search, scrabble helper, words with friends, word score calculator",
  alternates: {
    canonical: "/scrabble-calculator",
  },
};

export default function Page() {
  return <ScrabbleCalculatorPage />;
}