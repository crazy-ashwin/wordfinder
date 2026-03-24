"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shuffle, Search, RotateCcw } from "lucide-react";
import { searchWords } from "@/lib/api";

interface AnagramResult {
	word: string;
	score: number;
	length: number;
}

export default function AnagramSolverPage() {
	const [letters, setLetters] = useState("");
	const [anagrams, setAnagrams] = useState<AnagramResult[]>([]);
	const [loading, setLoading] = useState(false);
	const [minLength, setMinLength] = useState("3");

	const handleSolve = async () => {
		if (!letters.trim()) return;

		setLoading(true);
		try {
			const results = await searchWords({
				letters: letters.trim(),
			});

			// Filter by minimum length and sort by score
			const filteredResults = results
				.filter((word) => word.length >= Number.parseInt(minLength))
				.sort((a, b) => b.score - a.score)
				.slice(0, 100);

			setAnagrams(filteredResults);
		} catch (error) {
			console.error("Anagram solving failed:", error);
			setAnagrams([]);
		} finally {
			setLoading(false);
		}
	};

	const clearAll = () => {
		setLetters("");
		setAnagrams([]);
	};

	const groupedAnagrams = anagrams.reduce((acc, word) => {
		const len = word.length;
		if (!acc[len]) acc[len] = [];
		acc[len].push(word);
		return acc;
	}, {} as Record<number, AnagramResult[]>);

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-12'>
						<div className='flex justify-center mb-4'>
							<div className='w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center'>
								<Shuffle className='h-10 w-10 text-white' />
							</div>
						</div>
						<h1 className='text-4xl font-bold text-gray-800 mb-4'>
							Anagram Solver
						</h1>
						<p className='text-xl text-gray-600 mb-2'>
							Unscramble letters to find all possible anagrams and
							word combinations
						</p>
						<p className='text-gray-500'>
							Enter your letters and discover hidden words
							instantly
						</p>
					</div>

					{/* Input Section */}
					<Card className='mb-8 shadow-lg'>
						<CardContent className='p-8'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
								<div className='md:col-span-2'>
									<label
										htmlFor='letters'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Enter Letters to Unscramble
									</label>
									<Input
										id='letters'
										type='text'
										placeholder='e.g., LISTEN, SILENT, ENLIST'
										value={letters}
										onChange={(e) =>
											setLetters(
												e.target.value.toUpperCase()
											)
										}
										onKeyPress={(e) =>
											e.key === "Enter" && handleSolve()
										}
										className='h-12 text-lg'
									/>
								</div>
								<div>
									<label
										htmlFor='minLength'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Minimum Length
									</label>
									<Input
										id='minLength'
										type='number'
										min='2'
										max='15'
										value={minLength}
										onChange={(e) =>
											setMinLength(e.target.value)
										}
										className='h-12'
									/>
								</div>
							</div>

							<div className='flex gap-4'>
								<Button
									onClick={handleSolve}
									disabled={loading || !letters.trim()}
									className='flex-1 h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold'>
									{loading ? (
										<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
									) : (
										<Search className='h-5 w-5 mr-2' />
									)}
									{loading ? "Solving..." : "Solve Anagrams"}
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
					{anagrams.length > 0 && (
						<div className='space-y-6'>
							<div className='text-center'>
								<h2 className='text-2xl font-bold text-gray-800 mb-2'>
									Found {anagrams.length} Anagram
									{anagrams.length !== 1 ? "s" : ""}
								</h2>
								<p className='text-gray-600'>
									Words you can make from &quot;{letters}
									&quot;
								</p>
							</div>

							{Object.entries(groupedAnagrams)
								.sort(
									([a], [b]) =>
										Number.parseInt(b) - Number.parseInt(a)
								)
								.map(([length, words]) => (
									<Card key={length} className='shadow-lg'>
										<CardHeader className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white'>
											<CardTitle className='flex items-center justify-between'>
												<span>
													{length} Letter Words
												</span>
												<Badge
													variant='secondary'
													className='bg-white text-blue-600'>
													{words.length} words
												</Badge>
											</CardTitle>
										</CardHeader>
										<CardContent className='p-6'>
											<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3'>
												{words.map((word, index) => (
													<div
														key={index}
														className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer group'>
														<div className='font-semibold text-gray-800 group-hover:text-blue-600 transition-colors'>
															{word.word}
														</div>
														<div className='text-sm text-gray-500'>
															{word.score} pts
														</div>
													</div>
												))}
											</div>
										</CardContent>
									</Card>
								))}
						</div>
					)}

					{/* Tips */}
					<Card className='mt-8 shadow-lg'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Shuffle className='h-5 w-5 text-blue-600' />
								Anagram Solving Tips
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h3 className='font-semibold mb-3'>
										How to Use
									</h3>
									<ul className='space-y-2 text-sm text-gray-600'>
										<li>
											• Enter any combination of letters
										</li>
										<li>
											• Set minimum word length (2-15
											letters)
										</li>
										<li>
											• Get instant results with scoring
										</li>
										<li>• Words are grouped by length</li>
									</ul>
								</div>
								<div>
									<h3 className='font-semibold mb-3'>
										Pro Tips
									</h3>
									<ul className='space-y-2 text-sm text-gray-600'>
										<li>
											• Try common letter combinations
										</li>
										<li>
											• Look for prefixes and suffixes
										</li>
										<li>
											• Higher scores indicate rarer
											letters
										</li>
										<li>
											• Perfect for word games and puzzles
										</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}