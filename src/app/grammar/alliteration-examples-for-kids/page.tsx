"use client";
import React from "react";
import Link from "next/link";

export default function AlliterationExamplesForKidsPage() {
  const examples = [
    { phrase: "Sally sells seashells by the seashore.", sound: "S", meaning: "The 's' sound is repeated.", example: "Sally sells seashells by the seashore every summer." },
    { phrase: "Peter Piper picked a peck of pickled peppers.", sound: "P", meaning: "The 'p' sound is repeated.", example: "Peter Piper picked a peck of pickled peppers for his picnic." },
    { phrase: "Fuzzy Wuzzy was a bear.", sound: "F/W", meaning: "The 'f' and 'w' sounds are repeated.", example: "Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair." },
    { phrase: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?", sound: "W", meaning: "The 'w' sound is repeated.", example: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?" },
    { phrase: "Nine nimble noblemen nibbling nuts.", sound: "N", meaning: "The 'n' sound is repeated.", example: "Nine nimble noblemen nibbling nuts at noon." },
    { phrase: "Love learning loads.", sound: "L", meaning: "The 'l' sound is repeated.", example: "Love learning loads of new things!" },
    { phrase: "Fan of fabulous, fun form-fitting?", sound: "F", meaning: "The 'f' sound is repeated.", example: "Fan of fabulous, fun form-fitting clothes?" },
    { phrase: "Eat emu!", sound: "E", meaning: "The 'e' vowel sound is repeated.", example: "Eat emu every evening!" },
    { phrase: "Alliteration is maybe your game.", sound: "A", meaning: "The 'a' vowel sound is repeated.", example: "Alliteration is maybe your game after all." },
    { phrase: "Ingenious iguanas improvising an intricate impromptu.", sound: "I", meaning: "The 'i' vowel sound is repeated.", example: "Ingenious iguanas improvising an intricate impromptu on instruments." },
    { phrase: "Chomp cheese, children.", sound: "Ch", meaning: "The 'ch' sound is repeated.", example: "Chomp cheese, children, cheerfully!" },
    { phrase: "Danny likes to eat apples.", sound: "A", meaning: "The 'a' vowel sound is repeated.", example: "Danny likes to eat apples and apricots." },
    { phrase: "Quizzical Quiz, kiss me quick.", sound: "Q/K", meaning: "The 'k' sound is repeated (spelled with q and k).", example: "Quizzical Quiz, kiss me quick!" },
    { phrase: "Best Buy, Coca Cola, Dunkin Donuts.", sound: "B/C/D", meaning: "Brand names with repeated initial sounds.", example: "Best Buy, Coca Cola, and Dunkin Donuts are alliterative brands." },
    { phrase: "Lemon loaves, pepperoni pizza, cheddar cheese.", sound: "L/P/Ch", meaning: "Food names with repeated initial sounds.", example: "Lemon loaves, pepperoni pizza, and cheddar cheese are tasty alliterations." }
  ];

  const quiz = [
    { phrase: "Silly snakes slither silently.", answer: "S" },
    { phrase: "Amazing apples are awesome.", answer: "A" },
    { phrase: "Bobby baked big blueberry bagels.", answer: "B" },
    { phrase: "Eager eagles eat early.", answer: "E" }
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-purple-700">Alliteration Examples for Kids</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is alliteration?</b> Alliteration is when the same sound is repeated at the beginning of words in a sentence or phrase. It makes language fun, catchy, and easier to remember!
            </p>
            <p className="text-purple-700 font-semibold">Alliteration is used in poems, tongue twisters, brand names, and even food names!</p>
          </header>

          {/* Alliteration Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Alliteration Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((item, idx) => (
                <div key={item.phrase} className="bg-purple-50 border-l-4 border-purple-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-purple-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.phrase}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Sound:</b> <span className="text-purple-700 font-bold">{item.sound}</span></div>
                  <div className="text-gray-700 mb-1"><b>Meaning:</b> {item.meaning}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Spotting Alliteration */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-purple-700">Tips for Spotting Alliteration</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Listen for the same sound at the start of words (not just the same letter).</li>
              <li>Alliteration can use different letters that make the same sound (like C, K, and Q).</li>
              <li>Assonance is the repetition of vowel sounds; consonance is the repetition of consonant sounds.</li>
              <li>Alliteration is often used in tongue twisters, poems, and brand names.</li>
            </ul>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-purple-700">Quiz: What Sound is Alliterated?</h2>
            <p className="mb-2 text-gray-700">Can you spot the alliterated sound in these phrases?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.phrase}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-purple-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {quiz.map((q, idx) => (
                  <li key={idx}><b>Q{idx + 1}:</b> {q.answer}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-purple-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/simile-examples" className="text-purple-700 underline hover:text-purple-900">similes</Link>, <Link href="/grammar/metaphor-examples" className="text-purple-700 underline hover:text-purple-900">metaphors</Link>, <Link href="/grammar/assonance-examples" className="text-purple-700 underline hover:text-purple-900">assonance</Link>, <Link href="/grammar/consonance-definition-examples" className="text-purple-700 underline hover:text-purple-900">consonance</Link>, <Link href="/grammar/onomatopoeia-definition-examples" className="text-purple-700 underline hover:text-purple-900">onomatopoeia</Link>, <Link href="/grammar/personification-examples-for-kids" className="text-purple-700 underline hover:text-purple-900">personification</Link>, and <Link href="/grammar/figurative-language" className="text-purple-700 underline hover:text-purple-900">figurative language</Link> for more fun with words!</li>
              <li>Try making your own tongue twisters or brand names using alliteration.</li>
              <li>Read poems and stories to spot alliteration.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 