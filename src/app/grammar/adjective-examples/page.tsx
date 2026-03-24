"use client";
import React from "react";
import Link from "next/link";

export default function AdjectiveExamplesPage() {
  const adjectives = [
    "happy", "big", "blue", "fast", "funny", "loud", "soft", "tall", "short", "bright"
  ];
  const examples = [
    "The <b>happy</b> dog wagged its tail.",
    "She wore a <b>blue</b> dress.",
    "The <b>big</b> elephant walked slowly.",
    "He is a <b>funny</b> friend.",
    "The <b>loud</b> music played all night.",
    "We saw a <b>bright</b> star.",
    "The <b>soft</b> pillow is on the bed.",
    "The <b>tall</b> tree touched the sky.",
    "The <b>short</b> story was interesting.",
    "She has a <b>fast</b> bike."
  ];
  const worksheet = [
    { q: "The ___ cat slept on the mat.", a: "soft" },
    { q: "He is a ___ runner.", a: "fast" },
    { q: "We saw a ___ star.", a: "bright" },
    { q: "She wore a ___ dress.", a: "blue" },
    { q: "The ___ elephant walked slowly.", a: "big" }
  ];
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-yellow-700">Adjective Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are adjectives?</b> Adjectives are words that describe nouns or pronouns. They tell us more about people, places, or things!
            </p>
            <p className="text-yellow-700 font-semibold">Adjectives make your writing more colorful and interesting.</p>
          </header>

          {/* List of Adjectives */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Common Adjectives</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {adjectives.map((a) => (
                <span key={a} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{a}</span>
              ))}
            </div>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Worksheet: Fill in the Blank</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {worksheet.map((w, i) => (
                <li key={i}>{w.q}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-yellow-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {worksheet.map((w, i) => (
                  <li key={i}><b>Q{i + 1}:</b> {w.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Tips for Using Adjectives</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Adjectives describe nouns or pronouns.</li>
              <li>They answer questions like: What kind? How many? Which one?</li>
              <li>Try using more than one adjective to add detail (e.g., &quot;the big, blue ball&quot;).</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/noun-examples" className="text-yellow-700 underline hover:text-yellow-900">nouns</Link>, <Link href="/grammar/verb-examples" className="text-yellow-700 underline hover:text-yellow-900">verbs</Link>, and <Link href="/grammar/adverb-examples" className="text-yellow-700 underline hover:text-yellow-900">adverbs</Link>.</li>
              <li>Try more <Link href="/grammar/adjective-examples" className="text-yellow-700 underline hover:text-yellow-900">adjective worksheets</Link>.</li>
              <li>Practice with <Link href="/grammar/parts-of-speech" className="text-yellow-700 underline hover:text-yellow-900">parts of speech</Link> and <Link href="/grammar/figurative-language" className="text-yellow-700 underline hover:text-yellow-900">figurative language</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 