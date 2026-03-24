import Link from 'next/link';

export default function FuturePerfectContinuousPage() {
  return (
    <div className="min-h-screen bg-teal-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-800">Future Perfect Continuous</h1>
            <p className="text-lg text-gray-700">
              The future perfect continuous tense describes an action that will have been ongoing for a period of time before a specific point in the future.
            </p>
            <p className="text-sm text-teal-600 font-medium">
              Key Takeaway: This tense emphasizes the duration of an action that will be completed in the future.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2">
              What is Future Perfect Continuous?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The future perfect continuous tense is used to describe an action that will have been in progress for a specific duration 
              before a particular time in the future. It emphasizes both the completion of the action and its ongoing nature.
            </p>
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-2">Structure:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Subject + will + have + been + verb-ing</li>
                <li>Example: &quot;I will have been studying for three hours by 5 PM.&quot;</li>
                <li>Used to show duration of an action up to a future point</li>
                <li>Often includes time expressions like &quot;for,&quot; &quot;since,&quot; &quot;by&quot;</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2">
              When to Use Future Perfect Continuous
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">1. Duration of Action</h3>
                <p className="text-gray-700 mb-2">To show how long an action will have been happening:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>By next month, I <strong>will have been working</strong> here for five years.</li>
                  <li>She <strong>will have been studying</strong> for six hours by dinner time.</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">2. Ongoing Action at Future Point</h3>
                <p className="text-gray-700 mb-2">To describe an action that will still be in progress:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>By the time you arrive, I <strong>will have been waiting</strong> for two hours.</li>
                  <li>They <strong>will have been traveling</strong> for a week by Friday.</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">3. Cause and Effect</h3>
                <p className="text-gray-700 mb-2">To explain the result of a long-term action:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>By the end of the year, he <strong>will have been saving</strong> money for a house.</li>
                  <li>She <strong>will have been practicing</strong> piano for ten years by her recital.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2">
              Examples of Future Perfect Continuous
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "By next week, I will have been studying English for three years.",
                "She will have been working at the company for a decade by December.",
                "By the time you get home, I will have been cooking dinner for two hours.",
                "They will have been living in this city for five years by next month.",
                "By the end of the day, he will have been driving for eight hours.",
                "She will have been teaching for twenty years by her retirement.",
                "By midnight, we will have been watching movies for six hours.",
                "He will have been running his business for fifteen years by next year."
              ].map((sentence, index) => (
                <div key={index} className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400">
                  <p className="text-gray-800">{sentence}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2">
              Time Expressions Used
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Common Time Expressions:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Duration:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>for + period of time</li>
                    <li>since + point in time</li>
                    <li>all day/week/month</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Future Point:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>by + time/date</li>
                    <li>by the time + clause</li>
                    <li>by then</li>
                    <li>by the end of</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-4 rounded border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-800 mb-2">Example Sentences:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>By next month, I <strong>will have been working</strong> here <strong>for five years</strong>.</li>
                  <li>She <strong>will have been studying</strong> <strong>since morning</strong> by the time you call.</li>
                  <li>By the end of the week, they <strong>will have been traveling</strong> <strong>all week</strong>.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2">
              Worksheet 1: Complete the Sentences
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Fill in the blanks with the correct future perfect continuous form:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. By next year, I _____ (work) at this company for ten years.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have been working</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. She _____ (study) for six hours by the time you arrive.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have been studying</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. By the end of the month, they _____ (live) in this house for five years.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have been living</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. He _____ (drive) for eight hours by the time he reaches home.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have been driving</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. By her birthday, she _____ (practice) piano for ten years.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will have been practicing</strong></p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2">
              Worksheet 2: Identify the Tense
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Identify which sentences use the future perfect continuous tense:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. &quot;I will have been working here for five years by next month.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Yes</strong> - Future Perfect Continuous (will have been + verb-ing)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. &quot;I will work here for five years.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>No</strong> - Simple Future (will + base form)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. &quot;She will have been studying since morning.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Yes</strong> - Future Perfect Continuous (will have been + verb-ing)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. &quot;They have been working here for five years.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>No</strong> - Present Perfect Continuous (have been + verb-ing)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. &quot;By the end of the day, he will have been driving for eight hours.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-teal-600 hover:text-teal-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Yes</strong> - Future Perfect Continuous (will have been + verb-ing)</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2">
              Tips for Using Future Perfect Continuous
            </h2>
            <div className="bg-teal-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-teal-800">Use with time expressions</h3>
                    <p className="text-gray-700">Always include time expressions like &quot;for,&quot; &quot;since,&quot; &quot;by,&quot; or &quot;by the time&quot; to show duration and future point.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-teal-800">Emphasize duration</h3>
                  <p className="text-gray-700">This tense is perfect when you want to emphasize how long an action will have been happening.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-teal-800">Consider the context</h3>
                  <p className="text-gray-700">Use this tense when you need to show both the completion and ongoing nature of an action in the future.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-teal-800">Practice regularly</h3>
                  <p className="text-gray-700">This is a complex tense, so practice using it in different contexts to become comfortable with it.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/future-perfect-tense" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Future Perfect Tense</h3>
                <p className="text-gray-700 text-sm">Learn about the future perfect tense without continuous aspect.</p>
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