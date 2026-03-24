"use client";
import React from "react";
import Link from "next/link";

export default function ActiveVsPassiveVoicePage() {
  const activeExamples = [
    "The <b>cat chased</b> the mouse.",
    "She <b>wrote</b> a letter.",
    "The dog <b>ate</b> the bone.",
    "They <b>built</b> a sandcastle.",
    "The teacher <b>explained</b> the lesson."
  ];
  const passiveExamples = [
    "The mouse <b>was chased</b> by the cat.",
    "A letter <b>was written</b> by her.",
    "The bone <b>was eaten</b> by the dog.",
    "A sandcastle <b>was built</b> by them.",
    "The lesson <b>was explained</b> by the teacher."
  ];
  const worksheet = [
    { q: "The cake was baked by Tom.", a: "Passive" },
    { q: "Sara reads a book.", a: "Active" },
    { q: "The window was broken by the ball.", a: "Passive" },
    { q: "The children played soccer.", a: "Active" },
    { q: "The homework was completed by the student.", a: "Passive" }
  ];
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-green-700">Active vs Passive Voice</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is active voice?</b> In active voice, the subject does the action. <br/>
              <b>What is passive voice?</b> In passive voice, the subject receives the action.
            </p>
            <p className="text-green-700 font-semibold">Active voice is usually clearer and more direct, but passive voice is useful when the doer is unknown or less important.</p>
          </header>

          {/* Structure */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Structure</h2>
            <div className="bg-green-100 rounded p-4 mb-4 text-gray-800">
              <b>Active:</b> Subject + Verb + Object <br/>
              <b>Passive:</b> Object + (form of &quot;be&quot;) + Past Participle + by Subject
            </div>
          </section>

          {/* Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Active Voice Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
              {activeExamples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Passive Voice Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {passiveExamples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Worksheet: Active or Passive?</h2>
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
            <h2 className="text-2xl font-bold mb-2 text-green-700">Tips for Using Active and Passive Voice</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Use active voice for clear, direct sentences.</li>
              <li>Use passive voice when the doer is unknown or less important.</li>
              <li>Look for forms of &quot;be&quot; (is, was, were) and &quot;by&quot; to spot passive voice.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/action-verb-examples" className="text-green-700 underline hover:text-green-900">action verbs</Link>, <Link href="/grammar/verbs-start-with-m" className="text-green-700 underline hover:text-green-900">verbs</Link>, and <Link href="/grammar/past-continuous-tense-examples" className="text-green-700 underline hover:text-green-900">verb tenses</Link>.</li>
              <li>Try more <Link href="/grammar/parts-of-speech" className="text-green-700 underline hover:text-green-900">parts of speech</Link> and <Link href="/grammar/figurative-language" className="text-green-700 underline hover:text-green-900">figurative language</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 