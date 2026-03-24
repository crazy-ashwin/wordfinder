"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import { WordDetailsDialog } from "@/components/word-details-dialog";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  letter: string;
};

export default function WordsEndingInLetterPage({ letter }: Props) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [words, setWords] = useState<string[]>([]);
	const [filteredWords, setFilteredWords] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [showMore, setShowMore] = useState(false);
	const [sortBy, setSortBy] = useState("points");
	const [selectedDictionary, setSelectedDictionary] = useState("all");
	const [loading, setLoading] = useState(false);
	const [include, setInclude] = useState("");
	const [exclude, setExclude] = useState("");
	const [warning, setWarning] = useState("");

	// Sidebar filter states
	const [sidebarStarts, setSidebarStarts] = useState(
		searchParams.get("starts") || ""
	);
	const [sidebarEnds, setSidebarEnds] = useState(
		searchParams.get("ends") || letter
	);
	const [sidebarContains, setSidebarContains] = useState(
		searchParams.get("contains") || ""
	);
	const [sidebarLength, setSidebarLength] = useState(5);

	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

	// Get query parameters
	const startsWith = searchParams.get("starts")?.toLowerCase();
	const endsWith = searchParams.get("ends")?.toLowerCase() || letter.toLowerCase();
	const contains = searchParams.get("contains")?.toLowerCase();

	useEffect(() => {
		const fetchWords = async () => {
			setLoading(true);
			let pattern = `?????${endsWith}`;

			// Apply filters based on query parameters
			if (startsWith) {
				pattern = `${startsWith}???${endsWith}`;
			}

			const apiUrl = `https://api.datamuse.com/words?sp=${pattern}&max=100`;
			try {
				const res = await axios.get(apiUrl);
				const data = res.data;
				let realWords = data
					.map((item: { word: string }) => item.word)
					.filter((w: string) => w.endsWith(endsWith));

				// Apply additional filters
				if (contains && !startsWith) {
					realWords = realWords.filter((w: string) =>
						w.toLowerCase().includes(contains)
					);
				}

				setWords(realWords);
				setFilteredWords(realWords);
			} catch (e) {
				console.log(e);
				setWords([]);
				setFilteredWords([]);
			} finally {
				setLoading(false);
			}
		};
		fetchWords();
	}, [endsWith, startsWith, contains]);

	useEffect(() => {
		let filtered = words;
		if (searchTerm) {
			filtered = words.filter((word) =>
				word.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}
		if (sortBy === "points") {
			filtered = [...filtered].sort(
				(a, b) => calculateScore(b) - calculateScore(a)
			);
		} else if (sortBy === "a-z") {
			filtered = [...filtered].sort();
		} else if (sortBy === "z-a") {
			filtered = [...filtered].sort().reverse();
		}
		setFilteredWords(filtered);
	}, [searchTerm, words, sortBy]);

	const calculateScore = (word: string): number => {
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
			?.toLowerCase()
			.split("")
			.reduce((score, letter) => score + (letterScores[letter] || 0), 0);
	};

	const displayWords = showMore ? filteredWords : filteredWords.slice(0, 50);

	const sidebarSections = {
		wordFinder: [
			"Find Word Finder",
			"Anagram Solver",
			"Word Descrambler",
			"Word Unscrambler",
			"Crossword Solver",
			"Word Generator",
			"Rhyme Finder",
			"Scrabble Score Calculator Finder",
		],
		wordsByLength: [
			"2 Letter Words",
			"3 Letter Words",
			"4 Letter Words",
			"5 Letter Words",
			"6 Letter Words",
			"7 Letter Words",
			"8 Letter Words",
		],
	};

	// Handler for sidebar SEARCH button
	const handleSidebarSearch = () => {
		const params = new URLSearchParams();
		if (sidebarStarts) params.set("starts", sidebarStarts);
		if (sidebarEnds) params.set("ends", sidebarEnds);
		if (sidebarContains) params.set("contains", sidebarContains);
		router.push(`?${params.toString()}`);
	};


	return (
		<div className='min-h-screen bg-gradient-to-b from-purple-50 to-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-3 space-y-8'>
						{/* Header */}
						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<h1 className='text-4xl font-bold text-gray-800 mb-4'>
								{startsWith &&
									`Words Starting with "${startsWith.toUpperCase()}" Ending with "${letter.toUpperCase()}"`}
								{!startsWith &&
									`Words Ending with "${letter.toUpperCase()}"`}
							</h1>
							<p className='text-gray-700 leading-relaxed mb-4'>
								{startsWith && (
									<>
										<strong>
											Words that start with{" "}
											{startsWith.toUpperCase()} and end with{" "}
											{letter.toUpperCase()}
										</strong>{" "}
										are commonly used for word games like
										Scrabble and Words with Friends. This
										list will help you to find the top
										scoring words to beat the opponent. You
										can also find a list of all{" "}
										<Link
											href={`/words-start-with/${startsWith}`}
											className='text-blue-600 hover:underline'>
											words that start with{" "}
											{startsWith.toUpperCase()}
										</Link>{" "}
										and{" "}
										<Link
											href={`/words-with-letters/${letter}`}
											className='text-blue-600 hover:underline'>
											words with {letter.toUpperCase()}
										</Link>
										. Try our{" "}
										<Link
											href={`/words-by-length/5/starting-with/${startsWith}/ending-in/${letter}`}
											className='text-blue-600 hover:underline'>
											five letter words starting with{" "}
											{startsWith.toUpperCase()} ending with{" "}
											{letter.toUpperCase()} page
										</Link>{" "}
										if you&apos;re playing Wordle-like games or
										use the{" "}
										<a
											href='https://findwordfinder.com/wordle-helper'
											target='_blank'
											rel='noopener noreferrer'
											className='text-blue-600 hover:underline'>
											New York Times Wordle Solver
										</a>{" "}
										to quickly find the NYT Wordle daily
										answer.
									</>
								)}
								{!startsWith && (
									<>
										<strong>
											Words that end with{" "}
											{letter.toUpperCase()}
										</strong>{" "}
										are commonly used for word games like
										Scrabble and Words with Friends. This
										list will help you to find the top
										scoring words to beat the opponent. You
										can also find a list of all{" "}
										<Link
											href={`/words-start-with/${letter}`}
											className='text-blue-600 hover:underline'>
											words that start with{" "}
											{letter.toUpperCase()}
										</Link>{" "}
										and{" "}
										<Link
											href={`/words-with-letters/${letter}`}
											className='text-blue-600 hover:underline'>
											words with {letter.toUpperCase()}
										</Link>
										. Try our{" "}
										<Link
											href={`/words-by-length/5/ending-in/${letter}`}
											className='text-blue-600 hover:underline'>
											five letter words ending in{" "}
											{letter.toUpperCase()} page
										</Link>{" "}
										if you&apos;re playing Wordle-like games or
										use the{" "}
										<a
											href='https://findwordfinder.com/wordle-helper'
											target='_blank'
											rel='noopener noreferrer'
											className='text-blue-600 hover:underline'>
											New York Times Wordle Solver
										</a>{" "}
										to quickly find the NYT Wordle daily
										answer.
									</>
								)}
							</p>
						</div>
						{/* Words Grid */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
							<div className='bg-gradient-to-r from-purple-400 to-purple-500 text-white px-6 py-4'>
								<h2 className='text-2xl font-bold'>
									{startsWith &&
										`Words Starting with "${startsWith.toUpperCase()}" Ending with "${letter.toUpperCase()}"`}
									{!startsWith &&
										`Words Ending with "${letter.toUpperCase()}"`}
								</h2>
							</div>
							<div className='p-6'>
								{loading ? (
									<p className='text-gray-500'>Loading...</p>
								) : (
									<>
										<div className='flex flex-wrap gap-3 mb-6'>
											{displayWords.map((word, index) => (
												<WordDetailsDialog
													key={index}
													word={word}>
													<Badge
														variant='secondary'
														className='justify-center py-2 px-3 text-sm hover:bg-purple-100 hover:text-purple-700 cursor-pointer font-mono transition-colors duration-200 border border-gray-200'>
														{word}
													</Badge>
												</WordDetailsDialog>
											))}
										</div>
										{filteredWords.length > 50 &&
											!showMore && (
												<div className='text-center'>
													<Button
														onClick={() =>
															setShowMore(true)
														}
														className='bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-3 rounded-lg'>
														MORE
													</Button>
												</div>
											)}
									</>
								)}
							</div>
						</div>
						{/* Highest Scoring Word */}
						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
								<Trophy className='h-6 w-6 text-yellow-500' />
								What is the highest scoring word in Words With
								Friends that ends with {letter.toUpperCase()}?
							</h2>
							<p className='text-gray-700 mb-4'>
								The highest scoring word in Words With Friends
								that ends with {letter.toUpperCase()} is{" "}
								<strong className='text-blue-600'>
									{words[0]}
								</strong>{" "}
								with a total of{" "}
								<strong>
									{calculateScore(words[0])} points
								</strong>
								.
							</p>

							<div className='flex gap-4 mb-4'>
								{words[0]?.split("").map((letter, index) => (
									<div
										key={index}
										className='w-12 h-12 bg-yellow-100 border-2 border-yellow-400 rounded flex items-center justify-center font-bold text-lg'>
										{letter}
									</div>
								))}
							</div>
						</div>

						{/* Starting With */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
							<div className='bg-gradient-to-r from-purple-400 to-purple-500 text-white px-6 py-4'>
								<h2 className='text-xl font-bold'>
									Words ending with {letter.toUpperCase()} starting with
								</h2>
							</div>
							<div className='p-6'>
								<div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-2'>
									{alphabet.map((startLetter) => (
										<Link
											key={startLetter}
											href={`?starts=${startLetter}`}
											className='w-10 h-10 bg-gray-100 hover:bg-purple-100 border border-gray-300 rounded flex items-center justify-center font-medium text-gray-700 hover:text-purple-700 transition-colors duration-200'>
											{startLetter}
										</Link>
									))}
								</div>
							</div>
						</div>

						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
								<Target className='h-6 w-6 text-blue-500' />
								Most Common Words Ending with {letter.toUpperCase()}
							</h2>
							<p className='text-gray-700 mb-4'>
								The most common words ending with {letter.toUpperCase()} are{" "}
								{words.slice(0, 5).map((word, index) => (
									<span key={word}>
										<strong className='text-blue-600'>
											{word}
										</strong>
										{index < words.length - 1 && ", "}
									</span>
								))}
								.
							</p>
						</div>
						{/* FAQ Section */}
						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
								<BookOpen className='h-6 w-6 text-purple-500' />
								Words Ending with {letter.toUpperCase()} FAQ
							</h2>

							<div className='space-y-4'>
								<div>
									<h3 className='font-bold text-gray-800 mb-2'>
										How many words end with {letter.toUpperCase()}?
									</h3>
									<p className='text-gray-700'>
										There are approximately {words.length}+
										common words that end with {letter.toUpperCase()} in the
										English language that are accepted in
										word games like Scrabble and Words with
										Friends.
									</p>
								</div>

								<div>
									<h3 className='font-bold text-gray-800 mb-2'>
										What are the best words ending with {letter.toUpperCase()} for Scrabble?
									</h3>
									<p className='text-gray-700'>
										The best words ending with {letter.toUpperCase()} for
										Scrabble are those with high-value
										letters. Words like{" "}
										{words[0]} can score{" "}
										{calculateScore(words[0])} points or
										more.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1 space-y-6'>
						{/* Search Form */}
						<div className='bg-white rounded-xl shadow-lg p-6 border border-gray-100'>
							<div className='space-y-4'>
								<Input
									placeholder='YOUR LETTERS'
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									className='w-full'
								/>

								<div className='grid grid-cols-2 gap-2'>
									<Input
										placeholder='Starts'
										className='text-sm'
										value={sidebarStarts}
										onChange={(e) =>
											setSidebarStarts(e.target.value)
										}
									/>
									<Input
										placeholder='Ends'
										className='text-sm'
										value={sidebarEnds}
										onChange={(e) =>
											setSidebarEnds(e.target.value)
										}
									/>
								</div>
								<div className='grid grid-cols-2 gap-2'>
									<Input
										placeholder='Contains'
										className='text-sm'
										value={sidebarContains}
										onChange={(e) =>
											setSidebarContains(e.target.value)
										}
									/>
									<Input
										placeholder='Length'
										className='text-sm'
										type='number'
										value={sidebarLength}
										onChange={(e) =>
											setSidebarLength(
												Number(e.target.value)
											)
										}
										min={2}
										max={15}
									/>
								</div>
								<div className='grid grid-cols-2 gap-2'>
									<Input
										placeholder='Include'
										className='text-sm'
										value={include}
										onChange={(e) => {
											const value = e.target.value
												.toUpperCase()
												.replace(/[^A-Z]/g, "");
											for (const l of value) {
												if (exclude.includes(l)) {
													setWarning(
														`You cannot include and exclude the same letter: ${l}`
													);
													return;
												}
											}
											setWarning("");
											setInclude(value);
										}}
									/>
									<Input
										placeholder='Exclude'
										className='text-sm'
										value={exclude}
										onChange={(e) => {
											const value = e.target.value
												.toUpperCase()
												.replace(/[^A-Z]/g, "");
											for (const l of value) {
												if (include.includes(l)) {
													setWarning(
														`You cannot include and exclude the same letter: ${l}`
													);
													return;
												}
											}
											setWarning("");
											setExclude(value);
										}}
									/>
								</div>
								{warning && (
									<div className='text-red-600 text-sm mb-2'>
										{warning}
									</div>
								)}
								<Button
									className='w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold'
									onClick={handleSidebarSearch}>
									SEARCH
								</Button>
							</div>
						</div>

						{/* Sort Results */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
							<div className='bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3'>
								<h3 className='font-bold'>Sort Results</h3>
							</div>
							<div className='p-4 space-y-2'>
								<label className='flex items-center gap-2 cursor-pointer'>
									<input
										type='radio'
										name='sort'
										value='points'
										checked={sortBy === "points"}
										onChange={(e) =>
											setSortBy(e.target.value)
										}
										className='text-purple-500'
									/>
									<span className='text-sm'>Points</span>
								</label>
								<label className='flex items-center gap-2 cursor-pointer'>
									<input
										type='radio'
										name='sort'
										value='a-z'
										checked={sortBy === "a-z"}
										onChange={(e) =>
											setSortBy(e.target.value)
										}
										className='text-purple-500'
									/>
									<span className='text-sm'>A-Z</span>
								</label>
								<label className='flex items-center gap-2 cursor-pointer'>
									<input
										type='radio'
										name='sort'
										value='z-a'
										checked={sortBy === "z-a"}
										onChange={(e) =>
											setSortBy(e.target.value)
										}
										className='text-purple-500'
									/>
									<span className='text-sm'>Z-A</span>
								</label>
							</div>
						</div>

						{/* Dictionary */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
							<div className='bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3'>
								<h3 className='font-bold'>Dictionary</h3>
							</div>
							<div className='p-4 space-y-2'>
								<label className='flex items-center gap-2 cursor-pointer'>
									<input
										type='radio'
										name='dictionary'
										value='words-with-friends'
										checked={
											selectedDictionary ===
											"words-with-friends"
										}
										onChange={(e) =>
											setSelectedDictionary(
												e.target.value
											)
										}
										className='text-purple-500'
									/>
									<span className='text-sm'>
										Words With Friends
									</span>
								</label>
								<label className='flex items-center gap-2 cursor-pointer'>
									<input
										type='radio'
										name='dictionary'
										value='scrabble-us'
										checked={
											selectedDictionary === "scrabble-us"
										}
										onChange={(e) =>
											setSelectedDictionary(
												e.target.value
											)
										}
										className='text-purple-500'
									/>
									<span className='text-sm'>Scrabble US</span>
								</label>
								<label className='flex items-center gap-2 cursor-pointer'>
									<input
										type='radio'
										name='dictionary'
										value='scrabble-uk'
										checked={
											selectedDictionary === "scrabble-uk"
										}
										onChange={(e) =>
											setSelectedDictionary(
												e.target.value
											)
										}
										className='text-purple-500'
									/>
									<span className='text-sm'>Scrabble UK</span>
								</label>
								<label className='flex items-center gap-2 cursor-pointer'>
									<input
										type='radio'
										name='dictionary'
										value='all'
										checked={selectedDictionary === "all"}
										onChange={(e) =>
											setSelectedDictionary(
												e.target.value
											)
										}
										className='text-purple-500'
									/>
									<span className='text-sm'>
										All Dictionaries
									</span>
								</label>
							</div>
						</div>

						{/* Word Finder Tools */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
							<div className='bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3'>
								<h3 className='font-bold'>Find Word Finder</h3>
							</div>
							<div className='p-4 space-y-1'>
								{sidebarSections.wordFinder.map(
									(tool, index) => (
										<Link
											key={index}
											href={`/${tool
												.toLowerCase()
												.replace(/\s+/g, "-")}`}
											className='block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 py-1 px-2 rounded transition-colors duration-200'>
											{tool}
										</Link>
									)
								)}
							</div>
						</div>

						{/* Grammar */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
							<div className='bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3'>
								<h3 className='font-bold'>Grammar</h3>
							</div>
							<div className='p-4 space-y-1'>
								<Link
									href='/grammar-rules'
									className='block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 py-1 px-2 rounded transition-colors duration-200'>
									Grammar Rules And Examples
								</Link>
								<Link
									href='/scrabble-dictionary'
									className='block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 py-1 px-2 rounded transition-colors duration-200'>
									Scrabble Dictionary
								</Link>
							</div>
						</div>

						{/* Words by Length */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
							<div className='bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3'>
								<h3 className='font-bold'>Words by Length</h3>
							</div>
							<div className='p-4 space-y-1'>
								{sidebarSections.wordsByLength.map(
									(category, index) => (
										<Link
											key={index}
											href={`/words-by-length/${
												index + 2
											}-letter-words`}
											className='block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 py-1 px-2 rounded transition-colors duration-200'>
											{category}
										</Link>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}