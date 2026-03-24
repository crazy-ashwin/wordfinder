import type { Metadata } from "next";
import WordGeneratorPage from "./WordGeneratorPage";

export const metadata: Metadata = {
  title: "Word Generator - Random Word Ideas for Creative Writing | Find Word Finder",
  description: "Generate random words for creative writing, brainstorming, and inspiration. Perfect for writers, teachers, and creative projects. Choose from various categories and difficulty levels.",
  keywords: "word generator, random words, creative writing, brainstorming, word ideas, writing prompts",
  alternates: {
    canonical: "/word-generator",
  },
};

export default function Page() {
  return <WordGeneratorPage />;
}