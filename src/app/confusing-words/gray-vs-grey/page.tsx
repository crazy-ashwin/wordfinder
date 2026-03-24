import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gray vs Grey: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "gray" and "grey" with clear examples, usage tips, and regional variations. Perfect for improving your English writing.',
  keywords: 'gray vs grey, grammar, english, spelling differences, american vs british, writing tips',
}

export default function GrayVsGreyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Gray vs Grey
          </h1>
          <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Understanding the spelling differences between American and British English
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Gray&quot;</strong> is the American English spelling of the color between black and white. 
            <strong>&quot;Grey&quot;</strong> is the British English spelling of the same color. 
            Both spellings are correct and refer to the exact same color - the choice depends on which English dialect you&apos;re using.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• American: The <strong>gray</strong> sky looks stormy</li>
              <li>• British: The <strong>grey</strong> sky looks stormy</li>
              <li>• American: She wore a <strong>gray</strong> dress</li>
              <li>• British: She wore a <strong>grey</strong> dress</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• Mixing: The <strong>gray</strong> sky with <strong>grey</strong> clouds</li>
              <li>• Inconsistent: Her <strong>gray</strong> hair and <strong>grey</strong> eyes</li>
              <li>• Wrong Region: Using <strong>grey</strong> in American text</li>
              <li>• Wrong Region: Using <strong>gray</strong> in British text</li>
            </ul>
          </div>
        </div>

        {/* Regional Differences */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Regional Differences</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">American English: &quot;Gray&quot;</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Used in the United States and American publications:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>United States:</strong> &quot;The <strong>gray</strong> clouds gathered&quot;</li>
                <li>• <strong>American Media:</strong> &quot;His <strong>gray</strong> suit looked professional&quot;</li>
                <li>• <strong>US Publications:</strong> &quot;The <strong>gray</strong> area of the law&quot;</li>
                <li>• <strong>American Companies:</strong> &quot;Gray Goose vodka&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-red-700">British English: &quot;Grey&quot;</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Used in the United Kingdom and British publications:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>United Kingdom:</strong> &quot;The <strong>grey</strong> clouds gathered&quot;</li>
                <li>• <strong>British Media:</strong> &quot;His <strong>grey</strong> suit looked professional&quot;</li>
                <li>• <strong>UK Publications:</strong> &quot;The <strong>grey</strong> area of the law&quot;</li>
                <li>• <strong>British Companies:</strong> &quot;Grey&apos;s Anatomy&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-blue-50 to-red-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">American English: &quot;Gray&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The <strong>gray</strong> sky threatened rain.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;She wore a beautiful <strong>gray</strong> sweater.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The <strong>gray</strong> matter of the brain.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">British English: &quot;Grey&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The <strong>grey</strong> sky threatened rain.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;She wore a beautiful <strong>grey</strong> sweater.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The <strong>grey</strong> matter of the brain.&quot;
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
            <li>• <strong>Gray</strong> = America (both have &quot;a&quot;)</li>
            <li>• <strong>Grey</strong> = England (both have &quot;e&quot;)</li>
            <li>• <strong>Gray</strong> = USA (both have &quot;a&quot;)</li>
            <li>• <strong>Grey</strong> = UK (both have &quot;e&quot;)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Color Variations:</h3>
              <p className="text-lg md:text-xl text-indigo-700">light gray/grey, dark gray/grey, charcoal, silver, slate</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Common Phrases:</h3>
              <p className="text-lg md:text-xl text-indigo-700">gray/grey area, gray/grey matter, gray/grey hair</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Are both spellings correct?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Yes, both &quot;gray&quot; and &quot;grey&quot; are correct spellings. &quot;Gray&quot; is the American English spelling, while &quot;grey&quot; is the British English spelling. They refer to exactly the same color - the choice depends on which English dialect you&apos;re using or which region your audience is from.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-red-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Which spelling should I use?
                  </h3>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-red-700">A:</span> Choose based on your audience or the English dialect you&apos;re writing in. Use &quot;gray&quot; for American audiences and &quot;grey&quot; for British audiences. If you&apos;re writing for an international audience, pick one spelling and stick with it consistently throughout your document.
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
                    Can I mix both spellings in the same document?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> No, you should not mix both spellings in the same document. This creates inconsistency and can confuse readers. Pick one spelling (either &quot;gray&quot; or &quot;grey&quot;) and use it consistently throughout your entire document, regardless of how many times you mention the color.
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
                    What about other countries like Canada or Australia?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> Canada typically uses British spelling (&quot;grey&quot;), while Australia also uses British spelling (&quot;grey&quot;). However, due to American influence, you might see both spellings in these countries. When in doubt, check the style guide of the publication or organization you&apos;re writing for.
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
                    Are there other words with similar American/British spelling differences?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> Yes, there are many! Examples include: color/colour, center/centre, theater/theatre, labor/labour, favorite/favourite, and organize/organise. The pattern is usually that American English drops the extra letters (like &quot;u&quot; in &quot;colour&quot;) while British English keeps them.
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
