"use client"

import Link from "next/link"

export default function AbstractNouns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Abstract Nouns</h1>
          <p className="text-xl opacity-90">
            Explore concepts, emotions, and ideas that cannot be touched or seen
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-800 mb-4">
                What Are Abstract Nouns?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Abstract nouns are words that name concepts, ideas, emotions, qualities, or states of being that cannot be perceived by the five senses. They represent things that exist in thought or feeling rather than physical reality.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Unlike concrete nouns (which you can see, touch, hear, smell, or taste), abstract nouns exist only in the mind and imagination.
              </p>
            </div>

            {/* Categories of Abstract Nouns */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-800 mb-6">
                Categories of Abstract Nouns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Emotions & Feelings</h3>
                  <p className="text-gray-700 mb-3">
                    Internal states and emotional experiences
                  </p>
                  <p className="text-gray-600">
                    happiness, love, fear<br />
                    anger, joy, sadness<br />
                    excitement, anxiety, peace
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Ideas & Concepts</h3>
                  <p className="text-gray-700 mb-3">
                    Mental constructs and theoretical concepts
                  </p>
                  <p className="text-gray-600">
                    freedom, justice, democracy<br />
                    beauty, truth, wisdom<br />
                    creativity, imagination, logic
                  </p>
                </div>
              </div>
            </div>

            {/* More Categories */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-800 mb-6">
                More Categories
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">Qualities & Characteristics</h3>
                  <p className="text-gray-700 mb-3">
                    Attributes and traits of people or things
                  </p>
                  <p className="text-gray-600 italic">
                    kindness, bravery, intelligence<br />
                    patience, honesty, loyalty<br />
                    strength, beauty, courage
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">States & Conditions</h3>
                  <p className="text-gray-700 mb-3">
                    Situations and circumstances
                  </p>
                  <p className="text-gray-600 italic">
                    health, wealth, poverty<br />
                    youth, age, illness<br />
                    success, failure, progress
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Actions & Processes</h3>
                  <p className="text-gray-700 mb-3">
                    Activities and ongoing processes
                  </p>
                  <p className="text-gray-600 italic">
                    learning, growth, change<br />
                    development, improvement, decay<br />
                    movement, stillness, silence
                  </p>
                </div>
              </div>
            </div>

            {/* Formation of Abstract Nouns */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-800 mb-6">
                Formation of Abstract Nouns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">From Adjectives</h3>
                  <p className="text-gray-700 mb-3">
                    Adding suffixes to adjectives
                  </p>
                  <p className="text-gray-600">
                    happy → happiness<br />
                    brave → bravery<br />
                    kind → kindness<br />
                    wise → wisdom
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">From Verbs</h3>
                  <p className="text-gray-700 mb-3">
                    Adding suffixes to verbs
                  </p>
                  <p className="text-gray-600">
                    learn → learning<br />
                    grow → growth<br />
                    move → movement<br />
                    create → creation
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-cyan-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-cyan-700 cursor-pointer hover:text-cyan-800">
                    Quiz 1: Identify Abstract Nouns
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which words are abstract nouns?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;The beauty of nature brings me happiness.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: beauty, happiness (abstract nouns)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;Love and friendship are important in life.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: love, friendship, life (abstract nouns)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-blue-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 2: Abstract vs. Concrete
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Classify each noun:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;The courage of the soldier impressed everyone.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: courage (abstract), soldier (concrete), everyone (concrete)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;Wisdom comes with age and experience.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: wisdom (abstract), age (abstract), experience (abstract)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-indigo-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-indigo-700 cursor-pointer hover:text-indigo-800">
                    Quiz 3: Form Abstract Nouns
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Create abstract nouns from these words:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;brave&quot; → _____</p>
                      <p className="text-gray-600 text-sm">Answer: bravery</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;learn&quot; → _____</p>
                      <p className="text-gray-600 text-sm">Answer: learning</p>
                    </div>
                  </div>
                </details>

                <details className="bg-cyan-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-cyan-700 cursor-pointer hover:text-cyan-800">
                    Quiz 4: Categories
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which category does each abstract noun belong to?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;democracy&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Ideas & Concepts</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;kindness&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Qualities & Characteristics</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Abstract nouns are often uncountable and don&apos;t have plural forms.</p>
                <p>• They can be used with quantifiers like &quot;much,&quot; &quot;little,&quot; &quot;some,&quot; and &quot;a lot of.&quot;</p>
                <p>• Abstract nouns help express complex ideas and emotions in writing and speech.</p>
                <p>• Many abstract nouns can be made concrete by adding specific examples or contexts.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                To identify abstract nouns, ask yourself: &quot;Can I see, touch, hear, smell, or taste this?&quot; If the answer is no, it&apos;s probably an abstract noun.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/nouns" className="text-cyan-600 hover:text-cyan-800 hover:underline">
                    Nouns
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/concrete-nouns" className="text-cyan-600 hover:text-cyan-800 hover:underline">
                    Concrete Nouns
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-cyan-600 hover:text-cyan-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/word-building" className="text-cyan-600 hover:text-cyan-800 hover:underline">
                    Word Building
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-cyan-600 hover:text-cyan-800 hover:underline">
                    English Grammar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
