"use client"

import Link from "next/link"

export default function VerbTenses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Verb Tenses</h1>
          <p className="text-xl opacity-90">
            Master the different forms of verbs to express time and action
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                What Are Verb Tenses?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Verb tenses indicate when an action takes place - in the past, present, or future. They help us communicate clearly about timing and sequence of events.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Understanding verb tenses is essential for proper grammar, clear communication, and effective writing.
              </p>
            </div>

            {/* Present Tenses */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">
                Present Tenses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">Simple Present</h3>
                  <p className="text-gray-700 mb-3">
                    Actions happening now or regularly
                  </p>
                  <p className="text-gray-600">
                    I <strong>work</strong> every day.<br />
                    She <strong>loves</strong> music.<br />
                    They <strong>play</strong> soccer.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Present Continuous</h3>
                  <p className="text-gray-700 mb-3">
                    Actions happening right now
                  </p>
                  <p className="text-gray-600">
                    I <strong>am working</strong> now.<br />
                    She <strong>is reading</strong> a book.<br />
                    They <strong>are playing</strong> outside.
                  </p>
                </div>
              </div>
            </div>

            {/* Past Tenses */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">
                Past Tenses
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">Simple Past</h3>
                  <p className="text-gray-700 mb-3">
                    Completed actions in the past
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>worked</strong> yesterday.<br />
                    She <strong>visited</strong> her grandmother.<br />
                    They <strong>played</strong> in the park.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Past Continuous</h3>
                  <p className="text-gray-700 mb-3">
                    Actions that were ongoing in the past
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>was working</strong> when you called.<br />
                    She <strong>was reading</strong> all evening.<br />
                    They <strong>were playing</strong> when it started to rain.
                  </p>
                </div>
                <div className="border-l-4 border-lime-500 pl-6">
                  <h3 className="text-xl font-semibold text-lime-700 mb-2">Past Perfect</h3>
                  <p className="text-gray-700 mb-3">
                    Actions completed before another past action
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>had finished</strong> my work before dinner.<br />
                    She <strong>had already left</strong> when I arrived.<br />
                    They <strong>had played</strong> for hours before bedtime.
                  </p>
                </div>
              </div>
            </div>

            {/* Future Tenses */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">
                Future Tenses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">Simple Future</h3>
                  <p className="text-gray-700 mb-3">
                    Actions that will happen
                  </p>
                  <p className="text-gray-600">
                    I <strong>will work</strong> tomorrow.<br />
                    She <strong>will visit</strong> next week.<br />
                    They <strong>will play</strong> in the tournament.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Going To Future</h3>
                  <p className="text-gray-700 mb-3">
                    Planned or intended actions
                  </p>
                  <p className="text-gray-600">
                    I <strong>am going to work</strong> late.<br />
                    She <strong>is going to visit</strong> her family.<br />
                    They <strong>are going to play</strong> soccer.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-emerald-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-emerald-700 cursor-pointer hover:text-emerald-800">
                    Quiz 1: Identify Verb Tenses
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">What tense is each verb?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I am studying for my exam&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Present Continuous</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;She finished her homework&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Simple Past</p>
                    </div>
                  </div>
                </details>

                <details className="bg-green-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-green-700 cursor-pointer hover:text-green-800">
                    Quiz 2: Choose the Correct Tense
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Select the correct verb form:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. Right now, I _____ (work/am working) on a project.</p>
                      <p className="text-gray-600 text-sm">Answer: am working (present continuous for current action)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. Yesterday, she _____ (visits/visited) her grandmother.</p>
                      <p className="text-gray-600 text-sm">Answer: visited (simple past for completed action)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-lime-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-lime-700 cursor-pointer hover:text-lime-800">
                    Quiz 3: Complete the Sentences
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Fill in the correct verb tense:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I _____ (go) to the store every day.</p>
                      <p className="text-gray-600 text-sm">Answer: go (simple present for habitual action)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. By next week, I _____ (finish) the project.</p>
                      <p className="text-gray-600 text-sm">Answer: will have finished (future perfect)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-emerald-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-emerald-700 cursor-pointer hover:text-emerald-800">
                    Quiz 4: Mixed Tense Challenge
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Identify all verb tenses in this paragraph:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">I <strong>am studying</strong> English now. I <strong>started</strong> learning last year. By next month, I <strong>will have studied</strong> for a whole year.</p>
                      <p className="text-gray-600 text-sm">Answer: am studying (present continuous), started (simple past), will have studied (future perfect)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Regular verbs form the past tense by adding &quot;-ed&quot; (work → worked).</p>
                <p>• Irregular verbs have unique past forms (go → went, see → saw).</p>
                <p>• Use helping verbs (am, is, are, was, were, have, has, had) with continuous and perfect tenses.</p>
                <p>• Context and time expressions help determine which tense to use.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                When choosing verb tenses, think about when the action happens and whether it&apos;s completed, ongoing, or planned. Time expressions like &quot;yesterday,&quot; &quot;now,&quot; and &quot;tomorrow&quot; are your clues.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/verbs" className="text-emerald-600 hover:text-emerald-800 hover:underline">
                    Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/helping-verbs" className="text-emerald-600 hover:text-emerald-800 hover:underline">
                    Helping Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/present-simple" className="text-emerald-600 hover:text-emerald-800 hover:underline">
                    Present Simple
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-emerald-600 hover:text-emerald-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-emerald-600 hover:text-emerald-800 hover:underline">
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
