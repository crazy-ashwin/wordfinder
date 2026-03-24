import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { SpellingEntry, supabase } from "@/lib/supabase";
import Link from "next/link";
import { grammarCategories, GrammarTopic } from "@/lib/grammar-data";

interface PageProps {
	params: Promise<{ slug: string }>;
}

async function getSpellingEntry(slug: string): Promise<SpellingEntry | null> {
	try {
		const { data, error } = await supabase
			.from("spelling_entries")
			.select("*")
			.eq("slug", slug)
			.eq("is_published", true)
			.single();

		if (error) {
			console.error("Error fetching spelling entry:", error);
			return null;
		}

		return data;
	} catch (error) {
		console.error("Error fetching spelling entry:", error);
		return null;
	}
}

async function getFeaturedMisspellings(
	count: number = 5
): Promise<SpellingEntry[]> {
	try {
		// Use a random sorting or just take latest for now if random is hard in Supabase simple query
		// For true random, we might need a stored procedure or fetch more and shuffle.
		// For now, let's fetch a few recent ones and shuffle them in code.
		const { data, error } = await supabase
			.from("spelling_entries")
			.select("*")
			.eq("is_published", true)
			.limit(20); // Fetch more to shuffle

		if (error || !data) return [];

		return data.sort(() => 0.5 - Math.random()).slice(0, count);
	} catch (error) {
		console.error("Error fetching featured misspellings:", error);
		return [];
	}
}

async function getRelatedMisspellings(
	currentEntry: SpellingEntry,
	count: number = 5
): Promise<SpellingEntry[]> {
	try {
		// Try to find entries starting with the same letter
		const firstLetter = currentEntry.correct_word.charAt(0).toLowerCase();

		const { data, error } = await supabase
			.from("spelling_entries")
			.select("*")
			.ilike("correct_word", `${firstLetter}%`)
			.eq("is_published", true)
			.neq("id", currentEntry.id)
			.limit(20);

		if (error || !data) return [];

		// If we don't have enough, maybe just return what we have or fetch randoms?
		// For now, just shuffle what we found.
		let results = data.sort(() => 0.5 - Math.random()).slice(0, count);

		// If fewer than count, fill with randoms (excluding current and already picked)
		if (results.length < count) {
			const { data: randomData } = await supabase
				.from("spelling_entries")
				.select("*")
				.eq("is_published", true)
				.neq("id", currentEntry.id)
				.limit(20);

			if (randomData) {
				const extra = randomData
					.filter((r) => !results.find((e) => e.id === r.id))
					.sort(() => 0.5 - Math.random())
					.slice(0, count - results.length);
				results = [...results, ...extra];
			}
		}

		return results;
	} catch (error) {
		console.error("Error fetching related misspellings:", error);
		return [];
	}
}

function getLearnedGrammar(count: number = 5): GrammarTopic[] {
	// Flatten all topics
	const allTopics = grammarCategories.flatMap((c) => c.topics);
	// Shuffle and pick
	return allTopics.sort(() => 0.5 - Math.random()).slice(0, count);
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const entry = await getSpellingEntry(slug);

	if (!entry) {
		return {
			title: "Spelling Entry Not Found",
			description: "The requested spelling entry could not be found.",
		};
	}

	return {
		title: `${entry.title} | Word Finder`,
		description: entry.description,
		keywords: entry.keywords || "",
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/spelling/${slug}`,
		},
	};
}

export default async function SpellingPage({ params }: PageProps) {
	const { slug } = await params;
	const entry = await getSpellingEntry(slug);

	if (!entry) {
		notFound();
	}

	const featuredMisspellings = await getFeaturedMisspellings();
	const relatedMisspellings = await getRelatedMisspellings(entry);
	const learnedGrammar = getLearnedGrammar();

	return (
		<div className='container mx-auto px-4 py-8 max-w-4xl'>
			<h1 className='text-3xl md:text-5xl font-extrabold text-center mb-6 text-gray-900'>
				{entry.title}
			</h1>

			<div className='bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500'>
				<p className='text-lg md:text-xl text-blue-900 leading-relaxed'>
					{entry.description}
				</p>
			</div>

			<div className='flex flex-col md:flex-row gap-4 mb-8'>
				<Card className='border-red-200 bg-red-50'>
					<CardContent className='p-6'>
						<div className='flex items-center mb-4'>
							<span className='text-3xl mr-3'>❌</span>
							<h2 className='text-2xl font-bold text-red-900'>
								{entry.incorrect_word}
							</h2>
						</div>
						<p className='text-lg md:text-xl text-red-800 mb-4'>
							<strong>Incorrect spelling</strong> -{" "}
							{entry.incorrect_definition}
						</p>
						<p className='text-lg md:text-xl text-red-700'>
							&quot;{entry.incorrect_word}&quot; is a common
							misspelling of &quot;{entry.correct_word}&quot;.
							Always use &quot;
							{entry.correct_word}&quot; when referring to the
							correct word.
						</p>
					</CardContent>
				</Card>

				<Card className='border-green-200 bg-green-50'>
					<CardContent className='p-6'>
						<div className='flex items-center mb-4'>
							<span className='text-3xl mr-3'>✅</span>
							<h2 className='text-2xl font-bold text-green-900'>
								{entry.correct_word}
							</h2>
						</div>
						<p className='text-lg md:text-xl text-green-800 mb-4'>
							<strong>Correct spelling</strong> - The proper way
							to spell this word.
						</p>
						<p className='text-lg md:text-xl text-green-700'>
							{entry.correct_definition}
						</p>
					</CardContent>
				</Card>
			</div>

			<div className='mb-8'>
				<h2 className='text-2xl font-bold mb-6 text-gray-900'>
					Definition of {entry.correct_word}
				</h2>
				<div className='bg-gray-50 p-6 rounded-lg'>
					<p className='text-lg md:text-xl text-gray-800 leading-relaxed mb-4'>
						<strong>&quot;{entry.correct_word}&quot;</strong>:{" "}
						{entry.correct_definition}
					</p>
					<p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
						This word is commonly used in everyday conversation and
						writing.
					</p>
				</div>
			</div>

			<div className='mb-8'>
				<h2 className='text-2xl font-bold mb-6 text-gray-900'>
					Synonyms for {entry.correct_word}
				</h2>
				<div className='bg-blue-50 p-6 rounded-lg'>
					<div className='grid md:grid-cols-2 gap-4'>
						<div>
							<ul className='text-lg md:text-xl text-blue-800 space-y-2'>
								{entry.synonyms_correct
									.slice(
										0,
										Math.ceil(
											entry.synonyms_correct.length / 2
										)
									)
									.map((synonym, index) => (
										<li key={index}>• {synonym}</li>
									))}
							</ul>
						</div>
						<div>
							<ul className='text-lg md:text-xl text-blue-800 space-y-2'>
								{entry.synonyms_correct
									.slice(
										Math.ceil(
											entry.synonyms_correct.length / 2
										)
									)
									.map((synonym, index) => (
										<li key={index}>• {synonym}</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='mb-8'>
				<h2 className='text-2xl font-bold mb-6 text-gray-900'>
					Usage Examples
				</h2>
				<div className='space-y-4'>
					{entry.correct_examples.map((example, index) => (
						<div
							key={index}
							className='bg-white p-6 rounded-lg border-l-4 border-blue-500'>
							<p className='text-lg md:text-xl text-gray-800'>
								<strong>&quot;Correct:&quot;</strong> {example}
							</p>
						</div>
					))}
					{entry.incorrect_examples.map((example, index) => (
						<div
							key={index}
							className='bg-white p-6 rounded-lg border-l-4 border-red-500'>
							<p className='text-lg md:text-xl text-gray-800'>
								<strong>&quot;Incorrect:&quot;</strong>{" "}
								{example}
							</p>
						</div>
					))}
				</div>
			</div>

			{entry.notes.length > 0 && (
				<div className='bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8'>
					<h3 className='text-xl font-semibold mb-4 text-yellow-900'>
						Notes:
					</h3>
					<ul className='text-lg md:text-xl text-yellow-800 space-y-3'>
						{entry.notes.map((note, index) => (
							<li key={index}>• {note}</li>
						))}
					</ul>
				</div>
			)}

			{entry.faqs.length > 0 && (
				<div className='mb-8'>
					<h2 className='text-2xl font-bold mb-6 text-gray-900'>
						Frequently Asked Questions
					</h2>
					<div className='space-y-6'>
						{entry.faqs.map((faq, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-lg border border-gray-200'>
								<h3 className='text-xl font-semibold mb-3 text-gray-900'>
									{faq.question}
								</h3>
								<p className='text-lg md:text-xl text-gray-700'>
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</div>
			)}

			<div className='bg-green-50 p-6 rounded-lg border-l-4 border-green-500'>
				<h2 className='text-2xl font-bold mb-4 text-green-900'>
					Summary
				</h2>
				<p className='text-lg md:text-xl text-green-800 leading-relaxed'>
					{entry.summary || (
						<>
							<strong>{entry.correct_word}</strong> is the correct
							spelling, while{" "}
							<strong>{entry.incorrect_word}</strong> is always
							incorrect. Use &quot;{entry.correct_word}&quot; when
							referring to the correct word.
						</>
					)}
				</p>
			</div>

			{/* Three Column Layout */}
			<div className='grid md:grid-cols-3 gap-6 mt-12'>
				{/* Featured Misspellings */}
				<div className='bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500'>
					<h3 className='text-xl font-bold mb-4 text-blue-900'>
						Featured Misspellings
					</h3>
					<ul className='space-y-2'>
						{featuredMisspellings.map((featured) => (
							<li key={featured.id}>
								<Link
									href={`/spelling/${featured.slug}`}
									className='text-blue-700 hover:text-blue-900 underline'>
									{featured.correct_word} vs{" "}
									{featured.incorrect_word}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Related Misspellings */}
				<div className='bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500'>
					<h3 className='text-xl font-bold mb-4 text-purple-900'>
						Related Misspellings
					</h3>
					<ul className='space-y-2'>
						{relatedMisspellings.map((related) => (
							<li key={related.id}>
								<Link
									href={`/spelling/${related.slug}`}
									className='text-purple-700 hover:text-purple-900 underline'>
									{related.correct_word} vs{" "}
									{related.incorrect_word}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Learned Grammar */}
				<div className='bg-green-50 p-6 rounded-lg border-l-4 border-green-500'>
					<h3 className='text-xl font-bold mb-4 text-green-900'>
						Learned Grammar
					</h3>
					<ul className='space-y-2'>
						{learnedGrammar.map((topic, index) => (
							<li key={index}>
								<Link
									href={topic.href}
									className='text-green-700 hover:text-green-900 underline'>
									{topic.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
