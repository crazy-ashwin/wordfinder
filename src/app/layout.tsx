import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { baseUrl } from "@/lib/constant";
import { GlobalAdInserter } from "@/components/ads";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL(`${baseUrl}`),
	title: "Find Word Finder - Free Find Word Finder & Scrabble Helper Tools | Find Words for Word Games",
	description:
		"Find words for Scrabble, Words with Friends, crosswords and other word games. Free Find Word Finder, anagram solver, word unscrambler and rhyme finder tools. Boost your word game scores!",
	keywords:
		"Find Word Finder, scrabble helper, words with friends cheat, anagram solver, word unscrambler, crossword solver, rhyme finder, word games, scrabble words, word tools",
	authors: [{ name: "Find Word Finder Team" }],
	creator: "Find Word Finder",
	publisher: "Find Word Finder",
	robots: "index, follow",
	alternates: {
		canonical: `${baseUrl}`,
	},
	openGraph: {
		title: "Find Word Finder - Free Find Word Finder & Scrabble Helper Tools",
		description:
			"Find words for Scrabble, Words with Friends, crosswords and other word games. Free Find Word Finder, anagram solver, word unscrambler and rhyme finder tools.",
		url: `${baseUrl}`,
		siteName: "Find Word Finder",
		images: [
			{
				url: `${baseUrl}/banner.png`,
				width: 1200,
				height: 630,
				alt: "Find Word Finder",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				{/* Google Search Console Verification */}
				<meta name="google-site-verification" content="QHQKepL2KLiQJB3IL4g9MfTEkzyle6i1Gd4BQjfpJ28" />

				{/* Google AdSense */}
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2320541206058096'
					crossOrigin='anonymous'></script>

				{/* Google Analytics */}
				<Script
					src='https://www.googletagmanager.com/gtag/js?id=G-WD0SR0VT9B'
					strategy='afterInteractive'
				/>
				<Script id='google-analytics' strategy='afterInteractive'>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WD0SR0VT9B');
          `}
				</Script>
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/favicon.ico' />
				<meta name='theme-color' content='#10b981' />
				<link rel='manifest' href='/manifest.json' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Find Word Finder",
							url: `${baseUrl}`,
							potentialAction: {
								"@type": "SearchAction",
								target: `${baseUrl}/search?q={search_term_string}`,
								"query-input":
									"required name=search_term_string",
							},
						}),
					}}
					suppressHydrationWarning
				/>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<GlobalAdInserter />
				<Header />
				<main className='min-h-screen'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
