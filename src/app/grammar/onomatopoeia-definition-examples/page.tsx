"use client";
import React from "react";
import Link from "next/link";

export default function OnomatopoeiaDefinitionExamplesPage() {
  const examples = [
    { word: "Buzz", sound: "The sound a bee makes.", example: "The bees buzz in the garden." },
    { word: "Bang", sound: "A loud, sudden noise.", example: "The door closed with a bang." },
    { word: "Splash", sound: "The sound of something hitting water.", example: "She jumped into the pool with a splash." },
    { word: "Meow", sound: "The sound a cat makes.", example: "The cat says meow when it's hungry." },
    { word: "Woof", sound: "The sound a dog makes.", example: "The dog barked, 'woof woof!'" },
    { word: "Tick-tock", sound: "The sound of a clock.", example: "The clock goes tick-tock all night." },
    { word: "Chirp", sound: "The sound a bird makes.", example: "The birds chirp in the morning." },
    { word: "Crash", sound: "A loud breaking noise.", example: "The vase fell with a crash." },
    { word: "Hiss", sound: "The sound a snake makes.", example: "The snake hissed at the mouse." },
    { word: "Boom", sound: "A deep, loud sound.", example: "We heard a boom during the thunderstorm." },
    { word: "Quack", sound: "The sound a duck makes.", example: "The duck says quack at the pond." },
    { word: "Creak", sound: "A long, squeaky sound.", example: "The old door creaked open." },
    { word: "Pop", sound: "A short, sharp sound.", example: "The balloon went pop!" },
    { word: "Sizzle", sound: "The sound of something frying.", example: "The bacon sizzled in the pan." },
    { word: "Drip", sound: "The sound of water falling drop by drop.", example: "The faucet goes drip, drip, drip." }
  ];

  const quiz = [
    { word: "Meow", answer: "Cat" },
    { word: "Woof", answer: "Dog" },
    { word: "Quack", answer: "Duck" },
    { word: "Buzz", answer: "Bee" }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-green-700">Onomatopoeia Definition & Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is onomatopoeia?</b> Onomatopoeia is when a word sounds like the noise it describes. Writers use onomatopoeia to make writing more lively and fun!
            </p>
            <p className="text-green-700 font-semibold">Onomatopoeia words are everywhere—in comics, poems, and stories!</p>
          </header>

          {/* Onomatopoeia Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Onomatopoeia Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((item, idx) => (
                <div key={item.word} className="bg-green-50 border-l-4 border-green-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-green-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.word}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Sound:</b> {item.sound}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Spotting Onomatopoeia */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Tips for Spotting Onomatopoeia</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Listen for words that sound like the noise they describe.</li>
              <li>Onomatopoeia is common in comics, poems, and animal stories.</li>
              <li>Words like &quot;buzz,&quot; &quot;meow,&quot; and &quot;pop&quot; are classic examples.</li>
              <li>Onomatopoeia makes writing more fun and helps readers imagine sounds.</li>
            </ul>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Quiz: What Makes This Sound?</h2>
            <p className="mb-2 text-gray-700">Can you match the word to the animal or thing that makes the sound?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.word}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-green-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {quiz.map((q, idx) => (
                  <li key={idx}><b>Q{idx + 1}:</b> {q.answer}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/alliteration-examples" className="text-green-700 underline hover:text-green-900">alliteration</Link>, <Link href="/grammar/assonance-examples" className="text-green-700 underline hover:text-green-900">assonance</Link>, <Link href="/grammar/metaphor-examples" className="text-green-700 underline hover:text-green-900">metaphors</Link>, <Link href="/grammar/simile-examples" className="text-green-700 underline hover:text-green-900">similes</Link>, and <Link href="/grammar/figurative-language" className="text-green-700 underline hover:text-green-900">figurative language</Link> for more creative writing ideas.</li>
              <li>Try writing your own sound words in a story or comic.</li>
              <li>Read poems and stories to spot onomatopoeia.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 