"use client";

import React, { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { WordDetailsDialog } from "@/components/word-details-dialog";

interface Word {
	word: string;
	score: number;
	length: number;
}

const ToolCard = ({
	href,
	title,
	description,
}: {
	href: string;
	title: string;
	description: string;
}) => (
	<Link href={href} passHref>
		<Card className='h-full cursor-pointer transition-all duration-200 hover:border-green-500 hover:shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl'>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='text-gray-600'>{description}</p>
			</CardContent>
		</Card>
	</Link>
);

function renderHighlightedWord(
	word: string,
	highlightLetters: string
): React.ReactNode[] | string {
	if (!highlightLetters) return word;
	const highlightSet = new Set(highlightLetters.toLowerCase());
	return word.split("").map((char: string, i: number) =>
		highlightSet.has(char.toLowerCase()) ? (
			<span key={i} className='inline-block' style={{ color: "#FF184D" }}>
				{char}
			</span>
		) : (
			<span key={i} className='inline-block'>
				{char}
			</span>
		)
	);
}

function SearchContent() {
	const searchParams = useSearchParams();
	const [letters, setLetters] = useState("");
	const [starts, setStarts] = useState("");
	const [ends, setEnds] = useState("");
	const [contains, setContains] = useState("");
	const [length, setLength] = useState("");
	const [dictionary, setDictionary] = useState("all");
	const [sortBy, setSortBy] = useState("points");
	const [groupByLength, setGroupByLength] = useState(true);
	const [words, setWords] = useState<Word[]>([]);
	const [loading, setLoading] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const [include, setInclude] = useState("");
	const [exclude, setExclude] = useState("");
	const [warning, setWarning] = useState("");

	const initialized = React.useRef(false);

	const fetchWords = async ({
		letters,
		starts = "",
		ends = "",
		contains = "",
		length,
		dictionary = "all",
		include = "",
		exclude = "",
	}: {
		letters: string;
		starts?: string;
		ends?: string;
		contains?: string;
		length: string;
		dictionary?: string;
		include?: string;
		exclude?: string;
	}) => {
		// If no length is specified, search for common word lengths (3-8 letters)
		const searchLengths = length
			? [parseInt(length, 10)]
			: [3, 4, 5, 6, 7, 8];
		const allResults: string[] = [];

		for (const lengthNum of searchLengths) {
			if (isNaN(lengthNum) || lengthNum < 1) continue;

			// Build 'sp' pattern
			const middleLength = lengthNum - starts.length - ends.length;
			if (middleLength < 0) continue;

			const pattern = `${starts}${"?".repeat(middleLength)}${ends}`;

			// Use different API approach based on search type
			let apiUrl: string;

			if (letters && !starts && !ends && !contains) {
				// Letter-only search: find words containing these letters
				// Use a broader search that finds words with the specified length
				apiUrl = `https://api.datamuse.com/words?sp=${"?".repeat(
					lengthNum
				)}&max=100`;
			} else {
				// Pattern-based search
				apiUrl = `https://api.datamuse.com/words?sp=${pattern}&topics=${
					letters || ""
				}&max=100`;
			}

			try {
				const res = await axios.get(apiUrl);
				const data = await res.data;

				const rawWords: string[] = data.map(
					(item: { word: string }) => item.word
				);

				// Filter words
				const filtered = rawWords.filter((word: string) => {
					// Exact length
					if (word.length !== lengthNum) return false;

					// Must contain substring
					if (contains && !word.includes(contains.toLowerCase()))
						return false;

					// Must include all letters (for letter-only searches)
					if (letters && !starts && !ends && !contains) {
						const lower = word.toLowerCase();
						const letterArray = letters.toLowerCase().split("");
						for (const l of letterArray) {
							if (!lower.includes(l)) return false;
						}
					}

					// Must include all letters (for pattern searches)
					if (letters && (starts || ends || contains)) {
						const lower = word.toLowerCase();
						for (const l of letters.toLowerCase()) {
							if (!lower.includes(l)) return false;
						}
					}

					// Must include all 'include' letters
					if (include) {
						const lower = word.toLowerCase();
						for (const l of include.toLowerCase()) {
							if (!lower.includes(l)) return false;
						}
					}

					// Must NOT include any 'exclude' letters
					if (exclude) {
						const lower = word.toLowerCase();
						for (const l of exclude.toLowerCase()) {
							if (lower.includes(l)) return false;
						}
					}

					// Optional dictionary filter
					if (dictionary === "common") {
						if (word.length > 12 || word.length < 3) return false;
					}

					return true;
				});

				allResults.push(...filtered);
			} catch (error) {
				console.error(
					`Error fetching words for length ${lengthNum}:`,
					error
				);
			}
		}

		// Remove duplicates and limit results
		const uniqueResults = Array.from(new Set(allResults));
		return uniqueResults.slice(0, 100);
	};

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
			.toLowerCase()
			.split("")
			.reduce((score, letter) => score + (letterScores[letter] || 0), 0);
	};

	const handleSearch = useCallback(
		async (options?: {
			letters: string;
			starts: string;
			ends: string;
			contains: string;
			length: string;
			dictionary: string;
			include?: string;
			exclude?: string;
		}) => {
			setLoading(true);

			const params = options || {
				letters,
				starts,
				ends,
				contains,
				length,
				dictionary,
				include,
				exclude,
			};

			try {
				// Only perform search if we have some search criteria
				if (
					params.letters ||
					params.starts ||
					params.ends ||
					params.contains ||
					params.include ||
					params.exclude
				) {
					const stringResults = await fetchWords(params);

					const wordResults: Word[] = stringResults.map((word) => ({
						word,
						score: calculateScore(word),
						length: word.length,
					}));

					const sortedResults = wordResults.sort(
						(a: Word, b: Word) => {
							if (sortBy === "points") return b.score - a.score;
							if (sortBy === "a-z")
								return a.word.localeCompare(b.word);
							if (sortBy === "z-a")
								return b.word.localeCompare(a.word);
							return 0;
						}
					);
					setWords(sortedResults);
				} else {
					setWords([]);
				}
			} catch (error) {
				console.log(error);
				setWords([]);
			} finally {
				setLoading(false);
			}
		},
		[
			letters,
			starts,
			ends,
			contains,
			length,
			dictionary,
			include,
			exclude,
			sortBy,
		]
	);

	useEffect(() => {
		if (!initialized.current) {
			const lettersParam = searchParams.get("letters") || "";
			const startsParam = searchParams.get("starts") || "";
			const endsParam = searchParams.get("ends") || "";
			const containsParam = searchParams.get("contains") || "";
			const lengthParam = searchParams.get("length") || "";
			const dictionaryParam = searchParams.get("dictionary") || "all";
			const includeParam = searchParams.get("include") || "";
			const excludeParam = searchParams.get("exclude") || "";

			setLetters(lettersParam);
			setStarts(startsParam);
			setEnds(endsParam);
			setContains(containsParam);
			setLength(lengthParam);
			setDictionary(dictionaryParam);
			setInclude(includeParam);
			setExclude(excludeParam);

			// Perform initial search if any search criteria is provided
			if (
				lettersParam ||
				startsParam ||
				endsParam ||
				containsParam ||
				includeParam ||
				excludeParam
			) {
				handleSearch({
					letters: lettersParam,
					starts: startsParam,
					ends: endsParam,
					contains: containsParam,
					length: lengthParam,
					dictionary: dictionaryParam,
					include: includeParam,
					exclude: excludeParam,
				});
			}
			initialized.current = true;
		}
	}, [searchParams]);

	// Add this effect to re-sort when sortBy changes
	useEffect(() => {
		if (words.length > 0) {
			const sortedWords = [...words].sort((a: Word, b: Word) => {
				if (sortBy === "points") return b.score - a.score;
				if (sortBy === "a-z") return a.word.localeCompare(b.word);
				if (sortBy === "z-a") return b.word.localeCompare(a.word);
				return 0;
			});
			setWords(sortedWords);
		}
	}, [sortBy]);

	const clearFilter = (filter: string) => {
		switch (filter) {
			case "letters":
				setLetters("");
				break;
			case "starts":
				setStarts("");
				break;
			case "ends":
				setEnds("");
				break;
			case "contains":
				setContains("");
				break;
			case "length":
				setLength("");
				break;
		}
	};

	const groupedWords = groupByLength
		? words.reduce((acc, word) => {
				const len = word.length;
				if (!acc[len]) acc[len] = [];
				acc[len].push(word);
				return acc;
		  }, {} as Record<number, Word[]>)
		: { all: words };

	return (
		<div className='min-h-screen bg-gray-50'>
			<div className='container mx-auto px-4 py-8'>
				{/* Mobile search filter at top */}
				<div className='block lg:hidden mb-6'>
					<Card>
						<CardContent className='p-4'>
							<div className='relative mb-4'>
								<Input
									id='letters-mobile'
									type='text'
									placeholder=''
									value={letters}
									onChange={(e) =>
										setLetters(e.target.value.toUpperCase())
									}
									className='peer pr-8'
								/>
								<Label
									htmlFor='letters-mobile'
									className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
									style={
										letters
											? {
													top: "-0.3rem",
													fontSize: "1.125rem",
													color: "#3b82f6",
													backgroundColor:
														"rgba(255, 255, 255, 0.95)",
													padding: "0 0.25rem",
													borderRadius: "25px",
											  }
											: {}
									}>
									Letters
								</Label>
								{letters && (
									<Button
										variant='ghost'
										size='sm'
										className='absolute right-1 top-1 h-6 w-6 p-0'
										onClick={() => clearFilter("letters")}>
										<X className='h-3 w-3' />
									</Button>
								)}
							</div>
							<div className='grid grid-cols-2 gap-2 mb-4'>
								<div className='relative'>
									<Input
										id='starts-mobile'
										type='text'
										placeholder=''
										value={starts}
										onChange={(e) =>
											setStarts(
												e.target.value
													.toUpperCase()
													.replace(/[^A-Z]/g, "")
											)
										}
										className='peer text-sm'
									/>
									<Label
										htmlFor='starts-mobile'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											starts
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
														borderRadius: "25px",
												  }
												: {}
										}>
										Starts
									</Label>
									{starts && (
										<Button
											variant='ghost'
											size='sm'
											className='absolute right-1 top-1 h-6 w-6 p-0'
											onClick={() =>
												clearFilter("starts")
											}>
											<X className='h-3 w-3' />
										</Button>
									)}
								</div>
								<div className='relative'>
									<Input
										id='ends-mobile'
										type='text'
										placeholder=''
										value={ends}
										onChange={(e) =>
											setEnds(
												e.target.value
													.toUpperCase()
													.replace(/[^A-Z]/g, "")
											)
										}
										className='peer text-sm'
									/>
									<Label
										htmlFor='ends-mobile'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											ends
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
														borderRadius: "25px",
												  }
												: {}
										}>
										Ends
									</Label>
									{ends && (
										<Button
											variant='ghost'
											size='sm'
											className='absolute right-1 top-1 h-6 w-6 p-0'
											onClick={() => clearFilter("ends")}>
											<X className='h-3 w-3' />
										</Button>
									)}
								</div>
							</div>
							<div className='grid grid-cols-2 gap-2 mb-4'>
								<div className='relative'>
									<Input
										id='contains-mobile'
										type='text'
										placeholder=''
										value={contains}
										onChange={(e) =>
											setContains(
												e.target.value
													.toUpperCase()
													.replace(/[^A-Z]/g, "")
											)
										}
										className='peer text-sm'
									/>
									<Label
										htmlFor='contains-mobile'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											contains
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
														borderRadius: "25px",
												  }
												: {}
										}>
										Contains
									</Label>
									{contains && (
										<Button
											variant='ghost'
											size='sm'
											className='absolute right-1 top-1 h-6 w-6 p-0'
											onClick={() =>
												clearFilter("contains")
											}>
											<X className='h-3 w-3' />
										</Button>
									)}
								</div>
								<div className='relative'>
									<Input
										id='length-mobile'
										type='number'
										placeholder=''
										value={length}
										onChange={(e) =>
											setLength(e.target.value)
										}
										className='peer text-sm'
									/>
									<Label
										htmlFor='length-mobile'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											length
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
														borderRadius: "25px",
												  }
												: {}
										}>
										Length
									</Label>
									{length && (
										<Button
											variant='ghost'
											size='sm'
											className='absolute right-1 top-1 h-6 w-6 p-0'
											onClick={() =>
												clearFilter("length")
											}>
											<X className='h-3 w-3' />
										</Button>
									)}
								</div>
							</div>
							<div className='grid grid-cols-2 gap-2 mb-4'>
								<div className='relative'>
									<Input
										id='include-mobile'
										type='text'
										placeholder=''
										value={include}
										onChange={(e) => {
											setInclude(
												e.target.value
													.toUpperCase()
													.replace(/[^A-Z]/g, "")
											);
											setWarning("");
										}}
										className='peer text-sm'
									/>
									<Label
										htmlFor='include-mobile'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											include
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
														borderRadius: "25px",
												  }
												: {}
										}>
										Include
									</Label>
									{include && (
										<Button
											variant='ghost'
											size='sm'
											className='absolute right-1 top-1 h-6 w-6 p-0'
											onClick={() => {
												setInclude("");
												setWarning("");
											}}>
											<X className='h-3 w-3' />
										</Button>
									)}
								</div>
								<div className='relative'>
									<Input
										id='exclude-mobile'
										type='text'
										placeholder=''
										value={exclude}
										onChange={(e) => {
											setExclude(
												e.target.value
													.toUpperCase()
													.replace(/[^A-Z]/g, "")
											);
											setWarning("");
										}}
										className='peer text-sm'
									/>
									<Label
										htmlFor='exclude-mobile'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											exclude
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
														borderRadius: "25px",
												  }
												: {}
										}>
										Exclude
									</Label>
									{exclude && (
										<Button
											variant='ghost'
											size='sm'
											className='absolute right-1 top-1 h-6 w-6 p-0'
											onClick={() => {
												setExclude("");
												setWarning("");
											}}>
											<X className='h-3 w-3' />
										</Button>
									)}
								</div>
							</div>
							{warning && (
								<div className='text-red-600 text-sm mb-2'>
									{warning}
								</div>
							)}
							<Button
								onClick={() => handleSearch()}
								className='w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mt-2'
								disabled={loading}>
								{loading ? "SEARCHING..." : "SEARCH"}
							</Button>
						</CardContent>
					</Card>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-3'>
						{words.length === 0 && !loading ? (
							<div className='text-center py-12'>
								<h2 className='text-2xl font-bold mb-4'>
									No Words Found
								</h2>
								<p className='text-gray-600 mb-8'>
									Sorry, there are no exact matches, but
									adjusting the in your search can help you
									get more results. The following words add
									extra letters that you might find on your
									game board.
								</p>
								<p className='font-semibold mb-8'>
									Showing words adding 3 wildcards
								</p>
							</div>
						) : null}

						{loading ? (
							<div className='text-center py-12'>
								<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto'></div>
								<p className='mt-4 text-gray-600'>
									Searching for words...
								</p>
							</div>
						) : null}

						{Object.entries(groupedWords).map(
							([lengthKey, wordsInGroup]) => (
								<div key={lengthKey} className='mb-8'>
									{/* Sort/filter bar */}
									<div className='flex justify-between items-center bg-yellow-400 px-4 py-2 rounded-t-lg border-b mb-2'>
										<span className='font-medium text-gray-700'>
											Results: {lengthKey} Letter Words
										</span>
										<div className='flex items-center gap-2'>
											<span className='text-sm text-gray-600'>
												Sort:
											</span>
											<select
												value={sortBy}
												onChange={(e) =>
													setSortBy(e.target.value)
												}
												className='border rounded px-2 py-1 text-sm'>
												<option value='points'>
													Points
												</option>
												<option value='a-z'>A-Z</option>
												<option value='z-a'>Z-A</option>
											</select>
										</div>
									</div>

									<Card
										className={
											groupByLength && lengthKey !== "all"
												? "rounded-t-none"
												: ""
										}>
										<CardContent className='p-6'>
											<div className='flex flex-wrap gap-3'>
												{(showMore
													? wordsInGroup
													: wordsInGroup.slice(0, 20)
												).map((word, index) => (
													<WordDetailsDialog
														word={word.word}
														key={index}>
														<Badge
															variant='secondary'
															className='justify-center py-2 px-3 text-lg hover:bg-gray-200 cursor-pointer'>
															<span className='flex gap-0 font-sans'>
																{renderHighlightedWord(
																	word.word,
																	letters
																)}
															</span>
															<sub className='ml-1 text-xs'>
																{word.score}
															</sub>
														</Badge>
													</WordDetailsDialog>
												))}
											</div>

											{wordsInGroup.length > 20 &&
												!showMore && (
													<div className='text-center mt-6'>
														<Button
															onClick={() =>
																setShowMore(
																	true
																)
															}
															className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8'>
															MORE
														</Button>
													</div>
												)}
										</CardContent>
									</Card>
								</div>
							)
						)}

						{/* Professional Description and Related Sections */}
						<div className='mt-16 space-y-16'>
							<Card className='border-none bg-white shadow-none'>
								<CardHeader className='text-center'>
									<CardTitle className='text-3xl font-bold text-gray-800'>
										Your Go-To Find Word Finder for Any Game
									</CardTitle>
								</CardHeader>
								<CardContent className='mx-auto max-w-4xl space-y-4 text-center text-lg text-gray-600'>
									<p>
										Unlock your full potential in word games
										with our versatile Find Word Finder.
										Whether you&apos;re playing Scrabble,
										Words with Friends, solving a crossword,
										or tackling any other word puzzle, our
										tool is designed to give you the winning
										edge.
									</p>
									<p>
										Simply enter the letters you have, and
										let our advanced search engine present
										you with a comprehensive list of
										possible words. Use the powerful
										filtering options to refine your results
										by starting or ending letters, letters
										contained within, and desired word
										length. Our goal is to make you a more
										confident and successful word game
										player.
									</p>
								</CardContent>
							</Card>

							<div>
								<h2 className='mb-8 text-center text-3xl font-bold text-gray-800'>
									Explore Our Other Tools
								</h2>
								<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
									<ToolCard
										href='/anagram-solver'
										title='Anagram Solver'
										description='Unscramble letters to find hidden words.'
									/>
									<ToolCard
										href='/crossword-solver'
										title='Crossword Solver'
										description='Find answers to tricky crossword clues.'
									/>
									<ToolCard
										href='/wordle-helper'
										title='Wordle Helper'
										description='Get help with your daily Wordle puzzle.'
									/>
									<ToolCard
										href='/rhyme-finder'
										title='Rhyme Finder'
										description='Discover words that rhyme for your poems or songs.'
									/>
									<ToolCard
										href='/word-unscrambler'
										title='Word Unscrambler'
										description='A simple tool for unscrambling words.'
									/>
									<ToolCard
										href='/scrabble-calculator'
										title='Scrabble Calculator'
										description='Calculate the score of your Scrabble words.'
									/>
								</div>
							</div>
						</div>
					</div>
					{/* Sidebar - only visible on desktop */}
					<div className='hidden lg:block lg:col-span-1 space-y-6'>
						{/* Search Panel (desktop only) */}
						<Card>
							<CardContent className='p-4'>
								<div className='relative mb-4'>
									<Input
										id='letters'
										type='text'
										placeholder=''
										value={letters}
										onChange={(e) => {
											setLetters(
												e.target.value.toUpperCase()
											);
										}}
										className='peer pr-8'
									/>
									<Label
										htmlFor='letters'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											letters
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
														borderRadius: "25px",
												  }
												: {}
										}>
										Letters
									</Label>
									{letters && (
										<Button
											variant='ghost'
											size='sm'
											className='absolute right-1 top-1 h-6 w-6 p-0'
											onClick={() => {
												clearFilter("letters");
											}}>
											<X className='h-3 w-3' />
										</Button>
									)}
								</div>
								<div className='grid grid-cols-2 gap-2 mb-4'>
									<div className='relative'>
										<Input
											id='starts'
											type='text'
											placeholder=''
											value={starts}
											onChange={(e) => {
												setStarts(
													e.target.value
														.toUpperCase()
														.replace(/[^A-Z]/g, "")
												);
											}}
											className='peer text-sm'
										/>
										<Label
											htmlFor='starts'
											className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
											style={
												starts
													? {
															top: "-0.3rem",
															fontSize:
																"1.125rem",
															color: "#3b82f6",
															backgroundColor:
																"rgba(255, 255, 255, 0.95)",
															padding:
																"0 0.25rem",
															borderRadius:
																"25px",
													  }
													: {}
											}>
											Starts
										</Label>
										{starts && (
											<Button
												variant='ghost'
												size='sm'
												className='absolute right-1 top-1 h-6 w-6 p-0'
												onClick={() => {
													clearFilter("starts");
												}}>
												<X className='h-3 w-3' />
											</Button>
										)}
									</div>
									<div className='relative'>
										<Input
											id='ends'
											type='text'
											placeholder=''
											value={ends}
											onChange={(e) => {
												setEnds(
													e.target.value
														.toUpperCase()
														.replace(/[^A-Z]/g, "")
												);
											}}
											className='peer text-sm'
										/>
										<Label
											htmlFor='ends'
											className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
											style={
												ends
													? {
															top: "-0.3rem",
															fontSize:
																"1.125rem",
															color: "#3b82f6",
															backgroundColor:
																"rgba(255, 255, 255, 0.95)",
															padding:
																"0 0.25rem",
															borderRadius:
																"25px",
													  }
													: {}
											}>
											Ends
										</Label>
										{ends && (
											<Button
												variant='ghost'
												size='sm'
												className='absolute right-1 top-1 h-6 w-6 p-0'
												onClick={() => {
													clearFilter("ends");
												}}>
												<X className='h-3 w-3' />
											</Button>
										)}
									</div>
								</div>
								<div className='grid grid-cols-2 gap-2 mb-4'>
									<div className='relative'>
										<Input
											id='contains'
											type='text'
											placeholder=''
											value={contains}
											onChange={(e) => {
												setContains(
													e.target.value
														.toUpperCase()
														.replace(/[^A-Z]/g, "")
												);
											}}
											className='peer text-sm'
										/>
										<Label
											htmlFor='contains'
											className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
											style={
												contains
													? {
															top: "-0.3rem",
															fontSize:
																"1.125rem",
															color: "#3b82f6",
															backgroundColor:
																"rgba(255, 255, 255, 0.95)",
															padding:
																"0 0.25rem",
															borderRadius:
																"25px",
													  }
													: {}
											}>
											Contains
										</Label>
										{contains && (
											<Button
												variant='ghost'
												size='sm'
												className='absolute right-1 top-1 h-6 w-6 p-0'
												onClick={() => {
													clearFilter("contains");
												}}>
												<X className='h-3 w-3' />
											</Button>
										)}
									</div>
									<div className='relative'>
										<Input
											id='length'
											type='number'
											placeholder=''
											value={length}
											onChange={(e) => {
												setLength(e.target.value);
											}}
											className='peer text-sm'
										/>
										<Label
											htmlFor='length'
											className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
											style={
												length
													? {
															top: "-0.3rem",
															fontSize:
																"1.125rem",
															color: "#3b82f6",
															backgroundColor:
																"rgba(255, 255, 255, 0.95)",
															padding:
																"0 0.25rem",
															borderRadius:
																"25px",
													  }
													: {}
											}>
											Length
										</Label>
										{length && (
											<Button
												variant='ghost'
												size='sm'
												className='absolute right-1 top-1 h-6 w-6 p-0'
												onClick={() => {
													clearFilter("length");
												}}>
												<X className='h-3 w-3' />
											</Button>
										)}
									</div>
								</div>
								<div className='grid grid-cols-2 gap-2 mb-4'>
									<div className='relative'>
										<Input
											id='include'
											type='text'
											placeholder=''
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
											className='peer text-sm'
										/>
										<Label
											htmlFor='include'
											className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
											style={
												include
													? {
															top: "-0.3rem",
															fontSize:
																"1.125rem",
															color: "#3b82f6",
															backgroundColor:
																"rgba(255, 255, 255, 0.95)",
															padding:
																"0 0.25rem",
															borderRadius:
																"25px",
													  }
													: {}
											}>
											Include
										</Label>
										{include && (
											<Button
												variant='ghost'
												size='sm'
												className='absolute right-1 top-1 h-6 w-6 p-0'
												onClick={() => {
													setInclude("");
													setWarning("");
												}}>
												<X className='h-3 w-3' />
											</Button>
										)}
									</div>
									<div className='relative'>
										<Input
											id='exclude'
											type='text'
											placeholder=''
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
											className='peer text-sm'
										/>
										<Label
											htmlFor='exclude'
											className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
											style={
												exclude
													? {
															top: "-0.3rem",
															fontSize:
																"1.125rem",
															color: "#3b82f6",
															backgroundColor:
																"rgba(255, 255, 255, 0.95)",
															padding:
																"0 0.25rem",
															borderRadius:
																"25px",
													  }
													: {}
											}>
											Exclude
										</Label>
										{exclude && (
											<Button
												variant='ghost'
												size='sm'
												className='absolute right-1 top-1 h-6 w-6 p-0'
												onClick={() => {
													setExclude("");
													setWarning("");
												}}>
												<X className='h-3 w-3' />
											</Button>
										)}
									</div>
								</div>
								{warning && (
									<div className='text-red-600 text-sm mb-2'>
										{warning}
									</div>
								)}
								<Button
									onClick={() => handleSearch()}
									className='w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mt-2'
									disabled={loading}>
									{loading ? "SEARCHING..." : "SEARCH"}
								</Button>
							</CardContent>
						</Card>

						{/* Sort Results */}
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Sort Results
								</CardTitle>
							</CardHeader>
							<CardContent>
								<RadioGroup
									value={sortBy}
									onValueChange={setSortBy}>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='points'
											id='points'
										/>
										<Label htmlFor='points'>Points</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='a-z' id='a-z' />
										<Label htmlFor='a-z'>A-Z</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='z-a' id='z-a' />
										<Label htmlFor='z-a'>Z-A</Label>
									</div>
								</RadioGroup>

								<div className='mt-4'>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='group-length'
											checked={groupByLength}
											onCheckedChange={(checked) =>
												setGroupByLength(
													checked === true
												)
											}
										/>
										<Label htmlFor='group-length'>
											Group by Length
										</Label>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Dictionary */}
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Dictionary
								</CardTitle>
							</CardHeader>
							<CardContent>
								<RadioGroup
									value={dictionary}
									onValueChange={setDictionary}>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='words-with-friends'
											id='wwf'
										/>
										<Label htmlFor='wwf'>
											Words With Friends
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='scrabble-us'
											id='scrabble-us'
										/>
										<Label htmlFor='scrabble-us'>
											Scrabble US
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='scrabble-uk'
											id='scrabble-uk'
										/>
										<Label htmlFor='scrabble-uk'>
											Scrabble UK
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='all' id='all' />
										<Label htmlFor='all'>
											All Dictionaries
										</Label>
									</div>
								</RadioGroup>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function SearchPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SearchContent />
		</Suspense>
	);
}
