"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Grid3X3,
	Search,
	RotateCcw,
	CheckCircle,
	XCircle,
	AlertCircle,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import axios from "axios";

interface WordleSuggestion {
	word: string;
	score: number;
	commonality: "high" | "medium" | "low";
}

export default function WordleHelperPage() {
	const [wordLength, setWordLength] = useState(5);
	const [correct, setCorrect] = useState(Array(wordLength).fill(""));
	const [misplaced, setMisplaced] = useState(Array(wordLength).fill(""));
	const [wrongLetters, setWrongLetters] = useState("");
	const [suggestions, setSuggestions] = useState<WordleSuggestion[]>([]);
	const [allSuggestions, setAllSuggestions] = useState<WordleSuggestion[]>(
		[]
	);
	const [displayedCount, setDisplayedCount] = useState(20);
	const [attempt, setAttempt] = useState(1);

	// Add refs for correct and misplaced inputs
	const correctRefs = Array.from({ length: wordLength }, () =>
		React.createRef<HTMLInputElement>()
	);
	const misplacedRefs = Array.from({ length: wordLength }, () =>
		React.createRef<HTMLInputElement>()
	);

	useEffect(() => {
		setCorrect(Array(wordLength).fill(""));
		setMisplaced(Array(wordLength).fill(""));
	}, [wordLength]);

	const [loading, setLoading] = useState(false);

	const calculateWordScore = (word: string): number => {
		// Simple scoring based on letter frequency
		const letterScores: { [key: string]: number } = {
			E: 1,
			A: 1,
			R: 1,
			I: 1,
			O: 1,
			T: 1,
			N: 1,
			S: 1,
			L: 2,
			C: 2,
			U: 2,
			D: 2,
			P: 2,
			M: 2,
			H: 2,
			G: 2,
			B: 2,
			F: 2,
			Y: 2,
			W: 2,
			K: 2,
			V: 2,
			X: 3,
			Z: 3,
			J: 3,
			Q: 3,
		};
		let score = 0;
		for (const letter of word) {
			score += letterScores[letter] || 1;
		}
		return score;
	};

	const findSuggestions = async () => {
		setLoading(true);
		try {
			// Fetch words directly from API - use a more specific pattern
			let apiUrl = `https://api.datamuse.com/words?sp=${"?".repeat(
				wordLength
			)}&max=1000`;

			// If we have green letters, create a more specific pattern
			if (correct.some((letter) => letter !== "")) {
				let pattern = "";
				for (let i = 0; i < wordLength; i++) {
					pattern += correct[i] || "?";
				}
				apiUrl = `https://api.datamuse.com/words?sp=${pattern}&max=1000`;
			}

			// For shorter words, try to get more results
			if (wordLength <= 4) {
				apiUrl += "&md=p"; // Add part-of-speech metadata to get more words
			}
			console.log("Fetching from API:", apiUrl);
			console.log("Word length:", wordLength);
			const res = await axios.get(apiUrl);
			const data = await res.data;
			console.log("API Response received:", data.length, "items");

			// Extract words and filter for exact length
			let wordleWords = data
				.map((item: { word: string }) => item.word.toUpperCase())
				.filter((word: string) => word.length === wordLength);

			// If we don't have enough words for shorter lengths, try a broader search
			if (wordleWords.length < 10 && wordLength <= 4) {
				console.log("Not enough words, trying broader search...");
				const broaderUrl = `https://api.datamuse.com/words?sp=${"?".repeat(
					wordLength
				)}&max=2000`;
				try {
					const broaderRes = await axios.get(broaderUrl);
					const broaderData = broaderRes.data;
					const broaderWords = broaderData
						.map((item: { word: string }) =>
							item.word.toUpperCase()
						)
						.filter((word: string) => word.length === wordLength);

					// Combine and remove duplicates
					const allWords = [
						...new Set([...wordleWords, ...broaderWords]),
					];
					wordleWords = allWords;
					console.log(
						"Broader search added",
						allWords.length - wordleWords.length,
						"more words"
					);
				} catch (error) {
					console.log(
						"Broader search failed, using original results",
						error
					);
				}
			}
			// Check if any filtering criteria are provided
			const hasGreenLetters = correct.some((letter) => letter !== "");
			const hasYellowLetters = misplaced.some((letter) => letter !== "");
			const hasRedLetters = wrongLetters.trim() !== "";

			let filteredWords = wordleWords;

			// Only apply filtering if criteria are provided
			if (hasGreenLetters || hasYellowLetters || hasRedLetters) {
				// Debug which filters are being applied
				if (hasGreenLetters)
					console.log("  - Green filter will be applied");
				if (hasYellowLetters)
					console.log("  - Yellow filter will be applied");
				if (hasRedLetters)
					console.log("  - Red filter will be applied");
				filteredWords = wordleWords.filter((word: string) => {
					// GREEN: Check correct letters in correct positions
					for (let i = 0; i < wordLength; i++) {
						if (correct[i] && word[i] !== correct[i]) {
							console.log(
								`Word ${word} rejected: Green letter ${
									correct[i]
								} should be at position ${i + 1}, but found ${
									word[i]
								}`
							);
							return false; // Letter must be in exact position
						}
					}

					// RED: Check excluded letters (not in word at all)
					for (const letter of wrongLetters.toUpperCase()) {
						if (word.includes(letter)) {
							console.log(
								`  ❌ Word ${word} rejected: Contains excluded letter ${letter}`
							);
							return false; // Letter must not appear anywhere in the word
						}
					}

					// YELLOW: Check included letters in wrong positions
					for (let i = 0; i < wordLength; i++) {
						if (misplaced[i]) {
							const letter = misplaced[i];
							console.log(
								`Checking yellow letter ${letter} at position ${
									i + 1
								} for word ${word}`
							);
							console.log(
								`  Word has ${word[i]} at position ${
									i + 1
								}, looking for ${letter}`
							);

							// Letter must be in the word but NOT in this position
							if (word[i] === letter) {
								console.log(
									`  ❌ Word ${word} rejected: Yellow letter ${letter} is at wrong position ${
										i + 1
									}`
								);
								return false;
							}
							if (!word.includes(letter)) {
								console.log(
									`  ❌ Word ${word} rejected: Yellow letter ${letter} not found in word`
								);
								return false;
							}
							console.log(
								`  ✅ Word ${word} passed yellow check for letter ${letter} at position ${
									i + 1
								}`
							);
						}
					}

					console.log(`Word ${word} passed all filters`);
					return true;
				});
			}

			// If no filtering criteria provided, show all words
			if (
				!correct.some((letter) => letter !== "") &&
				!misplaced.some((letter) => letter !== "") &&
				wrongLetters.trim() === ""
			) {
				console.log(
					"No filtering criteria provided, showing all words"
				);
				filteredWords = wordleWords;
			}

			const suggestions: WordleSuggestion[] = filteredWords.map(
				(word: string) => ({
					word,
					score: calculateWordScore(word),
				})
			);

			// Sort by score (higher is better)
			suggestions.sort((a, b) => b.score - a.score);
			setAllSuggestions(suggestions);
			setSuggestions(suggestions.slice(0, 20));
			setDisplayedCount(20);
		} catch (error) {
			console.error("Error fetching words:", error);
			setAllSuggestions([]);
			setSuggestions([]);
		} finally {
			setLoading(false);
		}
	};

	const resetAll = () => {
		setCorrect(Array(wordLength).fill(""));
		setMisplaced(Array(wordLength).fill(""));
		setWrongLetters("");
		setSuggestions([]);
		setAllSuggestions([]);
		setDisplayedCount(20);
		setAttempt(1);
	};

	const loadMoreSuggestions = () => {
		const newCount = displayedCount + 20;
		setDisplayedCount(newCount);
		setSuggestions(allSuggestions.slice(0, newCount));
	};

	const handleCorrectChange = (idx: number, value: string) => {
		const arr = [...correct];
		// Only allow a letter if it is not in wrongLetters
		const char = value
			.replace(/[^a-zA-Z]/g, "")
			.slice(0, 1)
			.toUpperCase();
		if (char && wrongLetters.includes(char)) {
			arr[idx] = "";
		} else {
			arr[idx] = char;
		}
		setCorrect(arr);
		if (char && idx < wordLength - 1 && !wrongLetters.includes(char)) {
			correctRefs[idx + 1].current?.focus();
		} else if (
			char &&
			idx === wordLength - 1 &&
			!wrongLetters.includes(char)
		) {
			// When reaching the last green input, focus on the first yellow input
			if (misplacedRefs[0]?.current) {
				misplacedRefs[0].current.focus();
			}
		}
	};
	const handleMisplacedChange = (idx: number, value: string) => {
		const arr = [...misplaced];
		// Only allow a letter if it is not in wrongLetters
		const char = value
			.replace(/[^a-zA-Z]/g, "")
			.slice(0, 1)
			.toUpperCase();
		if (char && wrongLetters.includes(char)) {
			arr[idx] = "";
		} else {
			arr[idx] = char;
		}
		setMisplaced(arr);
		if (char && idx < wordLength - 1 && !wrongLetters.includes(char)) {
			misplacedRefs[idx + 1].current?.focus();
		} else if (
			char &&
			idx === wordLength - 1 &&
			!wrongLetters.includes(char)
		) {
			// When reaching the last yellow input, focus on the red input
			const redInput = document.getElementById(
				"wrongLetters"
			) as HTMLInputElement;
			if (redInput) {
				redInput.focus();
			}
		}
	};

	// Handle Enter key for correct/misplaced inputs
	const handleInputKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		idx: number,
		type: "correct" | "misplaced"
	) => {
		if (e.key === "Enter") {
			e.preventDefault();
			findSuggestions();
		} else if (e.key === "Backspace") {
			if (type === "correct" && !correct[idx] && idx > 0) {
				correctRefs[idx - 1].current?.focus();
			}
			if (type === "misplaced" && !misplaced[idx] && idx > 0) {
				misplacedRefs[idx - 1].current?.focus();
			}
		}
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-12'>
						<div className='flex justify-center mb-4'>
							<div className='w-20 h-20 bg-green-500 rounded-full flex items-center justify-center'>
								<Grid3X3 className='h-10 w-10 text-white' />
							</div>
						</div>
						<h1 className='text-4xl font-bold text-gray-800 mb-4'>
							Wordle Word Finder
						</h1>
						<p className='text-xl text-gray-600 mb-2'>
							Wordle Helper will help you to get the best word
							suggestions for your Wordle puzzle
						</p>
						<p className='text-gray-500'>
							Enter what you know and get smart recommendations
						</p>
					</div>

					{/* Input Section */}
					<Card className='mb-8 shadow-lg'>
						<CardHeader>
							<CardTitle className='flex items-center justify-between'>
								<span>Attempt #{attempt}</span>
								<Button
									onClick={() => setAttempt(attempt + 1)}
									variant='outline'
									size='sm'>
									Next Attempt
								</Button>
							</CardTitle>
						</CardHeader>
						<CardContent className='p-8'>
							{/* Word Length Selector */}
							<div className='mb-6 flex items-center gap-2'>
								<label className='mb-2 font-semibold flex items-center'>
									Word Length:
									<input
										type='number'
										min={2}
										value={wordLength}
										onChange={(e) => {
											const val = Math.max(
												2,
												Number(e.target.value)
											);
											setWordLength(val);
										}}
										className='ml-2 border rounded px-2 py-1 w-16 text-center'
										placeholder='5'
									/>
								</label>
								<button
									type='button'
									onClick={() => {
										setWordLength(5);
										setCorrect(Array(5).fill(""));
										setMisplaced(Array(5).fill(""));
									}}
									className='ml-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-semibold border border-gray-300'>
									Reset{" "}
									<center>
										<RotateCcw className='h-4 w-4 mr-2' />
									</center>
								</button>
							</div>

							{/* Known Letters (Green) */}
							<div className='mb-6'>
								<label className='block text-sm font-medium text-gray-700 mb-3'>
									<CheckCircle className='inline h-4 w-4 text-green-600 mr-1' />
									Green Letters (Correct Position)
								</label>
								<div className='grid grid-cols-5 gap-2'>
									{correct.map((letter, index) => (
										<Input
											key={index}
											type='text'
											maxLength={1}
											value={letter}
											onChange={(e) =>
												handleCorrectChange(
													index,
													e.target.value
												)
											}
											onKeyDown={(e) =>
												handleInputKeyDown(
													e,
													index,
													"correct"
												)
											}
											className='h-12 text-center text-lg font-bold bg-green-50 border-green-300'
											placeholder={`${index + 1}`}
											ref={correctRefs[index]}
										/>
									))}
								</div>
							</div>

							{/* Wrong Positions (Yellow) */}
							<div className='mb-6'>
								<label className='block text-sm font-medium text-gray-700 mb-3'>
									<AlertCircle className='inline h-4 w-4 text-yellow-600 mr-1' />
									Yellow Letters (In Word, Wrong Position)
								</label>
								<div className='grid grid-cols-5 gap-2'>
									{misplaced.map((letter, index) => (
										<Input
											key={index}
											type='text'
											maxLength={1}
											value={letter}
											onChange={(e) =>
												handleMisplacedChange(
													index,
													e.target.value
												)
											}
											onKeyDown={(e) =>
												handleInputKeyDown(
													e,
													index,
													"misplaced"
												)
											}
											className='h-12 text-center text-lg font-bold bg-yellow-50 border-yellow-300'
											placeholder={`${index + 1}`}
											ref={misplacedRefs[index]}
										/>
									))}
								</div>
							</div>

							{/* Wrong Letters (Red) */}
							<div className='mb-6'>
								<label
									htmlFor='wrongLetters'
									className='block text-sm font-medium text-gray-700 mb-3'>
									<XCircle className='inline h-4 w-4 text-red-600 mr-1' />
									Wrong Letters (Red - Not in Word)
								</label>
								<Input
									id='wrongLetters'
									type='text'
									value={wrongLetters}
									onChange={(e) => {
										// Get all green and yellow letters
										const usedLetters = new Set([
											...correct.filter(Boolean),
											...misplaced.filter(Boolean),
										]);
										// Only allow letters not present in green or yellow
										const filtered = e.target.value
											.toUpperCase()
											.split("")
											.filter(
												(char) =>
													/^[A-Z]$/.test(char) &&
													!usedLetters.has(char)
											)
											.join("");
										setWrongLetters(filtered);
									}}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											findSuggestions();
										}
									}}
									className='h-12 text-lg bg-red-50 border-red-300'
									placeholder='Enter letters not in the word (e.g., QWRTY)'
								/>
							</div>

							<div className='flex gap-4'>
								<Button
									onClick={findSuggestions}
									disabled={loading}
									className='flex-1 h-12 bg-green-500 hover:bg-green-600 text-white font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed'>
									<Search className='h-5 w-5 mr-2' />
									{loading
										? "Loading Words..."
										: "Find Suggestions"}
								</Button>
								<Button
									onClick={resetAll}
									variant='outline'
									className='h-12 px-6'>
									<RotateCcw className='h-5 w-5 mr-2' />
									Reset
								</Button>
							</div>
							{loading && (
								<div className='mt-4 text-center text-gray-600'>
									Loading words for {wordLength}-letter
									words...
								</div>
							)}
						</CardContent>
					</Card>

					{/* Suggestions */}
					{suggestions.length > 0 && (
						<Card className='mb-8 shadow-lg'>
							<CardHeader className='bg-gradient-to-r from-green-500 to-emerald-500 text-white'>
								<CardTitle className='flex items-center justify-between'>
									<span>Word Suggestions</span>
									<Badge
										variant='secondary'
										className='bg-white text-green-600'>
										{allSuggestions.length} options
									</Badge>
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
									{suggestions.map((suggestion, index) => (
										<div
											key={index}
											className='bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all cursor-pointer group'>
											<div className='flex items-center justify-between mb-3'>
												<span className='font-bold text-xl text-gray-800 group-hover:text-green-600 transition-colors font-mono'>
													{suggestion.word}
												</span>
												<div className='text-sm text-gray-500'>
													#{index + 1}
												</div>
											</div>
											<div className='flex items-center justify-between'>
												<div className='text-sm text-gray-500'>
													{suggestion.score} pts
												</div>
											</div>
										</div>
									))}
								</div>

								{/* Load More Button */}
								{allSuggestions.length > displayedCount && (
									<div className='mt-6 text-center'>
										<Button
											onClick={loadMoreSuggestions}
											variant='outline'
											className='bg-green-50 border-green-300 text-green-700 hover:bg-green-100 hover:border-green-400'>
											Load More Words (
											{Math.min(
												20,
												allSuggestions.length -
													displayedCount
											)}{" "}
											more)
										</Button>
										<p className='text-sm text-gray-500 mt-2'>
											Showing {displayedCount} of{" "}
											{allSuggestions.length} suggestions
										</p>
									</div>
								)}
							</CardContent>
						</Card>
					)}

					{/* Tips and Strategy */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Grid3X3 className='h-5 w-5 text-green-600' />
									Wordle Strategy
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div>
										<h4 className='font-semibold mb-2'>
											Best Starting Words
										</h4>
										<div className='flex flex-wrap gap-2'>
											{[
												"ADIEU",
												"AUDIO",
												"AROSE",
												"RAISE",
												"SLATE",
											].map((word) => (
												<Badge
													key={word}
													variant='outline'
													className='font-mono'>
													{word}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className='font-semibold mb-2'>
											Letter Frequency
										</h4>
										<p className='text-sm text-gray-600'>
											Most common: E, A, R, I, O, T, N, S
											<br />
											Least common: Q, X, Z, J
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<CheckCircle className='h-5 w-5 text-green-600' />
									How to Use
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex items-start gap-3'>
										<div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs mt-0.5'>
											1
										</div>
										<div className='text-sm'>
											<strong>Green:</strong> Letter is
											correct and in right position
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xs mt-0.5'>
											2
										</div>
										<div className='text-sm'>
											<strong>Yellow:</strong> Letter is
											in word but wrong position
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xs mt-0.5'>
											3
										</div>
										<div className='text-sm'>
											<strong>Red:</strong> Letter is not
											in the word at all
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs mt-0.5'>
											4
										</div>
										<div className='text-sm'>
											Get ranked suggestions based on
											probability
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<div className='max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
				{/* Article Section */}
				<article className='md:col-span-2 space-y-8'>
					<section>
						<h1 className='text-3xl font-bold mb-2'>
							Wordle Word Finder
						</h1>
						<p>
							Find the best words for Wordle and similar games.
							Enter your clues and get instant suggestions. Wordle
							Helper will help you to get the best word
							suggestions for your Wordle puzzle
						</p>
					</section>
					<section>
						<h2 className='text-2xl font-bold mb-2'>
							What is Wordle?
						</h2>
						<p>
							Wordle is a daily word puzzle game where you guess a
							five-letter word in six tries. Each guess gives you
							color-coded feedback to help you solve the puzzle.
							It&apos;s fun, educational, and has become a global
							phenomenon!
						</p>
					</section>
					<section>
						<h2 className='text-2xl font-bold mb-2'>
							How To Play Wordle
						</h2>
						<ol className='list-decimal ml-6'>
							<li>
								Enter any five-letter word as your first guess.
							</li>
							<li>
								Use the color feedback: <strong>Green</strong> =
								correct letter and position,{" "}
								<strong>Yellow</strong> = letter is in word but
								wrong position, <strong>Red</strong> = letter is
								not in the word.
							</li>
							<li>
								Keep guessing and use the clues to solve the
								word in six tries or less!
							</li>
						</ol>
					</section>
					<section>
						<h2 className='text-2xl font-bold mb-2'>
							How Wordle Helper Helps People
						</h2>
						<ul className='list-disc ml-6'>
							<li>
								Finds all possible words based on your clues
							</li>
							<li>Helps you learn new words and strategies</li>
							<li>
								Great for improving your Wordle streak and
								vocabulary!
							</li>
							<li>
								Supports custom word lengths for other word
								games
							</li>
						</ul>
					</section>
					<section>
						<h2 className='text-2xl font-bold mb-2'>
							Wordle Tips and Tricks
						</h2>
						<ul className='list-disc ml-6'>
							<li>
								Start with words that use common letters (E, A,
								R, I, O, T, N, S)
							</li>
							<li>
								Try to use at least two vowels in your first
								guess
							</li>
							<li>
								Use your clues to eliminate as many letters as
								possible
							</li>
							<li>
								Don’t repeat gray letters in your next guess
							</li>
							<li>
								Use this helper to see all possible words for
								your clues!
							</li>
						</ul>
					</section>
					<section>
						<h2 className='text-2xl font-bold mb-2'>
							25 Best Starting Words For Wordle
						</h2>
						<div className='flex flex-wrap gap-2'>
							{[
								"ADIEU",
								"AUDIO",
								"AROSE",
								"RAISE",
								"SLATE",
								"CRANE",
								"SLANT",
								"CARTE",
								"REACT",
								"EARTH",
								"LEAST",
								"SALET",
								"ALERT",
								"LATER",
								"ALTER",
								"STARE",
								"TEARS",
								"STEAL",
								"LEARN",
								"TRAIL",
								"TRAIN",
								"CRATE",
								"TRACE",
								"CRONE",
								"STONE",
							].map((word) => (
								<span
									key={word}
									className='bg-gray-100 rounded px-2 py-1 font-mono'>
									{word}
								</span>
							))}
						</div>
					</section>

					{/* FAQ Section */}
					<section>
						<h2 className='text-2xl font-bold mb-2'>
							Frequently Asked Questions (FAQ)
						</h2>
						<ul className='list-disc ml-6'>
							<li>
								<b>
									Can I use this for 6-letter or 4-letter
									Wordle?
								</b>{" "}
								Yes! Just set the word length above the input
								boxes.
							</li>
							<li>
								<b>Does this work for NYT Wordle?</b> Yes, it’s
								designed for the official Wordle and similar
								games.
							</li>
							<li>
								<b>Is this tool free?</b> Yes, you can use it as
								much as you like for free.
							</li>
							<li>
								<b>Can I use this on my phone?</b> Yes, the site
								is mobile-friendly.
							</li>
							<li>
								<b>Where can I find past Wordle answers?</b>{" "}
								Check our Wordle Archive or blog for daily
								answers and tips.
							</li>
						</ul>
					</section>

					{/* Conclusion Section */}
					<section>
						<h2 className='text-2xl font-bold mb-2'>Conclusion</h2>
						<p>
							Use this Wordle Helper to improve your game, learn
							new words, and have fun! Share with friends and keep
							practicing to become a Wordle master.
						</p>
					</section>
				</article>

				{/* Sidebar Section */}
				<aside className='space-y-6'>
					<div className='bg-white rounded-xl shadow p-4'>
						<div className='bg-green-400 text-white font-bold rounded-t-xl px-4 py-2 text-lg mb-4'>
							Word Finder
						</div>
						<ul className='space-y-1 text-gray-800'>
							<li>
								<Link
									href='/word-finder'
									className='hover:underline'>
									Word Finder
								</Link>
							</li>
							<li>
								<Link
									href='/wordle-helper'
									className='hover:underline'>
									Wordle Helper
								</Link>
							</li>
							<li>
								<Link
									href='/words-with-friends-cheat'
									className='hover:underline'>
									Words With Friends Cheat
								</Link>
							</li>
							<li>
								<Link
									href='/crossword-popular-clues'
									className='hover:underline'>
									Crossword Popular Clues
								</Link>
								<ul className='ml-4 mt-1'>
									<li>
										<Link
											href='/crossword-top-picks'
											className='text-sm hover:underline'>
											Crossword Top Picks
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									href='/anagram-solver'
									className='hover:underline'>
									Anagram Solver
								</Link>
							</li>
							<li>
								<Link
									href='/word-descrambler'
									className='hover:underline'>
									Word Descrambler
								</Link>
							</li>
							<li>
								<Link
									href='/scrabble-cheat'
									className='hover:underline'>
									Scrabble Cheat
								</Link>
							</li>
							<li>
								<Link
									href='/unscrambler'
									className='hover:underline'>
									Unscrambler
								</Link>
							</li>
							<li>
								<Link
									href='/word-scramble'
									className='hover:underline'>
									Word Scramble
								</Link>
							</li>
							<li>
								<Link
									href='/word-unscrambler'
									className='hover:underline'>
									Word Unscrambler
								</Link>
							</li>
						</ul>
					</div>
					<div className='bg-white rounded-xl shadow p-4'>
						<div className='bg-green-400 text-white font-bold rounded-t-xl px-4 py-2 text-lg mb-4'>
							Dictionaries
						</div>
						<ul className='space-y-1 text-gray-800'>
							<li>
								<Link
									href='/spelling'
									className='hover:underline'>
									Spelling
								</Link>
							</li>
							<li>
								<Link
									href='/scrabble-dictionary'
									className='hover:underline'>
									Scrabble Dictionary
								</Link>
							</li>
							<li>
								<Link
									href='/words-with-friends-dictionary'
									className='hover:underline'>
									Words With Friends Dictionary
								</Link>
							</li>
						</ul>
					</div>
					<div className='bg-white rounded-xl shadow p-4'>
						<div className='bg-green-400 text-white font-bold rounded-t-xl px-4 py-2 text-lg mb-4'>
							Lists of Words
						</div>
						<ul className='space-y-1 text-gray-800'>
							<li>
								<Link
									href='/words-ending-in'
									className='hover:underline'>
									Words Ending In
								</Link>
							</li>
							<li>
								<Link
									href='/words-with-letters'
									className='hover:underline'>
									Words With Letters
								</Link>
							</li>
							<li>
								<Link
									href='/words-start-with'
									className='hover:underline'>
									Words Start With
								</Link>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</div>
	);
}