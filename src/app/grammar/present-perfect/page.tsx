"use client"

import Link from "next/link"

export default function PresentPerfect() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Present Perfect Tense
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the present perfect tense to express completed actions with present relevance
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What is the Present Perfect Tense?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The present perfect tense is a <Link href="/grammar/verb-tenses" className="text-indigo-600 hover:text-indigo-800 font-semibold">verb tense</Link> that connects the past to the present. It is formed using <Link href="/grammar/helping-verbs" className="text-indigo-600 hover:text-indigo-800 font-semibold">helping verbs</Link> (have/has) with the past participle of the main verb. This tense is used to express actions that were completed in the past but have relevance or impact on the present moment. Understanding the present perfect is essential for mastering <Link href="/grammar/english-grammar" className="text-indigo-600 hover:text-indigo-800 font-semibold">English grammar</Link>.
              </p>
            </div>

            {/* Formation */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                How to Form the Present Perfect
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Basic Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Formula</p>
                      <p className="text-indigo-600">Subject + have/has + past participle</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Examples</p>
                      <p className="text-indigo-600">I have finished, She has eaten</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Helping Verbs</p>
                      <p className="text-indigo-600">have (I, you, we, they), has (he, she, it)</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Sentence</p>
                      <p className="text-indigo-600">I have finished my homework.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">Past Participles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Regular Verbs</p>
                      <p className="text-purple-600">Add -ed to base form</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Examples</p>
                      <p className="text-purple-600">work → worked, play → played</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Irregular Verbs</p>
                      <p className="text-purple-600">Different forms to memorize</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Examples</p>
                      <p className="text-purple-600">go → gone, eat → eaten</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uses of Present Perfect */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Uses of the Present Perfect Tense
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">1. Completed Actions with Present Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Definition</p>
                      <p className="text-violet-600">Actions finished in the past that affect now</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Examples</p>
                      <p className="text-violet-600">I have lost my keys. (I can&apos;t find them now)</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Usage</p>
                      <p className="text-violet-600">Emphasize present consequences</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Sentence</p>
                      <p className="text-violet-600">She has broken her leg. (She can&apos;t walk now)</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">2. Experiences in Life</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Definition</p>
                      <p className="text-indigo-600">Things that happened at some point in life</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Examples</p>
                      <p className="text-indigo-600">I have visited Paris. (At some time in my life)</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Usage</p>
                      <p className="text-indigo-600">Share life experiences</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Sentence</p>
                      <p className="text-indigo-600">Have you ever eaten sushi?</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">3. Actions Started in Past, Continuing Now</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Definition</p>
                      <p className="text-purple-600">Actions that began in the past and continue</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Examples</p>
                      <p className="text-purple-600">I have lived here for 5 years.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Usage</p>
                      <p className="text-purple-600">With time expressions</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Sentence</p>
                      <p className="text-purple-600">She has worked here since 2020.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Expressions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Time Expressions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Specific Time Expressions</h3>
                  <div className="space-y-3">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <span className="font-semibold text-indigo-800">Just:</span>
                      <span className="text-indigo-600 ml-2">Very recently completed</span>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <span className="font-semibold text-indigo-800">Already:</span>
                      <span className="text-indigo-600 ml-2">Completed before expected</span>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <span className="font-semibold text-indigo-800">Yet:</span>
                      <span className="text-indigo-600 ml-2">Not completed (in questions/negatives)</span>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <span className="font-semibold text-indigo-800">Never:</span>
                      <span className="text-indigo-600 ml-2">No experience at any time</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">Duration Expressions</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-semibold text-purple-800">For:</span>
                      <span className="text-purple-600 ml-2">Length of time (for 2 hours)</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-semibold text-purple-800">Since:</span>
                      <span className="text-purple-600 ml-2">Starting point (since Monday)</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-semibold text-purple-800">Recently:</span>
                      <span className="text-purple-600 ml-2">Not long ago</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-semibold text-purple-800">Lately:</span>
                      <span className="text-purple-600 ml-2">In recent times</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Form Present Perfect
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Convert these sentences to present perfect:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I finish my work.&quot; → Present Perfect</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I have finished my work.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She eats dinner.&quot; → Present Perfect</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: She has eaten dinner.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;They go to school.&quot; → Present Perfect</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: They have gone to school.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Choose the Right Tense
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Select present perfect or simple past:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I _____ to Paris last year.&quot; (went/have been)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: went (specific time in the past)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;I _____ to Paris.&quot; (went/have been)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: have been (life experience)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;She _____ here since Monday.&quot; (worked/has worked)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: has worked (continuing action)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Time Expressions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete with appropriate time expressions:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I have lived here _____ 5 years.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: for (duration)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She has worked here _____ 2020.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: since (starting point)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;I have _____ finished my homework.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: just (very recently)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Present Perfect Challenge
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using present perfect:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;never&quot; + present perfect</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I have never eaten sushi.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;already&quot; + present perfect</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: She has already finished the book.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;for&quot; + present perfect</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: They have lived here for ten years.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>• Present perfect connects past actions to the present moment</li>
                <li>• Use &quot;have&quot; with I, you, we, they; use &quot;has&quot; with he, she, it</li>
                <li>• Regular verbs add -ed; irregular verbs have special past participle forms</li>
                <li>• Don&apos;t use present perfect with specific past time expressions</li>
                <li>• Present perfect emphasizes the result or experience, not when it happened</li>
              </ul>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Present Perfect
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">No Specific Past Time</h4>
                    <p className="text-gray-600">Don&apos;t use present perfect with specific past time expressions like &quot;yesterday&quot; or &quot;last week.&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Present Relevance</h4>
                    <p className="text-gray-600">Present perfect emphasizes how past actions affect or relate to the present situation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Life Experiences</h4>
                    <p className="text-gray-600">Use present perfect to talk about experiences that happened at some point in your life.</p>
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
                <Link href="/grammar/verb-tenses" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Verb Tenses
                </Link>
                <Link href="/grammar/helping-verbs" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Helping Verbs
                </Link>
                <Link href="/grammar/past-perfect" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Past Perfect
                </Link>
                <Link href="/grammar/simple-past-tense" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Simple Past Tense
                </Link>
                <Link href="/grammar/english-grammar" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Structure:</span>
                  <span className="text-gray-600">have/has + past participle</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Connect past to present</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-indigo-100">
                Present perfect is perfect for talking about experiences and actions that matter now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
