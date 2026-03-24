"use client";
import React from "react";
import Link from "next/link";

export default function PastContinuousTense4thGradePage() {
  const examples = [
    "She <b>was reading</b> a book when I called.",
    "They <b>were playing</b> soccer at 5 PM.",
    "I <b>was doing</b> my homework all evening.",
    "We <b>were watching</b> TV when the lights went out.",
    "He <b>was eating</b> dinner at 7 o'clock.",
    "The birds <b>were singing</b> in the morning.",
    "You <b>were talking</b> too loudly.",
    "My friends <b>were laughing</b> at the joke.",
    "She <b>was drawing</b> a picture during class.",
    "The dog <b>was barking</b> all night."
  ];
  const worksheet = [
    { q: "I ___ (do) my homework when you called.", a: "was doing" },
    { q: "They ___ (play) outside at 6 PM.", a: "were playing" },
    { q: "She ___ (watch) TV when I arrived.", a: "was watching" },
    { q: "We ___ (eat) dinner at 7 o'clock.", a: "were eating" },
    { q: "The cat ___ (sleep) on the sofa.", a: "was sleeping" }
  ];
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-yellow-700">4th Grade Worksheets: Past Continuous Tense</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is the past continuous tense?</b> The past continuous tense describes actions that were happening at a specific time in the past. It uses <b>was/were + verb-ing</b>.
            </p>
            <p className="text-yellow-700 font-semibold">The past continuous tense helps you talk about what was going on at a certain moment in the past.</p>
          </header>

          {/* Structure */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Structure</h2>
            <div className="bg-yellow-100 rounded p-4 mb-4 text-gray-800">
              <b>was/were + verb-ing</b> <br/>
              <span className="text-sm">Examples: I <b>was eating</b>. They <b>were playing</b>.</span>
            </div>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Worksheet: Fill in the Blank</h2>
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
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Tips for Using the Past Continuous Tense</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Use <b>was</b> with I/he/she/it; use <b>were</b> with you/we/they.</li>
              <li>The action was happening at a specific time in the past.</li>
              <li>Often used with another action in the simple past (e.g., I <b>was reading</b> when you called).</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/3rd-grade-worksheets-helping-verbs" className="text-yellow-700 underline hover:text-yellow-900">helping verbs</Link>, <Link href="/grammar/action-verb-examples" className="text-yellow-700 underline hover:text-yellow-900">action verbs</Link>, and <Link href="/grammar/past-continuous-tense-examples" className="text-yellow-700 underline hover:text-yellow-900">past continuous tense</Link>.</li>
              <li>Try more <Link href="/grammar/4th-grade-worksheets-quotation-marks" className="text-yellow-700 underline hover:text-yellow-900">4th grade grammar worksheets</Link>.</li>
              <li>Practice with <Link href="/grammar/parts-of-speech" className="text-yellow-700 underline hover:text-yellow-900">parts of speech</Link> and <Link href="/grammar/figurative-language" className="text-yellow-700 underline hover:text-yellow-900">figurative language</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 