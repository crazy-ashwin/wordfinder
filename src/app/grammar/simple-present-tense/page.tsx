"use client"

import Link from "next/link"

export default function SimplePresentTense() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Simple Present Tense
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to use the simple present tense to talk about habits, facts, and general truths
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Is Simple Present Tense?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The simple present tense is used to describe actions that happen regularly, facts that are always true, 
                and general statements. It&apos;s one of the most commonly used verb tenses in English and is essential 
                for everyday communication.
              </p>
            </div>

            {/* Uses of Simple Present */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Uses of Simple Present Tense
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">1. Habits and Routines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">I wake up at 7 AM every day.</p>
                      <p className="text-cyan-600">Regular habit</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">She brushes her teeth twice a day.</p>
                      <p className="text-cyan-600">Daily routine</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Facts and General Truths</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">The sun rises in the east.</p>
                      <p className="text-blue-600">Universal fact</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Water boils at 100°C.</p>
                      <p className="text-blue-600">Scientific fact</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-sky-500 pl-6">
                  <h3 className="text-2xl font-semibold text-sky-700 mb-3">3. Scheduled Events</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="font-semibold text-sky-800">The train leaves at 3 PM.</p>
                      <p className="text-sky-600">Fixed schedule</p>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="font-semibold text-sky-800">School starts in September.</p>
                      <p className="text-sky-600">Regular schedule</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verb Forms */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Simple Present Verb Forms
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Subject</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Verb Form</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-cyan-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">I, You, We, They</td>
                      <td className="border border-gray-300 px-4 py-3">Base form</td>
                      <td className="border border-gray-300 px-4 py-3">I play, You work, We study</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">He, She, It</td>
                      <td className="border border-gray-300 px-4 py-3">Base form + s</td>
                      <td className="border border-gray-300 px-4 py-3">He plays, She works, It runs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Simple Present Tense Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">I work in an office.</span> (Habit)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">She speaks three languages.</span> (Fact)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-sky-50 to-cyan-50 p-6 rounded-xl border-l-4 border-sky-400">
                  <p className="text-lg">
                    <span className="font-semibold text-sky-700">The movie starts at 8 PM.</span> (Schedule)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">They live in New York.</span> (General truth)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Simple Present
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Which sentences use simple present tense?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. I work every day.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Yes - simple present (habit)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. I am working right now.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: No - present continuous</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. The sun rises in the east.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Yes - simple present (fact)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Choose the Correct Verb Form
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete with the correct verb form:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She _____ English. (speak)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: speaks (he/she/it + s)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">They _____ in London. (live)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: live (they = base form)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">He _____ to work by bus. (go)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: goes (he/she/it + s)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Simple Present Uses
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sky-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the use of simple present in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I wake up at 6 AM every day.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sky-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Habit/Routine</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The Earth revolves around the Sun.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sky-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Fact/General truth</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The train leaves at 5 PM.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sky-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Scheduled event</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Simple Present vs Other Tenses
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct tense for each situation:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Talking about a habit: &quot;I _____ coffee every morning.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: drink (simple present for habits)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Talking about right now: &quot;I _____ coffee right now.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: am drinking (present continuous for current action)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Talking about a fact: &quot;Water _____ at 100°C.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: boils (simple present for facts)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Simple Present Tense
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Remember the -s Rule</h4>
                    <p className="text-gray-600">Add -s to verbs with he, she, it subjects.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use for Regular Actions</h4>
                    <p className="text-gray-600">Simple present describes habits and routines.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use for Facts</h4>
                    <p className="text-gray-600">Simple present describes general truths and facts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/present-continuous" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Present Continuous
                </Link>
                <Link href="/grammar/present-perfect-tense" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Present Perfect Tense
                </Link>
                <Link href="/grammar/verb-tenses" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Verb Tenses
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Grammar Rules
                </Link>
                <Link href="/grammar/english-grammar" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Uses:</span>
                  <span className="text-gray-600">Habits, facts, schedules</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Verb Form:</span>
                  <span className="text-gray-600">Base form (+s for 3rd person)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-cyan-100">
                Simple present is used for actions that happen regularly or are always true!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 