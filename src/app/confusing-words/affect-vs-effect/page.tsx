import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affect vs Effect: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "affect" and "effect" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English writing.',
  keywords: 'affect vs effect, grammar, english, synonyms, writing tips, word differences',
}

export default function AffectVsEffectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Affect vs Effect
          </h1>
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these commonly confused words
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Affect&quot;</strong> is usually a verb meaning to influence or have an impact on something. 
            <strong>&quot;Effect&quot;</strong> is usually a noun meaning a result or consequence of something. 
            While both relate to change, &quot;affect&quot; is the action, and &quot;effect&quot; is the result.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• The weather will <strong>affect</strong> our plans</li>
              <li>• The <strong>effect</strong> of the storm was devastating</li>
              <li>• How does this <strong>affect</strong> you?</li>
              <li>• The medicine had a positive <strong>effect</strong></li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• The weather will <strong>effect</strong> our plans</li>
              <li>• The <strong>affect</strong> of the storm was devastating</li>
              <li>• How does this <strong>effect</strong> you?</li>
              <li>• The medicine had a positive <strong>affect</strong></li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-violet-700">Affect (Verb - Action)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                To influence or have an impact on something:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Influence:</strong> &quot;The rain will <strong>affect</strong> the game&quot;</li>
                <li>• <strong>Impact:</strong> &quot;This decision will <strong>affect</strong> everyone&quot;</li>
                <li>• <strong>Change:</strong> &quot;The news <strong>affected</strong> her mood&quot;</li>
                <li>• <strong>Modify:</strong> &quot;The temperature <strong>affects</strong> growth&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-purple-700">Effect (Noun - Result)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                A result or consequence of something:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Result:</strong> &quot;The <strong>effect</strong> of the storm&quot;</li>
                <li>• <strong>Consequence:</strong> &quot;The <strong>effect</strong> of the decision&quot;</li>
                <li>• <strong>Outcome:</strong> &quot;The <strong>effect</strong> of the medicine&quot;</li>
                <li>• <strong>Impact:</strong> &quot;The <strong>effect</strong> on the environment&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Using &quot;Affect&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The new policy will <strong>affect</strong> all employees.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;How does stress <strong>affect</strong> your health?&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The teacher&apos;s words <strong>affected</strong> the student deeply.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-700">Using &quot;Effect&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The <strong>effect</strong> of the new policy was immediate.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;Stress has a negative <strong>effect</strong> on health.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The medicine had a calming <strong>effect</strong>.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Tricks */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Memory Tricks</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Affect</strong> = Action (both start with &quot;a&quot;)</li>
            <li>• <strong>Effect</strong> = End result (both start with &quot;e&quot;)</li>
            <li>• <strong>Affect</strong> = Verb (action word)</li>
            <li>• <strong>Effect</strong> = Noun (thing/result)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Affect:</h3>
              <p className="text-lg md:text-xl text-indigo-700">influence, impact, change, modify, alter</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Effect:</h3>
              <p className="text-lg md:text-xl text-indigo-700">result, consequence, outcome, impact, influence</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-violet-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-violet-100 text-violet-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can I use &quot;affect&quot; and &quot;effect&quot; interchangeably?
                  </h3>
                  <div className="bg-violet-50 rounded-lg p-4 border-l-4 border-violet-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-violet-700">A:</span> No, they have different meanings and should not be used interchangeably. &quot;Affect&quot; is usually a verb meaning to influence or impact something, while &quot;effect&quot; is usually a noun meaning a result or consequence. Using them incorrectly will change the meaning of your sentence and confuse readers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-purple-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    When should I use &quot;affect&quot;?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> Use &quot;affect&quot; when you want to express that something influences, impacts, or changes something else. It&apos;s usually a verb (action word). Examples include &quot;affect the outcome,&quot; &quot;affect your mood,&quot; or &quot;affect the environment.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    When should I use &quot;effect&quot;?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Use &quot;effect&quot; when you want to describe the result, consequence, or outcome of something. It&apos;s usually a noun (thing/result). Examples include &quot;the effect of the storm,&quot; &quot;the effect of the medicine,&quot; or &quot;the effect on performance.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can you give me a sentence using both words correctly?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> &quot;The new policy will <strong>affect</strong> all employees, and the <strong>effect</strong> will be increased productivity.&quot; Notice that the policy influences (affects) employees, and the result (effect) is increased productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Are there any exceptions to the verb/noun rule?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> Yes, there are rare exceptions. &quot;Effect&quot; can sometimes be used as a verb meaning &quot;to bring about&quot; (e.g., &quot;to effect change&quot;), and &quot;affect&quot; can sometimes be used as a noun in psychology meaning &quot;emotion&quot; (e.g., &quot;flat affect&quot;). However, these uses are much less common than the standard verb/noun distinction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
