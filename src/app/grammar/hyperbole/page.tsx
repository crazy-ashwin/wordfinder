"use client";
import React from "react";
import Link from "next/link";

export default function HyperbolePage() {
  const examples = [
    { hyperbole: "I'm so hungry I could eat a horse!", meaning: "Very hungry (not literally)", example: "After soccer, I'm so hungry I could eat a horse!" },
    { hyperbole: "I've told you a million times!", meaning: "I've told you many times (not literally a million)", example: "Clean your room—I've told you a million times!" },
    { hyperbole: "This backpack weighs a ton!", meaning: "The backpack is very heavy.", example: "My backpack weighs a ton after school." },
    { hyperbole: "It took forever to finish my homework.", meaning: "It took a long time.", example: "It took forever to finish my homework last night." },
    { hyperbole: "My feet are killing me!", meaning: "My feet hurt a lot.", example: "After hiking, my feet are killing me!" },
    { hyperbole: "The movie lasted an eternity.", meaning: "The movie was very long.", example: "That movie lasted an eternity!" },
    { hyperbole: "I have a ton of homework.", meaning: "I have a lot of homework.", example: "I have a ton of homework to do tonight." },
    { hyperbole: "He runs faster than the wind.", meaning: "He runs very fast.", example: "My dog runs faster than the wind." },
    { hyperbole: "She cried a river of tears.", meaning: "She cried a lot.", example: "When her ice cream fell, she cried a river of tears." },
    { hyperbole: "I'm dying of laughter!", meaning: "I'm laughing a lot.", example: "That joke was so funny, I'm dying of laughter!" },
    { hyperbole: "This bag weighs a ton!", meaning: "The bag is very heavy.", example: "This bag weighs a ton after shopping." },
    { hyperbole: "He has a heart of stone.", meaning: "He is very unkind.", example: "The villain has a heart of stone." },
    { hyperbole: "She has a voice that could shatter glass.", meaning: "Her voice is very loud or high.", example: "When she sings, she has a voice that could shatter glass!" },
    { hyperbole: "It was so cold, I saw polar bears wearing jackets!", meaning: "It was very cold.", example: "It was so cold, I saw polar bears wearing jackets!" },
    { hyperbole: "I waited in line for ages.", meaning: "I waited a long time.", example: "I waited in line for ages at the amusement park." }
  ];

  const quiz = [
    { hyperbole: "I've told you a million times!", answer: "A million times (exaggeration)" },
    { hyperbole: "This backpack weighs a ton!", answer: "Weighs a ton (exaggeration)" },
    { hyperbole: "She cried a river of tears.", answer: "A river of tears (exaggeration)" },
    { hyperbole: "He runs faster than the wind.", answer: "Faster than the wind (exaggeration)" }
  ];

  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-pink-700">Hyperbole Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is hyperbole?</b> Hyperbole is an extreme exaggeration used to make a point. Writers use hyperbole to make stories and descriptions more exciting and funny.
            </p>
            <p className="text-pink-700 font-semibold">Hyperbole is everywhere—in jokes, stories, and everyday speech!</p>
          </header>

          {/* Hyperbole Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Hyperbole Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((item, idx) => (
                <div key={item.hyperbole} className="bg-pink-50 border-l-4 border-pink-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-pink-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.hyperbole}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Meaning:</b> {item.meaning}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Spotting Hyperbole */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Tips for Spotting Hyperbole</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Look for statements that are clearly exaggerated or impossible.</li>
              <li>Hyperbole is not meant to be taken literally.</li>
              <li>Writers use hyperbole to make things sound bigger, smaller, better, or worse than they really are.</li>
              <li>Hyperbole is common in jokes, stories, and everyday speech.</li>
            </ul>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Quiz: What is the Exaggeration?</h2>
            <p className="mb-2 text-gray-700">Can you spot the exaggerated part in these sentences?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.hyperbole}</li>
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
              <li>Learn about <Link href="/grammar/metaphor-examples" className="text-pink-700 underline hover:text-pink-900">metaphors</Link>, <Link href="/grammar/simile-examples" className="text-pink-700 underline hover:text-pink-900">similes</Link>, <Link href="/grammar/idioms-for-kids" className="text-pink-700 underline hover:text-pink-900">idioms</Link>, and <Link href="/grammar/figurative-language" className="text-pink-700 underline hover:text-pink-900">figurative language</Link> for more creative writing ideas.</li>
              <li>Try writing your own hyperbole sentences or jokes.</li>
              <li>Read stories and spot hyperbole.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 