import type { Metadata } from "next";
import WordleHelperPage from "./WordleHelperPage";

export const metadata: Metadata = {
  title: "Wordle Helper - Find Best Words for Wordle Puzzle | Find Word Finder",
  description: "Wordle Helper will help you to get the best word suggestions for your Wordle puzzle. Enter your clues and get smart recommendations to solve Wordle and similar word games.",
  keywords: "wordle helper, wordle word finder, wordle puzzle, wordle suggestions, wordle solver, word games",
  alternates: {
    canonical: "/wordle-helper",
  },
};

export default function Page() {
  return <WordleHelperPage />;
}