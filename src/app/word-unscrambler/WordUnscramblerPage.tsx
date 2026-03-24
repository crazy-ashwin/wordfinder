"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Target, Search, RotateCcw, Filter } from "lucide-react";
import axios from "axios";

interface Word {
	word: string;
	score: number;
	length: number;
}

export default function WordUnscramblerPage() {
	const [scrambledWord, setScrambledWord] = useState("");
	const [results, setResults] = useState<Word[]>([]);
	const [loading, setLoading] = useState(false);
	const [sortBy, setSortBy] = useState("score");
	const [filterLength, setFilterLength] = useState("all");

	const fetchWords = async (letters: string) => {
		if (!letters.trim()) return [];

		setLoading(true);
		try {
			// Use sp parameter for word scrambling
			const apiUrl = `https://api.datamuse.com/words?sp=${letters}&max=100`;
			const res = await axios.get(apiUrl);
			const data = await res.data;

			// Filter words that match exactly the given letters
			const words = data
				.filter((item: { word: string }) => {
					const wordLetters = item.word.toLowerCase().split("");
					const inputLetters = letters.toLowerCase().split("");

					// Check if all letters in the word are present in the input
					return wordLetters.every((letter) =>
						inputLetters.includes(letter)
					);
				})
				.map((item: { word: string }) => ({
					word: item.word,
					score: Math.floor(Math.random() * 20) + 1, // Random score for demo
					length: item.word.length,
				}));

			return words;
		} catch (error) {
			console.error("Error fetching words:", error);
			return [];
		} finally {
			setLoading(false);
		}
	};

	const handleUnscramble = async () => {
		const words = await fetchWords(scrambledWord.trim());

		let filteredResults = words;

		// Apply length filter
		if (filterLength !== "all") {
			const targetLength = Number.parseInt(filterLength);
			filteredResults = filteredResults.filter(
				(word: Word) => word.length === targetLength
			);
		}

		// Apply sorting
		if (sortBy === "score") {
			filteredResults.sort((a: Word, b: Word) => b.score - a.score);
		} else if (sortBy === "length") {
			filteredResults.sort((a: Word, b: Word) => b.length - a.length);
		} else if (sortBy === "alphabetical") {
			filteredResults.sort((a: Word, b: Word) =>
				a.word.localeCompare(b.word)
			);
		}

		setResults(filteredResults);
	};

	const clearAll = () => {
		setScrambledWord("");
		setResults([]);
	};

	const getScoreColor = (score: number) => {
		if (score >= 15) return "bg-red-100 text-red-800";
		if (score >= 10) return "bg-orange-100 text-orange-800";
		if (score >= 5) return "bg-yellow-100 text-yellow-800";
		return "bg-green-100 text-green-800";
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-12'>
						<div className='flex justify-center mb-4'>
							<div className='w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center'>
								<Target className='h-10 w-10 text-white' />
							</div>
						</div>
						<h1 className='text-4xl font-bold text-gray-800 mb-4'>
							Word Unscrambler
						</h1>
						<p className='text-xl text-gray-600 mb-2'>
							Turn jumbled letters into meaningful words
						</p>
						<p className='text-gray-500'>
							Perfect for word games, puzzles, and brain training
						</p>
					</div>

					{/* Input Section */}
					<Card className='mb-8 shadow-lg'>
						<CardContent className='p-8'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
								<div>
									<label
										htmlFor='scrambled'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Scrambled Letters
									</label>
									<Input
										id='scrambled'
										type='text'
										placeholder='e.g., DROW, EMAG, ZZULEP'
										value={scrambledWord}
										onChange={(e) =>
											setScrambledWord(
												e.target.value.toUpperCase()
											)
										}
										onKeyPress={(e) =>
											e.key === "Enter" &&
											handleUnscramble()
										}
										className='h-12 text-lg'
									/>
								</div>
								<div className='grid grid-cols-2 gap-4'>
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-2'>
											Sort By
										</label>
										<Select
											value={sortBy}
											onValueChange={setSortBy}>
											<SelectTrigger className='h-12'>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='score'>
													Highest Score
												</SelectItem>
												<SelectItem value='length'>
													Word Length
												</SelectItem>
												<SelectItem value='alphabetical'>
													A-Z
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-2'>
											Length
										</label>
										<Select
											value={filterLength}
											onValueChange={setFilterLength}>
											<SelectTrigger className='h-12'>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='all'>
													All Lengths
												</SelectItem>
												<SelectItem value='3'>
													3 Letters
												</SelectItem>
												<SelectItem value='4'>
													4 Letters
												</SelectItem>
												<SelectItem value='5'>
													5 Letters
												</SelectItem>
												<SelectItem value='6'>
													6 Letters
												</SelectItem>
												<SelectItem value='7'>
													7+ Letters
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>

							<div className='flex gap-4'>
								<Button
									onClick={handleUnscramble}
									disabled={loading || !scrambledWord.trim()}
									className='flex-1 h-12 bg-purple-500 hover:bg-purple-600 text-white font-semibold'>
									{loading ? (
										<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
									) : (
										<Search className='h-5 w-5 mr-2' />
									)}
									{loading
										? "Unscrambling..."
										: "Unscramble Words"}
								</Button>
								<Button
									onClick={clearAll}
									variant='outline'
									className='h-12 px-6'>
									<RotateCcw className='h-5 w-5 mr-2' />
									Clear
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Results */}
					{results.length > 0 && (
						<Card className='mb-8 shadow-lg'>
							<CardHeader className='bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
								<CardTitle className='flex items-center justify-between'>
									<span>Unscrambled Words</span>
									<Badge
										variant='secondary'
										className='bg-white text-purple-600'>
										{results.length} found
									</Badge>
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
									{results.map((word, index) => (
										<div
											key={index}
											className='bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer group'>
											<div className='flex items-center justify-between mb-2'>
												<span className='font-bold text-lg text-gray-800 group-hover:text-purple-600 transition-colors'>
													{word.word}
												</span>
												<Badge
													className={`text-xs ${getScoreColor(
														word.score
													)}`}>
													{word.score}
												</Badge>
											</div>
											<div className='text-sm text-gray-500'>
												{word.length} letters
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					)}

					{/* Examples */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Target className='h-5 w-5 text-purple-600' />
									How It Works
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='flex items-center gap-3'>
										<div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm'>
											1
										</div>
										<span className='text-sm'>
											Enter your scrambled letters
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm'>
											2
										</div>
										<span className='text-sm'>
											Choose sorting and filtering options
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm'>
											3
										</div>
										<span className='text-sm'>
											Get instant results with scores
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Filter className='h-5 w-5 text-purple-600' />
									Example Scrambles
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex justify-between items-center p-2 bg-purple-50 rounded'>
										<span className='font-mono text-sm'>
											DROW
										</span>
										<span className='text-sm text-gray-600'>
											→ WORD
										</span>
									</div>
									<div className='flex justify-between items-center p-2 bg-purple-50 rounded'>
										<span className='font-mono text-sm'>
											EMAG
										</span>
										<span className='text-sm text-gray-600'>
											→ GAME
										</span>
									</div>
									<div className='flex justify-between items-center p-2 bg-purple-50 rounded'>
										<span className='font-mono text-sm'>
											ZZULEP
										</span>
										<span className='text-sm text-gray-600'>
											→ PUZZLE
										</span>
									</div>
									<div className='flex justify-between items-center p-2 bg-purple-50 rounded'>
										<span className='font-mono text-sm'>
											LEBBARCS
										</span>
										<span className='text-sm text-gray-600'>
											→ SCRABBLE
										</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}