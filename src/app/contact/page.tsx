"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Twitter, Linkedin, Facebook } from "lucide-react";


export default function ContactPage() {
	return (
		<div className='min-h-screen bg-gray-50 py-16'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-12'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
							Get in Touch
						</h1>
						<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
							We&apos;re here to help and answer any questions you
							might have. We look forward to hearing from you!
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<Card className='hover:shadow-lg transition-shadow'>
							<CardHeader>
								<CardTitle className='flex items-center gap-3'>
									<Mail className='h-6 w-6 text-green-500' />
									<span className='text-xl'>
										Email Support
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 mb-2'>
									For general inquiries, support, or feedback,
									please email us.
								</p>
								<a
									href='mailto:support@findwordfinder.com'
									className='text-green-600 font-semibold hover:underline'>
									contact@findwordfinder.com
								</a>
								<p className='text-sm text-gray-500 mt-2'>
									We typically respond within 1-2 business
									days.
								</p>
							</CardContent>
						</Card>

						<Card className='hover:shadow-lg transition-shadow'>
							<CardHeader>
								<CardTitle className='flex items-center gap-3'>
									<Phone className='h-6 w-6 text-green-500' />
									<span className='text-xl'>
										Phone Support
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 mb-2'>
									For urgent matters, you can call us
									directly.
								</p>
								<a
									href='tel:+91-7003168945'
									className='text-green-600 font-semibold hover:underline'>
									+91-7003-168-945
								</a>
								<p className='text-sm text-gray-500 mt-2'>
									Available Mon-Fri, 9am-5pm EST.
								</p>
							</CardContent>
						</Card>
					</div>

					<Card className='text-center'>
						<CardHeader>
							<CardTitle className='text-2xl'>
								Connect with Us on Social Media
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 mb-6'>
								Follow us on our social channels for the latest
								updates, tips, and word game fun!
							</p>
							<div className='flex justify-center gap-6'>
								<Button
									variant='outline'
									size='icon'
									className='rounded-full h-12 w-12'>
									<Twitter className='h-6 w-6' />
								</Button>
								<Button
									variant='outline'
									size='icon'
									className='rounded-full h-12 w-12'>
									<Facebook className='h-6 w-6' />
								</Button>
								<Button
									variant='outline'
									size='icon'
									className='rounded-full h-12 w-12'>
									<Linkedin className='h-6 w-6' />
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
