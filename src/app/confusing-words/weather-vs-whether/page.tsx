import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weather vs Whether: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "weather" and "whether" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English writing.',
  keywords: 'weather vs whether, grammar, english, homophones, writing tips, spelling differences',
}

export default function WeatherVsWhetherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Weather vs Whether
          </h1>
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these commonly confused homophones
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Weather&quot;</strong> refers to atmospheric conditions like rain, sunshine, temperature, and wind. 
            <strong>&quot;Whether&quot;</strong> is a conjunction used to introduce alternatives or express doubt about which option to choose. 
            While they sound identical, they have completely different meanings and functions in sentences.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• The <strong>weather</strong> is sunny today</li>
              <li>• I don&apos;t know <strong>whether</strong> to go or stay</li>
              <li>• Bad <strong>weather</strong> delayed the flight</li>
              <li>• <strong>Whether</strong> you like it or not</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• The <strong>whether</strong> is sunny today</li>
              <li>• I don&apos;t know <strong>weather</strong> to go or stay</li>
              <li>• Bad <strong>whether</strong> delayed the flight</li>
              <li>• <strong>Weather</strong> you like it or not</li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-sky-700">Weather (Atmospheric Conditions)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                The state of the atmosphere at a particular time and place:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Temperature:</strong> &quot;The <strong>weather</strong> is cold today&quot;</li>
                <li>• <strong>Precipitation:</strong> &quot;The <strong>weather</strong> forecast predicts rain&quot;</li>
                <li>• <strong>Wind:</strong> &quot;The <strong>weather</strong> is windy&quot;</li>
                <li>• <strong>General Conditions:</strong> &quot;Nice <strong>weather</strong> for a picnic&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Whether (Conjunction)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                A conjunction used to introduce alternatives or express doubt:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Alternatives:</strong> &quot;I don&apos;t know <strong>whether</strong> to go&quot;</li>
                <li>• <strong>Doubt:</strong> &quot;<strong>Whether</strong> you agree or not&quot;</li>
                <li>• <strong>Indirect Questions:</strong> &quot;I wonder <strong>whether</strong> she&apos;ll come&quot;</li>
                <li>• <strong>Conditions:</strong> &quot;<strong>Whether</strong> it rains or shines&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Using &quot;Weather&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The <strong>weather</strong> is perfect for a beach day.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;Severe <strong>weather</strong> warnings are in effect.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;How&apos;s the <strong>weather</strong> in your city?&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-sky-700">Using &quot;Whether&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;I can&apos;t decide <strong>whether</strong> to buy the red or blue shirt.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;<strong>Whether</strong> you like it or not, we&apos;re going.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;She asked <strong>whether</strong> I was coming to the party.&quot;
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
            <li>• <strong>Weather</strong> has &quot;ea&quot; - think of &quot;heat&quot; and atmospheric conditions</li>
            <li>• <strong>Whether</strong> has &quot;he&quot; - think of &quot;he&quot; or &quot;she&quot; (alternatives)</li>
            <li>• <strong>Weather</strong> = Atmospheric (both have &quot;ea&quot;)</li>
            <li>• <strong>Whether</strong> = Choice (both have &quot;he&quot; sound)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Weather:</h3>
              <p className="text-lg md:text-xl text-indigo-700">climate, temperature, precipitation, forecast, conditions</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Whether:</h3>
              <p className="text-lg md:text-xl text-indigo-700">if, or, either, choice, alternative</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-sky-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-sky-100 text-sky-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can I use &quot;weather&quot; and &quot;whether&quot; interchangeably?
                  </h3>
                  <div className="bg-sky-50 rounded-lg p-4 border-l-4 border-sky-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-sky-700">A:</span> No, they have completely different meanings and cannot be used interchangeably. &quot;Weather&quot; refers to atmospheric conditions like rain, sunshine, and temperature. &quot;Whether&quot; is a conjunction used to introduce alternatives or express doubt. Using them incorrectly will change the meaning of your sentence and confuse readers.
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
                    When should I use &quot;weather&quot;?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Use &quot;weather&quot; when talking about atmospheric conditions, climate, or environmental conditions. Examples include describing temperature, precipitation, wind, sunshine, or any other atmospheric phenomena. It&apos;s always a noun referring to the state of the atmosphere.
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
                    When should I use &quot;whether&quot;?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Use &quot;whether&quot; when you need to introduce alternatives, express doubt, or create indirect questions. It&apos;s a conjunction that connects parts of a sentence. Examples include &quot;whether or not,&quot; &quot;whether to do this or that,&quot; or when expressing uncertainty about choices.
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
                      <span className="font-semibold text-purple-700">A:</span> &quot;I can&apos;t decide <strong>whether</strong> to go hiking today because the <strong>weather</strong> forecast is unclear.&quot; Notice that &quot;whether&quot; introduces the choice (to go or not), while &quot;weather&quot; refers to the atmospheric conditions that affect the decision.
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
                    What about &quot;wether&quot; - is that related?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> No, &quot;wether&quot; is a completely different word! A wether is a castrated male sheep. It&apos;s pronounced the same as &quot;weather&quot; and &quot;whether&quot; but has a completely different meaning. This is a rare case of three homophones with three different meanings, making it even more important to use the correct spelling.
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
