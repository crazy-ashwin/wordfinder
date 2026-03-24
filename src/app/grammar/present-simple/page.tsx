"use client"

import Link from "next/link"

export default function PresentSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Present Simple Tense</h1>
          <p className="text-xl opacity-90">
            Master the basic present tense for facts, habits, and general truths
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-sky-800 mb-4">
                What Is the Present Simple Tense?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The present simple tense is used to express facts, habits, routines, and general truths. It&apos;s the most basic form of present tense and describes actions that happen regularly or are always true.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This tense is essential for everyday communication and is often the first tense students learn in English.
              </p>
            </div>

            {/* Formation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-sky-800 mb-6">
                How to Form Present Simple
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-sky-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-sky-700 mb-3">Positive Form</h3>
                  <p className="text-gray-700 mb-3">
                    Subject + base form of verb
                  </p>
                  <p className="text-gray-600">
                    I <strong>work</strong> every day.<br />
                    She <strong>likes</strong> music.<br />
                    They <strong>play</strong> soccer.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Third Person Singular</h3>
                  <p className="text-gray-700 mb-3">
                    Add &quot;-s&quot; or &quot;-es&quot; for he/she/it
                  </p>
                  <p className="text-gray-600">
                    He <strong>works</strong> hard.<br />
                    She <strong>watches</strong> TV.<br />
                    It <strong>runs</strong> fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Uses of Present Simple */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-sky-800 mb-6">
                When to Use Present Simple
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-sky-500 pl-6">
                  <h3 className="text-xl font-semibold text-sky-700 mb-2">Habits & Routines</h3>
                  <p className="text-gray-700 mb-3">
                    Actions that happen regularly
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>wake up</strong> at 7 AM every day.<br />
                    She <strong>goes</strong> to the gym twice a week.<br />
                    They <strong>have</strong> dinner at 6 PM.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Facts & General Truths</h3>
                  <p className="text-gray-700 mb-3">
                    Information that is always true
                  </p>
                  <p className="text-gray-600 italic">
                    The sun <strong>rises</strong> in the east.<br />
                    Water <strong>boils</strong> at 100°C.<br />
                    Birds <strong>fly</strong> south in winter.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Schedules & Timetables</h3>
                  <p className="text-gray-700 mb-3">
                    Fixed arrangements and timetables
                  </p>
                  <p className="text-gray-600 italic">
                    The train <strong>leaves</strong> at 3 PM.<br />
                    School <strong>starts</strong> in September.<br />
                    The movie <strong>begins</strong> at 8 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* Negative & Question Forms */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-sky-800 mb-6">
                Negative & Question Forms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-sky-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-sky-700 mb-3">Negative Form</h3>
                  <p className="text-gray-700 mb-3">
                    Subject + don&apos;t/doesn&apos;t + base verb
                  </p>
                  <p className="text-gray-600">
                    I <strong>don&apos;t</strong> like coffee.<br />
                    She <strong>doesn&apos;t</strong> work on weekends.<br />
                    They <strong>don&apos;t</strong> speak French.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Question Form</h3>
                  <p className="text-gray-700 mb-3">
                    Do/Does + subject + base verb
                  </p>
                  <p className="text-gray-600">
                    <strong>Do</strong> you like music?<br />
                    <strong>Does</strong> she work here?<br />
                    <strong>Do</strong> they play tennis?
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-sky-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-sky-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-sky-700 cursor-pointer hover:text-sky-800">
                    Quiz 1: Form Present Simple
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Change these verbs to present simple:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I (work) every day.</p>
                      <p className="text-gray-600 text-sm">Answer: I work every day.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She (like) chocolate.</p>
                      <p className="text-gray-600 text-sm">Answer: She likes chocolate. (add -s for third person)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-blue-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 2: Choose the Right Form
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Select the correct verb form:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. He _____ (work/works) in a bank.</p>
                      <p className="text-gray-600 text-sm">Answer: works (third person singular needs -s)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. They _____ (live/lives) in London.</p>
                      <p className="text-gray-600 text-sm">Answer: live (plural subject uses base form)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-indigo-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-indigo-700 cursor-pointer hover:text-indigo-800">
                    Quiz 3: Negative Forms
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Make these sentences negative:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I like coffee.</p>
                      <p className="text-gray-600 text-sm">Answer: I don&apos;t like coffee.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She works here.</p>
                      <p className="text-gray-600 text-sm">Answer: She doesn&apos;t work here.</p>
                    </div>
                  </div>
                </details>

                <details className="bg-sky-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-sky-700 cursor-pointer hover:text-sky-800">
                    Quiz 4: Question Forms
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Make these statements into questions:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. You speak English.</p>
                      <p className="text-gray-600 text-sm">Answer: Do you speak English?</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She lives in Paris.</p>
                      <p className="text-gray-600 text-sm">Answer: Does she live in Paris?</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-sky-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• For third person singular (he/she/it), add &quot;-s&quot; to most verbs, &quot;-es&quot; to verbs ending in -s, -sh, -ch, -x, -z, -o.</p>
                <p>• The verb &quot;be&quot; is irregular: I am, you are, he/she/it is, we are, they are.</p>
                <p>• Use present simple for scheduled future events, not for personal plans.</p>
                <p>• Time expressions like &quot;always,&quot; &quot;usually,&quot; &quot;often,&quot; &quot;sometimes,&quot; &quot;never&quot; are commonly used with present simple.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-sky-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Remember the &quot;-s&quot; rule for third person singular! It&apos;s one of the most common mistakes in English. Think: &quot;He works, she plays, it runs&quot; - always add that &quot;-s&quot; for he/she/it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-sky-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/verb-tenses" className="text-sky-600 hover:text-sky-800 hover:underline">
                    Verb Tenses
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/present-continuous" className="text-sky-600 hover:text-sky-800 hover:underline">
                    Present Continuous
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/helping-verbs" className="text-sky-600 hover:text-sky-800 hover:underline">
                    Helping Verbs
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-sky-600 hover:text-sky-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-sky-600 hover:text-sky-800 hover:underline">
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
