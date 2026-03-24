"use client"

import Link from "next/link"

export default function PastPerfect() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Past Perfect Tense</h1>
          <p className="text-xl opacity-90">
            Master the tense that shows actions completed before other past actions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                What Is the Past Perfect Tense?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The past perfect tense describes actions that were completed before another action or point in the past. It helps establish the sequence of events and shows which action happened first.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This tense is formed using &quot;had&quot; + the past participle of the main verb.
              </p>
            </div>

            {/* Formation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                How to Form the Past Perfect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Basic Structure</h3>
                  <p className="text-gray-700 mb-3">
                    Subject + had + past participle
                  </p>
                  <p className="text-gray-600">
                    I <strong>had finished</strong> my work.<br />
                    She <strong>had visited</strong> Paris.<br />
                    They <strong>had studied</strong> English.
                  </p>
                </div>
                <div className="bg-violet-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-violet-700 mb-3">Past Participles</h3>
                  <p className="text-gray-700 mb-3">
                    Regular verbs: add &quot;-ed&quot;<br />
                    Irregular verbs: unique forms
                  </p>
                  <p className="text-gray-600">
                    work → worked<br />
                    go → gone<br />
                    see → seen<br />
                    eat → eaten
                  </p>
                </div>
              </div>
            </div>

            {/* Uses of Past Perfect */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                When to Use Past Perfect
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Completed Actions Before Another Past Action</h3>
                  <p className="text-gray-700 mb-3">
                    Show which action happened first
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>had finished</strong> my homework before dinner.<br />
                    She <strong>had already left</strong> when I arrived.<br />
                    They <strong>had played</strong> for hours before bedtime.
                  </p>
                </div>
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-xl font-semibold text-violet-700 mb-2">Past Experiences</h3>
                  <p className="text-gray-700 mb-3">
                    Actions that happened before a specific time
                  </p>
                  <p className="text-gray-600 italic">
                    By 2010, I <strong>had lived</strong> in three countries.<br />
                    Before the party, she <strong>had never met</strong> John.<br />
                    By last week, they <strong>had completed</strong> the project.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Conditional Sentences</h3>
                  <p className="text-gray-700 mb-3">
                    In if-clauses for unreal past situations
                  </p>
                  <p className="text-gray-600 italic">
                    If I <strong>had known</strong> the truth, I would have told you.<br />
                    She would have come if she <strong>had received</strong> the invitation.<br />
                    They would have won if they <strong>had practiced</strong> more.
                  </p>
                </div>
              </div>
            </div>

            {/* Past Perfect vs. Simple Past */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Past Perfect vs. Simple Past
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Past Perfect</h3>
                  <p className="text-gray-700 mb-3">
                    Action completed before another past action
                  </p>
                  <p className="text-gray-600">
                    I <strong>had finished</strong> my work when you called.<br />
                    She <strong>had already eaten</strong> when I arrived.<br />
                    They <strong>had left</strong> before the movie started.
                  </p>
                </div>
                <div className="bg-violet-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-violet-700 mb-3">Simple Past</h3>
                  <p className="text-gray-700 mb-3">
                    Action that happened at a specific time
                  </p>
                  <p className="text-gray-600">
                    I <strong>finished</strong> my work at 5 PM.<br />
                    She <strong>ate</strong> dinner at 7 PM.<br />
                    They <strong>left</strong> the theater at 10 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-purple-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-purple-700 cursor-pointer hover:text-purple-800">
                    Quiz 1: Form Past Perfect
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Change these verbs to past perfect:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I (finish) my work before dinner.</p>
                      <p className="text-gray-600 text-sm">Answer: I had finished my work before dinner.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She (already/leave) when I arrived.</p>
                      <p className="text-gray-600 text-sm">Answer: She had already left when I arrived.</p>
                    </div>
                  </div>
                </details>

                <details className="bg-violet-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-violet-700 cursor-pointer hover:text-violet-800">
                    Quiz 2: Choose the Right Tense
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which tense is correct?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I had finished my work when you called&quot; or &quot;I finished my work when you called&quot;?</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;I had finished my work when you called&quot; (past perfect shows completion before the call)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;By 2010, I lived in three countries&quot; or &quot;By 2010, I had lived in three countries&quot;?</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;By 2010, I had lived in three countries&quot; (past perfect for completed action by a specific time)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-indigo-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-indigo-700 cursor-pointer hover:text-indigo-800">
                    Quiz 3: Sequence of Events
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Put these events in chronological order:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I arrived at the party. 2. The party started. 3. I had finished my homework.</p>
                      <p className="text-gray-600 text-sm">Answer: 3, 2, 1 (homework finished first, then party started, then I arrived)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She had already eaten dinner. She went to bed. She was hungry.</p>
                      <p className="text-gray-600 text-sm">Answer: She was hungry, she had already eaten dinner, she went to bed (this doesn&apos;t make sense - needs revision)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-purple-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-purple-700 cursor-pointer hover:text-purple-800">
                    Quiz 4: Conditional Sentences
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Complete these conditional sentences:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. If I _____ (know) the truth, I would have told you.</p>
                      <p className="text-gray-600 text-sm">Answer: had known (past perfect in if-clause)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She would have come if she _____ (receive) the invitation.</p>
                      <p className="text-gray-600 text-sm">Answer: had received (past perfect in if-clause)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Past perfect is always used with another past action or time reference to show sequence.</p>
                <p>• Time expressions like &quot;before,&quot; &quot;after,&quot; &quot;by,&quot; and &quot;already&quot; often indicate past perfect usage.</p>
                <p>• In conditional sentences, past perfect shows unreal past situations.</p>
                <p>• Don&apos;t overuse past perfect - only use it when you need to show clear sequence of events.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Think of past perfect as the &quot;past of the past.&quot; Ask yourself: &quot;Did this action happen before another past action?&quot; If yes, use past perfect. If no, use simple past.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/verb-tenses" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Verb Tenses
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/simple-past-tense" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Simple Past Tense
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/present-perfect" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Present Perfect
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-purple-600 hover:text-purple-800 hover:underline">
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
