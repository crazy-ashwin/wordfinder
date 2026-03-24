"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getRhymingWords, getSimilarSoundingWords } from "@/lib/api";
import { Search, Volume2 } from "lucide-react";

export default function RhymeFinderPage() {
	const [word, setWord] = useState("");
	const [rhymes, setRhymes] = useState<string[]>([]);
	const [similarSounds, setSimilarSounds] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	const handleSearch = async () => {
		if (!word.trim()) return;

		setLoading(true);
		try {
			const [rhymingWords, similarWords] = await Promise.all([
				getRhymingWords(word.trim()),
				getSimilarSoundingWords(word.trim()),
			]);

			setRhymes(rhymingWords);
			setSimilarSounds(similarWords);
		} catch (error) {
			console.error("Search failed:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-4xl font-bold text-center mb-8'>
						Rhyme Finder
					</h1>
					<p className='text-xl text-center text-gray-600 mb-12'>
						Find perfect rhymes and similar sounding words for
						poetry and songwriting
					</p>

					{/* Search Form */}
					<Card className='mb-8'>
						<CardContent className='p-6'>
							<div className='flex gap-4'>
								<div className='flex-1'>
									<Input
										type='text'
										placeholder='Enter a word to find rhymes...'
										value={word}
										onChange={(e) =>
											setWord(e.target.value)
										}
										onKeyPress={(e) =>
											e.key === "Enter" && handleSearch()
										}
										className='h-12 text-lg'
									/>
								</div>
								<Button
									onClick={handleSearch}
									disabled={loading || !word.trim()}
									className='h-12 px-8 bg-green-500 hover:bg-green-600'>
									{loading ? (
										<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
									) : (
										<>
											<Search className='h-5 w-5 mr-2' />
											Find Rhymes
										</>
									)}
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Results */}
					{(rhymes.length > 0 || similarSounds.length > 0) && (
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
							{/* Perfect Rhymes */}
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Volume2 className='h-5 w-5 text-blue-600' />
										Perfect Rhymes ({rhymes.length})
									</CardTitle>
								</CardHeader>
								<CardContent>
									{rhymes.length > 0 ? (
										<div className='flex flex-wrap gap-2'>
											{rhymes.map((rhyme, index) => (
												<Badge
													key={index}
													variant='secondary'
													className='text-sm py-1 px-3'>
													{rhyme}
												</Badge>
											))}
										</div>
									) : (
										<p className='text-gray-500 italic'>
											No perfect rhymes found
										</p>
									)}
								</CardContent>
							</Card>

							{/* Similar Sounds */}
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Volume2 className='h-5 w-5 text-green-600' />
										Similar Sounds ({similarSounds.length})
									</CardTitle>
								</CardHeader>
								<CardContent>
									{similarSounds.length > 0 ? (
										<div className='flex flex-wrap gap-2'>
											{similarSounds.map(
												(sound, index) => (
													<Badge
														key={index}
														variant='outline'
														className='text-sm py-1 px-3'>
														{sound}
													</Badge>
												)
											)}
										</div>
									) : (
										<p className='text-gray-500 italic'>
											No similar sounds found
										</p>
									)}
								</CardContent>
							</Card>
						</div>
					)}

					{/* Tips */}
					<Card className='mt-8'>
						<CardHeader>
							<CardTitle>Rhyming Tips</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h3 className='font-semibold mb-2'>
										Perfect Rhymes
									</h3>
									<p className='text-sm text-gray-600'>
										Words that end with the same sound, like
										&quot;cat&quot; and &quot;hat&quot;.
										Perfect for traditional poetry and
										songs.
									</p>
								</div>
								<div>
									<h3 className='font-semibold mb-2'>
										Near Rhymes
									</h3>
									<p className='text-sm text-gray-600'>
										Words with similar but not identical
										sounds. Great for modern poetry and
										creative writing.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}