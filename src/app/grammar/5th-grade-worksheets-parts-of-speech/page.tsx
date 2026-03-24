"use client";
import React from "react";
import Link from "next/link";

export default function PartsOfSpeech5thGradePage() {
  const parts = [
    { name: "Noun", desc: "A person, place, thing, or idea." },
    { name: "Pronoun", desc: "A word that replaces a noun." },
    { name: "Verb", desc: "An action or state of being." },
    { name: "Adjective", desc: "A word that describes a noun or pronoun." },
    { name: "Adverb", desc: "A word that describes a verb, adjective, or another adverb." },
    { name: "Preposition", desc: "A word that shows the relationship between a noun (or pronoun) and another word." },
    { name: "Conjunction", desc: "A word that connects words, phrases, or clauses." },
    { name: "Interjection", desc: "A word that expresses emotion or surprise." }
  ];
  const examples = [
    "<b>Wow</b>! The <b>dog</b> <b>ran</b> <b>quickly</b> <b>to</b> the <b>park</b> <b>and</b> <b>he</b> was happy.",
    "<b>She</b> <b>is</b> a <b>brilliant</b> <b>student</b>.",
    "<b>After</b> lunch, <b>they</b> <b>played</b> <b>outside</b>.",
    "<b>Oh</b>! <b>My</b> <b>cat</b> <b>jumped</b> <b>on</b> the <b>table</b>.",
    "<b>Because</b> it <b>was</b> raining, <b>we</b> <b>stayed</b> <b>inside</b>.",
    "<b>He</b> <b>quickly</b> <b>finished</b> his <b>homework</b>.",
    "<b>Wow</b>! <b>She</b> <b>won</b> the <b>race</b> <b>easily</b>.",
    "<b>They</b> <b>are</b> <b>happy</b> <b>because</b> <b>it</b> <b>is</b> <b>Friday</b>."
  ];
  const worksheet = [
    { q: "The <b>cat</b> slept on the mat.", a: "Noun" },
    { q: "She <b>quickly</b> finished her work.", a: "Adverb" },
    { q: "<b>Wow</b>! That was amazing.", a: "Interjection" },
    { q: "He is <b>happy</b> today.", a: "Adjective" },
    { q: "We went <b>to</b> the store.", a: "Preposition" }
  ];
  return (
    <div className="min-h-screen bg-purple-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-purple-700">5th Grade Worksheets: Parts of Speech</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are the parts of speech?</b> The parts of speech are the building blocks of English. Knowing them helps you write and speak clearly and correctly!
            </p>
            <p className="text-purple-700 font-semibold">There are 8 main parts of speech in English.</p>
          </header>

          {/* List of Parts of Speech */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-700">The 8 Parts of Speech</h2>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              {parts.map((p) => (
                <li key={p.name}><b>{p.name}:</b> {p.desc}</li>
              ))}
            </ul>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-purple-700">Worksheet: Identify the Part of Speech</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {worksheet.map((w, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: w.q }} />
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-purple-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {worksheet.map((w, i) => (
                  <li key={i}><b>Q{i + 1}:</b> {w.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-purple-700">Tips for Remembering Parts of Speech</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Practice identifying parts of speech in sentences you read or write.</li>
              <li>Use color-coding or highlighting to spot different parts of speech.</li>
              <li>Remember: every word in a sentence is a part of speech!</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-purple-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/noun-examples" className="text-purple-700 underline hover:text-purple-900">nouns</Link>, <Link href="/grammar/verb-examples" className="text-purple-700 underline hover:text-purple-900">verbs</Link>, <Link href="/grammar/adjective-examples" className="text-purple-700 underline hover:text-purple-900">adjectives</Link>, and <Link href="/grammar/adverb-examples" className="text-purple-700 underline hover:text-purple-900">adverbs</Link>.</li>
              <li>Try more <Link href="/grammar/5th-grade-worksheets-parts-of-speech" className="text-purple-700 underline hover:text-purple-900">5th grade grammar worksheets</Link>.</li>
              <li>Practice with <Link href="/grammar/parts-of-speech" className="text-purple-700 underline hover:text-purple-900">parts of speech</Link> and <Link href="/grammar/figurative-language" className="text-purple-700 underline hover:text-purple-900">figurative language</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 