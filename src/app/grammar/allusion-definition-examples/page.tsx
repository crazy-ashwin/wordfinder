"use client";
import React from "react";
import Link from "next/link";

export default function AllusionDefinitionExamplesPage() {
  const examples = [
    { allusion: "He has the Midas touch.", meaning: "He is very lucky or successful at making money.", example: "Ever since he started his business, he has the Midas touch." },
    { allusion: "She opened Pandora's box.", meaning: "She started something that caused a lot of problems.", example: "When she asked about the missing cookies, she opened Pandora's box." },
    { allusion: "He's a real Romeo.", meaning: "He is very romantic.", example: "Jake gave flowers to everyone—he's a real Romeo." },
    { allusion: "This place is like Wonderland!", meaning: "It's amazing or magical, like Alice in Wonderland.", example: "The new playground is like Wonderland!" },
    { allusion: "Don't be a Scrooge.", meaning: "Don't be mean or stingy (from A Christmas Carol).", example: "Don't be a Scrooge—share your toys!" },
    { allusion: "She met her Waterloo.", meaning: "She faced a big defeat (from Napoleon's defeat at Waterloo).", example: "I met my Waterloo in the spelling bee finals." },
    { allusion: "He's a Good Samaritan.", meaning: "He helps others (from the Bible story).", example: "The Good Samaritan helped the lost puppy." },
    { allusion: "He's a real Einstein.", meaning: "He is very smart.", example: "My friend is a real Einstein at math." },
    { allusion: "She has a Herculean task ahead.", meaning: "She has a very difficult job (from Hercules).", example: "Cleaning the garage is a Herculean task!" },
    { allusion: "He flew too close to the sun.", meaning: "He took a big risk and failed (from Icarus).", example: "He tried to cheat and got caught—he flew too close to the sun." },
    { allusion: "He's a real Sherlock Holmes.", meaning: "He is very good at solving mysteries.", example: "She found the missing keys—she's a real Sherlock Holmes!" },
    { allusion: "She has the patience of Job.", meaning: "She is very patient (from the Bible).", example: "My teacher has the patience of Job." },
    { allusion: "He acts like a Grinch.", meaning: "He is grumpy or tries to spoil fun (from The Grinch).", example: "Don't be a Grinch—join the party!" },
    { allusion: "It's a real Cinderella story.", meaning: "A surprising success (from Cinderella).", example: "Our team won the championship—it's a real Cinderella story!" },
    { allusion: "She has a heart of gold.", meaning: "She is very kind (from many fairy tales).", example: "Grandma has a heart of gold." }
  ];

  const quiz = [
    { allusion: "He has the Midas touch.", answer: "King Midas (everything he touched turned to gold)" },
    { allusion: "Don't be a Scrooge.", answer: "Scrooge from A Christmas Carol (mean and stingy)" },
    { allusion: "She's a real Sherlock Holmes.", answer: "Sherlock Holmes (famous detective)" },
    { allusion: "It's a real Cinderella story.", answer: "Cinderella (fairy tale about a surprising success)" }
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-blue-700">Allusion Definition & Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is an allusion?</b> An allusion is when a writer refers to a famous story, person, place, or event. Allusions help readers make connections and add meaning to writing.
            </p>
            <p className="text-blue-700 font-semibold">Allusions are like secret messages that make stories more interesting!</p>
          </header>

          {/* Allusion Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Allusion Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((item, idx) => (
                <div key={item.allusion} className="bg-blue-50 border-l-4 border-blue-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-blue-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.allusion}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Meaning:</b> {item.meaning}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Spotting Allusions */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Tips for Spotting Allusions</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Look for names or phrases from famous stories, history, or pop culture.</li>
              <li>Ask yourself: Does this remind me of a book, movie, or person I&apos;ve heard of?</li>
              <li>Allusions often add extra meaning or a hidden message to writing.</li>
              <li>If you don&apos;t know the reference, try looking it up!</li>
            </ul>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Quiz: What is the Reference?</h2>
            <p className="mb-2 text-gray-700">Can you figure out what story or person these allusions refer to?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.allusion}</li>
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
              <li>Learn about <Link href="/grammar/metaphor-examples" className="text-blue-700 underline hover:text-blue-900">metaphors</Link>, <Link href="/grammar/simile-examples" className="text-blue-700 underline hover:text-blue-900">similes</Link>, <Link href="/grammar/idioms-for-kids" className="text-blue-700 underline hover:text-blue-900">idioms</Link>, and <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link> for more creative writing ideas.</li>
              <li>Try spotting allusions in your favorite books and movies.</li>
              <li>Write a story using at least one allusion!</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 