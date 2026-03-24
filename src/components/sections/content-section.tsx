import Link from "next/link";

export function ContentSections() {
	const grammarTopics = [
		{ title: "Parts Of Speech", href: "/grammar/parts-of-speech" },
		{ title: "Noun Examples", href: "/grammar/noun-examples" },
		{ title: "Figurative Language", href: "/grammar/figurative-language" },
		{ title: "Idioms For Kids", href: "/grammar/idioms-for-kids" },
		{
			title: "Reading Comprehension Worksheets",
			href: "/grammar/reading-comprehension",
		},
	];

	const wordsByLength = [
		{ title: "Two Letter Words", href: "/words-by-length/2-letter-words" },
		{
			title: "Three Letter Words",
			href: "/words-by-length/3-letter-words",
		},
		{ title: "Four Letter Words", href: "/words-by-length/4-letter-words" },
		{ title: "Five Letter Words", href: "/words-by-length/5-letter-words" },
		{ title: "Six Letter Words", href: "/words-by-length/6-letter-words" },
	];

	const nytMiniClues = [
		{
			clue: "Word Generator Tool",
			answer: "word-generator",
		},
		{ clue: "Anagram Solver Tool", answer: "anagram-solver" },
		{ clue: "Word Unscrambler Tool", answer: "word-unscrambler" },
		{ clue: "Crossword Solver Tool", answer: "crossword-solver" },
		{ clue: "Rhyme Finder Tool", answer: "rhyme-finder" },
		{
			clue: "Scrabble Score Calculator Finder Tool",
			answer: "scrabble-calculator",
		},
	];

	const wordFinderTools = [
		"Find Word Finder",
		"Anagram Solver",
		"Word Descrambler",
		"Word Unscrambler",
		"Crossword Solver",
		"Word Generator",
		"Rhyme Finder",
		"Wordle Helper",
		"Scrabble Calculator",
	];

	const trendingPages = [
		"2 Letter Words",
		"3 Letter Words",
		"4 Letter Words",
		"5 Letter Words",
		"6 Letter Words",
		"7 Letter Words",
		"8 Letter Words",
	];

	return (
		<section className='bg-gradient-to-b from-gray-50 to-white py-16'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-2 space-y-8'>
						{/* Word Finder Description */}
						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<p className='text-lg leading-relaxed mb-6 text-gray-700'>
								<strong className='text-blue-600'>
									Find Word Finder
								</strong>{" "}
								is the perfect help when your vocabulary fails
								you. It&apos;s a unique word search tool, which
								finds all possible words made up of the letters
								you input. People use Find Word Finder for
								various reasons, but the primary one is to win
								games such as{" "}
								<Link
									href='/scrabble-dictionary'
									className='text-blue-600 hover:text-blue-800 underline font-medium'>
									Scrabble Dictionary
								</Link>{" "}
								and{" "}
								<Link
									href='/words-with-friends-dictionary'
									className='text-blue-600 hover:text-blue-800 underline font-medium'>
									Words With Friends Dictionary
								</Link>
								.
							</p>

							<h2 className='text-3xl font-bold mb-6 text-gray-800 border-b-2 border-green-400 pb-2'>
								Find Word Finder
							</h2>
							<p className='text-gray-700 leading-relaxed mb-4'>
								Are you someone who loves finding and
								discovering new words? Are you a board game
								enthusiast? If you are, then this Find Word
								Finder is a tool you can&apos;t afford not to
								have. Whether you are into playing Scrabble,
								Words with Friends or any other word game, Word
								Finder will prove to be useful. It will help you
								both with word discovery, and as a reference
								tool, you and your playmates can use as a way to
								settle disputes about the validity of any
								particular word.
							</p>
							<p className='text-gray-700 leading-relaxed mb-6'>
								Do you love boosting your vocabulary? Do word
								games help ignite your brain cells? Do you enjoy
								the thrill of trying to outwit an opponent with
								your encyclopedic mind? Then, our{" "}
								<Link
									href='/word-generator'
									className='text-blue-600 hover:text-blue-800 underline font-medium'>
									word generator
								</Link>{" "}
								is a tool that you simply can&apos;t live
								without!
							</p>
						</div>

						{/* Grammar and Words by Length */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{/* Grammar Card */}
							<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
								<div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-t-xl'>
									<h3 className='text-xl font-bold'>
										Grammar
									</h3>
								</div>
								<div className='p-6'>
									<div className='space-y-3'>
										{grammarTopics.map((topic, index) => (
											<Link
												key={index}
												href={topic.href}
												className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
												{topic.title}
											</Link>
										))}
									</div>
								</div>
							</div>

							{/* Words by Length Card */}
							<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
								<div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-t-xl'>
									<h3 className='text-xl font-bold'>
										Words by Length
									</h3>
								</div>
								<div className='p-6'>
									<div className='space-y-3'>
										{wordsByLength.map(
											(category, index) => (
												<Link
													key={index}
													href={category.href}
													className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
													{category.title}
												</Link>
											)
										)}
									</div>
								</div>
							</div>
						</div>

						{/* Today's Try Another Tool */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
							<div className='bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-t-xl'>
								<h3 className='text-2xl font-bold'>
									Today&apos;s Try Another Tool
								</h3>
							</div>
							<div className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									{nytMiniClues.map((item, index) => (
										<div
											key={index}
											className='bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200 border border-gray-200'>
											<div className='text-gray-800 font-medium mb-2'>
												{item.clue}
											</div>
											<Link
												href={`/${item.answer.toLowerCase()}`}
												className='text-blue-600 hover:text-blue-800 text-sm font-medium underline'>
												Try this tool →
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* What is Find Find Word Finder Word Finder */}
						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<h2 className='text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-400 pb-2'>
								What is Find Word Finder?
							</h2>
							<p className='text-gray-700 leading-relaxed text-lg'>
								If you haven&apos;t had a chance to use Find
								Word Finder yet, then you&apos;re in for a
								treat. This easy to work with online word
								generator will quickly and efficiently create a
								wide variety of words using the letters that you
								enter. Your excitement will grow as you watch it
								unscrambling the inputs you provide to make
								words out of letters as an anagram solver.
								You&apos;ll be amazed at the sheer number of
								words that you can create with just a few
								letters. The best part is that it&apos;s
								completely free to use, and you don&apos;t need
								to register or sign up for anything.
							</p>
						</div>
					</div>

					{/* Enhanced Sidebar */}
					<div className='lg:col-span-1 space-y-6'>
						{/* Word Finder Tools */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
							<div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-t-xl'>
								<h3 className='text-xl font-bold'>
									Find Word Finder
								</h3>
							</div>
							<div className='p-6'>
								<div className='space-y-2'>
									{wordFinderTools.map((tool, index) => (
										<Link
											key={index}
											href={`/${tool
												.toLowerCase()
												.replace(/\s+/g, "-")}`}
											className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
											{tool}
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Trending Pages */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
							<div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-t-xl'>
								<h3 className='text-xl font-bold'>
									Words by Length
								</h3>
							</div>
							<div className='p-6'>
								<div className='space-y-2'>
									{trendingPages.map((page, index) => (
										<Link
											key={index}
											href={`words-by-length/${page
												.toLowerCase()
												.replace(/\s+/g, "-")}`}
											className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
											{page}
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Dictionaries */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
							<div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-t-xl'>
								<h3 className='text-xl font-bold'>
									Dictionaries
								</h3>
							</div>
							<div className='p-6'>
								<div className='space-y-2'>
									<Link
										href='/spelling'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
										MisSpelling
									</Link>									
									<Link
										href='/scrabble-dictionary'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
										Scrabble Dictionary
									</Link>
									<Link
										href='/words-with-friends-dictionary'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
										Words With Friends Dictionary
									</Link>
									<Link
										href='/grammar'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
										Grammer
									</Link>
								</div>
							</div>
						</div>

						{/* Lists of Words */}
						<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
							<div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-t-xl'>
								<h3 className='text-xl font-bold'>
									Lists of Words
								</h3>
							</div>
							<div className='p-6'>
								<div className='space-y-2'>
									<Link
										href='/words-ending-in'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
										Words Ending In
									</Link>
									<Link
										href='/words-with-letters'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
										Words With Letters
									</Link>
									<Link
										href='/words-start-with'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400 border-b border-gray-100 hover:border-b-green-200'>
										Words Start With
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
