"use client";
import React from "react";
import Link from "next/link";

export default function CollectiveNounsPage() {
  const collectiveNouns = [
    "a flock of birds", "a team of players", "a herd of cows", "a pack of wolves", "a bunch of grapes", "a school of fish", "a pride of lions", "a swarm of bees", "a group of friends", "a band of musicians", "a class of students", "a bouquet of flowers", "a fleet of ships", "a litter of puppies", "a pod of dolphins", "a troop of scouts", "a crowd of people", "a set of tools", "a pair of shoes", "a deck of cards", "a cluster of stars", "a committee of experts", "a panel of judges", "a choir of singers", "a string of pearls", "a forest of trees", "a galaxy of stars", "a gaggle of geese", "a cast of actors", "a bevy of swans"
  ];
  const examples = [
    "We saw <b>a flock of birds</b> flying south.",
    "The <b>team of players</b> won the game.",
    "A <b>herd of cows</b> grazed in the field.",
    "She bought <b>a bunch of grapes</b>.",
    "A <b>school of fish</b> swam by.",
    "The <b>pride of lions</b> rested in the shade.",
    "A <b>swarm of bees</b> buzzed around the flowers.",
    "The <b>class of students</b> listened to the teacher.",
    "He gave her <b>a bouquet of flowers</b>.",
    "A <b>fleet of ships</b> sailed across the sea."
  ];
  const worksheet = [
    { q: "A ___ of puppies played in the yard.", a: "litter" },
    { q: "We saw a ___ of geese by the lake.", a: "gaggle" },
    { q: "She wore a ___ of pearls.", a: "string" },
    { q: "A ___ of scouts went camping.", a: "troop" },
    { q: "The ___ of actors performed on stage.", a: "cast" }
  ];
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-green-700">Collective Nouns</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are collective nouns?</b> Collective nouns are words that name a group of people, animals, or things. They help us talk about groups as a single unit.
            </p>
            <p className="text-green-700 font-semibold">Collective nouns make your writing more precise and interesting!</p>
          </header>

          {/* List of Collective Nouns */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Common Collective Nouns</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {collectiveNouns.map((n) => (
                <span key={n} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{n}</span>
              ))}
            </div>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Worksheet: Fill in the Blank</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {worksheet.map((w, i) => (
                <li key={i}>{w.q}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-green-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {worksheet.map((w, i) => (
                  <li key={i}><b>Q{i + 1}:</b> {w.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Tips for Using Collective Nouns</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Collective nouns are usually singular (e.g., The class is ready).</li>
              <li>Use them to talk about groups as one unit.</li>
              <li>Some collective nouns are used for people, some for animals, and some for things.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/noun-examples" className="text-green-700 underline hover:text-green-900">nouns</Link>, <Link href="/grammar/countable-nouns" className="text-green-700 underline hover:text-green-900">countable nouns</Link>, and <Link href="/grammar/parts-of-speech" className="text-green-700 underline hover:text-green-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/common-nouns" className="text-green-700 underline hover:text-green-900">common nouns</Link> or <Link href="/grammar/compound-words-for-kids" className="text-green-700 underline hover:text-green-900">compound words</Link>.</li>
              <li>Practice with <Link href="/grammar/figurative-language" className="text-green-700 underline hover:text-green-900">figurative language</Link> and <Link href="/grammar/reading-comprehension" className="text-green-700 underline hover:text-green-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 