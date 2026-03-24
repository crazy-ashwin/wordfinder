import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Further vs Farther: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "further" and "farther" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English writing.',
  keywords: 'further vs farther, grammar, english, synonyms, writing tips, word differences',
}

export default function FurtherVsFartherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-green-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Further vs Farther
          </h1>
          <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these distance-related words
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Farther&quot;</strong> refers to physical distance - how much more distant something is in space. 
            <strong>&quot;Further&quot;</strong> refers to figurative distance - advancement in degree, time, or progress. 
            While both relate to distance, &quot;farther&quot; is about physical space, and &quot;further&quot; is about metaphorical advancement.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• The store is <strong>farther</strong> than I thought</li>
              <li>• Let&apos;s discuss this <strong>further</strong></li>
              <li>• I can throw the ball <strong>farther</strong></li>
              <li>• We need to investigate <strong>further</strong></li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• The store is <strong>further</strong> than I thought</li>
              <li>• Let&apos;s discuss this <strong>farther</strong></li>
              <li>• I can throw the ball <strong>further</strong></li>
              <li>• We need to investigate <strong>farther</strong></li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-lime-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-lime-700">Farther (Physical Distance)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Refers to physical distance in space:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Space:</strong> &quot;The city is <strong>farther</strong> away&quot;</li>
                <li>• <strong>Distance:</strong> &quot;I can walk <strong>farther</strong>&quot;</li>
                <li>• <strong>Location:</strong> &quot;The store is <strong>farther</strong> north&quot;</li>
                <li>• <strong>Measurement:</strong> &quot;The ball went <strong>farther</strong>&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-green-700">Further (Figurative Distance)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Refers to advancement in degree, time, or progress:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Progress:</strong> &quot;Let&apos;s go <strong>further</strong> with this idea&quot;</li>
                <li>• <strong>Degree:</strong> &quot;I can&apos;t go <strong>further</strong>&quot;</li>
                <li>• <strong>Time:</strong> &quot;We&apos;ll discuss this <strong>further</strong>&quot;</li>
                <li>• <strong>Extent:</strong> &quot;The situation went <strong>further</strong>&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-green-50 to-lime-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Using &quot;Farther&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The airport is <strong>farther</strong> from downtown than the train station.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;I can run <strong>farther</strong> than I could last year.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The mountain peak is much <strong>farther</strong> than it appears.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-lime-700">Using &quot;Further&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;We need to investigate this matter <strong>further</strong>.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;Let&apos;s discuss this topic <strong>further</strong> tomorrow.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;I can&apos;t go any <strong>further</strong> with this project.&quot;
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
            <li>• <strong>Farther</strong> has &quot;far&quot; - think of physical distance</li>
            <li>• <strong>Further</strong> has &quot;fur&quot; - think of advancement and progress</li>
            <li>• <strong>Farther</strong> = Far (both have &quot;far&quot;)</li>
            <li>• <strong>Further</strong> = Future (both have &quot;fur&quot;)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Farther:</h3>
              <p className="text-lg md:text-xl text-indigo-700">more distant, beyond, away, remote, distant</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Further:</h3>
              <p className="text-lg md:text-xl text-indigo-700">more, additional, extra, beyond, advanced</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-lime-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-lime-100 text-lime-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can I use &quot;further&quot; and &quot;farther&quot; interchangeably?
                  </h3>
                  <div className="bg-lime-50 rounded-lg p-4 border-l-4 border-lime-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-lime-700">A:</span> No, they have different meanings and should not be used interchangeably. &quot;Farther&quot; refers to physical distance in space, while &quot;further&quot; refers to figurative distance like advancement in degree, time, or progress. Using them incorrectly will change the meaning of your sentence.
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
                    When should I use &quot;farther&quot;?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Use &quot;farther&quot; when referring to physical distance in space. Examples include &quot;The store is farther away,&quot; &quot;I can walk farther,&quot; or &quot;The ball went farther.&quot; Think of it as measuring actual physical distance that you could measure with a ruler or map.
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
                    When should I use &quot;further&quot;?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Use &quot;further&quot; when referring to figurative distance like advancement in degree, time, or progress. Examples include &quot;Let&apos;s discuss this further,&quot; &quot;We need to investigate further,&quot; or &quot;I can&apos;t go any further.&quot; Think of it as metaphorical advancement.
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
                      <span className="font-semibold text-purple-700">A:</span> &quot;The hiking trail goes much <strong>farther</strong> than we expected, so we&apos;ll need to discuss our plans <strong>further</strong> before continuing.&quot; Notice that the trail has physical distance (farther), while our discussion involves figurative advancement (further).
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
                    What about &quot;furthermore&quot; and &quot;farthermore&quot;?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> &quot;Furthermore&quot; is a correct word meaning &quot;in addition&quot; or &quot;moreover,&quot; and it&apos;s related to &quot;further&quot; (figurative advancement). &quot;Farthermore&quot; is not a word in English. This follows the same pattern: &quot;further&quot; is used for figurative meanings, while &quot;farther&quot; is only used for physical distance.
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
