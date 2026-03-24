"use client";
import React from "react";
import Link from "next/link";

export default function AdjectivesStartWithTPage() {
  const adjectives = [
    "tiny", "tall", "tasty", "tricky", "tough", "timid", "tired", "thick", "thin", "thirsty", "thoughtful", "trusty", "tropical", "trendy", "terrific", "tame", "tangled", "tender", "tense", "thrifty", "thundering", "toothy", "transparent", "trivial", "troubled", "trustworthy", "twinkling", "typical", "turbulent", "twin"
  ];
  const examples = [
    "The <b>tiny</b> mouse ran away.",
    "She wore a <b>tall</b> hat.",
    "We ate a <b>tasty</b> meal.",
    "The <b>tricky</b> puzzle was hard to solve.",
    "He is a <b>tough</b> player.",
    "The <b>timid</b> kitten hid under the bed.",
    "She felt <b>tired</b> after the race.",
    "The <b>thick</b> book took weeks to read.",
    "He drank a <b>thirsty</b> gulp of water.",
    "The <b>thoughtful</b> gift made her smile."
  ];
  const worksheet = [
    { q: "The ___ puppy barked softly.", a: "timid" },
    { q: "She wore a ___ dress to the party.", a: "trendy" },
    { q: "We saw a ___ star in the sky.", a: "twinkling" },
    { q: "He is a ___ friend you can trust.", a: "trustworthy" },
    { q: "The ___ wind shook the trees.", a: "turbulent" }
  ];
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-blue-700">Adjectives That Start With T</h1>
            <p className="text-lg text-gray-700 mb-2">
              Learning adjectives that start with <b>T</b> can make your writing more terrific and thoughtful! Use these words to describe people, places, and things in creative ways.
            </p>
            <p className="text-blue-700 font-semibold">Great for vocabulary, writing, and word games!</p>
          </header>

          {/* List of Adjectives */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Adjectives That Start With T</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {adjectives.map((a) => (
                <span key={a} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{a}</span>
              ))}
            </div>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Worksheet: Fill in the Blank</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {worksheet.map((w, i) => (
                <li key={i}>{w.q}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-blue-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {worksheet.map((w, i) => (
                  <li key={i}><b>Q{i + 1}:</b> {w.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Tips for Using Adjectives</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Try using new adjectives to make your writing more interesting.</li>
              <li>Use more than one adjective for extra detail (e.g., &quot;the tiny, timid turtle&quot;).</li>
              <li>Adjectives answer questions like: What kind? How many? Which one?</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/adjective-examples" className="text-blue-700 underline hover:text-blue-900">adjective examples</Link>, <Link href="/grammar/adjectives-that-start-with-s" className="text-blue-700 underline hover:text-blue-900">adjectives that start with S</Link>, and <Link href="/grammar/parts-of-speech" className="text-blue-700 underline hover:text-blue-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/adjectives-that-start-with-r" className="text-blue-700 underline hover:text-blue-900">adjectives that start with R</Link> or <Link href="/grammar/adjectives-that-start-with-m" className="text-blue-700 underline hover:text-blue-900">M</Link>.</li>
              <li>Practice with <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link> and <Link href="/grammar/reading-comprehension" className="text-blue-700 underline hover:text-blue-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 