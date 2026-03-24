import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capitol vs Capital: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "capitol" and "capital" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English writing.',
  keywords: 'capitol vs capital, grammar, english, homophones, writing tips, spelling differences',
}

export default function CapitolVsCapitalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Capitol vs Capital
          </h1>
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these commonly confused homophones
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Capitol&quot;</strong> refers specifically to a building where a legislature meets. 
            <strong>&quot;Capital&quot;</strong> has multiple meanings including a city that serves as the seat of government, money/assets, or uppercase letters. 
            The key is that &quot;capitol&quot; is always about the building.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• The <strong>capitol</strong> building in Washington, D.C.</li>
              <li>• Sacramento is the <strong>capital</strong> of California</li>
              <li>• We need more <strong>capital</strong> to start the business</li>
              <li>• Use <strong>capital</strong> letters for proper nouns</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• The <strong>capital</strong> building in Washington, D.C.</li>
              <li>• Sacramento is the <strong>capitol</strong> of California</li>
              <li>• We need more <strong>capitol</strong> to start the business</li>
              <li>• Use <strong>capitol</strong> letters for proper nouns</li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-red-700">Capitol (Building)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                A building where a legislature meets:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• The U.S. <strong>Capitol</strong> in Washington, D.C.</li>
                <li>• State <strong>capitol</strong> buildings across America</li>
                <li>• The <strong>capitol</strong> dome is an iconic symbol</li>
                <li>• Legislative sessions are held in the <strong>capitol</strong></li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Capital (Multiple Meanings)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Has several different meanings:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>City:</strong> &quot;London is the <strong>capital</strong> of England&quot;</li>
                <li>• <strong>Money:</strong> &quot;We need investment <strong>capital</strong>&quot;</li>
                <li>• <strong>Letters:</strong> &quot;Start with a <strong>capital</strong> letter&quot;</li>
                <li>• <strong>Excellent:</strong> &quot;That&apos;s a <strong>capital</strong> idea!&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Using &quot;Capitol&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The <strong>capitol</strong> building was designed by architect Thomas U. Walter.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;Protesters gathered outside the state <strong>capitol</strong> today.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The <strong>capitol</strong> rotunda features beautiful murals.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Using &quot;Capital&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;Paris is the <strong>capital</strong> of France.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The company raised $1 million in <strong>capital</strong>.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;Remember to use <strong>capital</strong> letters for names.&quot;
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
            <li>• <strong>Capitol</strong> has an &quot;o&quot; - think of the <strong>o</strong> in &quot;building&quot;</li>
            <li>• <strong>Capital</strong> has an &quot;a&quot; - think of &quot;all&quot; the other meanings</li>
            <li>• <strong>Capitol</strong> = building (both have &quot;o&quot;)</li>
            <li>• <strong>Capital</strong> = city, money, letters (all other uses)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Similar to Capitol:</h3>
              <p className="text-lg md:text-xl text-blue-700">legislature, senate, house, government building</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Similar to Capital:</h3>
              <p className="text-lg md:text-xl text-blue-700">metropolis, funds, assets, uppercase, principal</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-red-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Is it ever correct to use &quot;capitol&quot; for a city?
                  </h3>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-red-700">A:</span> No, &quot;capitol&quot; always refers to the building where a legislature meets. For cities that serve as government seats, always use &quot;capital.&quot; The only exception is when you&apos;re specifically referring to the building itself.
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
                    What about &quot;capitalize&quot; vs &quot;capitolize&quot;?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> The correct spelling is &quot;capitalize&quot; (with an &quot;a&quot;). This word comes from &quot;capital&quot; meaning uppercase letters, not from &quot;capitol&quot; the building. So you capitalize words, not capitolize them.
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
                    Can you give me a sentence using both words correctly?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> &quot;The <strong>capital</strong> city of California is Sacramento, and the state <strong>capitol</strong> building is located there.&quot; Notice that the city (capital) and the building (capitol) are both mentioned correctly.
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
                    What&apos;s the difference between &quot;capital&quot; and &quot;capitol&quot; in business context?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> In business, you only use &quot;capital&quot; (with an &quot;a&quot;). &quot;Capitol&quot; (with an &quot;o&quot;) is never used in business contexts. So you have &quot;working capital,&quot; &quot;capital investment,&quot; and &quot;capital gains,&quot; never &quot;capitol&quot; for these terms.
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
                    How do I remember which one to use for government buildings?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> Think of the &quot;o&quot; in &quot;capitol&quot; as representing the dome or rotunda of a government building. If you&apos;re talking about the actual building where lawmakers meet, use &quot;capitol.&quot; If you&apos;re talking about the city or anything else, use &quot;capital.&quot;
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
