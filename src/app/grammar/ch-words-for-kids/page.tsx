"use client";
import React from "react";
import Link from "next/link";

export default function ChWordsForKidsPage() {
  const chWords = [
    "chair", "cheese", "chicken", "chase", "chop", "chew", "chalk", "cherry", "cheer", "chain", "chip", "chill", "chess", "chart", "chime", "chick", "chopstick", "chocolate", "chapter", "cheetah", "champion", "cheek", "charm", "cheesy", "chubby", "chuckle", "churn", "chopsticks", "chowder", "church"
  ];
  const examples = [
    "She sat on the <b>chair</b>.",
    "I like <b>cheese</b> on my pizza.",
    "The <b>chicken</b> crossed the road.",
    "The dog will <b>chase</b> the ball.",
    "He likes to <b>chew</b> gum.",
    "Draw with <b>chalk</b> on the sidewalk.",
    "We picked a <b>cherry</b> from the tree.",
    "The crowd began to <b>cheer</b>.",
    "She ate a <b>chip</b> with salsa.",
    "The <b>chick</b> is yellow and fluffy."
  ];
  const worksheet = [
    { q: "The ___ sat on the nest.", a: "chicken" },
    { q: "He likes to eat ___ with dip.", a: "chips" },
    { q: "She drew a picture with ___ on the board.", a: "chalk" },
    { q: "The ___ ran very fast.", a: "cheetah" },
    { q: "We went to ___ on Sunday.", a: "church" }
  ];
  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-pink-700">CH Words for Kids</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are CH words?</b> CH words are words that start with the letters &quot;ch&quot; and make the /ch/ sound, like in &quot;chair&quot; or &quot;cheese.&quot; Learning CH words helps kids read and spell better!
            </p>
            <p className="text-pink-700 font-semibold">Practice CH words to become a reading champion!</p>
          </header>

          {/* List of CH Words */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Common CH Words</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {chWords.map((w) => (
                <span key={w} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{w}</span>
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
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Tips for Learning CH Words</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Say the /ch/ sound out loud to practice.</li>
              <li>Look for CH words in books and signs.</li>
              <li>Try spelling CH words with letter tiles or cards.</li>
              <li>Make up silly sentences using as many CH words as you can!</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/phonics" className="text-pink-700 underline hover:text-pink-900">phonics</Link>, <Link href="/grammar/spelling" className="text-pink-700 underline hover:text-pink-900">spelling</Link>, and <Link href="/grammar/word-lists" className="text-pink-700 underline hover:text-pink-900">word lists</Link>.</li>
              <li>Try more <Link href="/grammar/reading-comprehension" className="text-pink-700 underline hover:text-pink-900">reading comprehension</Link> or <Link href="/grammar/figurative-language" className="text-pink-700 underline hover:text-pink-900">figurative language</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 