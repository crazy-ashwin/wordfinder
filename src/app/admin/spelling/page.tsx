"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpellingEntry } from "@/lib/supabase";
import { Edit, Trash2, Save, ArrowLeft } from "lucide-react";
import { spellingAPI } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AdminSpellingPage() {
	const [accessKey, setAccessKey] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [spellingEntries, setSpellingEntries] = useState<SpellingEntry[]>([]);
	const [loading, setLoading] = useState(false);
	const [editingEntry, setEditingEntry] = useState<SpellingEntry | null>(
		null
	);
	// const [isCreating, setIsCreating] = useState(false);

	// Form state
	const [formData, setFormData] = useState({
		slug: "",
		title: "",
		description: "",
		keywords: "",
		correct_word: "",
		incorrect_word: "",
		correct_definition: "",
		incorrect_definition: "",
		correct_examples: "",
		incorrect_examples: "",
		synonyms_correct: "",
		notes: "",
		faqs: "",
		summary: "",
		is_published: true,
	});

	const router = useRouter();

	// Check for stored authentication on component mount
	useEffect(() => {
		const storedKey = localStorage.getItem("admin_key");
		if (storedKey) {
			setAccessKey(storedKey);
			setIsAuthenticated(true);
			fetchSpellingEntries();
		}
	}, []);

	const authenticate = async () => {
		if (!accessKey.trim()) return;

		setLoading(true);
		try {
			// Store the key in localStorage
			localStorage.setItem("admin_key", accessKey);
			setIsAuthenticated(true);
			fetchSpellingEntries();
		} catch (error) {
			console.error("Authentication error:", error);
			alert("Invalid access key");
		} finally {
			setLoading(false);
		}
	};

	const fetchSpellingEntries = async () => {
		setLoading(true);
		try {
			const data = await spellingAPI.getEntries();
			setSpellingEntries(data || []);
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleSave = async () => {
		if (
			!formData.slug ||
			!formData.title ||
			!formData.correct_word ||
			!formData.incorrect_word ||
			!formData.keywords
		) {
			alert("Please fill in all required fields");
			return;
		}

		setLoading(true);
		try {
			const entryData = {
				...formData,
				correct_examples: formData.correct_examples
					.split("\n")
					.filter((line) => line.trim()),
				incorrect_examples: formData.incorrect_examples
					.split("\n")
					.filter((line) => line.trim()),
				synonyms_correct: formData.synonyms_correct
					.split(",")
					.map((s) => s.trim())
					.filter((s) => s),
				notes: formData.notes.split("\n").filter((line) => line.trim()),
				faqs: formData.faqs
					.split("\n\n")
					.map((qa) => {
						const [question, answer] = qa.split("\n");
						return {
							question: question?.trim() || "",
							answer: answer?.trim() || "",
						};
					})
					.filter((qa) => qa.question && qa.answer),
			};

			const res = await spellingAPI.createEntry(entryData);

			if (editingEntry) {
				await spellingAPI.updateEntry(editingEntry.id, entryData);
			}

			if (res.status === 201) {
				alert(res.message);
				setEditingEntry(null);
				// setIsCreating(false);
				resetForm();
				fetchSpellingEntries();
			} else if (res.status === 400) {
				alert(res.message);
			} else {
				alert("Error saving entry");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("Error saving entry");
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id: string) => {
		if (!confirm("Are you sure you want to delete this entry?")) return;

		setLoading(true);
		try {
			await spellingAPI.deleteEntry(id);
			fetchSpellingEntries();
		} catch (error) {
			console.error("Error:", error);
			alert("Error deleting entry");
		} finally {
			setLoading(false);
		}
	};

	const resetForm = () => {
		setFormData({
			slug: "",
			title: "",
			description: "",
			keywords: "",
			correct_word: "",
			incorrect_word: "",
			correct_definition: "",
			incorrect_definition: "",
			correct_examples: "",
			incorrect_examples: "",
			synonyms_correct: "",
			notes: "",
			faqs: "",
			summary: "",
			is_published: true,
		});
	};

	const startEdit = (entry: SpellingEntry) => {
		setEditingEntry(entry);
		// setIsCreating(false);
		setFormData({
			slug: entry.slug,
			title: entry.title,
			description: entry.description,
			keywords: entry.keywords || "",
			correct_word: entry.correct_word,
			incorrect_word: entry.incorrect_word,
			correct_definition: entry.correct_definition,
			incorrect_definition: entry.incorrect_definition,
			correct_examples: entry.correct_examples.join("\n"),
			incorrect_examples: entry.incorrect_examples.join("\n"),
			synonyms_correct: entry.synonyms_correct.join(", "),
			notes: entry.notes.join("\n"),
			faqs: entry.faqs
				.map((qa) => `${qa.question}\n${qa.answer}`)
				.join("\n\n"),
			summary: entry.summary || "",
			is_published: entry.is_published,
		});
	};

	const cancelEdit = () => {
		setEditingEntry(null);
		// setIsCreating(false);
		resetForm();
	};

	if (!isAuthenticated) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'>
				<Card className='w-full max-w-md'>
					<CardHeader>
						<CardTitle className='text-center'>
							Admin Access
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<Input
							placeholder='Enter access key'
							value={accessKey}
							onChange={(e) => setAccessKey(e.target.value)}
							type='password'
						/>
						<Button
							onClick={authenticate}
							disabled={loading || !accessKey.trim()}
							className='w-full'>
							{loading
								? "Authenticating..."
								: "Access Admin Panel"}
						</Button>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Spelling Entries Admin
					</h1>
					<Button onClick={() => router.push("/admin")}>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Dashboard
					</Button>
				</div>

				<Card className='mb-8'>
					<CardHeader>
						<CardTitle className='flex justify-between items-center'>
							{editingEntry ? "Edit Entry" : "Create New Entry"}
							<Button
								onClick={handleSave}
								disabled={loading}
								className='bg-blue-600 hover:bg-blue-700'>
								<Save className='w-4 h-4 mr-2' />
								{loading ? "Saving..." : "Save Entry"}
							</Button>
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Slug *
								</label>
								<Input
									value={formData.slug}
									onChange={(e) =>
										setFormData({
											...formData,
											slug: e.target.value,
										})
									}
									placeholder='correct-vs-incorrect'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Title *
								</label>
								<Input
									value={formData.title}
									onChange={(e) =>
										setFormData({
											...formData,
											title: e.target.value,
										})
									}
									placeholder='Correct vs Incorrect'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium mb-1'>
								Description
							</label>
							<Textarea
								value={formData.description}
								onChange={(e) =>
									setFormData({
										...formData,
										description: e.target.value,
									})
								}
								placeholder='Brief description of the spelling difference'
								rows={3}
							/>
						</div>

						<div>
							<label className='block text-sm font-medium mb-1'>
								Keywords *
							</label>
							<Input
								value={formData.keywords}
								onChange={(e) =>
									setFormData({
										...formData,
										keywords: e.target.value,
									})
								}
								placeholder='spelling, grammar, english, writing tips'
							/>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Correct Word *
								</label>
								<Input
									value={formData.correct_word}
									onChange={(e) =>
										setFormData({
											...formData,
											correct_word: e.target.value,
										})
									}
									placeholder='correct'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Incorrect Word *
								</label>
								<Input
									value={formData.incorrect_word}
									onChange={(e) =>
										setFormData({
											...formData,
											incorrect_word: e.target.value,
										})
									}
									placeholder='incorrect'
								/>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Correct Definition
								</label>
								<Textarea
									value={formData.correct_definition}
									onChange={(e) =>
										setFormData({
											...formData,
											correct_definition: e.target.value,
										})
									}
									placeholder='Definition of correct word'
									rows={3}
								/>
							</div>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Incorrect Definition
								</label>
								<Textarea
									value={formData.incorrect_definition}
									onChange={(e) =>
										setFormData({
											...formData,
											incorrect_definition:
												e.target.value,
										})
									}
									placeholder='Definition of incorrect word'
									rows={3}
								/>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Correct Examples (one per line)
								</label>
								<Textarea
									value={formData.correct_examples}
									onChange={(e) =>
										setFormData({
											...formData,
											correct_examples: e.target.value,
										})
									}
									placeholder='Example sentence 1&#10;Example sentence 2'
									rows={4}
								/>
							</div>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Incorrect Examples (one per line)
								</label>
								<Textarea
									value={formData.incorrect_examples}
									onChange={(e) =>
										setFormData({
											...formData,
											incorrect_examples: e.target.value,
										})
									}
									placeholder='Example sentence 1&#10;Example sentence 2'
									rows={4}
								/>
							</div>
						</div>

						<div className='grid gap-4'>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Correct Synonyms (comma separated)
								</label>
								<Input
									value={formData.synonyms_correct}
									onChange={(e) =>
										setFormData({
											...formData,
											synonyms_correct: e.target.value,
										})
									}
									placeholder='synonym1, synonym2, synonym3'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium mb-1'>
								Notes (one per line)
							</label>
							<Textarea
								value={formData.notes}
								onChange={(e) =>
									setFormData({
										...formData,
										notes: e.target.value,
									})
								}
								placeholder='Important note 1&#10;Important note 2'
								rows={3}
							/>
						</div>

						<div>
							<label className='block text-sm font-medium mb-1'>
								FAQs (Question and Answer pairs, separated by
								blank lines)
							</label>
							<Textarea
								value={formData.faqs}
								onChange={(e) =>
									setFormData({
										...formData,
										faqs: e.target.value,
									})
								}
								placeholder='Question 1?&#10;Answer 1&#10;&#10;Question 2?&#10;Answer 2'
								rows={6}
							/>
						</div>

						<div>
							<label className='block text-sm font-medium mb-1'>
								Summary
							</label>
							<Textarea
								value={formData.summary}
								onChange={(e) =>
									setFormData({
										...formData,
										summary: e.target.value,
									})
								}
								placeholder='Brief summary of the spelling difference'
								rows={3}
							/>
						</div>

						<div className='flex items-center space-x-2'>
							<input
								type='checkbox'
								id='is_published'
								checked={formData.is_published}
								onChange={(e) =>
									setFormData({
										...formData,
										is_published: e.target.checked,
									})
								}
								className='rounded'
							/>
							<label
								htmlFor='is_published'
								className='text-sm font-medium'>
								Published (visible to users)
							</label>
						</div>

						<div className='flex gap-2'>
							<Button
								onClick={handleSave}
								disabled={loading}
								className='bg-blue-600 hover:bg-blue-700'>
								<Save className='w-4 h-4 mr-2' />
								{loading ? "Saving..." : "Save Entry"}
							</Button>
							<Button onClick={cancelEdit} variant='outline'>
								Cancel
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* Entries List */}
				<div className='grid gap-4'>
					{spellingEntries.slice(0, 3).map((entry) => (
						<Card key={entry.id}>
							<CardContent className='p-6'>
								<div className='flex justify-between items-start mb-4'>
									<div>
										<h3 className='text-xl font-semibold mb-2'>
											{entry.title}
										</h3>
										<div className='flex gap-2 mb-2'>
											<Badge variant='secondary'>
												{entry.correct_word}
											</Badge>
											<span className='text-gray-500'>
												vs
											</span>
											<Badge variant='destructive'>
												{entry.incorrect_word}
											</Badge>
										</div>
										<p className='text-gray-600 text-sm'>
											Slug: {entry.slug}
										</p>
									</div>
									<div className='flex gap-2'>
										<Button
											onClick={() => startEdit(entry)}
											variant='outline'
											size='sm'>
											<Edit className='w-4 h-4' />
										</Button>
										<Button
											onClick={() =>
												handleDelete(entry.id)
											}
											variant='outline'
											size='sm'
											className='text-red-600 hover:text-red-700'>
											<Trash2 className='w-4 h-4' />
										</Button>
									</div>
								</div>
								<p className='text-gray-700 mb-2'>
									{entry.description}
								</p>
								<div className='text-sm text-gray-500'>
									Created:{" "}
									{new Date(
										entry.created_at
									).toLocaleDateString()}
									{entry.updated_at !== entry.created_at && (
										<span>
											{" "}
											• Updated:{" "}
											{new Date(
												entry.updated_at
											).toLocaleDateString()}
										</span>
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{spellingEntries.length === 0 && !loading && (
					<Card>
						<CardContent className='p-8 text-center'>
							<p className='text-gray-500'>
								No spelling entries found. Create your first
								entry!
							</p>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
}
