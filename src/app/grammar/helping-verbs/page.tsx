"use client"

import Link from "next/link"

export default function HelpingVerbs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Helping Verbs</h1>
          <p className="text-xl opacity-90">
            Master auxiliary verbs that support and modify main verbs
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-violet-800 mb-4">
                What Are Helping Verbs?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Helping verbs (also called auxiliary verbs) are verbs that work together with main verbs to express different meanings, such as tense, mood, voice, and possibility.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                They help create verb phrases and add important grammatical information to sentences without changing the core meaning of the main verb.
              </p>
            </div>

            {/* Primary Helping Verbs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-violet-800 mb-6">
                Primary Helping Verbs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-violet-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-violet-700 mb-3">Be, Have, Do</h3>
                  <p className="text-gray-700 mb-3">
                    The most common helping verbs
                  </p>
                  <p className="text-gray-600">
                    <strong>Be:</strong> am, is, are, was, were, been, being<br />
                    <strong>Have:</strong> have, has, had<br />
                    <strong>Do:</strong> do, does, did
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Examples</h3>
                  <p className="text-gray-700 mb-3">
                    How they work with main verbs
                  </p>
                  <p className="text-gray-600">
                    I <strong>am</strong> studying.<br />
                    She <strong>has</strong> finished.<br />
                    They <strong>do</strong> understand.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Helping Verbs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-violet-800 mb-6">
                Modal Helping Verbs
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-xl font-semibold text-violet-700 mb-2">Ability & Permission</h3>
                  <p className="text-gray-700 mb-3">
                    Express what is possible or allowed
                  </p>
                  <p className="text-gray-600 italic">
                    <strong>Can:</strong> I can swim.<br />
                    <strong>Could:</strong> She could help.<br />
                    <strong>May:</strong> You may enter.<br />
                    <strong>Might:</strong> It might rain.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Obligation & Necessity</h3>
                  <p className="text-gray-700 mb-3">
                    Express what is required or expected
                  </p>
                  <p className="text-gray-600 italic">
                    <strong>Must:</strong> You must study.<br />
                    <strong>Should:</strong> We should go.<br />
                    <strong>Ought to:</strong> He ought to try.<br />
                    <strong>Have to:</strong> I have to leave.
                  </p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-xl font-semibold text-fuchsia-700 mb-2">Future & Prediction</h3>
                  <p className="text-gray-700 mb-3">
                    Express future actions or predictions
                  </p>
                  <p className="text-gray-600 italic">
                    <strong>Will:</strong> I will help.<br />
                    <strong>Would:</strong> She would come.<br />
                    <strong>Shall:</strong> We shall see.<br />
                    <strong>Going to:</strong> It is going to rain.
                  </p>
                </div>
              </div>
            </div>

            {/* Functions of Helping Verbs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-violet-800 mb-6">
                Functions of Helping Verbs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-violet-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-violet-700 mb-3">Tense Formation</h3>
                  <p className="text-gray-700 mb-3">
                    Create different verb tenses
                  </p>
                  <p className="text-gray-600">
                    Present Continuous: I <strong>am</strong> working.<br />
                    Present Perfect: She <strong>has</strong> finished.<br />
                    Future: They <strong>will</strong> arrive.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Voice & Mood</h3>
                  <p className="text-gray-700 mb-3">
                    Express passive voice and mood
                  </p>
                  <p className="text-gray-600">
                    Passive: The book <strong>was</strong> written.<br />
                    Subjunctive: If I <strong>were</strong> rich...<br />
                    Conditional: I <strong>would</strong> go.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-violet-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-violet-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-violet-700 cursor-pointer hover:text-violet-800">
                    Quiz 1: Identify Helping Verbs
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Find the helping verbs in these sentences:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I am studying for the exam.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: am (helping verb for present continuous)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;She has finished her homework.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: has (helping verb for present perfect)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-purple-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-purple-700 cursor-pointer hover:text-purple-800">
                    Quiz 2: Modal Verbs
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">What does each modal verb express?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;You must finish your work.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: must (obligation/necessity)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;I can speak French.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: can (ability)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-fuchsia-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-fuchsia-700 cursor-pointer hover:text-fuchsia-800">
                    Quiz 3: Complete Verb Phrases
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add appropriate helping verbs:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I _____ studying for hours.</p>
                      <p className="text-gray-600 text-sm">Answer: have been (present perfect continuous)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She _____ arrive tomorrow.</p>
                      <p className="text-gray-600 text-sm">Answer: will (future tense)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-violet-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-violet-700 cursor-pointer hover:text-violet-800">
                    Quiz 4: Helping vs. Main Verbs
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Identify helping and main verbs:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I am going to the store.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: am (helping), going (main verb)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;She should study harder.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: should (helping), study (main verb)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-violet-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Helping verbs always come before the main verb in a verb phrase.</p>
                <p>• Modal verbs cannot be used alone - they must always accompany a main verb.</p>
                <p>• Some helping verbs can also function as main verbs depending on context.</p>
                <p>• The combination of helping verbs creates different shades of meaning and grammatical structures.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-violet-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                To identify helping verbs, look for verbs that support or modify the main action. They often express time, possibility, obligation, or other grammatical concepts rather than the core action itself.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-violet-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/verbs" className="text-violet-600 hover:text-violet-800 hover:underline">
                    Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/action-verbs" className="text-violet-600 hover:text-violet-800 hover:underline">
                    Action Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/verb-tenses" className="text-violet-600 hover:text-violet-800 hover:underline">
                    Verb Tenses
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-violet-600 hover:text-violet-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-violet-600 hover:text-violet-800 hover:underline">
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
