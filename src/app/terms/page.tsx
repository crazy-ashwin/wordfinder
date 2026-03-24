import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Terms of Service | Find Word Finder",
	description: "Terms of service for Find Word Finder",
	alternates: {
		canonical: "/terms",
	},
};


export default function TermsPage() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-4xl font-bold text-center mb-8'>
						Terms of Service
					</h1>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>1. Acceptance of Terms</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								By accessing and using Find Word Finder, you
								accept and agree to be bound by the terms and
								provision of this agreement. If you do not agree
								to abide by the above, please do not use this
								service.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>2. Use License</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed mb-4'>
								Permission is granted to temporarily download
								one copy of the materials on Find Word Finder
								for personal, non-commercial transitory viewing
								only. This is the grant of a license, not a
								transfer of title, and under this license you
								may not:
							</p>
							<ul className='list-disc pl-6 space-y-1'>
								<li>modify or copy the materials</li>
								<li>
									use the materials for any commercial purpose
									or for any public display
								</li>
								<li>
									attempt to reverse engineer any software
									contained on the website
								</li>
								<li>
									remove any copyright or other proprietary
									notations from the materials
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>3. Disclaimer</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								The materials on Find Word Finder are provided
								on an &apos;as is&apos; basis. Find Word Finder
								makes no warranties, expressed or implied, and
								hereby disclaims and negates all other
								warranties including without limitation, implied
								warranties or conditions of merchantability,
								fitness for a particular purpose, or
								non-infringement of intellectual property or
								other violation of rights.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>4. Limitations</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								In no event shall Find Word Finder or its
								suppliers be liable for any damages (including,
								without limitation, damages for loss of data or
								profit, or due to business interruption) arising
								out of the use or inability to use the materials
								on Find Word Finder, even if Find Word Finder or
								a Find Word Finder authorized representative has
								been notified orally or in writing of the
								possibility of such damage.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>5. Accuracy of Materials</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								The materials appearing on Find Word Finder
								could include technical, typographical, or
								photographic errors. Find Word Finder does not
								warrant that any of the materials on its website
								are accurate, complete, or current. Find Word
								Finder may make changes to the materials
								contained on its website at any time without
								notice.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>6. Links</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								Find Word Finder has not reviewed all of the
								sites linked to our website and is not
								responsible for the contents of any such linked
								site. The inclusion of any link does not imply
								endorsement by Find Word Finder of the site. Use
								of any such linked website is at the user&apos;s
								own risk.
							</p>
						</CardContent>
					</Card>

					<Card className='mb-6'>
						<CardHeader>
							<CardTitle>7. Modifications</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								Find Word Finder may revise these terms of
								service for its website at any time without
								notice. By using this website, you are agreeing
								to be bound by the then current version of these
								terms of service.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>8. Governing Law</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed'>
								These terms and conditions are governed by and
								construed in accordance with the laws and you
								irrevocably submit to the exclusive jurisdiction
								of the courts in that state or location.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
