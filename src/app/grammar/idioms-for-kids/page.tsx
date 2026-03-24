"use client";
import React from "react";
import Link from "next/link";

export default function IdiomsForKidsPage() {
  const idioms = [
    {
      idiom: "Break a leg",
      meaning: "Good luck!",
      example: "You have a spelling test today? Break a leg!"
    },
    {
      idiom: "Piece of cake",
      meaning: "Something very easy",
      example: "That math problem was a piece of cake."
    },
    {
      idiom: "Let the cat out of the bag",
      meaning: "Reveal a secret by accident",
      example: "Oops, I let the cat out of the bag about your surprise party."
    },
    {
      idiom: "Under the weather",
      meaning: "Feeling sick",
      example: "I stayed home from school because I was under the weather."
    },
    {
      idiom: "Hit the books",
      meaning: "Start studying",
      example: "It's time to hit the books for my science test."
    },
    {
      idiom: "Spill the beans",
      meaning: "Tell a secret",
      example: "Who spilled the beans about the new puppy?"
    },
    {
      idiom: "The ball is in your court",
      meaning: "It's your turn to make a decision",
      example: "I've done my part, now the ball is in your court."
    },
    {
      idiom: "Bite off more than you can chew",
      meaning: "Try to do too much at once",
      example: "I signed up for three clubs and bit off more than I could chew."
    },
    {
      idiom: "Cold feet",
      meaning: "Nervous before something important",
      example: "I got cold feet before my first piano recital."
    },
    {
      idiom: "Costs an arm and a leg",
      meaning: "Very expensive",
      example: "That video game costs an arm and a leg!"
    },
    {
      idiom: "Raining cats and dogs",
      meaning: "Raining very hard",
      example: "We couldn't go outside because it was raining cats and dogs."
    },
    {
      idiom: "Hit the hay",
      meaning: "Go to bed",
      example: "I'm tired, so I'm going to hit the hay."
    },
    {
      idiom: "In hot water",
      meaning: "In trouble",
      example: "I was in hot water for not doing my homework."
    },
    {
      idiom: "Hold your horses",
      meaning: "Wait a moment",
      example: "Hold your horses! We'll leave in a minute."
    },
    {
      idiom: "Once in a blue moon",
      meaning: "Something that happens very rarely",
      example: "We only get pizza for lunch once in a blue moon."
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-pink-700">Idioms for Kids</h1>
            <p className="text-lg text-gray-700 mb-2">
              Idioms are fun phrases that mean something different from the words they use. Learning idioms helps you understand stories, jokes, and conversations—and makes your own writing more interesting!
            </p>
            <p className="text-pink-700 font-semibold">Can you guess what these silly sayings really mean?</p>
          </header>

          {/* Idioms List */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Popular Idioms for Kids</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {idioms.map((item, idx) => (
                <div key={item.idiom} className="bg-pink-50 border-l-4 border-pink-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-pink-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.idiom}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Meaning:</b> {item.meaning}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Quiz: Match the Idiom to Its Meaning</h2>
            <p className="mb-2 text-gray-700">Can you match the idiom to what it means?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              <li>Break a leg</li>
              <li>Under the weather</li>
              <li>Piece of cake</li>
              <li>Spill the beans</li>
              <li>Once in a blue moon</li>
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-pink-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                <li>Break a leg – Good luck!</li>
                <li>Under the weather – Feeling sick</li>
                <li>Piece of cake – Something very easy</li>
                <li>Spill the beans – Tell a secret</li>
                <li>Once in a blue moon – Something that happens very rarely</li>
              </ul>
            </details>
          </section>

          {/* Conclusion Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Conclusion</h2>
            <p className="mb-2 text-gray-700">Idioms make English more fun! Try using a new idiom in your next story or conversation and see if your friends know what it means.</p>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/metaphor-examples" className="text-pink-700 underline hover:text-pink-900">metaphors</Link>, <Link href="/grammar/figurative-language" className="text-pink-700 underline hover:text-pink-900">figurative language</Link>, and <b>similes</b> for more fun with language.</li>
              <li>Practice with creative writing prompts using idioms.</li>
              <li>Read stories and try to spot idioms in the text.</li>
              <li>Ask a teacher or friend to quiz you on idioms.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 