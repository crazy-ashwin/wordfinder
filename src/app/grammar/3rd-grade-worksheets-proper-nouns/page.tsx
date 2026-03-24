"use client";
import React from "react";
import Link from "next/link";

export default function ProperNouns3rdGradePage() {
  const properNouns = [
    "Sarah", "London", "Monday", "January", "Mount Everest", "Amazon River", "Mr. Smith", "Christmas", "India", "Eiffel Tower"
  ];
  const examples = [
    "<b>Sarah</b> went to the park.",
    "We visited <b>London</b> last summer.",
    "My birthday is in <b>January</b>.",
    "<b>Mr. Smith</b> is my teacher.",
    "We climbed <b>Mount Everest</b> in a book.",
    "<b>Christmas</b> is my favorite holiday.",
    "The <b>Amazon River</b> is very long.",
    "I saw the <b>Eiffel Tower</b> in a picture.",
    "<b>India</b> is a big country.",
    "We have a test on <b>Monday</b>."
  ];
  const worksheet = [
    { q: "We went to ___ for vacation.", a: "London" },
    { q: "___ is my favorite month.", a: "January" },
    { q: "My teacher is ___ .", a: "Mr. Smith" },
    { q: "We celebrate ___ in December.", a: "Christmas" },
    { q: "The ___ is in Paris.", a: "Eiffel Tower" }
  ];
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-green-700">3rd Grade Worksheets: Proper Nouns</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are proper nouns?</b> Proper nouns are special names for people, places, or things. They always start with a capital letter. Learning proper nouns helps you write clearly and show respect for names!
            </p>
            <p className="text-green-700 font-semibold">Proper nouns make your writing more specific and interesting.</p>
          </header>

          {/* List of Proper Nouns */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Common Proper Nouns</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {properNouns.map((n) => (
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
            <h2 className="text-2xl font-bold mb-2 text-green-700">Tips for Using Proper Nouns</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Always capitalize the first letter of a proper noun.</li>
              <li>Proper nouns can be names of people, places, holidays, or special things.</li>
              <li>Using proper nouns makes your writing more specific.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/noun-examples" className="text-green-700 underline hover:text-green-900">nouns</Link>, <Link href="/grammar/common-nouns" className="text-green-700 underline hover:text-green-900">common nouns</Link>, and <Link href="/grammar/parts-of-speech" className="text-green-700 underline hover:text-green-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/3rd-grade-worksheets-helping-verbs" className="text-green-700 underline hover:text-green-900">3rd grade grammar worksheets</Link>.</li>
              <li>Practice with <Link href="/grammar/figurative-language" className="text-green-700 underline hover:text-green-900">figurative language</Link> and <Link href="/grammar/reading-comprehension" className="text-green-700 underline hover:text-green-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 