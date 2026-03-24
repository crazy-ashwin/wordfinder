import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { baseUrl } from "@/lib/constant";
import { grammarCategories } from "@/lib/grammar-data";

async function getGrammarTopic(pathname: string) {
	// Remove leading/trailing slashes and normalize
	const normalizedPath = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();

	// Find the topic that matches this path
	for (const category of grammarCategories) {
		const topic = category.topics.find((t) => {
			const topicPath = t.href.replace(/^\/+|\/+$/g, "").toLowerCase();
			return topicPath === normalizedPath;
		});
		if (topic) {
			return { topic, category };
		}
	}

	return null;
}

export async function generateMetadata(): Promise<Metadata> {
	const headersList = await headers();
	const pathname = headersList.get("x-pathname") || "/grammar";

	// If we're on the main grammar page
	if (pathname === "/grammar" || pathname === "/grammar/") {
		return {
			title: "Grammar Guides | Word Finder",
			description:
				"Comprehensive grammar resources: parts of speech, punctuation, tenses, and more.",
			openGraph: {
				title: "Grammar Guides | Word Finder",
				description:
					"Comprehensive grammar resources: parts of speech, punctuation, tenses, and more.",
				url: `${baseUrl}/grammar`,
				type: "website",
			},
			robots: "index, follow",
		};
	}

	// Try to find the matching topic
	const topicData = await getGrammarTopic(pathname);

	if (topicData) {
		const { topic, category } = topicData;
		const fullUrl = `${baseUrl}${topic.href.replace(/^\//, "")}`;

		return {
			title: `${topic.name} | Word Finder`,
			description:
				topic.description ||
				`Learn about ${topic.name.toLowerCase()} in English grammar. ${
					category.description
				}`,
			keywords: `${
				topic.name
			}, grammar, ${category.title.toLowerCase()}, English grammar, ${topic.name.toLowerCase()} examples`,
			openGraph: {
				title: `${topic.name} | Word Finder`,
				description:
					topic.description ||
					`Learn about ${topic.name.toLowerCase()} in English grammar.`,
				url: fullUrl,
				type: "article",
			},
			alternates: {
				canonical: fullUrl,
			},
			robots: "index, follow",
		};
	}

	// Fallback metadata if topic not found
	return {
		title: "Grammar Guides | Word Finder",
		description:
			"Comprehensive grammar resources: parts of speech, punctuation, tenses, and more.",
		openGraph: {
			title: "Grammar Guides | Word Finder",
			description:
				"Comprehensive grammar resources: parts of speech, punctuation, tenses, and more.",
			url: `${baseUrl}/grammar`,
			type: "website",
		},
		robots: "index, follow",
	};
}

export default function GrammarLayout({ children }: { children: ReactNode }) {
	return children;
}
