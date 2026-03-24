import type { Metadata } from "next";
import CrosswordSolverPage from "./CrosswordSolverPage";

export const metadata: Metadata = {
  title: "Crossword Solver - Find Words for Your Puzzle Patterns | Find Word Finder",
  description: "Find words that fit your crossword puzzle patterns. Use question marks, underscores, or hyphens for unknown letters. Perfect for solving crossword clues and puzzles quickly with accurate word matches.",
  keywords: "crossword solver, word games, word puzzles, word search, crossword answers, puzzle helper, word finder",
  alternates: {
    canonical: "/crossword-solver",
  },
};

export default function Page() {
  return <CrosswordSolverPage />;
}