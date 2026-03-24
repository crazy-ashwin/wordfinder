import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Their vs There: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "their" and "there" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English writing.',
  keywords: 'their vs there, grammar, english, homophones, writing tips, spelling differences',
}

export default function TheirVsTherePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Their vs There
          </h1>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these commonly confused homophones
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Their&quot;</strong> is a possessive pronoun that shows ownership, belonging to a group of people or things. 
            <strong>&quot;There&quot;</strong> is an adverb that indicates location, existence, or introduces a sentence. 
            While they sound identical, they have completely different meanings and grammatical functions.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• <strong>Their</strong> car is parked outside</li>
              <li>• The book is over <strong>there</strong></li>
              <li>• <strong>Their</strong> house is beautiful</li>
              <li>• <strong>There</strong> are many options</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• <strong>There</strong> car is parked outside</li>
              <li>• The book is over <strong>their</strong></li>
              <li>• <strong>There</strong> house is beautiful</li>
              <li>• <strong>Their</strong> are many options</li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-green-700">Their (Possessive Pronoun)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Belonging to or associated with a group:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Ownership:</strong> &quot;<strong>Their</strong> car is red&quot;</li>
                <li>• <strong>Belonging:</strong> &quot;<strong>Their</strong> house is large&quot;</li>
                <li>• <strong>Association:</strong> &quot;<strong>Their</strong> team won&quot;</li>
                <li>• <strong>Group Possession:</strong> &quot;<strong>Their</strong> opinions matter&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-emerald-700">There (Adverb/Expletive)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Indicates location, existence, or introduces sentences:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Location:</strong> &quot;The keys are over <strong>there</strong>&quot;</li>
                <li>• <strong>Existence:</strong> &quot;<strong>There</strong> are many people&quot;</li>
                <li>• <strong>Introduction:</strong> &quot;<strong>There</strong> is a problem&quot;</li>
                <li>• <strong>Direction:</strong> &quot;Go <strong>there</strong> now&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Using &quot;Their&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;<strong>Their</strong> children are well-behaved.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The students finished <strong>their</strong> homework.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;<strong>Their</strong> company is successful.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Using &quot;There&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The restaurant is over <strong>there</strong>.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;<strong>There</strong> are five people waiting.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;Put the book <strong>there</strong> on the table.&quot;
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
            <li>• <strong>Their</strong> has &quot;heir&quot; - think of inheritance and ownership</li>
            <li>• <strong>There</strong> has &quot;here&quot; - think of location and place</li>
            <li>• <strong>Their</strong> = Ownership (both have &quot;heir&quot;)</li>
            <li>• <strong>There</strong> = Location (both have &quot;here&quot; sound)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Their:</h3>
              <p className="text-lg md:text-xl text-indigo-700">his, her, its, our, your, whose</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to There:</h3>
              <p className="text-lg md:text-xl text-indigo-700">here, where, everywhere, somewhere, anywhere</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can I use &quot;their&quot; and &quot;there&quot; interchangeably?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> No, they have completely different meanings and cannot be used interchangeably. &quot;Their&quot; is a possessive pronoun showing ownership, while &quot;there&quot; indicates location or existence. Using them incorrectly will change the meaning of your sentence and confuse readers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-emerald-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 text-emerald-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    When should I use &quot;their&quot;?
                  </h3>
                  <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-emerald-700">A:</span> Use &quot;their&quot; when you need to show that something belongs to or is associated with a group of people or things. It&apos;s a possessive pronoun that replaces &quot;his&quot; or &quot;her&quot; when referring to multiple people. Examples include &quot;their car,&quot; &quot;their house,&quot; or &quot;their opinion.&quot;
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
                    When should I use &quot;there&quot;?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Use &quot;there&quot; when indicating location (&quot;over there&quot;), showing existence (&quot;there are many people&quot;), or introducing a sentence (&quot;there is a problem&quot;). It&apos;s an adverb that points to a place or indicates that something exists.
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
                      <span className="font-semibold text-purple-700">A:</span> &quot;<strong>There</strong> are many people at <strong>their</strong> party.&quot; Notice that &quot;there&quot; indicates existence (many people exist), while &quot;their&quot; shows ownership (the party belongs to them).
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
                    What about &quot;they&apos;re&quot; - how does it fit in?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> &quot;They&apos;re&quot; is a contraction of &quot;they are&quot; and is completely different from both &quot;their&quot; and &quot;there.&quot; So you have three homophones: &quot;their&quot; (possession), &quot;there&quot; (location), and &quot;they&apos;re&quot; (they are). Example: &quot;<strong>They&apos;re</strong> going to <strong>their</strong> house over <strong>there</strong>.&quot;
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
