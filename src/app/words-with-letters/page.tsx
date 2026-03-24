import type { Metadata } from "next";
import WordsWithLettersPage from "./WordsWithLettersPage";

export const metadata: Metadata = {
  title: "Words with Letters - Find Words Containing Specific Letters | Find Word Finder",
  description: "Find words that contain specific letters or letter combinations. Search our comprehensive database of words with any letters for Scrabble, Words with Friends, crosswords, and vocabulary building. Perfect for word games and puzzles.",
  keywords: "words with letters, word games, word puzzles, word search, crossword solver, wordle helper, crossword solver, word games, word puzzles, word search",
  alternates: {
    canonical: "/words-with-letters",
  },
};

export default function Page() {
  return <WordsWithLettersPage />;
}