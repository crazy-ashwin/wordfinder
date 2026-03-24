"use client";
import React from "react";
import Link from "next/link";

export default function AssonanceConsonanceWorksheetsPage() {
  const assonanceExamples = [
    { phrase: "The rain in Spain falls mainly on the plain.", sound: "ai" },
    { phrase: "Go and mow the lawn.", sound: "o" },
    { phrase: "Fleet feet sweep by sleeping geese.", sound: "ee" },
    { phrase: "Try to light the fire.", sound: "i" },
    { phrase: "Blue moon.", sound: "oo" },
    { phrase: "The cat sat back.", sound: "a" }
  ];
  const consonanceExamples = [
    { phrase: "Pitter patter, pitter patter.", sound: "t/r" },
    { phrase: "Mike likes his new bike.", sound: "k" },
    { phrase: "The lumpy, bumpy road.", sound: "mp" },
    { phrase: "The string was strong.", sound: "ng" },
    { phrase: "Blank and think.", sound: "nk" },
    { phrase: "Odds and ends.", sound: "d/s" }
  ];
  const worksheet = [
    { q: "The rain in Spain falls mainly on the plain.", a: "Assonance" },
    { q: "Mike likes his new bike.", a: "Consonance" },
    { q: "Fleet feet sweep by sleeping geese.", a: "Assonance" },
    { q: "Blank and think.", a: "Consonance" },
    { q: "The cat sat back.", a: "Assonance" }
  ];
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-yellow-700">Assonance and Consonance Worksheets</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is assonance?</b> Assonance is the repetition of vowel sounds in nearby words.<br/>
              <b>What is consonance?</b> Consonance is the repetition of consonant sounds anywhere in nearby words.
            </p>
            <p className="text-yellow-700 font-semibold">Both assonance and consonance make writing sound musical and interesting!</p>
          </header>

          {/* Difference */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Difference Between Assonance and Consonance</h2>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li><b>Assonance:</b> Repeats vowel sounds (e.g., &quot;The rain in Spain&quot;).</li>
              <li><b>Consonance:</b> Repeats consonant sounds (e.g., &quot;Mike likes his new bike&quot;).</li>
            </ul>
          </section>

          {/* Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Assonance Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              {assonanceExamples.map((ex, i) => (
                <li key={i}><b>{ex.sound}</b>: {ex.phrase}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Consonance Examples</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {consonanceExamples.map((ex, i) => (
                <li key={i}><b>{ex.sound}</b>: {ex.phrase}</li>
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Worksheet: Assonance or Consonance?</h2>
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
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Tips for Spotting Assonance and Consonance</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Listen for repeated sounds, not just repeated letters.</li>
              <li>Assonance = vowel sounds; consonance = consonant sounds.</li>
              <li>Both are common in poetry, songs, and tongue twisters.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/alliteration-examples-for-kids" className="text-yellow-700 underline hover:text-yellow-900">alliteration</Link>, <Link href="/grammar/assonance-examples" className="text-yellow-700 underline hover:text-yellow-900">assonance</Link>, <Link href="/grammar/consonance-definition-examples" className="text-yellow-700 underline hover:text-yellow-900">consonance</Link>, <Link href="/grammar/onomatopoeia-definition-examples" className="text-yellow-700 underline hover:text-yellow-900">onomatopoeia</Link>, and <Link href="/grammar/figurative-language" className="text-yellow-700 underline hover:text-yellow-900">figurative language</Link> for more fun with words!</li>
              <li>Try writing your own assonance and consonance sentences.</li>
              <li>Read poems and stories to spot these sound devices.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 