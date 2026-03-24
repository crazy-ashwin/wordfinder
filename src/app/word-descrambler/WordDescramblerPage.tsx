"use client";
import React, { useState } from "react";

// Placeholder unscramble function (to be replaced with real logic or API)
function unscrambleWords(letters: string, length?: number): string[] {
	// This is a stub. Replace with real word list/logic.
	// For now, just return some mock results for demonstration.
	const mockResults = [
		"submit",
		"bums",
		"bust",
		"suit",
		"sub",
		"tub",
		"bus",
		"bit",
		"sit",
		"it",
		"is",
		"us",
		"bi",
		"mu",
		"ti",
		"sib",
		"sum",
		"but",
		"sim",
		"bum",
		"sib",
		"sum",
		"bit",
		"bus",
		"tub",
		"sub",
		"sit",
		"suit",
		"bust",
		"bums",
		"submit",
	];
	let results = mockResults.filter(
		(word) =>
			word.length <= letters.length + 2 &&
			(!length || word.length === length)
	);
	// Remove duplicates
	results = Array.from(new Set(results));
	return results;
}

export default function WordDescramblerPage() {
	const [letters, setLetters] = useState("");
	const [length, setLength] = useState("");
	const [results, setResults] = useState<string[]>([]);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		const cleanLetters = letters.replace(/[^a-zA-Z\? ]/g, "").toLowerCase();
		const wordLength = length ? parseInt(length, 10) : undefined;
		setResults(unscrambleWords(cleanLetters, wordLength));
	};

	return (
		<>
			<div className='bg-gradient-to-b from-indigo-50 to-purple-100'>
				<section className='max-w-2xl mx-auto p-6 w-full'>
					<h1 className='text-3xl font-bold mb-2'>
						Word Descrambler
					</h1>
					<p className='mb-4 text-gray-700'>
						Enter your scrambled letters below (use{" "}
						<span className='font-mono'>?</span> or a space for
						wildcards, up to 2 wildcards allowed). Optionally,
						filter by word length. Click{" "}
						<b>
							<a
								href='https://findwordfinder.com/word-descrambler'
								target='Descrambler'>
								Descramble
							</a>
						</b>{" "}
						to see all possible words you can make!
					</p>

					<form
						onSubmit={handleSubmit}
						className='flex flex-col gap-4 bg-white rounded shadow p-4'>
						<label className='flex flex-col'>
							<span className='font-semibold'>
								Letters (max 15, wildcards: ? or space):
							</span>
							<input
								type='text'
								value={letters}
								onChange={(e) =>
									setLetters(e.target.value.slice(0, 15))
								}
								className='border rounded px-2 py-1 mt-1'
								placeholder='e.g. S B I T M U ?'
								required
								aria-label='Enter scrambled letters'
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-semibold'>
								Word Length (optional):
							</span>
							<input
								type='number'
								min={2}
								max={15}
								value={length}
								onChange={(e) =>
									setLength(
										e.target.value.replace(/[^0-9]/g, "")
									)
								}
								className='border rounded px-2 py-1 mt-1'
								placeholder='e.g. 6'
								aria-label='Filter by word length'
							/>
						</label>
						<button
							type='submit'
							className='bg-indigo-400 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition'>
							Descramble
						</button>
					</form>
					{submitted && (
						<section className='mt-6'>
							<h2 className='text-xl font-semibold mb-2'>
								Results
							</h2>
							{results.length > 0 ? (
								<ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
									{results.map((word) => (
										<li
											key={word}
											className='bg-gray-100 rounded px-2 py-1 text-center font-mono'>
											{word}
										</li>
									))}
								</ul>
							) : (
								<p className='text-gray-500'>
									No words found. Try different letters or
									length.
								</p>
							)}
						</section>
					)}

					<section className='mt-8 bg-blue-50 rounded p-4'>
						<h3 className='font-bold mb-1'>
							Tips for Using the Word Descrambler
						</h3>
						<ul className='list-disc ml-6 text-gray-700 text-sm'>
							<li>
								Use wildcards (
								<span className='font-mono'>?</span> or space)
								for unknown letters.
							</li>
							<li>
								Try different letter combinations for more
								results.
							</li>
							<li>
								Filter by word length to narrow down your
								options.
							</li>
							<li>
								Great for Scrabble, Words With Friends, and
								other word games!
							</li>
						</ul>
					</section>
				</section>
			</div>

			{/* Two-column layout for informational sections and sidebar */}
			<div className='flex flex-col md:flex-row md:items-start bg-background text-foreground max-w-6xl mx-auto px-4 py-8 gap-6'>
				<section className='bg-white rounded-xl shadow p-6 w-full md:w-2/3 space-y-6 text-base md:text-lg'>
					<div>
						<h2 className='text-2xl font-bold mb-2'>
							All You Need to Know About Word Descrambler
						</h2>
						<p className='text-gray-700'>
							Word descramblers are essential tools for word
							games, helping you find all possible words from a
							set of scrambled letters. Whether you’re playing
							Scrabble, Words With Friends, or solving puzzles, a
							descrambler can boost your score and vocabulary.
						</p>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							What is Word Descrambler?
						</h2>
						<p className='text-gray-700'>
							A word descrambler is an online tool that helps you
							unscramble letters to build new words. Enter your
							letters (including wildcards) and instantly see all
							valid word combinations. It’s perfect for games,
							learning, and fun challenges.
						</p>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							Word Descramble Example
						</h2>
						<p className='text-gray-700'>
							For example, if you have the letters{" "}
							<span className='font-mono'>S B I T M U</span>, the
							descrambler will show options like <b>submit</b> (6
							letters), <b>bums</b>, <b>bust</b>, <b>suit</b> (4
							letters), and <b>sub</b>, <b>tub</b>, <b>bus</b> (3
							letters), plus many more.
						</p>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							How to Use WordTips Word Descrambler
						</h2>
						<p className='text-gray-700'>
							Simply enter your scrambled letters (up to 15, with
							up to 2 wildcards) and optionally set a word length.
							Click{" "}
							<b>
								<a
									href='https://findwordfinder.com/word-descrambler'
									target='Descrambler'>
									Descramble
								</a>
							</b>{" "}
							to see all possible words. Use the filters and tips
							to maximize your results and game performance.
						</p>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							Free Word Descrambler
						</h2>
						<p className='text-gray-700'>
							Our word descrambler is free to use and provides
							every possible solution for your scrambled letters.
							Use it as a cheat for games or as a learning tool to
							expand your vocabulary and word knowledge.
						</p>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							Tips and Tricks to Descramble Words
						</h2>
						<ul className='list-disc ml-6 text-gray-700 text-sm'>
							<li>
								Separate consonants and vowels to explore more
								combinations.
							</li>
							<li>
								Rearrange letter order for new word solutions.
							</li>
							<li>Use wildcards for unknowns or blanks.</li>
							<li>
								Memorize small words for quick wins in games.
							</li>
							<li>
								Challenge yourself to find the longest or
								highest-scoring word!
							</li>
						</ul>
					</div>
					{/* Additional User-Helpful Articles */}
					<div>
						<h2 className='text-xl font-bold mb-2'>
							Why Use a Word Descrambler?
						</h2>
						<p className='text-gray-700'>
							A word descrambler isn’t just for games! It’s a
							great way to expand your vocabulary, improve
							spelling, and learn new words. Whether you’re a
							student, a teacher, or just love word puzzles, this
							tool can help you discover new possibilities with
							every set of letters.
						</p>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							Common Uses for a Word Descrambler
						</h2>
						<ul className='list-disc ml-6 text-gray-700'>
							<li>
								<b>Scrabble & Words With Friends:</b> Find the
								highest scoring words from your tiles.
							</li>
							<li>
								<b>Crossword Puzzles:</b> Get unstuck when
								you’re missing a word.
							</li>
							<li>
								<b>Homework Help:</b> Quickly find words for
								assignments or creative writing.
							</li>
							<li>
								<b>Brain Training:</b> Practice and improve your
								anagram and word-solving skills.
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							How to Get the Most Out of Your Results
						</h2>
						<ul className='list-disc ml-6 text-gray-700'>
							<li>Try using wildcards for unknown letters.</li>
							<li>
								Experiment with different word lengths to see
								all possible options.
							</li>
							<li>
								Use the{" "}
								<a
									href='http://findwordfinder.com/words-start-with'
									target='Words Start With'>
									Words Start With
								</a>{" "}
								or{" "}
								<a
									href='http://findwordfinder.com/words-ending-in'
									target='Words Ending In'>
									Words Ending In
								</a>{" "}
								filters for more targeted results.
							</li>
							<li>
								Click on a word to see its definition and learn
								how to use it in a sentence.
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							Frequently Asked Questions (FAQ)
						</h2>
						<ul className='list-disc ml-6 text-gray-700'>
							<li>
								<b>Q: Can I use this tool for any language?</b>
								<br />
								A: Currently, this tool supports English. Stay
								tuned for more languages in the future!
							</li>
							<li>
								<b>Q: Are all the words valid in Scrabble?</b>
								<br />
								A: The results include words from major
								dictionaries. Use the dictionary filter to match
								your game.
							</li>
							<li>
								<b>Q: Is this tool free?</b>
								<br />
								A: Yes! You can use the word descrambler as much
								as you like, for free.
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>
							Word Game Tips & Strategies
						</h2>
						<ul className='list-disc ml-6 text-gray-700'>
							<li>
								Memorize common prefixes and suffixes to spot
								more words.
							</li>
							<li>
								Don’t forget about two- and three-letter
								words—they can be game changers!
							</li>
							<li>
								Use high-value letters (like Q, Z, X) wisely for
								maximum points.
							</li>
						</ul>
					</div>
				</section>
				{/* Sidebar for desktop, stacked below on mobile */}
				<aside className='bg-white rounded-xl shadow w-full md:w-1/3 md:sticky md:top-8 h-fit mt-8 md:mt-0 flex-shrink-0 text-base md:text-lg'>
					<div className='bg-green-400 text-white font-bold rounded-t-xl px-4 py-2 text-lg'>
						Word Finder
					</div>
					<div className='p-4'>
						<h2 className='text-lg font-bold mb-2'>
							Find Word Finder
						</h2>
						<ul className='space-y-1 text-gray-700'>
							<li>
								<a
									href='http://findwordfinder.com/'
									target='FindWordFinder'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Word Finder
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/wordle-helper'
									target='Wordle'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Wordle
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/words-with-friends-cheat'
									target='Words With Friends Cheat'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Words With Friends Cheat
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/crossword-solver'
									target='Crossword Solver'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Crossword Solver
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/anagram-solver'
									target='Anagram Solver'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Anagram Solver
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/word-descrambler'
									target='Word Descrambler'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Word Descrambler
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/scrabble-calculator'
									target='Scrabble Calculator'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Scrabble Calculator
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/word-unscrambler'
									target='Word Unscrambler'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Word Unscrambler
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/jumble-solver'
									target='Jumble Solver'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Jumble Solver
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/word-generator'
									target='Random Word Generator'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Random Word Generator
								</a>
							</li>
						</ul>
					</div>
					{/* Dictionaries Section */}
					<div className='bg-green-400 text-white font-bold rounded-t-xl px-4 py-2 text-lg mt-8'>
						Dictionaries
					</div>
					<div className='p-4'>
						<ul className='space-y-1 text-gray-800'>
							<li>
								<a
									href='http://findwordfinder.com/spelling'
									target='Spelling'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									MisSpelling{" "}
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/scrabble-dictionary'
									target='Scrabble Dictionary'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Scrabble Dictionary
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/words-with-friends-dictionary'
									target='Words With Friends Dictionary'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Words With Friends Dictionary
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/grammar-rules'
									target='Grammar Rules'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Grammar Rules
								</a>
							</li>
						</ul>
					</div>
					{/* Lists of Words Section */}
					<div className='bg-green-400 text-white font-bold rounded-t-xl px-4 py-2 text-lg mt-8'>
						Lists of Words
					</div>
					<div className='p-4'>
						<ul className='space-y-1 text-gray-800'>
							<li>
								<a
									href='http://findwordfinder.com/words-ending-in'
									target='Words Ending In'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Words Ending In
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/words-with-letters'
									target='Words With Letters'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Words With Letters
								</a>
							</li>
							<li>
								<a
									href='http://findwordfinder.com/words-start-with'
									target='Words Start With'
									className='block px-3 py-2 rounded-lg transition-all duration-150 hover:bg-green-100 hover:text-green-800 focus-visible:bg-green-200 focus-visible:outline-none shadow-sm hover:shadow'>
									Words Start With
								</a>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</>
	);
}