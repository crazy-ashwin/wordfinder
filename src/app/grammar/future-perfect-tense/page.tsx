import Link from 'next/link';

export default function FuturePerfectTensePage() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-800">Future Perfect Tense</h1>
            <p className="text-lg text-gray-700">
              The future perfect tense describes an action that will be completed before a specific time in the future.
            </p>
            <p className="text-sm text-emerald-600 font-medium">
              Key Takeaway: This tense shows that an action will be finished by a certain future point.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              What is Future Perfect Tense?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The future perfect tense is used to describe an action that will be completed before a specific time or event in the future. 
              It emphasizes the completion of an action by a certain future point.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-800 mb-2">Structure:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Subject + will + have + past participle</li>
                <li>Example: &quot;I will have finished my homework by 8 PM.&quot;</li>
                <li>Used to show completion before a future time</li>
                <li>Often includes time expressions like &quot;by,&quot; &quot;before,&quot; &quot;by the time&quot;</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              When to Use Future Perfect Tense
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">1. Completed Action by Future Time</h3>
                <p className="text-gray-700 mb-2">To show that an action will be finished by a specific future time:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>By next week, I <strong>will have finished</strong> reading this book.</li>
                  <li>She <strong>will have completed</strong> the project by Friday.</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">2. Duration Up to Future Point</h3>
                <p className="text-gray-700 mb-2">To show how long something will have lasted:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>By the end of the year, I <strong>will have worked</strong> here for ten years.</li>
                  <li>They <strong>will have been</strong> married for twenty years by next month.</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">3. Assumptions About Past</h3>
                <p className="text-gray-700 mb-2">To make assumptions about what has happened:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>He <strong>will have arrived</strong> home by now.</li>
                  <li>They <strong>will have received</strong> our message by this time.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              Examples of Future Perfect Tense
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "By next month, I will have graduated from college.",
                "She will have finished cooking dinner by 7 PM.",
                "They will have moved to their new house by the end of the week.",
                "By the time you arrive, I will have cleaned the entire apartment.",
                "He will have completed the marathon by noon.",
                "We will have saved enough money for vacation by summer.",
                "By her birthday, she will have learned to drive.",
                "They will have published their book by next year."
              ].map((sentence, index) => (
                <div key={index} className="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400">
                  <p className="text-gray-800">{sentence}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              Time Expressions Used
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Common Time Expressions:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">By + Time/Date:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>by next week/month/year</li>
                    <li>by 5 PM/tomorrow/next Friday</li>
                    <li>by the end of the day</li>
                    <li>by then</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">By the time + Clause:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>by the time you arrive</li>
                    <li>by the time we get there</li>
                    <li>by the time she finishes</li>
                    <li>by the time it starts</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-4 rounded border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-800 mb-2">Example Sentences:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>By next month</strong>, I <strong>will have finished</strong> my course.</li>
                  <li>She <strong>will have completed</strong> the work <strong>by Friday</strong>.</li>
                  <li><strong>By the time you arrive</strong>, I <strong>will have prepared</strong> everything.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              Worksheet 1: Complete the Sentences
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Fill in the blanks with the correct future perfect form:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. By next year, I _____ (graduate) from university.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have graduated</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. She _____ (finish) her homework by dinner time.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have finished</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. By the end of the month, they _____ (move) to their new house.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have moved</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. He _____ (complete) the project by Friday.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have completed</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. By the time you arrive, I _____ (clean) the entire house.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have cleaned</strong></p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              Worksheet 2: Identify the Tense
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Identify which sentences use the future perfect tense:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. &quot;I will have finished my work by 5 PM.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Yes</strong> - Future Perfect (will have + past participle)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. &quot;I will finish my work by 5 PM.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>No</strong> - Simple Future (will + base form)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. &quot;She will have completed the course by next month.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Yes</strong> - Future Perfect (will have + past participle)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. &quot;They have finished their homework.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>No</strong> - Present Perfect (have + past participle)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. &quot;By the time you arrive, I will have prepared dinner.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Yes</strong> - Future Perfect (will have + past participle)</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              Worksheet 3: Create Future Perfect Sentences
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Create future perfect sentences using the given information:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. Action: finish reading a book, Time: by next week</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>By next week, I will have finished reading the book.</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. Action: save money, Time: by the end of the year</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>By the end of the year, I will have saved enough money.</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. Action: complete the project, Time: by Friday</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>By Friday, we will have completed the project.</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. Action: learn to drive, Time: by her birthday</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>By her birthday, she will have learned to drive.</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. Action: arrive home, Time: by the time you call</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>By the time you call, I will have arrived home.</strong></p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              Tips for Using Future Perfect Tense
            </h2>
            <div className="bg-emerald-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-emerald-800">Use time expressions</h3>
                  <p className="text-gray-700">Always include time expressions like &quot;by,&quot; &quot;before,&quot; or &quot;by the time&quot; to show when the action will be completed.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-emerald-800">Focus on completion</h3>
                  <p className="text-gray-700">This tense emphasizes that an action will be finished by a certain time, not just that it will happen.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-emerald-800">Use with plans and predictions</h3>
                  <p className="text-gray-700">Perfect for talking about what you expect to have accomplished by a future time.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-emerald-800">Practice with real situations</h3>
                  <p className="text-gray-700">Use this tense when making plans or discussing deadlines to become more comfortable with it.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/future-perfect-continuous" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Future Perfect Continuous</h3>
                <p className="text-gray-700 text-sm">Learn about the continuous aspect of future perfect tense.</p>
              </Link>
              
              <Link href="/grammar/verb-tenses" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="font-semibold text-green-800">Verb Tenses</h3>
                <p className="text-gray-700 text-sm">Explore all the different verb tenses in English.</p>
              </Link>
              
              <Link href="/grammar/parts-of-speech" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="font-semibold text-yellow-800">Parts of Speech</h3>
                <p className="text-gray-700 text-sm">Understand the building blocks of language including verbs.</p>
              </Link>
              
              <Link href="/grammar/helping-verbs" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <h3 className="font-semibold text-purple-800">Helping Verbs</h3>
                <p className="text-gray-700 text-sm">Learn about auxiliary verbs used in complex tenses.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 