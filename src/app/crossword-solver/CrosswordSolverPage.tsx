"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Grid3X3, Search, RotateCcw, Lightbulb } from "lucide-react";
import { searchWords, type SearchParams } from "@/lib/api";

interface CrosswordResult {
	word: string;
	score: number;
	length: number;
}

export default function CrosswordSolverPage() {
	const [pattern, setPattern] = useState("");
	const [clue, setClue] = useState("");
	const [results, setResults] = useState<CrosswordResult[]>([]);
	const [loading, setLoading] = useState(false);

	const handleSolve = async () => {
		if (!pattern.trim()) return;

		setLoading(true);
		try {
			const searchParams: SearchParams = {
				pattern: pattern.toLowerCase(),
				max: 50,
			};

			const searchResults = await searchWords(searchParams);

			// Sort results by score
			const sortedResults = searchResults.sort(
				(a, b) => b.score - a.score
			);

			setResults(sortedResults);
		} catch (error) {
			console.error("Crossword solving failed:", error);
			setResults([]);
		} finally {
			setLoading(false);
		}
	};

	const clearAll = () => {
		setPattern("");
		setClue("");
		setResults([]);
	};

	const examplePatterns = [
		{
			pattern: "C_T",
			description: "3-letter word starting with C, ending with T",
		},
		{
			pattern: "_O_E",
			description: "4-letter word with O as 2nd letter, E as last",
		},
		{
			pattern: "?R??D",
			description: "5-letter word with R as 2nd letter, D as last",
		},
		{
			pattern: "PUZZLE",
			description: "Exact word match",
		},
		{
			pattern: "_O_",
			description: "3-letter word with O as middle letter",
		},
		{
			pattern: "___",
			description: "Any 3-letter word",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-12'>
						<div className='flex justify-center mb-4'>
							<div className='w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center'>
								<Grid3X3 className='h-10 w-10 text-white' />
							</div>
						</div>
						<h1 className='text-4xl font-bold text-gray-800 mb-4'>
							Crossword Solver
						</h1>
						<p className='text-xl text-gray-600 mb-2'>
							Find words that fit your crossword puzzle patterns
						</p>
						<p className='text-gray-500'>
							Use ? _ or - for unknown letters
						</p>
					</div>

					{/* Input Section */}
					<Card className='mb-8 shadow-lg'>
						<CardContent className='p-8'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
								<div>
									<label
										htmlFor='pattern'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Word Pattern
									</label>
									<Input
										id='pattern'
										type='text'
										placeholder='e.g., C_T, _O_E, ?R??D'
										value={pattern}
										onChange={(e) =>
											setPattern(
												e.target.value.toUpperCase()
											)
										}
										onKeyPress={(e) =>
											e.key === "Enter" && handleSolve()
										}
										className='h-12 text-lg font-mono'
									/>
									<p className='text-xs text-gray-500 mt-1'>
										Use _, ?, or - for unknown letters
									</p>
								</div>
								<div>
									<label
										htmlFor='clue'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Clue (Optional)
									</label>
									<Textarea
										id='clue'
										placeholder='Enter the crossword clue to help narrow results...'
										value={clue}
										onChange={(e) =>
											setClue(e.target.value)
										}
										className='h-12 resize-none'
									/>
								</div>
							</div>

							<div className='flex gap-4'>
								<Button
									onClick={handleSolve}
									disabled={loading || !pattern.trim()}
									className='flex-1 h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold'>
									{loading ? (
										<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
									) : (
										<Search className='h-5 w-5 mr-2' />
									)}
									{loading ? "Solving..." : "Solve Crossword"}
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
							<CardHeader className='bg-gradient-to-r from-orange-500 to-red-500 text-white'>
								<CardTitle className='flex items-center justify-between'>
									<span>Possible Answers</span>
									<Badge
										variant='secondary'
										className='bg-white text-orange-600'>
										{results.length} matches
									</Badge>
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
									{results.map((word, index) => (
										<div
											key={index}
											className='bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer group'>
											<div className='flex items-center justify-between mb-2'>
												<span className='font-bold text-lg text-gray-800 group-hover:text-orange-600 transition-colors font-mono'>
													{word.word}
												</span>
												<Badge
													variant='outline'
													className='text-xs'>
													{word.score} pts
												</Badge>
											</div>
											<div className='text-sm text-gray-500'>
												{word.length} letters
											</div>
											<div className='mt-2 text-xs text-gray-400'>
												Pattern:{" "}
												{pattern
													.split("")
													.map((char, i) => (
														<span
															key={i}
															className={
																char === "?" ||
																char === "_" ||
																char === "-"
																	? "text-orange-500"
																	: ""
															}>
															{word.word[i] ||
																char}
														</span>
													))}
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					)}

					{/* Examples and Tips */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Lightbulb className='h-5 w-5 text-orange-600' />
									Pattern Examples
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									{examplePatterns.map((example, index) => (
										<div
											key={index}
											className='border-l-4 border-orange-200 pl-4'>
											<div className='font-mono font-bold text-orange-600'>
												{example.pattern}
											</div>
											<div className='text-sm text-gray-600'>
												{example.description}
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Grid3X3 className='h-5 w-5 text-orange-600' />
									Solving Tips
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex items-start gap-3'>
										<div className='w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs mt-0.5'>
											1
										</div>
										<div>
											<div className='font-semibold text-sm'>
												Use Known Letters
											</div>
											<div className='text-xs text-gray-600'>
												Enter letters you know, use ?
												for unknowns
											</div>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs mt-0.5'>
											2
										</div>
										<div>
											<div className='font-semibold text-sm'>
												Consider Word Length
											</div>
											<div className='text-xs text-gray-600'>
												Count squares carefully for
												accurate patterns
											</div>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs mt-0.5'>
											3
										</div>
										<div>
											<div className='font-semibold text-sm'>
												Use Crossing Words
											</div>
											<div className='text-xs text-gray-600'>
												Letters from intersecting words
												help narrow options
											</div>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs mt-0.5'>
											4
										</div>
										<div>
											<div className='font-semibold text-sm'>
												Think About Clues
											</div>
											<div className='text-xs text-gray-600'>
												Consider wordplay, synonyms, and
												themes
											</div>
										</div>
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