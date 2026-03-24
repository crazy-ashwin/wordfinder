"use client";
import React from "react";
import Link from "next/link";

export default function ActionVerbExamplesPage() {
  const actionVerbs = [
    "run", "jump", "eat", "play", "write", "read", "sing", "dance", "swim", "draw"
  ];
  const examples = [
    "She <b>runs</b> every morning.",
    "I <b>jumped</b> over the puddle.",
    "They <b>eat</b> lunch at noon.",
    "He <b>plays</b> soccer with friends.",
    "We <b>wrote</b> a story together.",
    "She <b>reads</b> before bed.",
    "The birds <b>sing</b> in the morning.",
    "He <b>danced</b> at the party.",
    "We <b>swim</b> in the pool.",
    "She <b>drew</b> a picture of a cat."
  ];
  const worksheet = [
    { q: "I ___ (run) to school.", a: "ran" },
    { q: "She ___ (eat) an apple.", a: "ate" },
    { q: "They ___ (play) basketball.", a: "played" },
    { q: "He ___ (write) a letter.", a: "wrote" },
    { q: "We ___ (swim) in the lake.", a: "swam" }
  ];
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-blue-700">Action Verb Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are action verbs?</b> Action verbs are words that show what someone or something does. They make sentences lively and interesting!
            </p>
            <p className="text-blue-700 font-semibold">Action verbs help you describe actions in stories, instructions, and more.</p>
          </header>

          {/* List of Action Verbs */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Common Action Verbs</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {actionVerbs.map((v) => (
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
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Tips for Using Action Verbs</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Action verbs show what someone or something does.</li>
              <li>Use action verbs to make your writing more exciting.</li>
              <li>Try to use different action verbs to add variety to your sentences.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/verbs-start-with-m" className="text-blue-700 underline hover:text-blue-900">verbs</Link>, <Link href="/grammar/3rd-grade-worksheets-helping-verbs" className="text-blue-700 underline hover:text-blue-900">helping verbs</Link>, and <Link href="/grammar/past-continuous-tense-examples" className="text-blue-700 underline hover:text-blue-900">verb tenses</Link>.</li>
              <li>Try more <Link href="/grammar/action-verb-examples" className="text-blue-700 underline hover:text-blue-900">action verb worksheets</Link>.</li>
              <li>Practice with <Link href="/grammar/parts-of-speech" className="text-blue-700 underline hover:text-blue-900">parts of speech</Link> and <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 