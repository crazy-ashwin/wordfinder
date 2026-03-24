"use client"

import Link from "next/link"

export default function ActionVerbs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-500 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Action Verbs</h1>
          <p className="text-xl opacity-90">
            Learn about verbs that show physical and mental actions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-lime-800 mb-4">
                What Are Action Verbs?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Action verbs are words that express physical or mental actions. They show what the subject of a sentence is doing, thinking, or experiencing.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Unlike linking verbs (which connect subjects to descriptions), action verbs show movement, change, or activity that can be observed or imagined.
              </p>
            </div>

            {/* Types of Action Verbs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-lime-800 mb-6">
                Types of Action Verbs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-lime-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-lime-700 mb-3">Physical Actions</h3>
                  <p className="text-gray-700 mb-3">
                    Verbs that show visible movement
                  </p>
                  <p className="text-gray-600">
                    run, jump, swim, dance<br />
                    write, read, cook, drive<br />
                    climb, fall, push, pull
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Mental Actions</h3>
                  <p className="text-gray-700 mb-3">
                    Verbs that show thinking processes
                  </p>
                  <p className="text-gray-600">
                    think, believe, understand<br />
                    remember, forget, imagine<br />
                    decide, plan, consider
                  </p>
                </div>
              </div>
            </div>

            {/* More Categories */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-lime-800 mb-6">
                More Categories
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-lime-500 pl-6">
                  <h3 className="text-xl font-semibold text-lime-700 mb-2">Communication Actions</h3>
                  <p className="text-gray-700 mb-3">
                    Verbs that involve speaking or writing
                  </p>
                  <p className="text-gray-600 italic">
                    speak, talk, whisper, shout<br />
                    explain, describe, announce<br />
                    ask, answer, suggest, argue
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Emotional Actions</h3>
                  <p className="text-gray-700 mb-3">
                    Verbs that show feelings and emotions
                  </p>
                  <p className="text-gray-600 italic">
                    love, hate, fear, worry<br />
                    enjoy, appreciate, admire<br />
                    trust, respect, care
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">Sensory Actions</h3>
                  <p className="text-gray-700 mb-3">
                    Verbs that involve the five senses
                  </p>
                  <p className="text-gray-600 italic">
                    see, hear, smell, taste, feel<br />
                    observe, notice, detect<br />
                    listen, watch, examine
                  </p>
                </div>
              </div>
            </div>

            {/* Action vs. Linking Verbs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-lime-800 mb-6">
                Action vs. Linking Verbs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-lime-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-lime-700 mb-3">Action Verbs</h3>
                  <p className="text-gray-700 mb-3">
                    Show what the subject does
                  </p>
                  <p className="text-gray-600">
                    The cat <strong>chases</strong> the mouse.<br />
                    She <strong>studies</strong> hard.<br />
                    They <strong>play</strong> soccer.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Linking Verbs</h3>
                  <p className="text-gray-700 mb-3">
                    Connect subject to description
                  </p>
                  <p className="text-gray-600">
                    The cat <strong>is</strong> playful.<br />
                    She <strong>feels</strong> tired.<br />
                    They <strong>seem</strong> happy.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-lime-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-lime-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-lime-700 cursor-pointer hover:text-lime-800">
                    Quiz 1: Identify Action Verbs
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which words are action verbs?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;The bird flies high in the sky.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: flies (action verb showing movement)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;She thinks about the problem.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: thinks (action verb showing mental activity)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-green-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-green-700 cursor-pointer hover:text-green-800">
                    Quiz 2: Action vs. Linking
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Classify each verb:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;The flowers smell wonderful.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: smell (linking verb - connects flowers to wonderful)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;I smell the flowers.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: smell (action verb - shows what I am doing)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-emerald-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-emerald-700 cursor-pointer hover:text-emerald-800">
                    Quiz 3: Verb Categories
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which category does each action verb belong to?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;whisper&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Communication Actions</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;worry&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Emotional Actions</p>
                    </div>
                  </div>
                </details>

                <details className="bg-lime-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-lime-700 cursor-pointer hover:text-lime-800">
                    Quiz 4: Complete Sentences
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add appropriate action verbs:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. The children _____ in the park.</p>
                      <p className="text-gray-600 text-sm">Answer: play, run, jump, laugh (physical actions)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She _____ about her future.</p>
                      <p className="text-gray-600 text-sm">Answer: thinks, worries, dreams, plans (mental actions)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-lime-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Action verbs can be in any tense (present, past, future) and can be modified by adverbs.</p>
                <p>• Some verbs can function as both action and linking verbs depending on how they&apos;re used in a sentence.</p>
                <p>• Action verbs make writing more dynamic and engaging by showing movement and activity.</p>
                <p>• Use strong, specific action verbs instead of weak ones to make your writing more vivid.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-lime-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                To identify action verbs, ask yourself: &quot;What is the subject doing?&quot; If you can answer with a specific action, it&apos;s an action verb. If you can only describe what the subject is like, it&apos;s probably a linking verb.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-lime-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/verbs" className="text-lime-600 hover:text-lime-800 hover:underline">
                    Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/linking-verbs" className="text-lime-600 hover:text-lime-800 hover:underline">
                    Linking Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/helping-verbs" className="text-lime-600 hover:text-lime-800 hover:underline">
                    Helping Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-lime-600 hover:text-lime-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-lime-600 hover:text-lime-800 hover:underline">
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
