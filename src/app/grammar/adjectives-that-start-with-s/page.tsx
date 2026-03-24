"use client";
import React from "react";
import Link from "next/link";

export default function AdjectivesStartWithSPage() {
  const adjectives = [
    "shiny", "silent", "strong", "sweet", "soft", "smart", "small", "spicy", "speedy", "stormy", "sticky", "silly", "serious", "simple", "sleepy", "slippery", "smooth", "sparkling", "special", "spooky", "sturdy", "successful", "sudden", "sunny", "surprising", "sympathetic", "sour", "sandy", "safe", "sacred"
  ];
  const examples = [
    "The <b>shiny</b> car sparkled in the sun.",
    "She gave a <b>silent</b> nod.",
    "He is a <b>strong</b> swimmer.",
    "We ate <b>sweet</b> strawberries.",
    "The <b>soft</b> pillow was comfortable.",
    "He is a <b>smart</b> student.",
    "The <b>stormy</b> night was scary.",
    "She wore a <b>simple</b> dress.",
    "The <b>sleepy</b> puppy yawned.",
    "The <b>spicy</b> food made me thirsty."
  ];
  const worksheet = [
    { q: "The ___ kitten purred softly.", a: "sleepy" },
    { q: "He is a ___ friend.", a: "special" },
    { q: "We saw a ___ rainbow after the rain.", a: "shiny" },
    { q: "The ___ road was hard to walk on.", a: "slippery" },
    { q: "She wore a ___ dress to the party.", a: "simple" }
  ];
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-yellow-700">Adjectives That Start With S</h1>
            <p className="text-lg text-gray-700 mb-2">
              Learning adjectives that start with <b>S</b> can make your writing more sparkling and special! Use these words to describe people, places, and things in creative ways.
            </p>
            <p className="text-yellow-700 font-semibold">Great for vocabulary, writing, and word games!</p>
          </header>

          {/* List of Adjectives */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Adjectives That Start With S</h2>
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
              <li>Try using new adjectives to make your writing more interesting.</li>
              <li>Use more than one adjective for extra detail (e.g., &quot;the shiny, slippery slide&quot;).</li>
              <li>Adjectives answer questions like: What kind? How many? Which one?</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/adjective-examples" className="text-yellow-700 underline hover:text-yellow-900">adjective examples</Link>, <Link href="/grammar/adjectives-that-start-with-r" className="text-yellow-700 underline hover:text-yellow-900">adjectives that start with R</Link>, and <Link href="/grammar/parts-of-speech" className="text-yellow-700 underline hover:text-yellow-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/adjectives-that-start-with-t" className="text-yellow-700 underline hover:text-yellow-900">adjectives that start with T</Link> or <Link href="/grammar/adjectives-that-start-with-m" className="text-yellow-700 underline hover:text-yellow-900">M</Link>.</li>
              <li>Practice with <Link href="/grammar/figurative-language" className="text-yellow-700 underline hover:text-yellow-900">figurative language</Link> and <Link href="/grammar/reading-comprehension" className="text-yellow-700 underline hover:text-yellow-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 