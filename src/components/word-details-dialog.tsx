"use client";

import type React from "react";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface WordDetailsDialogProps {
	word: string;
	children: React.ReactNode;
}

interface WordDetails {
	word: string;
	partOfSpeech: string;
	definition: string;
	examples: string[];
	gameCompatibility: {
		scrabbleUS: boolean;
		scrabbleUK: boolean;
		wordsWithFriends: boolean;
		wordle: boolean;
		quordle: boolean;
		octordle: boolean;
	};
	scrabbleScore: number;
}

export function WordDetailsDialog({ word, children }: WordDetailsDialogProps) {
	const [wordDetails, setWordDetails] = useState<WordDetails | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const calculateScrabbleScore = (word: string): number => {
		const letterScores: { [key: string]: number } = {
			a: 1,
			b: 3,
			c: 3,
			d: 2,
			e: 1,
			f: 4,
			g: 2,
			h: 4,
			i: 1,
			j: 8,
			k: 5,
			l: 1,
			m: 3,
			n: 1,
			o: 1,
			p: 3,
			q: 10,
			r: 1,
			s: 1,
			t: 1,
			u: 1,
			v: 4,
			w: 4,
			x: 8,
			y: 4,
			z: 10,
		};
		return word
			.toLowerCase()
			.split("")
			.reduce((score, letter) => {
				return score + (letterScores[letter] || 0);
			}, 0);
	};

	const getWordDetails = async (word: string): Promise<WordDetails> => {
		// Mock data for demonstration - in real app, this would call an API
		const mockData: { [key: string]: Partial<WordDetails> } = {
			FUTZ: {
				partOfSpeech: "verb",
				definition: "waste time; idle or busy oneself aimlessly",
				examples: [
					"she futzed around in the kitchen",
					"Brendan was futzing around with his camera",
				],
			},
			QUIZ: {
				partOfSpeech: "noun",
				definition:
					"a test of knowledge, especially a brief informal test",
				examples: [
					"we had a quiz on French vocabulary",
					"the pub quiz was very challenging",
				],
			},
			JAZZ: {
				partOfSpeech: "noun",
				definition:
					"a type of music characterized by improvisation and syncopation",
				examples: [
					"he loves listening to jazz music",
					"the jazz festival was amazing",
				],
			},
			WORD: {
				partOfSpeech: "noun",
				definition:
					"a single distinct meaningful element of speech or writing",
				examples: [
					"he couldn't find the right word",
					"actions speak louder than words",
				],
			},
			GAME: {
				partOfSpeech: "noun",
				definition: "a form of play or sport with rules",
				examples: [
					"they played a board game",
					"the football game was exciting",
				],
			},
		};

		const mock = mockData[word.toUpperCase()] || {};

		return {
			word: word.toUpperCase(),
			partOfSpeech: mock.partOfSpeech || "noun",
			definition:
				mock.definition ||
				`A ${word.length}-letter word used in word games`,
			examples: mock.examples || [
				`The word ${word.toLowerCase()} is commonly used`,
				`Players often use ${word.toLowerCase()} in Scrabble`,
			],
			gameCompatibility: {
				scrabbleUS: word.length >= 2,
				scrabbleUK: word.length >= 2,
				wordsWithFriends: word.length >= 2,
				wordle: word.length === 5,
				quordle: word.length === 5,
				octordle: word.length === 5,
			},
			scrabbleScore: calculateScrabbleScore(word),
		};
	};

	const handleOpenChange = async (open: boolean) => {
		setIsOpen(open);
		if (open && !wordDetails) {
			setIsLoading(true);
			try {
				const details = await getWordDetails(word);
				setWordDetails(details);
			} catch (error) {
				console.error("Error fetching word details:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto p-0'>
				<DialogTitle className='hidden'></DialogTitle>
				{/* Custom Header with Green Background */}
				<div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-t-lg'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<h2 className='text-2xl font-bold'>
								Definitions for
							</h2>
							<Badge className='bg-yellow-400 text-black font-bold px-3 py-1 text-lg'>
								{word.toUpperCase()}
							</Badge>
						</div>
					</div>
				</div>

				<div className='p-6 space-y-6'>
					{isLoading ? (
						<div className='text-center py-8'>
							<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto'></div>
							<p className='mt-2 text-gray-600'>
								Loading word details...
							</p>
						</div>
					) : wordDetails ? (
						<>
							{/* Word Games Compatibility */}
							<div>
								<h3 className='text-xl font-bold text-gray-800 mb-4'>
									Word Games
								</h3>
								<div className='space-y-3'>
									<div className='flex items-center justify-between'>
										<span className='text-gray-700'>
											Scrabble US/Canada (OTCWL)
										</span>
										<Badge
											className={
												wordDetails.gameCompatibility
													.scrabbleUS
													? "bg-green-500 text-white"
													: "bg-red-500 text-white"
											}>
											{wordDetails.gameCompatibility
												.scrabbleUS
												? "Yes"
												: "No"}
										</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-gray-700'>
											Wordle
										</span>
										<Badge
											className={
												wordDetails.gameCompatibility
													.wordle
													? "bg-green-500 text-white"
													: "bg-red-500 text-white"
											}>
											{wordDetails.gameCompatibility
												.wordle
												? "Yes"
												: "No"}
										</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-gray-700'>
											Quordle
										</span>
										<Badge
											className={
												wordDetails.gameCompatibility
													.quordle
													? "bg-green-500 text-white"
													: "bg-red-500 text-white"
											}>
											{wordDetails.gameCompatibility
												.quordle
												? "Yes"
												: "No"}
										</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-gray-700'>
											Octordle
										</span>
										<Badge
											className={
												wordDetails.gameCompatibility
													.octordle
													? "bg-green-500 text-white"
													: "bg-red-500 text-white"
											}>
											{wordDetails.gameCompatibility
												.octordle
												? "Yes"
												: "No"}
										</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-gray-700'>
											Scrabble UK (SOWPODS)
										</span>
										<Badge
											className={
												wordDetails.gameCompatibility
													.scrabbleUK
													? "bg-green-500 text-white"
													: "bg-red-500 text-white"
											}>
											{wordDetails.gameCompatibility
												.scrabbleUK
												? "Yes"
												: "No"}
										</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-gray-700'>
											Words With Friends
										</span>
										<Badge
											className={
												wordDetails.gameCompatibility
													.wordsWithFriends
													? "bg-green-500 text-white"
													: "bg-red-500 text-white"
											}>
											{wordDetails.gameCompatibility
												.wordsWithFriends
												? "Yes"
												: "No"}
										</Badge>
									</div>
								</div>
							</div>

							{/* Scrabble Score */}
							<div className='bg-gray-50 rounded-lg p-4'>
								<div className='flex items-center justify-between'>
									<span className='font-semibold text-gray-800'>
										Scrabble Score
									</span>
									<Badge className='bg-blue-500 text-white font-bold text-lg px-3 py-1'>
										{wordDetails.scrabbleScore} points
									</Badge>
								</div>
							</div>

							{/* Part of Speech */}
							<div>
								<p className='text-lg italic text-gray-600'>
									{wordDetails.partOfSpeech}
								</p>
							</div>

							{/* Definitions */}
							<div>
								<Badge className='bg-green-500 text-white font-bold mb-3'>
									Definitions
								</Badge>
								<p className='text-gray-800 text-lg leading-relaxed'>
									{wordDetails.definition}
								</p>
							</div>

							{/* Examples */}
							<div>
								<Badge className='bg-blue-500 text-white font-bold mb-3'>
									Examples
								</Badge>
								<div className='space-y-2'>
									{wordDetails.examples.map(
										(example, index) => (
											<p
												key={index}
												className='text-gray-700 italic'>
												- {example}
											</p>
										)
									)}
								</div>
							</div>
						</>
					) : null}
				</div>
			</DialogContent>
		</Dialog>
	);
}
