import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Presumed vs Assumed: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "presumed" and "assumed" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English writing.',
  keywords: 'presumed vs assumed, grammar, english, synonyms, writing tips, word differences',
}

export default function PresumedVsAssumedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Presumed vs Assumed
          </h1>
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these belief-related verbs
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Presumed&quot;</strong> means to suppose something is true based on reasonable evidence or probability, often with a degree of confidence. 
            <strong>&quot;Assumed&quot;</strong> means to take something for granted without proof, often as a starting point for reasoning. 
            While both involve believing something to be true, &quot;presumed&quot; suggests more evidence-based thinking than &quot;assumed.&quot;
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• He was <strong>presumed</strong> dead after the accident</li>
              <li>• I <strong>assumed</strong> you would be there</li>
              <li>• The jury <strong>presumed</strong> innocence</li>
              <li>• Let&apos;s <strong>assume</strong> the best case scenario</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• He was <strong>assumed</strong> dead after the accident</li>
              <li>• I <strong>presumed</strong> you would be there</li>
              <li>• The jury <strong>assumed</strong> innocence</li>
              <li>• Let&apos;s <strong>presume</strong> the best case scenario</li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-700">Presumed (Evidence-Based)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                To suppose something is true based on reasonable evidence:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Legal:</strong> &quot;The defendant is <strong>presumed</strong> innocent&quot;</li>
                <li>• <strong>Medical:</strong> &quot;He was <strong>presumed</strong> dead&quot;</li>
                <li>• <strong>Scientific:</strong> &quot;The theory is <strong>presumed</strong> correct&quot;</li>
                <li>• <strong>Social:</strong> &quot;She was <strong>presumed</strong> to be the leader&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Assumed (Taken for Granted)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                To take something for granted without proof:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Personal:</strong> &quot;I <strong>assumed</strong> you knew&quot;</li>
                <li>• <strong>Planning:</strong> &quot;We <strong>assumed</strong> good weather&quot;</li>
                <li>• <strong>Hypothetical:</strong> &quot;Let&apos;s <strong>assume</strong> success&quot;</li>
                <li>• <strong>Starting Point:</strong> &quot;<strong>Assuming</strong> you&apos;re right...&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Using &quot;Presumed&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The missing hiker was <strong>presumed</strong> dead after three weeks.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;In court, everyone is <strong>presumed</strong> innocent until proven guilty.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The ancient artifact was <strong>presumed</strong> to be from the Roman era.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-700">Using &quot;Assumed&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;I <strong>assumed</strong> the meeting was at 2 PM.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;Let&apos;s <strong>assume</strong> the project will be completed on time.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;She <strong>assumed</strong> he would pick up the groceries.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differences */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Key Differences</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Presumed:</strong> Based on evidence, probability, or reasonable grounds</li>
            <li>• <strong>Assumed:</strong> Taken for granted without proof or evidence</li>
            <li>• <strong>Presumed:</strong> More formal and authoritative</li>
            <li>• <strong>Assumed:</strong> More casual and personal</li>
          </ul>
        </div>

        {/* Memory Tricks */}
        <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-indigo-900">Memory Tricks</h3>
          <ul className="text-lg md:text-xl text-indigo-800 space-y-3">
            <li>• <strong>Presumed</strong> has &quot;pre&quot; - think of &quot;preliminary evidence&quot;</li>
            <li>• <strong>Assumed</strong> has &quot;as&quot; - think of &quot;as if&quot; or taking for granted</li>
            <li>• <strong>Presumed</strong> = Professional (both start with &quot;pr&quot;)</li>
            <li>• <strong>Assumed</strong> = Assumption (both start with &quot;as&quot;)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Similar to Presumed:</h3>
              <p className="text-lg md:text-xl text-purple-700">supposed, believed, inferred, concluded, deduced</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Similar to Assumed:</h3>
              <p className="text-lg md:text-xl text-purple-700">taken, granted, supposed, imagined, hypothesized</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-cyan-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 text-cyan-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can I use &quot;presumed&quot; and &quot;assumed&quot; interchangeably?
                  </h3>
                  <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-cyan-700">A:</span> No, they have different connotations and should not be used interchangeably. &quot;Presumed&quot; suggests a conclusion based on evidence or probability, while &quot;assumed&quot; suggests taking something for granted without proof. Using them incorrectly can change the meaning and tone of your sentence.
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
                    When should I use &quot;presumed&quot;?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Use &quot;presumed&quot; when you have reasonable evidence or grounds to believe something is true. This is common in legal contexts (&quot;presumed innocent&quot;), medical situations (&quot;presumed dead&quot;), or when drawing conclusions based on available information. It suggests a more authoritative or evidence-based belief.
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
                    When should I use &quot;assumed&quot;?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Use &quot;assumed&quot; when you&apos;re taking something for granted without proof, often as a starting point for reasoning or planning. Examples include personal expectations (&quot;I assumed you knew&quot;), hypothetical scenarios (&quot;assuming success&quot;), or when making plans based on unproven premises.
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
                    Can you give me a sentence using both words correctly?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> &quot;I <strong>assumed</strong> the meeting was at 3 PM, but when no one showed up, I <strong>presumed</strong> it had been cancelled.&quot; Notice that I first took for granted the meeting time (assumed), then concluded it was cancelled based on the evidence of no one showing up (presumed).
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
                    What&apos;s the difference in formality between these words?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> &quot;Presumed&quot; is more formal and authoritative, often used in legal, medical, or professional contexts. &quot;Assumed&quot; is more casual and personal, commonly used in everyday conversation and informal writing. In formal documents or professional communication, &quot;presumed&quot; is often preferred when you have evidence to support your belief.
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
