"use client";
import React from "react";
import Link from "next/link";

export default function AssonanceExamplesPage() {
  const examples = [
    { phrase: "The rain in Spain falls mainly on the plain.", sound: "ai", example: "The rain in Spain falls mainly on the plain every spring." },
    { phrase: "Go and mow the lawn.", sound: "o", example: "Go and mow the lawn before dinner." },
    { phrase: "Hear the mellow wedding bells.", sound: "e", example: "Hear the mellow wedding bells ring." },
    { phrase: "Try to light the fire.", sound: "i", example: "Try to light the fire in the fireplace." },
    { phrase: "Fleet feet sweep by sleeping geese.", sound: "ee", example: "Fleet feet sweep by sleeping geese in the field." },
    { phrase: "The early bird catches the worm.", sound: "ea", example: "The early bird catches the worm every morning." },
    { phrase: "I rose and told him of my woe.", sound: "o", example: "I rose and told him of my woe after school." },
    { phrase: "Go slow over the road.", sound: "o", example: "Go slow over the road when it's icy." },
    { phrase: "The cat sat back.", sound: "a", example: "The cat sat back and relaxed." },
    { phrase: "Blue moon.", sound: "oo", example: "We saw a blue moon last night." },
    { phrase: "On a proud round cloud in white high night.", sound: "ou/ow", example: "On a proud round cloud in white high night, the owl took flight." },
    { phrase: "Go and show Joe the boat.", sound: "o", example: "Go and show Joe the boat at the dock." },
    { phrase: "The engineer held the steering to steer the vehicle.", sound: "ee", example: "The engineer held the steering to steer the vehicle safely." },
    { phrase: "Try to fly high in the sky.", sound: "i", example: "Try to fly high in the sky like a bird." },
    { phrase: "Men sell the wedding bells.", sound: "e", example: "Men sell the wedding bells at the shop." }
  ];

  const quiz = [
    { phrase: "Fleet feet sweep by sleeping geese.", answer: "ee" },
    { phrase: "Try to fly high in the sky.", answer: "i" },
    { phrase: "Go and show Joe the boat.", answer: "o" },
    { phrase: "The cat sat back.", answer: "a" }
  ];

  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-yellow-700">Assonance Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is assonance?</b> Assonance is the repetition of vowel sounds in nearby words. Writers use assonance to make language sound musical and interesting.
            </p>
            <p className="text-yellow-700 font-semibold">Assonance is often found in poems, songs, and tongue twisters!</p>
          </header>

          {/* Assonance Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Assonance Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((item, idx) => (
                <div key={item.phrase} className="bg-yellow-50 border-l-4 border-yellow-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-yellow-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.phrase}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Vowel Sound:</b> <span className="text-yellow-700 font-bold">{item.sound}</span></div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Spotting Assonance */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Tips for Spotting Assonance</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Listen for the same vowel sound in nearby words.</li>
              <li>Assonance is about sound, not just spelling.</li>
              <li>Alliteration is the repetition of initial consonant sounds; consonance is the repetition of consonant sounds anywhere in words.</li>
              <li>Assonance is common in poetry, songs, and tongue twisters.</li>
            </ul>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Quiz: What Vowel Sound is Repeated?</h2>
            <p className="mb-2 text-gray-700">Can you spot the repeated vowel sound in these phrases?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.phrase}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-yellow-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {quiz.map((q, idx) => (
                  <li key={idx}><b>Q{idx + 1}:</b> {q.answer}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/alliteration-examples-for-kids" className="text-yellow-700 underline hover:text-yellow-900">alliteration</Link>, <Link href="/grammar/consonance-definition-examples" className="text-yellow-700 underline hover:text-yellow-900">consonance</Link>, <Link href="/grammar/simile-examples" className="text-yellow-700 underline hover:text-yellow-900">similes</Link>, <Link href="/grammar/metaphor-examples" className="text-yellow-700 underline hover:text-yellow-900">metaphors</Link>, <Link href="/grammar/onomatopoeia-definition-examples" className="text-yellow-700 underline hover:text-yellow-900">onomatopoeia</Link>, and <Link href="/grammar/figurative-language" className="text-yellow-700 underline hover:text-yellow-900">figurative language</Link> for more fun with words!</li>
              <li>Try writing your own assonance phrases or poems.</li>
              <li>Read poems and stories to spot assonance.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 