"use client";
import React from "react";
import Link from "next/link";

export default function SimileExamplesPage() {
  const examples = [
    { simile: "As brave as a lion", meaning: "Very brave", example: "She was as brave as a lion during the storm." },
    { simile: "As busy as a bee", meaning: "Very busy", example: "Mom was as busy as a bee getting ready for the party." },
    { simile: "As light as a feather", meaning: "Very light", example: "The kitten was as light as a feather." },
    { simile: "As cool as a cucumber", meaning: "Very calm", example: "He stayed as cool as a cucumber during the test." },
    { simile: "As fast as lightning", meaning: "Very fast", example: "The rabbit ran as fast as lightning." },
    { simile: "As quiet as a mouse", meaning: "Very quiet", example: "The class was as quiet as a mouse during the exam." },
    { simile: "As sly as a fox", meaning: "Very clever", example: "The detective was as sly as a fox." },
    { simile: "As free as a bird", meaning: "Very free", example: "On summer vacation, I feel as free as a bird." },
    { simile: "As stubborn as a mule", meaning: "Very stubborn", example: "My brother is as stubborn as a mule when he wants something." },
    { simile: "As blind as a bat", meaning: "Unable to see well", example: "Without my glasses, I'm as blind as a bat." },
    { simile: "As sharp as a tack", meaning: "Very smart", example: "My teacher is as sharp as a tack." },
    { simile: "As sweet as honey", meaning: "Very sweet", example: "The cake was as sweet as honey." },
    { simile: "As strong as an ox", meaning: "Very strong", example: "Dad is as strong as an ox." },
    { simile: "As white as snow", meaning: "Very white", example: "The puppy's fur was as white as snow." },
    { simile: "As cold as ice", meaning: "Very cold", example: "The lemonade was as cold as ice." }
  ];

  const quiz = [
    { simile: "As busy as a bee", answer: "Very busy" },
    { simile: "As light as a feather", answer: "Very light" },
    { simile: "As sly as a fox", answer: "Very clever" },
    { simile: "As cold as ice", answer: "Very cold" }
  ];

  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-pink-700">Simile Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is a simile?</b> A simile is a comparison between two different things using the words <b>like</b> or <b>as</b>. Writers use similes to make descriptions more vivid and interesting.
            </p>
            <p className="text-pink-700 font-semibold">Similes help us picture things in new and creative ways.</p>
          </header>

          {/* Simile Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Simile Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((item, idx) => (
                <div key={item.simile} className="bg-pink-50 border-l-4 border-pink-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-pink-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.simile}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Meaning:</b> {item.meaning}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Spotting Similes */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Tips for Spotting Similes</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Similes use the words <b>like</b> or <b>as</b> to compare two things.</li>
              <li>Similes compare things that are different but share a quality.</li>
              <li>Similes are easy to spot because of the key words <b>like</b> and <b>as</b>.</li>
              <li>Metaphors also compare things, but do not use <b>like</b> or <b>as</b>.</li>
            </ul>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Quiz: What Does the Simile Mean?</h2>
            <p className="mb-2 text-gray-700">Can you figure out what these similes mean?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.simile}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-pink-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {quiz.map((q, idx) => (
                  <li key={idx}><b>Q{idx + 1}:</b> {q.answer}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/metaphor-examples" className="text-pink-700 underline hover:text-pink-900">metaphors</Link>, <Link href="/grammar/alliteration-examples" className="text-pink-700 underline hover:text-pink-900">alliteration</Link>, <Link href="/grammar/assonance-examples" className="text-pink-700 underline hover:text-pink-900">assonance</Link>, <Link href="/grammar/personification-examples-for-kids" className="text-pink-700 underline hover:text-pink-900">personification</Link>, and <Link href="/grammar/figurative-language" className="text-pink-700 underline hover:text-pink-900">figurative language</Link> for more creative writing ideas.</li>
              <li>Try writing your own similes about things you see every day.</li>
              <li>Read poems and stories to spot similes.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 