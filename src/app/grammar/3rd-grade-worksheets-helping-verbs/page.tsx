"use client";
import React from "react";
import Link from "next/link";

export default function HelpingVerbs3rdGradePage() {
  const helpingVerbs = [
    "is", "am", "are", "was", "were", "has", "have", "had", "do", "does", "did", "will", "would", "can", "could", "may", "might", "must", "shall", "should"
  ];
  const examples = [
    "She <b>is</b> reading a book.",
    "I <b>am</b> going to the park.",
    "They <b>are</b> playing soccer.",
    "He <b>was</b> late to school.",
    "We <b>were</b> happy to help.",
    "She <b>has</b> finished her homework.",
    "I <b>have</b> seen that movie.",
    "He <b>had</b> eaten breakfast.",
    "Do</b> you like pizza?",
    "She <b>does</b> her chores every day."
  ];
  const worksheet = [
    { q: "I ___ going to the store.", a: "am" },
    { q: "They ___ finished their project.", a: "have" },
    { q: "She ___ playing the piano.", a: "is" },
    { q: "We ___ happy to see you.", a: "are" },
    { q: "He ___ done his homework.", a: "has" }
  ];
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-blue-700">3rd Grade Worksheets: Helping Verbs</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are helping verbs?</b> Helping verbs (also called auxiliary verbs) work with main verbs to show tense, mood, or voice. They help us make questions, negatives, and different verb tenses. Learning helping verbs is important for building strong sentences!
            </p>
            <p className="text-blue-700 font-semibold">Helping verbs make your writing and speaking clearer and more interesting.</p>
          </header>

          {/* List of Helping Verbs */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Common Helping Verbs</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {helpingVerbs.map((v) => (
                <span key={v} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{v}</span>
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
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Tips for Using Helping Verbs</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Helping verbs come before the main verb (e.g., <b>is</b> running).</li>
              <li>Some sentences use more than one helping verb (e.g., <b>has been</b> eating).</li>
              <li>Helping verbs help form questions and negatives (e.g., <b>Do</b> you like cake? She <b>does not</b> want to go.).</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/action-verb-examples" className="text-blue-700 underline hover:text-blue-900">action verbs</Link>, <Link href="/grammar/verbs-start-with-m" className="text-blue-700 underline hover:text-blue-900">verbs</Link>, and <Link href="/grammar/past-continuous-tense-examples" className="text-blue-700 underline hover:text-blue-900">verb tenses</Link>.</li>
              <li>Try more <Link href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-blue-700 underline hover:text-blue-900">3rd grade grammar worksheets</Link>.</li>
              <li>Practice with <Link href="/grammar/parts-of-speech" className="text-blue-700 underline hover:text-blue-900">parts of speech</Link> and <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 