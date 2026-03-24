"use client";
import React from "react";
import Link from "next/link";

export default function BracketsParenthesesPage() {
  const examples = [
    "She went to the store <b>(after school)</b>.",
    "The answer is <b>[42]</b>.",
    "He said, <b>\"I will go (if I can).\"</b>",
    "The dog (a golden retriever) barked.",
    "Add the numbers [in brackets] first.",
    "My favorite color (blue) is also hers.",
    "The teacher said, <b>\"Read the instructions (carefully).\"</b>",
    "The book [which was new] was on the table.",
    "She whispered (very quietly) to her friend.",
    "The sign said, <b>\"No entry [except staff]\"</b>."
  ];
  const worksheet = [
    { q: "He is my friend ___from school___.", a: "(from school)" },
    { q: "The answer is ___15___.", a: "[15]" },
    { q: "She said, \"I will help ___if I can___.\"", a: "(if I can)" },
    { q: "The cat ___which was black___ ran away.", a: "[which was black]" },
    { q: "My favorite food ___pizza___ is delicious.", a: "(pizza)" }
  ];
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-blue-700">Brackets and Parentheses</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are brackets and parentheses?</b> Brackets [ ] and parentheses ( ) are punctuation marks used to add extra information or clarify meaning in sentences.
            </p>
            <p className="text-blue-700 font-semibold">They help make writing clearer and more detailed!</p>
          </header>

          {/* When to Use Brackets vs. Parentheses */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">When to Use Brackets vs. Parentheses</h2>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li><b>Parentheses ( ):</b> Add extra information, explanations, or asides.</li>
              <li><b>Brackets [ ]:</b> Add clarification, corrections, or comments inside quoted text.</li>
            </ul>
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
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Tips for Using Brackets and Parentheses</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Use parentheses for extra information that can be left out.</li>
              <li>Use brackets to add or change words in a quote.</li>
              <li>Don&apos;t overuse—too many can make writing confusing.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/punctuation-quotation-marks" className="text-blue-700 underline hover:text-blue-900">punctuation</Link>, <Link href="/grammar/sentence-types" className="text-blue-700 underline hover:text-blue-900">sentence types</Link>, and <Link href="/grammar/parts-of-speech" className="text-blue-700 underline hover:text-blue-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link> or <Link href="/grammar/reading-comprehension" className="text-blue-700 underline hover:text-blue-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 