"use client"

import Link from "next/link"

export default function SimplePastTense() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Simple Past Tense</h1>
          <p className="text-xl opacity-90">
            Master the basic past tense for completed actions and events
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-4">
                What Is the Simple Past Tense?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The simple past tense is used to describe actions, events, or situations that happened and were completed at a specific time in the past. It&apos;s one of the most commonly used tenses in English.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This tense helps us talk about what happened yesterday, last week, or any time before now.
              </p>
            </div>

            {/* Formation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                How to Form the Simple Past
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-rose-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">Regular Verbs</h3>
                  <p className="text-gray-700 mb-3">
                    Add &quot;-ed&quot; to the base form
                  </p>
                  <p className="text-gray-600">
                    work → <strong>worked</strong><br />
                    play → <strong>played</strong><br />
                    study → <strong>studied</strong><br />
                    visit → <strong>visited</strong>
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Irregular Verbs</h3>
                  <p className="text-gray-700 mb-3">
                    Have unique past forms
                  </p>
                  <p className="text-gray-600">
                    go → <strong>went</strong><br />
                    see → <strong>saw</strong><br />
                    eat → <strong>ate</strong><br />
                    write → <strong>wrote</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Uses of Simple Past */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                When to Use Simple Past
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-xl font-semibold text-rose-700 mb-2">Completed Actions in the Past</h3>
                  <p className="text-gray-700 mb-3">
                    Actions that happened and finished at a specific time
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>visited</strong> Paris last summer.<br />
                    She <strong>finished</strong> her homework at 8 PM.<br />
                    They <strong>played</strong> soccer yesterday.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Past Habits or States</h3>
                  <p className="text-gray-700 mb-3">
                    Things that were true in the past but aren&apos;t now
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>lived</strong> in London for five years.<br />
                    She <strong>worked</strong> as a teacher.<br />
                    They <strong>liked</strong> classical music.
                  </p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-xl font-semibold text-fuchsia-700 mb-2">Sequential Events</h3>
                  <p className="text-gray-700 mb-3">
                    Actions that happened one after another
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>woke up</strong>, <strong>showered</strong>, and <strong>went</strong> to work.<br />
                    She <strong>opened</strong> the door and <strong>entered</strong> the room.<br />
                    The movie <strong>started</strong> at 7 PM and <strong>ended</strong> at 9 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* Time Expressions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                Common Time Expressions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-rose-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">Specific Time</h3>
                  <p className="text-gray-700 mb-3">
                    Exact times and dates
                  </p>
                  <p className="text-gray-600">
                    yesterday, last night<br />
                    last week, last month<br />
                    in 2010, on Monday<br />
                    at 3 PM, two hours ago
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">General Past</h3>
                  <p className="text-gray-700 mb-3">
                    Vague past time references
                  </p>
                  <p className="text-gray-600">
                    before, ago, previously<br />
                    once, in the past<br />
                    when I was young<br />
                    during my childhood
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-rose-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-rose-700 cursor-pointer hover:text-rose-800">
                    Quiz 1: Form Simple Past
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Change these verbs to simple past:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I (visit) my grandmother last week.</p>
                      <p className="text-gray-600 text-sm">Answer: I visited my grandmother last week.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She (go) to the store yesterday.</p>
                      <p className="text-gray-600 text-sm">Answer: She went to the store yesterday. (irregular verb)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-pink-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-pink-700 cursor-pointer hover:text-pink-800">
                    Quiz 2: Choose the Right Form
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Select the correct verb form:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I _____ (work/worked) in that company for five years.</p>
                      <p className="text-gray-600 text-sm">Answer: worked (simple past for completed past action)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She _____ (see/saw) the movie last night.</p>
                      <p className="text-gray-600 text-sm">Answer: saw (irregular verb in simple past)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-fuchsia-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-fuchsia-700 cursor-pointer hover:text-fuchsia-800">
                    Quiz 3: Time Expressions
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Complete with appropriate time expressions:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I finished my homework _____.</p>
                      <p className="text-gray-600 text-sm">Answer: yesterday, last night, two hours ago, etc.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She lived in Paris _____.</p>
                      <p className="text-gray-600 text-sm">Answer: in 2010, last year, for five years, etc.</p>
                    </div>
                  </div>
                </details>

                <details className="bg-rose-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-rose-700 cursor-pointer hover:text-rose-800">
                    Quiz 4: Simple Past vs. Present Perfect
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Choose the correct tense:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I _____ (went/have been) to Paris in 2010.</p>
                      <p className="text-gray-600 text-sm">Answer: went (simple past for specific past time)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. I _____ (went/have been) to Paris before.</p>
                      <p className="text-gray-600 text-sm">Answer: have been (present perfect for life experience)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Simple past is used for completed actions with specific time references.</p>
                <p>• Regular verbs add &quot;-ed,&quot; but irregular verbs have unique forms that must be memorized.</p>
                <p>• Don&apos;t use simple past for actions that continue to the present - use present perfect instead.</p>
                <p>• Time expressions help determine whether to use simple past or present perfect.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-rose-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                To identify when to use simple past, ask yourself: &quot;Did this action happen at a specific time in the past and is it finished?&quot; If yes, use simple past. If the action continues to the present, consider present perfect.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-rose-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/verb-tenses" className="text-rose-600 hover:text-rose-800 hover:underline">
                    Verb Tenses
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/past-perfect" className="text-rose-600 hover:text-rose-800 hover:underline">
                    Past Perfect
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/present-perfect" className="text-rose-600 hover:text-rose-800 hover:underline">
                    Present Perfect
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-rose-600 hover:text-rose-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-rose-600 hover:text-rose-800 hover:underline">
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
