
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Grammar Rules | Find Word Finder",
	description:
		"Master the fundamentals of English grammar with comprehensive rules, examples, and interactive practice",
	alternates: {
		canonical: "/grammar-rules",
	},
};

export default function GrammarRulesPage() {
	const grammarCategories = [
		{
			title: "Parts of Speech",
			description: "The building blocks of language",
			color: "from-blue-500 to-indigo-600",
			bgColor: "from-blue-50 to-indigo-50",
			rules: [
				{
					title: "Nouns",
					rule: "Nouns are words that name people, places, things, or ideas",
					examples: ["cat", "London", "happiness", "team"],
					link: "/grammar/nouns",
				},
				{
					title: "Verbs",
					rule: "Verbs express actions, states, or occurrences",
					examples: ["run", "is", "think", "become"],
					link: "/grammar/verbs",
				},
				{
					title: "Adjectives",
					rule: "Adjectives describe or modify nouns",
					examples: ["beautiful", "tall", "happy", "blue"],
					link: "/grammar/adjectives",
				},
				{
					title: "Adverbs",
					rule: "Adverbs modify verbs, adjectives, or other adverbs",
					examples: ["quickly", "very", "well", "here"],
					link: "/grammar/adverbs",
				},
			],
		},
		{
			title: "Sentence Structure",
			description: "How to build proper sentences",
			color: "from-green-500 to-emerald-600",
			bgColor: "from-green-50 to-emerald-50",
			rules: [
				{
					title: "Subject and Predicate",
					rule: "Every sentence has a subject (who/what) and predicate (what happens)",
					examples: ["The cat (subject) sleeps (predicate)"],
					link: "/grammar/subject-and-predicate",
				},
				{
					title: "Clauses",
					rule: "Groups of words with a subject and verb",
					examples: [
						"Independent: I love pizza",
						"Dependent: when I'm hungry",
					],
					link: "/grammar/clauses",
				},
				{
					title: "Complex Sentences",
					rule: "Sentences with independent and dependent clauses",
					examples: ["I went home because I was tired"],
					link: "/grammar/complex-sentences",
				},
				{
					title: "Phrases",
					rule: "Groups of related words without a subject-verb pair",
					examples: [
						"in the morning",
						"running quickly",
						"very happy",
					],
					link: "/grammar/phrases",
				},
			],
		},
		{
			title: "Punctuation",
			description: "Marks that clarify meaning",
			color: "from-purple-500 to-violet-600",
			bgColor: "from-purple-50 to-violet-50",
			rules: [
				{
					title: "Commas",
					rule: "Separate items in lists, clauses, and introductory elements",
					examples: ["apples, oranges, and bananas"],
					link: "/grammar/commas",
				},
				{
					title: "Semicolons",
					rule: "Connect related independent clauses",
					examples: ["I love pizza; it's my favorite food"],
					link: "/grammar/semicolons",
				},
				{
					title: "Apostrophes",
					rule: "Show possession and form contractions",
					examples: ["John's book", "don't", "it's"],
					link: "/grammar/apostrophes",
				},
				{
					title: "Quotation Marks",
					rule: "Enclose direct speech and titles",
					examples: [
						'She said, "Hello"',
						'The poem "The Road Not Taken"',
					],
					link: "/grammar/quotation-marks",
				},
			],
		},
		{
			title: "Verb Tenses",
			description: "Expressing time in language",
			color: "from-orange-500 to-red-600",
			bgColor: "from-orange-50 to-red-50",
			rules: [
				{
					title: "Simple Present",
					rule: "Express current actions and general truths",
					examples: ["I work", "She studies", "The sun rises"],
					link: "/grammar/simple-present-tense",
				},
				{
					title: "Present Continuous",
					rule: "Express actions happening now",
					examples: ["I am working", "She is studying"],
					link: "/grammar/present-continuous",
				},
				{
					title: "Present Perfect",
					rule: "Express completed actions with present relevance",
					examples: ["I have finished", "She has studied"],
					link: "/grammar/present-perfect-tense-examples",
				},
				{
					title: "Past Continuous",
					rule: "Express actions in progress in the past",
					examples: ["I was working", "She was studying"],
					link: "/grammar/past-continuous-tense-examples",
				},
			],
		},
		{
			title: "Word Types",
			description: "Special categories of words",
			color: "from-teal-500 to-cyan-600",
			bgColor: "from-teal-50 to-cyan-50",
			rules: [
				{
					title: "Articles",
					rule: "Small words that come before nouns (a, an, the)",
					examples: ["a cat", "an apple", "the book"],
					link: "/grammar/article",
				},
				{
					title: "Proper Adjectives",
					rule: "Adjectives derived from proper nouns",
					examples: ["American", "Victorian", "Chinese"],
					link: "/grammar/proper-adjectives",
				},
				{
					title: "Collective Nouns",
					rule: "Nouns that refer to groups",
					examples: ["team", "family", "herd", "flock"],
					link: "/grammar/collective-nouns",
				},
				{
					title: "Compound Words",
					rule: "Words made from two or more words",
					examples: ["sunshine", "notebook", "rainbow"],
					link: "/grammar/compound-words-for-kids",
				},
			],
		},
		{
			title: "Language Devices",
			description: "Creative and figurative language",
			color: "from-pink-500 to-rose-600",
			bgColor: "from-pink-50 to-rose-50",
			rules: [
				{
					title: "Metaphors",
					rule: "Direct comparisons without like or as",
					examples: ["Life is a journey", "Time is money"],
					link: "/grammar/metaphor-examples",
				},
				{
					title: "Similes",
					rule: "Comparisons using like or as",
					examples: [
						"As brave as a lion",
						"Like a fish out of water",
					],
					link: "/grammar/simile-examples",
				},
				{
					title: "Personification",
					rule: "Giving human qualities to non-human things",
					examples: ["The wind whispered", "The sun smiled"],
					link: "/grammar/personification-examples-for-kids",
				},
				{
					title: "Alliteration",
					rule: "Repetition of initial consonant sounds",
					examples: ["Peter Piper picked", "She sells seashells"],
					link: "/grammar/alliteration-examples",
				},
			],
		},
	];

	const commonMistakes = [
		{
			mistake: "Your vs You're",
			correct: "Your = possessive, You're = you are",
			explanation: "If you can substitute 'you are', use you're",
			link: "/spelling/your-vs-youre",
		},
		{
			mistake: "There, Their, They're",
			correct: "There = place, Their = possessive, They're = they are",
			explanation: "Three different words with different meanings",
			link: "/spelling/there-vs-their",
		},
		{
			mistake: "Its vs It's",
			correct: "Its = possessive, It's = it is",
			explanation: "It's is a contraction of 'it is'",
			link: "/spelling/its-vs-its",
		},
		{
			mistake: "Affect vs Effect",
			correct: "Affect = verb (influence), Effect = noun (result)",
			explanation: "Affect is an Action, Effect is an End result",
			link: "/spelling/affect-vs-effect",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
			{/* Hero Section */}
			<div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20'>
				<div className='container mx-auto px-4'>
					<div className='text-center max-w-4xl mx-auto'>
						<h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
							Grammar Rules
						</h1>
						<p className='text-xl md:text-2xl text-blue-100 mb-8'>
							Master the fundamentals of English grammar with
							comprehensive rules, examples, and interactive
							practice
						</p>
						<div className='flex flex-wrap justify-center gap-4 text-sm'>
							<span className='bg-white/20 px-4 py-2 rounded-full'>
								50+ Rules
							</span>
							<span className='bg-white/20 px-4 py-2 rounded-full'>
								Interactive Quizzes
							</span>
							<span className='bg-white/20 px-4 py-2 rounded-full'>
								Examples & Practice
							</span>
							<span className='bg-white/20 px-4 py-2 rounded-full'>
								Common Mistakes
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='container mx-auto px-4 py-12'>
				<div className='max-w-7xl mx-auto'>
					{/* Grammar Categories */}
					<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16'>
						{grammarCategories.map((category, index) => (
							<div key={index} className='group'>
								<div
									className={`bg-gradient-to-br ${category.bgColor} rounded-3xl p-8 h-full border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
									{/* Category Header */}
									<div
										className={`bg-gradient-to-r ${category.color} text-white rounded-2xl p-6 mb-6`}>
										<h2 className='text-2xl font-bold mb-2'>
											{category.title}
										</h2>
										<p className='text-white/90'>
											{category.description}
										</p>
									</div>

									{/* Rules List */}
									<div className='space-y-4'>
										{category.rules.map(
											(rule, ruleIndex) => (
												<Link
													key={ruleIndex}
													href={rule.link}
													className='block group/item'>
													<div className='bg-white/70 hover:bg-white rounded-xl p-4 transition-all duration-200 hover:shadow-md border border-white/50'>
														<h3 className='font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors mb-2'>
															{rule.title}
														</h3>
														<p className='text-sm text-gray-600 mb-2'>
															{rule.rule}
														</p>
														<div className='text-xs text-gray-500'>
															<span className='font-medium'>
																Examples:
															</span>{" "}
															{rule.examples.join(
																", "
															)}
														</div>
													</div>
												</Link>
											)
										)}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Common Mistakes Section */}
					<div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-16'>
						<h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent'>
							Common Grammar Mistakes
						</h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{commonMistakes.map((mistake, index) => (
								<div
									key={index}
									className='bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200'>
									<div className='mb-4'>
										<span className='bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
											Mistake
										</span>
										<p className='text-red-800 font-medium mt-2 line-through'>
											{mistake.mistake}
										</p>
									</div>
									<div className='mb-4'>
										<span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
											Correct
										</span>
										<p className='text-green-800 font-medium mt-2'>
											{mistake.correct}
										</p>
									</div>
									<div className='mb-4'>
										<span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
											Why
										</span>
										<p className='text-blue-800 text-sm mt-2'>
											{mistake.explanation}
										</p>
									</div>
									<Link
										href={mistake.link}
										className='inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors'>
										Learn More →
									</Link>
								</div>
							))}
						</div>
					</div>

					{/* Interactive Quiz Section */}
					<div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-16'>
						<h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
							Quick Grammar Quiz
						</h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6'>
								<h3 className='text-xl font-semibold text-gray-800 mb-4'>
									Choose the correct word:
								</h3>
								<div className='space-y-4'>
									<div className='bg-white p-4 rounded-lg'>
										<p className='mb-2'>
											___ going to the store.
											(Your/You&apos;re)
										</p>
										<details className='mt-2'>
											<summary className='cursor-pointer text-purple-600 font-semibold'>
												Show Answer
											</summary>
											<p className='mt-2 text-gray-700'>
												Answer: You&apos;re (contraction
												of &quot;you are&quot;)
											</p>
										</details>
									</div>
									<div className='bg-white p-4 rounded-lg'>
										<p className='mb-2'>
											The cat wagged ___ tail.
											(its/it&apos;s)
										</p>
										<details className='mt-2'>
											<summary className='cursor-pointer text-purple-600 font-semibold'>
												Show Answer
											</summary>
											<p className='mt-2 text-gray-700'>
												Answer: its (possessive form)
											</p>
										</details>
									</div>
								</div>
							</div>

							<div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6'>
								<h3 className='text-xl font-semibold text-gray-800 mb-4'>
									Fix the sentence:
								</h3>
								<div className='space-y-4'>
									<div className='bg-white p-4 rounded-lg'>
										<p className='mb-2'>
											I bought apples oranges and bananas.
										</p>
										<details className='mt-2'>
											<summary className='cursor-pointer text-blue-600 font-semibold'>
												Show Answer
											</summary>
											<p className='mt-2 text-gray-700'>
												Answer: I bought apples,
												oranges, and bananas.
											</p>
										</details>
									</div>
									<div className='bg-white p-4 rounded-lg'>
										<p className='mb-2'>
											The team are winning the game.
										</p>
										<details className='mt-2'>
											<summary className='cursor-pointer text-blue-600 font-semibold'>
												Show Answer
											</summary>
											<p className='mt-2 text-gray-700'>
												Answer: The team is winning the
												game. (collective noun as
												singular)
											</p>
										</details>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Writing Tips Section */}
					<div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-16'>
						<h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>
							Essential Writing Tips
						</h2>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
							<div className='text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl'>
								<div className='w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
									1
								</div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Read Aloud
								</h3>
								<p className='text-sm text-gray-600'>
									Reading your work aloud helps catch errors
									and awkward phrasing.
								</p>
							</div>

							<div className='text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl'>
								<div className='w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
									2
								</div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Use Active Voice
								</h3>
								<p className='text-sm text-gray-600'>
									Active voice makes your writing more direct
									and engaging.
								</p>
							</div>

							<div className='text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl'>
								<div className='w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
									3
								</div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Vary Sentence Length
								</h3>
								<p className='text-sm text-gray-600'>
									Mix short and long sentences to create
									rhythm and interest.
								</p>
							</div>

							<div className='text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl'>
								<div className='w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
									4
								</div>
								<h3 className='font-semibold text-gray-800 mb-2'>
									Proofread Multiple Times
								</h3>
								<p className='text-sm text-gray-600'>
									Check for different types of errors in each
									pass.
								</p>
							</div>
						</div>
					</div>

					{/* Call to Action */}
					<div className='text-center'>
						<div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white'>
							<h2 className='text-3xl font-bold mb-4'>
								Ready to Master Grammar?
							</h2>
							<p className='text-xl text-blue-100 mb-8'>
								Explore our comprehensive grammar resources and
								practice exercises
							</p>
							<div className='flex flex-wrap justify-center gap-4'>
								<Link
									href='/grammar'
									className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors'>
									Browse All Topics
								</Link>
								<Link
									href='/spelling'
									className='bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors'>
									Spelling Rules
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
