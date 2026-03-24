"use client";
import React from "react";
import Link from "next/link";

export default function ConsonanceDefinitionExamplesPage() {
  const examples = [
    { phrase: "Pitter patter, pitter patter.", sound: "t/r", meaning: "The 't' and 'r' sounds are repeated.", example: "Pitter patter, pitter patter, the rain fell on the roof." },
    { phrase: "The lumpy, bumpy road.", sound: "mp", meaning: "The 'mp' sound is repeated.", example: "We drove down the lumpy, bumpy road." },
    { phrase: "All mammals named Sam are clammy.", sound: "m", meaning: "The 'm' sound is repeated.", example: "All mammals named Sam are clammy in the morning." },
    { phrase: "The string was strong.", sound: "ng", meaning: "The 'ng' sound is repeated.", example: "The string was strong enough to hold the kite." },
    { phrase: "Mike likes his new bike.", sound: "k", meaning: "The 'k' sound is repeated.", example: "Mike likes his new bike a lot." },
    { phrase: "I dropped the locket in the thick mud.", sound: "k/t", meaning: "The 'k' and 't' sounds are repeated.", example: "I dropped the locket in the thick mud yesterday." },
    { phrase: "He stood on the road and cried.", sound: "d", meaning: "The 'd' sound is repeated.", example: "He stood on the road and cried for help." },
    { phrase: "The black sack is in the back.", sound: "ck", meaning: "The 'ck' sound is repeated.", example: "The black sack is in the back of the truck." },
    { phrase: "I wish you would mash potatoes in this dish.", sound: "sh", meaning: "The 'sh' sound is repeated.", example: "I wish you would mash potatoes in this dish." },
    { phrase: "It will creep and beep while you sleep.", sound: "p", meaning: "The 'p' sound is repeated.", example: "It will creep and beep while you sleep at night." },
    { phrase: "The early bird gets the worm.", sound: "r", meaning: "The 'r' sound is repeated.", example: "The early bird gets the worm every morning." },
    { phrase: "She ate seven sandwiches on a sunny Sunday last year.", sound: "s/n", meaning: "The 's' and 'n' sounds are repeated.", example: "She ate seven sandwiches on a sunny Sunday last year." },
    { phrase: "He struck a streak of bad luck.", sound: "k", meaning: "The 'k' sound is repeated.", example: "He struck a streak of bad luck at the game." },
    { phrase: "Blank and think.", sound: "nk", meaning: "The 'nk' sound is repeated.", example: "Blank and think rhyme and have consonance." },
    { phrase: "Odds and ends.", sound: "d/s", meaning: "The 'd' and 's' sounds are repeated.", example: "We sorted the odds and ends in the drawer." }
  ];

  const quiz = [
    { phrase: "Mike likes his new bike.", answer: "k" },
    { phrase: "The string was strong.", answer: "ng" },
    { phrase: "The black sack is in the back.", answer: "ck" },
    { phrase: "Blank and think.", answer: "nk" }
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-blue-700">Consonance Definition & Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is consonance?</b> Consonance is the repetition of consonant sounds anywhere in nearby words. Writers use consonance to make language sound musical and interesting.
            </p>
            <p className="text-blue-700 font-semibold">Consonance is often found in poems, songs, and tongue twisters!</p>
          </header>

          {/* Consonance Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Consonance Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((item, idx) => (
                <div key={item.phrase} className="bg-blue-50 border-l-4 border-blue-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-blue-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.phrase}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Consonant Sound:</b> <span className="text-blue-700 font-bold">{item.sound}</span></div>
                  <div className="text-gray-700 mb-1"><b>Meaning:</b> {item.meaning}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Spotting Consonance */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Tips for Spotting Consonance</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Listen for the same consonant sound anywhere in nearby words (not just at the start).</li>
              <li>Consonance is about sound, not just spelling.</li>
              <li>Alliteration is the repetition of initial consonant sounds; assonance is the repetition of vowel sounds.</li>
              <li>Consonance is common in poetry, songs, and tongue twisters.</li>
            </ul>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Quiz: What Consonant Sound is Repeated?</h2>
            <p className="mb-2 text-gray-700">Can you spot the repeated consonant sound in these phrases?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.phrase}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-blue-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {quiz.map((q, idx) => (
                  <li key={idx}><b>Q{idx + 1}:</b> {q.answer}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/alliteration-examples" className="text-blue-700 underline hover:text-blue-900">alliteration</Link>, <Link href="/grammar/assonance-examples" className="text-blue-700 underline hover:text-blue-900">assonance</Link>, <Link href="/grammar/metaphor-examples" className="text-blue-700 underline hover:text-blue-900">metaphors</Link>, <Link href="/grammar/simile-examples" className="text-blue-700 underline hover:text-blue-900">similes</Link>, <Link href="/grammar/onomatopoeia-definition-examples" className="text-blue-700 underline hover:text-blue-900">onomatopoeia</Link>, and <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link> for more fun with words!</li>
              <li>Try writing your own consonance phrases or poems.</li>
              <li>Read poems and stories to spot consonance.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 