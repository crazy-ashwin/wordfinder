import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Globe, Smartphone, Database, Users } from "lucide-react";

export function FeaturesSection() {
	const features = [
		{
			title: "Lightning Fast",
			description:
				"Get instant results with our optimized search algorithms",
			icon: Zap,
			color: "text-yellow-600",
			bgColor: "bg-yellow-100",
		},
		{
			title: "Multiple Dictionaries",
			description:
				"Access Scrabble, Words with Friends, and international dictionaries",
			icon: Database,
			color: "text-blue-600",
			bgColor: "bg-blue-100",
		},
		{
			title: "Mobile Friendly",
			description:
				"Perfect experience on all devices - phone, tablet, or desktop",
			icon: Smartphone,
			color: "text-green-600",
			bgColor: "bg-green-100",
		},
		{
			title: "Global Support",
			description:
				"Supporting multiple languages and regional word variations",
			icon: Globe,
			color: "text-purple-600",
			bgColor: "bg-purple-100",
		},
		{
			title: "Privacy First",
			description:
				"No registration required, your searches remain private",
			icon: Shield,
			color: "text-red-600",
			bgColor: "bg-red-100",
		},
		{
			title: "Community Driven",
			description:
				"Built by word game enthusiasts for word game enthusiasts",
			icon: Users,
			color: "text-indigo-600",
			bgColor: "bg-indigo-100",
		},
	];

	return (
		<section className='bg-gray-50 py-16'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold mb-4'>
						Why Choose Find Word Finder?
					</h2>
					<p className='text-xl text-gray-600'>
						The most comprehensive word game toolkit available
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => {
						const IconComponent = feature.icon;
						return (
							<Card
								key={index}
								className='hover:shadow-lg transition-shadow'>
								<CardHeader>
									<div className='flex items-center gap-3'>
										<div
											className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
											<IconComponent
												className={`h-6 w-6 ${feature.color}`}
											/>
										</div>
										<CardTitle className='text-lg'>
											{feature.title}
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<p className='text-gray-600'>
										{feature.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>

				{/* Additional Feature Highlights */}
				<div className='mt-12 bg-white rounded-lg p-8 shadow-lg'>
					<h3 className='text-2xl font-bold text-center mb-8'>
						Advanced Features
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div>
							<h4 className='font-semibold mb-3'>
								Smart Filtering
							</h4>
							<ul className='space-y-2 text-sm text-gray-600'>
								<li>
									• Filter by word length, starting/ending
									letters
								</li>
								<li>• Pattern matching with wildcards</li>
								<li>• Advanced search combinations</li>
								<li>• Real-time result updates</li>
							</ul>
						</div>
						<div>
							<h4 className='font-semibold mb-3'>
								Game Integration
							</h4>
							<ul className='space-y-2 text-sm text-gray-600'>
								<li>• Scrabble and WWF scoring systems</li>
								<li>• Board position optimization</li>
								<li>• Bonus square calculations</li>
								<li>• Strategy recommendations</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
