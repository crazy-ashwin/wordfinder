"use client";
import React from "react";
import Link from "next/link";

export default function PersonificationExamplesForKidsPage() {
  const examples = [
    {
      phrase: "The wind whispered through the trees.",
      meaning: "The wind made a soft sound, like whispering.",
      example: "At night, the wind whispered through the trees outside my window."
    },
    {
      phrase: "The sun smiled down on us.",
      meaning: "The sun was shining brightly and warmly.",
      example: "On our picnic, the sun smiled down on us all day." 
    },
    {
      phrase: "The leaves danced in the breeze.",
      meaning: "The leaves moved around as if they were dancing.",
      example: "In autumn, the leaves danced in the breeze." 
    },
    {
      phrase: "The alarm clock screamed at me.",
      meaning: "The alarm clock made a loud, unpleasant noise.",
      example: "This morning, my alarm clock screamed at me to wake up!" 
    },
    {
      phrase: "The moon peeked out from behind the clouds.",
      meaning: "The moon appeared slowly, as if it was peeking.",
      example: "At bedtime, the moon peeked out from behind the clouds." 
    },
    {
      phrase: "The flowers nodded their heads.",
      meaning: "The flowers moved gently, as if nodding.",
      example: "In the garden, the flowers nodded their heads in the wind." 
    },
    {
      phrase: "The car groaned as it climbed the hill.",
      meaning: "The car made a struggling, groaning sound.",
      example: "Our old car groaned as it climbed the steep hill." 
    },
    {
      phrase: "The stars winked in the night sky.",
      meaning: "The stars twinkled, as if winking.",
      example: "On clear nights, the stars winked in the night sky." 
    },
    {
      phrase: "The cookies called my name.",
      meaning: "The cookies looked so good, it felt like they were calling to be eaten.",
      example: "After dinner, the cookies called my name from the kitchen." 
    },
    {
      phrase: "The thunder grumbled angrily.",
      meaning: "The thunder made a loud, angry sound.",
      example: "During the storm, the thunder grumbled angrily." 
    },
    {
      phrase: "The clock hands raced around the face.",
      meaning: "Time seemed to move very quickly.",
      example: "During recess, the clock hands raced around the face." 
    },
    {
      phrase: "The ocean waves hugged the shore.",
      meaning: "The waves gently touched the shore, like a hug.",
      example: "On vacation, the ocean waves hugged the shore." 
    },
    {
      phrase: "The computer refused to cooperate.",
      meaning: "The computer wasn't working, as if it was refusing to help.",
      example: "My computer refused to cooperate during my homework." 
    },
    {
      phrase: "The fire swallowed the logs.",
      meaning: "The fire burned up the logs quickly, as if eating them.",
      example: "At the campfire, the fire swallowed the logs." 
    },
    {
      phrase: "The phone sang loudly.",
      meaning: "The phone rang with a loud sound, like singing.",
      example: "When Grandma called, the phone sang loudly." 
    }
  ];

  const quiz = [
    {
      phrase: "The flowers nodded their heads in the wind.",
      answer: "Flowers"
    },
    {
      phrase: "The thunder grumbled angrily.",
      answer: "Thunder"
    },
    {
      phrase: "The cookies called my name.",
      answer: "Cookies"
    },
    {
      phrase: "The wind whispered through the trees.",
      answer: "Wind"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-green-700">Personification Examples for Kids</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is personification?</b> Personification is when we give human qualities to things that aren&apos;t human—like animals, objects, or even ideas! Writers use personification to make stories and poems more lively and fun.
            </p>
            <p className="text-green-700 font-semibold">Personification helps us imagine the world in a more creative way.</p>
          </header>

          {/* Personification List */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Common Personification Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((item, idx) => (
                <div key={item.phrase} className="bg-green-50 border-l-4 border-green-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-green-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.phrase}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Meaning:</b> {item.meaning}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Quiz: What Is Being Personified?</h2>
            <p className="mb-2 text-gray-700">Can you tell what is being given human qualities in these sentences?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.phrase}</li>
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

          {/* How to Spot Personification */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">How to Spot Personification</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Look for things, animals, or ideas doing something only people can do (like talking, smiling, or dancing).</li>
              <li>Ask: Is this object or animal acting like a person?</li>
              <li>Personification often uses verbs like &quot;whispered,&quot; &quot;danced,&quot; or &quot;called.&quot;</li>
              <li>It makes writing more fun and helps you imagine things better!</li>
            </ul>
          </section>

          {/* Conclusion Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Conclusion</h2>
            <p className="mb-2 text-gray-700">Try writing your own personification! Think of something that&apos;s not a person and imagine what it would do if it were alive. For example, &quot;The pencil raced across the page.&quot;</p>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/metaphor-examples" className="text-green-700 underline hover:text-green-900">metaphors</Link>, <Link href="/grammar/idioms-for-kids" className="text-green-700 underline hover:text-green-900">idioms</Link>, and <Link href="/grammar/figurative-language" className="text-green-700 underline hover:text-green-900">figurative language</Link> for more creative writing ideas.</li>
              <li>Try spotting personification in your favorite stories and poems.</li>
              <li>Write a poem or story using at least two personification examples!</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 