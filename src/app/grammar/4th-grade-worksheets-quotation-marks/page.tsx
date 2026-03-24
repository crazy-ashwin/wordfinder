"use client";
import React from "react";
import Link from "next/link";

export default function QuotationMarks4thGradePage() {
  const examples = [
    'She said, <b>"I love reading."</b>',
    '"Can we go outside?" asked Tom.',
    'The sign read, <b>"No Dogs Allowed"</b>.',
    '"Wow!" shouted the crowd.',
    'My favorite book is <b>"Charlotte\'s Web"</b>.',
    'He whispered, <b>"Be quiet."</b>',
    '"Let\'s play a game," said Mia.',
    'The teacher said, <b>"Open your books."</b>',
    '"Good morning!" said Dad.',
    'The poster said, <b>"Keep Out"</b>.'
  ];
  const worksheet = [
    { q: 'She said, ___I am hungry.___', a: '"I am hungry."' },
    { q: '___Can you help me?___ asked Sam.', a: '"Can you help me?"' },
    { q: 'The sign read, ___No Parking___.', a: '"No Parking"' },
    { q: '___Let\'s go to the park!___ said Lily.', a: '"Let\'s go to the park!"' },
    { q: 'The book is called ___The Secret Garden___.', a: '"The Secret Garden"' }
  ];
  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-pink-700">4th Grade Worksheets: Quotation Marks</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are quotation marks?</b> Quotation marks ( &quot; &quot; ) are punctuation marks used to show someone is speaking, to quote what someone said, or to show the title of a short work. They help make writing clear and interesting!
            </p>
            <p className="text-pink-700 font-semibold">Quotation marks help you show exactly what someone said or wrote.</p>
          </header>

          {/* When to Use Quotation Marks */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-700">When to Use Quotation Marks</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base mb-4">
              <li>To show direct speech (what someone says)</li>
              <li>To quote someone else’s words</li>
              <li>To show the title of a short story, poem, or article</li>
            </ul>
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
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Tips for Using Quotation Marks</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Put quotation marks around the exact words someone says.</li>
              <li>Start a new paragraph when a new person speaks.</li>
              <li>Use a comma or punctuation before the closing quotation mark.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/punctuation-quotation-marks" className="text-pink-700 underline hover:text-pink-900">punctuation</Link>, <Link href="/grammar/imperative-sentence-examples" className="text-pink-700 underline hover:text-pink-900">sentence types</Link>, and <Link href="/grammar/parts-of-speech" className="text-pink-700 underline hover:text-pink-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/4th-grade-worksheets-past-continuous-tense" className="text-pink-700 underline hover:text-pink-900">4th grade grammar worksheets</Link>.</li>
              <li>Practice with <Link href="/grammar/figurative-language" className="text-pink-700 underline hover:text-pink-900">figurative language</Link> and <Link href="/grammar/reading-comprehension" className="text-pink-700 underline hover:text-pink-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 