import type { Metadata } from "next";
import WordsWithLettersDetailPage from "./WordsWithLettersDetailPage";

type Props = {
  params: Promise<{ letters: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { letters } = await params;
  const upperLetters = letters.toUpperCase();

  return {
    title: `Words with ${upperLetters} - Find Words Containing ${upperLetters} | Find Word Finder`,
    description: `Find words that contain ${upperLetters}. Search our comprehensive database of words with ${upperLetters} for Scrabble, Words with Friends, crosswords, and vocabulary building. Perfect for word games and puzzles.`,
    alternates: {
      canonical: `/words-with-letters/${letters}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { letters } = await params;
  
  return <WordsWithLettersDetailPage letters={letters} />;
}
