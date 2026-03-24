
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Scrabble Score Calculator | Find Word Finder",
	description: "Scrabble score calculator for Find Word Finder",
	keywords: "scrabble score calculator, scrabble, score calculator",
	alternates: {
		canonical: "/scrabble-score-calculator-finder",
	},
};

export default function ScrabbleScoreCalculatorFinder() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'>
			{/* Hero Section */}
			<div className='bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16'>
				<div className='container mx-auto px-4 text-center'>
					<h1 className='text-5xl font-bold mb-4'>
						Scrabble Score Calculator
					</h1>
					<p className='text-xl opacity-90'>
						Calculate word scores and find high-scoring plays for
						Scrabble
					</p>
				</div>
			</div>

			<div className='container mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-2 space-y-8'>
						{/* Introduction */}
						<div className='bg-white rounded-2xl p-8 shadow-lg'>
							<h2 className='text-3xl font-bold text-green-800 mb-4'>
								Scrabble Score Calculator
							</h2>
							<p className='text-gray-700 text-lg leading-relaxed mb-4'>
								Master the art of Scrabble scoring with our
								comprehensive calculator. Learn how letter
								values, bonus squares, and strategic placement
								can maximize your points in every game.
							</p>
							<p className='text-gray-700 text-lg leading-relaxed'>
								Whether you&apos;re a beginner learning the
								basics or an advanced player looking for
								high-scoring opportunities, this tool will help
								you improve your Scrabble strategy.
							</p>
						</div>

						{/* Letter Values */}
						<div className='bg-white rounded-2xl p-8 shadow-lg'>
							<h2 className='text-3xl font-bold text-green-800 mb-6'>
								Letter Values
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
								<div className='bg-green-50 p-6 rounded-xl'>
									<h3 className='text-xl font-semibold text-green-700 mb-3'>
										1 Point Letters
									</h3>
									<p className='text-gray-700 mb-3'>
										Most common letters
									</p>
									<p className='text-gray-600'>
										A, E, I, L, N, O, R, S, T, U
									</p>
								</div>
								<div className='bg-emerald-50 p-6 rounded-xl'>
									<h3 className='text-xl font-semibold text-emerald-700 mb-3'>
										2-4 Point Letters
									</h3>
									<p className='text-gray-700 mb-3'>
										Less common letters
									</p>
									<p className='text-gray-600'>
										2: D, G<br />
										3: B, C, M, P<br />
										4: F, H, V, W, Y
									</p>
								</div>
								<div className='bg-teal-50 p-6 rounded-xl'>
									<h3 className='text-xl font-semibold text-teal-700 mb-3'>
										High Value Letters
									</h3>
									<p className='text-gray-700 mb-3'>
										Rare and valuable
									</p>
									<p className='text-gray-600'>
										5: K<br />
										8: J, X<br />
										10: Q, Z
									</p>
								</div>
							</div>
						</div>

						{/* Bonus Squares */}
						<div className='bg-white rounded-2xl p-8 shadow-lg'>
							<h2 className='text-3xl font-bold text-green-800 mb-6'>
								Bonus Squares
							</h2>
							<div className='space-y-6'>
								<div className='border-l-4 border-green-500 pl-6'>
									<h3 className='text-xl font-semibold text-green-700 mb-2'>
										Letter Bonuses
									</h3>
									<p className='text-gray-700 mb-3'>
										Multiply individual letter values
									</p>
									<p className='text-gray-600 italic'>
										<strong>
											Double Letter Score (DL):
										</strong>{" "}
										Letter value × 2<br />
										<strong>
											Triple Letter Score (TL):
										</strong>{" "}
										Letter value × 3
									</p>
								</div>
								<div className='border-l-4 border-emerald-500 pl-6'>
									<h3 className='text-xl font-semibold text-emerald-700 mb-2'>
										Word Bonuses
									</h3>
									<p className='text-gray-700 mb-3'>
										Multiply entire word scores
									</p>
									<p className='text-gray-600 italic'>
										<strong>Double Word Score (DW):</strong>{" "}
										Word total × 2<br />
										<strong>
											Triple Word Score (TW):
										</strong>{" "}
										Word total × 3
									</p>
								</div>
								<div className='border-l-4 border-teal-500 pl-6'>
									<h3 className='text-xl font-semibold text-teal-700 mb-2'>
										Special Squares
									</h3>
									<p className='text-gray-700 mb-3'>
										Center star and premium squares
									</p>
									<p className='text-gray-600 italic'>
										<strong>Center Star:</strong> First word
										gets double points
										<br />
										<strong>Premium Squares:</strong> Can
										combine with other bonuses
									</p>
								</div>
							</div>
						</div>

						{/* Scoring Examples */}
						<div className='bg-white rounded-2xl p-8 shadow-lg'>
							<h2 className='text-3xl font-bold text-green-800 mb-6'>
								Scoring Examples
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='bg-green-50 p-6 rounded-xl'>
									<h3 className='text-xl font-semibold text-green-700 mb-3'>
										Simple Word
									</h3>
									<p className='text-gray-700 mb-3'>
										&quot;CAT&quot; on regular squares
									</p>
									<p className='text-gray-600'>
										C (3) + A (1) + T (1) = 5 points
									</p>
								</div>
								<div className='bg-emerald-50 p-6 rounded-xl'>
									<h3 className='text-xl font-semibold text-emerald-700 mb-3'>
										With Bonuses
									</h3>
									<p className='text-gray-700 mb-3'>
										&quot;QUIZ&quot; on bonus squares
									</p>
									<p className='text-gray-600'>
										Q (10×2) + U (1) + I (1) + Z (10×3) = 42
										points
										<br />
										Then ×2 for Double Word = 84 points!
									</p>
								</div>
							</div>
						</div>

						{/* Interactive Quizzes */}
						<div className='bg-white rounded-2xl p-8 shadow-lg'>
							<h2 className='text-3xl font-bold text-green-800 mb-6'>
								Interactive Quizzes
							</h2>

							<div className='space-y-6'>
								<details className='bg-green-50 rounded-xl p-6'>
									<summary className='text-xl font-semibold text-green-700 cursor-pointer hover:text-green-800'>
										Quiz 1: Calculate Word Scores
									</summary>
									<div className='mt-4 space-y-3'>
										<p className='text-gray-700'>
											What&apos;s the score for these
											words?
										</p>
										<div className='bg-white p-4 rounded-lg'>
											<p className='text-gray-700 mb-2'>
												1. &quot;HELLO&quot;
											</p>
											<p className='text-gray-600 text-sm'>
												Answer: H(4) + E(1) + L(1) +
												L(1) + O(1) = 8 points
											</p>
										</div>
										<div className='bg-white p-4 rounded-lg'>
											<p className='text-gray-700 mb-2'>
												2. &quot;JAZZ&quot;
											</p>
											<p className='text-gray-600 text-sm'>
												Answer: J(8) + A(1) + Z(10) +
												Z(10) = 29 points
											</p>
										</div>
									</div>
								</details>

								<details className='bg-emerald-50 rounded-xl p-6'>
									<summary className='text-xl font-semibold text-emerald-700 cursor-pointer hover:text-emerald-800'>
										Quiz 2: Bonus Square Calculations
									</summary>
									<div className='mt-4 space-y-3'>
										<p className='text-gray-700'>
											Calculate scores with bonus squares:
										</p>
										<div className='bg-white p-4 rounded-lg'>
											<p className='text-gray-700 mb-2'>
												1. &quot;DOG&quot; on Double
												Word Score
											</p>
											<p className='text-gray-600 text-sm'>
												Answer: D(2) + O(1) + G(2) = 5 ×
												2 = 10 points
											</p>
										</div>
										<div className='bg-white p-4 rounded-lg'>
											<p className='text-gray-700 mb-2'>
												2. &quot;CAT&quot; on Triple
												Letter Score for C
											</p>
											<p className='text-gray-600 text-sm'>
												Answer: C(3×3) + A(1) + T(1) =
												11 points
											</p>
										</div>
									</div>
								</details>

								<details className='bg-teal-50 rounded-xl p-6'>
									<summary className='text-xl font-semibold text-teal-700 cursor-pointer hover:text-teal-800'>
										Quiz 3: Strategic Placement
									</summary>
									<div className='mt-4 space-y-3'>
										<p className='text-gray-700'>
											Which placement would score higher?
										</p>
										<div className='bg-white p-4 rounded-lg'>
											<p className='text-gray-700 mb-2'>
												1. &quot;QUIZ&quot; on regular
												squares vs. &quot;QUIZ&quot; on
												Double Word Score
											</p>
											<p className='text-gray-600 text-sm'>
												Answer: Double Word Score! Q(10)
												+ U(1) + I(1) + Z(10) = 22 × 2 =
												44 points
											</p>
										</div>
									</div>
								</details>

								<details className='bg-green-50 rounded-xl p-6'>
									<summary className='text-xl font-semibold text-green-700 cursor-pointer hover:text-green-800'>
										Quiz 4: High-Scoring Words
									</summary>
									<div className='mt-4 space-y-3'>
										<p className='text-gray-700'>
											Find high-scoring 3-letter words:
										</p>
										<div className='bg-white p-4 rounded-lg'>
											<p className='text-gray-700 mb-2'>
												1. What&apos;s the
												highest-scoring 3-letter word?
											</p>
											<p className='text-gray-600 text-sm'>
												Answer: &quot;ZAX&quot; = Z(10)
												+ A(1) + X(8) = 19 points
											</p>
										</div>
									</div>
								</details>
							</div>
						</div>

						{/* Notes Section */}
						<div className='bg-white rounded-2xl p-8 shadow-lg'>
							<h2 className='text-3xl font-bold text-green-800 mb-4'>
								Important Notes
							</h2>
							<div className='space-y-4 text-gray-700'>
								<p>
									• Letter bonuses are applied first, then
									word bonuses multiply the total.
								</p>
								<p>
									• The center star square gives double points
									for the first word played.
								</p>
								<p>
									• Premium squares can be used multiple times
									if words cross over them.
								</p>
								<p>
									• Plan your plays to maximize bonus square
									usage and create multiple scoring
									opportunities.
								</p>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className='space-y-6'>
						<div className='bg-white rounded-2xl p-6 shadow-lg'>
							<h3 className='text-xl font-bold text-green-800 mb-4'>
								Pro Tip
							</h3>
							<p className='text-gray-700'>
								Look for opportunities to use high-value letters
								(Q, Z, J, X) on bonus squares, especially Triple
								Letter Scores. Combining letter and word bonuses
								can create massive point totals!
							</p>
						</div>

						<div className='bg-white rounded-2xl p-6 shadow-lg'>
							<h3 className='text-xl font-bold text-green-800 mb-4'>
								Related Tools
							</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='/scrabble-calculator'
										className='text-green-600 hover:text-green-800 hover:underline'>
										Scrabble Calculator
									</Link>
								</li>
								<li>
									<Link
										href='/scrabble-dictionary'
										className='text-green-600 hover:text-green-800 hover:underline'>
										Scrabble Dictionary
									</Link>
								</li>
								<li>
									<Link
										href='/word-finders'
										className='text-green-600 hover:text-green-800 hover:underline'>
										Word Finders
									</Link>
								</li>
								<li>
									<Link
										href='/word-generator'
										className='text-green-600 hover:text-green-800 hover:underline'>
										Word Generator
									</Link>
								</li>
								<li>
									<Link
										href='/anagram-solver'
										className='text-green-600 hover:text-green-800 hover:underline'>
										Anagram Solver
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
