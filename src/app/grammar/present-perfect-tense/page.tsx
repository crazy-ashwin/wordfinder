"use client"

import Link from "next/link"

export default function PresentPerfectTense() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Present Perfect Tense</h1>
          <p className="text-xl opacity-90">
            Master the present perfect tense for expressing completed actions with present relevance
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-indigo-800 mb-4">
                What Is the Present Perfect Tense?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The present perfect tense connects the past to the present. It describes actions that happened at an unspecified time in the past but have relevance or impact on the present moment.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This tense is formed using &quot;have&quot; or &quot;has&quot; + the past participle of the main verb.
              </p>
            </div>

            {/* Formation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">
                How to Form the Present Perfect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3">Basic Structure</h3>
                  <p className="text-gray-700 mb-3">
                    Subject + have/has + past participle
                  </p>
                  <p className="text-gray-600">
                    I <strong>have finished</strong> my work.<br />
                    She <strong>has visited</strong> Paris.<br />
                    They <strong>have studied</strong> English.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Past Participles</h3>
                  <p className="text-gray-700 mb-3">
                    Regular verbs: add &quot;-ed&quot;<br />
                    Irregular verbs: unique forms
                  </p>
                  <p className="text-gray-600">
                    work → worked<br />
                    go → gone<br />
                    see → seen
                  </p>
                </div>
              </div>
            </div>

            {/* Uses of Present Perfect */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">
                When to Use Present Perfect
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Completed Actions with Present Results</h3>
                  <p className="text-gray-700 mb-3">
                    Actions that happened in the past but affect the present
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>have lost</strong> my keys. (I can&apos;t find them now)<br />
                    She <strong>has broken</strong> her leg. (She can&apos;t walk now)<br />
                    They <strong>have finished</strong> the project. (It&apos;s complete now)
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Life Experiences</h3>
                  <p className="text-gray-700 mb-3">
                    Things that have happened at some point in your life
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>have been</strong> to Japan.<br />
                    She <strong>has never eaten</strong> sushi.<br />
                    They <strong>have traveled</strong> around the world.
                  </p>
                </div>
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-xl font-semibold text-violet-700 mb-2">Actions That Started in the Past and Continue</h3>
                  <p className="text-gray-700 mb-3">
                    Actions that began in the past and are still happening
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>have lived</strong> here for five years.<br />
                    She <strong>has worked</strong> at this company since 2010.<br />
                    They <strong>have known</strong> each other since childhood.
                  </p>
                </div>
              </div>
            </div>

            {/* Time Expressions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">
                Common Time Expressions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3">Specific Time Words</h3>
                  <p className="text-gray-700 mb-3">
                    Words that often go with present perfect
                  </p>
                  <p className="text-gray-600">
                    just, already, yet<br />
                    never, ever, before<br />
                    recently, lately, so far
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Duration Expressions</h3>
                  <p className="text-gray-700 mb-3">
                    For actions that continue over time
                  </p>
                  <p className="text-gray-600">
                    for + period of time<br />
                    since + point in time<br />
                    how long
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-indigo-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-indigo-700 cursor-pointer hover:text-indigo-800">
                    Quiz 1: Form Present Perfect
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Change these verbs to present perfect:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I (finish) my homework.</p>
                      <p className="text-gray-600 text-sm">Answer: I have finished my homework.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She (go) to the store.</p>
                      <p className="text-gray-600 text-sm">Answer: She has gone to the store.</p>
                    </div>
                  </div>
                </details>

                <details className="bg-purple-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-purple-700 cursor-pointer hover:text-purple-800">
                    Quiz 2: Choose the Right Tense
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which sentence uses present perfect correctly?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I went to Paris last year&quot; or &quot;I have been to Paris&quot;?</p>
                      <p className="text-gray-600 text-sm">Answer: Both are correct, but &quot;I have been to Paris&quot; emphasizes the experience.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;I have finished my work yesterday&quot; or &quot;I finished my work yesterday&quot;?</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;I finished my work yesterday&quot; (specific time needs simple past)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-violet-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-violet-700 cursor-pointer hover:text-violet-800">
                    Quiz 3: Time Expressions
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Complete with appropriate time expressions:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I have lived here _____ five years.</p>
                      <p className="text-gray-600 text-sm">Answer: for</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She has worked here _____ 2015.</p>
                      <p className="text-gray-600 text-sm">Answer: since</p>
                    </div>
                  </div>
                </details>

                <details className="bg-indigo-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-indigo-700 cursor-pointer hover:text-indigo-800">
                    Quiz 4: Present Perfect vs. Simple Past
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Choose the correct tense:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I _____ (never/visit) New York before.</p>
                      <p className="text-gray-600 text-sm">Answer: have never visited (present perfect for life experience)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. I _____ (visit) New York in 2019.</p>
                      <p className="text-gray-600 text-sm">Answer: visited (simple past for specific time)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-indigo-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Don&apos;t use present perfect with specific past time expressions (yesterday, last week, in 2010).</p>
                <p>• Use &quot;for&quot; with periods of time and &quot;since&quot; with points in time.</p>
                <p>• Present perfect emphasizes the result or experience, while simple past focuses on when something happened.</p>
                <p>• In American English, &quot;have got&quot; is often used instead of &quot;have&quot; in informal speech.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Think of present perfect as a bridge between past and present. Ask yourself: &quot;Does this past action have an impact on the present?&quot; If yes, use present perfect.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/verb-tenses" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                    Verb Tenses
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/helping-verbs" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                    Helping Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/simple-past-tense" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                    Simple Past Tense
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-indigo-600 hover:text-indigo-800 hover:underline">
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
