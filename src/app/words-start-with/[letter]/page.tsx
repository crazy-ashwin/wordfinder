import type { Metadata } from "next";
import WordsStartWithLetterPage from "./WordsStartWithLetterPage";

type Props = {
  params: Promise<{ letter: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { letter } = await params;
  const upperLetter = letter.toUpperCase();

  return {
    title: `Words Starting with ${upperLetter} - Find Words Beginning with ${upperLetter} | Find Word Finder`,
    description: `Find all words starting with ${upperLetter}. Search our comprehensive database of words beginning with ${upperLetter} for Scrabble, Words with Friends, crosswords, and vocabulary building.`,
    alternates: {
      canonical: `/words-start-with/${letter}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { letter } = await params;

  return <WordsStartWithLetterPage letter={letter} />;
}
