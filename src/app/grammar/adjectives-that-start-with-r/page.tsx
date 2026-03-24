"use client";
import React from "react";
import Link from "next/link";

export default function AdjectivesStartWithRPage() {
  const adjectives = [
    "rapid", "radiant", "rare", "robust", "rustic", "rural", "rational", "reckless", "relaxed", "reliable", "remarkable", "remote", "rich", "rigid", "ripe", "risky", "romantic", "rough", "rowdy", "royal", "rugged", "rusty", "ruthless", "refreshing", "resourceful", "respectful", "restless", "rewarding", "rosy", "rancid"
  ];
  const examples = [
    "The <b>rapid</b> river flowed quickly.",
    "She wore a <b>radiant</b> smile.",
    "We saw a <b>rare</b> bird in the garden.",
    "He is a <b>robust</b> athlete.",
    "They live in a <b>rustic</b> cabin.",
    "The <b>rational</b> answer made sense.",
    "He is a <b>reliable</b> friend.",
    "The <b>remarkable</b> painting won a prize.",
    "She gave a <b>rosy</b> prediction.",
    "The <b>rugged</b> mountains were beautiful."
  ];
  const worksheet = [
    { q: "The ___ athlete won the race.", a: "robust" },
    { q: "She gave a ___ answer to the question.", a: "rational" },
    { q: "We enjoyed the ___ breeze.", a: "refreshing" },
    { q: "The ___ mountains were hard to climb.", a: "rugged" },
    { q: "He is a ___ friend you can trust.", a: "reliable" }
  ];
  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-pink-700">Adjectives That Start With R</h1>
            <p className="text-lg text-gray-700 mb-2">
              Learning adjectives that start with <b>R</b> can make your writing more radiant and remarkable! Use these words to describe people, places, and things in creative ways.
            </p>
            <p className="text-pink-700 font-semibold">Great for vocabulary, writing, and word games!</p>
          </header>

          {/* List of Adjectives */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Adjectives That Start With R</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {adjectives.map((a) => (
                <span key={a} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{a}</span>
              ))}
            </div>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Worksheet: Fill in the Blank</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {worksheet.map((w, i) => (
                <li key={i}>{w.q}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-pink-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {worksheet.map((w, i) => (
                  <li key={i}><b>Q{i + 1}:</b> {w.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Tips for Using Adjectives</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Try using new adjectives to make your writing more interesting.</li>
              <li>Use more than one adjective for extra detail (e.g., &quot;the rapid, rugged river&quot;).</li>
              <li>Adjectives answer questions like: What kind? How many? Which one?</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/adjective-examples" className="text-pink-700 underline hover:text-pink-900">adjective examples</Link>, <Link href="/grammar/adjectives-that-start-with-s" className="text-pink-700 underline hover:text-pink-900">adjectives that start with S</Link>, and <Link href="/grammar/parts-of-speech" className="text-pink-700 underline hover:text-pink-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/adjectives-that-start-with-t" className="text-pink-700 underline hover:text-pink-900">adjectives that start with T</Link> or <Link href="/grammar/adjectives-that-start-with-m" className="text-pink-700 underline hover:text-pink-900">M</Link>.</li>
              <li>Practice with <Link href="/grammar/figurative-language" className="text-pink-700 underline hover:text-pink-900">figurative language</Link> and <Link href="/grammar/reading-comprehension" className="text-pink-700 underline hover:text-pink-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 