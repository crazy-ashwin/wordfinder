import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Privacy Policy | Find Word Finder",
	description: "Privacy policy for Find Word Finder",
	alternates: {
		canonical: "/privacy",
	},
};


export default function PrivacyPage() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-4xl font-bold text-center mb-8'>
						Privacy Policy
					</h1>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>Information We Collect</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed mb-4'>
								Find Word Finder collects information you
								provide directly to us, such as when you contact
								us through our contact form. This may include:
							</p>
							<ul className='list-disc pl-6 space-y-1'>
								<li>Name and email address</li>
								<li>
									Messages and communications you send to us
								</li>
								<li>Search queries and usage patterns</li>
							</ul>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>How We Use Your Information</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed mb-4'>
								We use the information we collect to:
							</p>
							<ul className='list-disc pl-6 space-y-1'>
								<li>
									Provide, maintain, and improve our services
								</li>
								<li>Respond to your comments and questions</li>
								<li>
									Analyze usage patterns to enhance user
									experience
								</li>
								<li>Communicate with you about our services</li>
							</ul>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>Information Sharing</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								We do not sell, trade, or otherwise transfer
								your personal information to third parties. This
								does not include trusted third parties who
								assist us in operating our website, conducting
								our business, or servicing you, so long as those
								parties agree to keep this information
								confidential.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>Cookies and Tracking</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								Find Word Finder may use cookies and similar
								tracking technologies to enhance your
								experience. Cookies are small files that a site
								or its service provider transfers to your
								computer&apos;s hard drive through your web
								browser that enables the site&apos;s systems to
								recognize your browser and capture certain
								information.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>Data Security</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								We implement appropriate security measures to
								protect your personal information against
								unauthorized access, alteration, disclosure, or
								destruction. However, no method of transmission
								over the Internet or electronic storage is 100%
								secure.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>Third-Party Links</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								Our website may contain links to third-party
								websites. We are not responsible for the privacy
								practices or content of these external sites. We
								encourage you to review the privacy policies of
								any third-party sites you visit.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>Children&apos;s Privacy</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								Find Word Finder does not knowingly collect
								personal information from children under 13. If
								we become aware that a child under 13 has
								provided us with personal information, we will
								delete such information from our files.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>Changes to This Policy</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								We may update this privacy policy from time to
								time. We will notify you of any changes by
								posting the new privacy policy on this page and
								updating the &quot;Last Updated&quot; date.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Contact Us</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								If you have any questions about this privacy
								policy, please contact us at
								privacy@FindWordFinder.com or through our contact
								form.
							</p>
							<p className='text-sm text-gray-600 mt-4'>
								Last Updated: June 2025
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
