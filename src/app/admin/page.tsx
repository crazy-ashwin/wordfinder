"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Eye, Plus, Edit, Calendar, Search } from "lucide-react";
import Link from "next/link";
import { SpellingEntry } from "@/lib/supabase";
import { spellingAPI } from "@/lib/api";

export default function AdminDashboard() {
	const [accessKey, setAccessKey] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [spellingEntries, setSpellingEntries] = useState<SpellingEntry[]>([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [displayCount, setDisplayCount] = useState(12);

	const [stats, setStats] = useState({
		totalEntries: 0,
		publishedEntries: 0,
		recentEntries: 0,
	});

	// Check for stored authentication on component mount
	useEffect(() => {
		const storedKey = localStorage.getItem("admin_key");
		if (storedKey) {
			setAccessKey(storedKey);
			setIsAuthenticated(true);
			fetchData();
		}
	}, []);

	const authenticate = async () => {
		if (!accessKey.trim()) return;

		setLoading(true);
		try {
			// Store the key in localStorage
			localStorage.setItem("admin_key", accessKey);
			setIsAuthenticated(true);
			fetchData();
		} catch (error) {
			console.error("Authentication error:", error);
			alert("Invalid access key");
		} finally {
			setLoading(false);
		}
	};

	const logout = () => {
		localStorage.removeItem("admin_key");
		setIsAuthenticated(false);
		setAccessKey("");
	};

	const fetchData = async () => {
		setLoading(true);
		try {
			const data = await spellingAPI.getEntries();
			setSpellingEntries(data || []);

			// Calculate stats
			const totalEntries = data.length;
			const publishedEntries = data.filter(
				(entry: SpellingEntry) => entry.is_published
			).length;

			const recentEntries = data.filter((entry: SpellingEntry) => {
				const createdDate = new Date(entry.created_at);
				const weekAgo = new Date();
				weekAgo.setDate(weekAgo.getDate() - 7);
				return createdDate > weekAgo;
			}).length;

			setStats({
				totalEntries,
				publishedEntries,
				recentEntries,
			});
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setLoading(false);
		}
	};

	const filteredEntries = spellingEntries.filter(
		(entry) =>
			entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			entry.correct_word
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			entry.incorrect_word
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
	);

	if (!isAuthenticated) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'>
				<Card className='w-full max-w-md'>
					<CardHeader>
						<CardTitle className='text-center'>
							Admin Dashboard Access
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
							{loading ? "Authenticating..." : "Access Dashboard"}
						</Button>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='flex justify-between items-center mb-8'>
					<div>
						<h1 className='text-4xl font-bold text-gray-900'>
							Admin Dashboard
						</h1>
						<p className='text-gray-600 mt-2'>
							Manage your spelling entries and view analytics
						</p>
					</div>
					<div className='flex gap-2'>
						<Link href='/admin/spelling'>
							<Button className='bg-green-600 hover:bg-green-700'>
								<Plus className='w-4 h-4 mr-2' />
								Create New Entry
							</Button>
						</Link>
						<Button onClick={logout} variant='outline'>
							Logout
						</Button>
					</div>
				</div>

				{/* Stats Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
					<Card>
						<CardContent className='p-6'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-sm font-medium text-gray-600'>
										Total Entries
									</p>
									<p className='text-3xl font-bold text-gray-900'>
										{stats.totalEntries}
									</p>
								</div>
								<FileText className='h-8 w-8 text-blue-600' />
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className='p-6'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-sm font-medium text-gray-600'>
										Published
									</p>
									<p className='text-3xl font-bold text-gray-900'>
										{stats.publishedEntries}
									</p>
								</div>
								<Eye className='h-8 w-8 text-green-600' />
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className='p-6'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-sm font-medium text-gray-600'>
										This Week
									</p>
									<p className='text-3xl font-bold text-gray-900'>
										{stats.recentEntries}
									</p>
								</div>
								<Calendar className='h-8 w-8 text-orange-600' />
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Quick Actions */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
					<Card className='hover:shadow-lg transition-shadow cursor-pointer'>
						<Link href='/admin/spelling'>
							<CardContent className='p-6'>
								<div className='flex items-center space-x-4'>
									<div className='bg-blue-100 p-3 rounded-lg'>
										<Plus className='h-6 w-6 text-blue-600' />
									</div>
									<div>
										<h3 className='font-semibold text-gray-900'>
											Create New Entry
										</h3>
										<p className='text-sm text-gray-600'>
											Add a new spelling comparison
										</p>
									</div>
								</div>
							</CardContent>
						</Link>
					</Card>

					<Card className='hover:shadow-lg transition-shadow cursor-pointer'>
						<Link href='/admin/spelling'>
							<CardContent className='p-6'>
								<div className='flex items-center space-x-4'>
									<div className='bg-green-100 p-3 rounded-lg'>
										<Edit className='h-6 w-6 text-green-600' />
									</div>
									<div>
										<h3 className='font-semibold text-gray-900'>
											Manage Entries
										</h3>
										<p className='text-sm text-gray-600'>
											Edit existing spelling entries
										</p>
									</div>
								</div>
							</CardContent>
						</Link>
					</Card>

					<Card className='hover:shadow-lg transition-shadow cursor-pointer'>
						<Link href='/spelling'>
							<CardContent className='p-6'>
								<div className='flex items-center space-x-4'>
									<div className='bg-purple-100 p-3 rounded-lg'>
										<Eye className='h-6 w-6 text-purple-600' />
									</div>
									<div>
										<h3 className='font-semibold text-gray-900'>
											View Public Site
										</h3>
										<p className='text-sm text-gray-600'>
											See how entries appear to users
										</p>
									</div>
								</div>
							</CardContent>
						</Link>
					</Card>
				</div>

				{/* Recent Entries */}
				<Card>
					<CardHeader>
						<div className='flex justify-between items-center'>
							<CardTitle>Total Entries</CardTitle>
							<div className='flex items-center space-x-2'>
								<Search className='h-4 w-4 text-gray-400' />
								<Input
									placeholder='Search entries...'
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									className='w-64'
								/>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<div className='space-y-4'>
							{filteredEntries
								.slice(0, displayCount)
								.map((entry) => (
									<div
										key={entry.id}
										className='flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50'>
										<div className='flex-1'>
											<div className='flex items-center space-x-3 mb-2'>
												<h3 className='font-semibold text-gray-900'>
													{entry.title}
												</h3>
												<Badge
													variant={
														entry.is_published
															? "default"
															: "secondary"
													}>
													{entry.is_published
														? "Published"
														: "Draft"}
												</Badge>
											</div>
											<div className='flex items-center space-x-4 text-sm text-gray-600'>
												<span>
													Correct:{" "}
													<strong>
														{entry.correct_word}
													</strong>
												</span>
												<span>
													Incorrect:{" "}
													<strong>
														{entry.incorrect_word}
													</strong>
												</span>
												<span>Views: 0</span>
												<span>
													Created:{" "}
													{new Date(
														entry.created_at
													).toLocaleDateString()}
												</span>
											</div>
										</div>
										<div className='flex items-center space-x-2'>
											<Link
												href={`/spelling/${entry.slug}`}
												target='_blank'>
												<Button
													variant='outline'
													size='sm'>
													<Eye className='h-4 w-4' />
												</Button>
											</Link>
											<Link href='/admin/spelling'>
												<Button
													variant='outline'
													size='sm'>
													<Edit className='h-4 w-4' />
												</Button>
											</Link>
										</div>
									</div>
								))}
						</div>

						{filteredEntries.length === 0 && (
							<div className='text-center py-8'>
								<p className='text-gray-500'>
									No entries found matching your search.
								</p>
							</div>
						)}

						{/* Load More / Show Less Buttons */}
						{filteredEntries.length > 12 && (
							<div className='text-center my-8'>
								<div className='flex flex-col sm:flex-row gap-4 justify-center'>
									{/* Load More Button */}
									{(filteredEntries.length > displayCount ||
										displayCount) && (
										<Button
											onClick={() =>
												setDisplayCount(
													displayCount + 12
												)
											}
											className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
											<span className='flex items-center justify-center gap-2'>
												📚 Load More (
												{Math.min(
													12,
													filteredEntries.length +
														-displayCount
												)}{" "}
												more)
											</span>
										</Button>
									)}

									{/* Show Less Button */}
									{displayCount > 12 && (
										<Button
											onClick={() => setDisplayCount(12)}
											className='bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
											<span className='flex items-center justify-center gap-2'>
												🔽 Show Less (Showing{" "}
												{displayCount} of{" "}
												{filteredEntries.length})
											</span>
										</Button>
									)}
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
