"use client"

// export const metadata: Metadata = {
//   title: 'To vs Too: Understanding the Difference | Grammar Guide',
//   description: 'Learn the difference between "to" and "too" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English grammar.',
//   keywords: 'to vs too, grammar, english, prepositions, adverbs, writing tips',
// }

export default function ToVsTooPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            To vs Too
          </h1>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these commonly confused words
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;To&quot;</strong> is a preposition used to indicate direction, purpose, or infinitive verbs. 
            <strong>&quot;Too&quot;</strong> is an adverb meaning &quot;also&quot; or &quot;excessively.&quot; 
            Understanding when to use each word is crucial for clear communication.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• I want <strong>to</strong> go home</li>
              <li>• She went <strong>to</strong> the store</li>
              <li>• I like <strong>too</strong> much sugar</li>
              <li>• He wants <strong>too</strong> go <strong>too</strong></li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• I want <strong>too</strong> go home</li>
              <li>• She went <strong>too</strong> the store</li>
              <li>• I like <strong>to</strong> much sugar</li>
              <li>• He wants <strong>to</strong> go <strong>to</strong></li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">To (Preposition)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                A preposition that indicates:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• Direction: &quot;I&apos;m going <strong>to</strong> the park&quot;</li>
                <li>• Purpose: &quot;I came here <strong>to</strong> help you&quot;</li>
                <li>• Infinitive: &quot;I want <strong>to</strong> learn&quot;</li>
                <li>• Time: &quot;from 9 <strong>to</strong> 5&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-purple-700">Too (Adverb)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                An adverb that means:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• Also: &quot;I want <strong>too</strong> go&quot;</li>
                <li>• Excessively: &quot;This is <strong>too</strong> hot&quot;</li>
                <li>• More than necessary: &quot;You&apos;re <strong>too</strong> kind&quot;</li>
                <li>• Very: &quot;I&apos;m <strong>too</strong> tired&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Using &quot;To&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;I need <strong>to</strong> finish my homework before going <strong>to</strong> the party.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;She loves <strong>to</strong> read books about science.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The train from London <strong>to</strong> Paris takes 2 hours.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Using &quot;Too&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;I want <strong>too</strong> go <strong>too</strong>, but it&apos;s <strong>too</strong> late.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;This coffee is <strong>too</strong> hot <strong>too</strong> drink.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;She&apos;s <strong>too</strong> busy, and I am <strong>too</strong>.&quot;
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
            <li>• <strong>To</strong> has one &quot;o&quot; - think of it as &quot;one direction&quot;</li>
            <li>• <strong>Too</strong> has two &quot;o&quot;s - think of it as &quot;also&quot; or &quot;excess&quot;</li>
            <li>• If you can replace it with &quot;also&quot; or &quot;very,&quot; use <strong>too</strong></li>
            <li>• If it shows direction or purpose, use <strong>to</strong></li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Similar Prepositions:</h3>
              <p className="text-lg md:text-xl text-blue-700">toward, into, onto, unto</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Similar Adverbs:</h3>
              <p className="text-lg md:text-xl text-blue-700">also, as well, besides, moreover</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Q: Can I use &quot;to&quot; and &quot;too&quot; interchangeably?
              </h3>
              <p className="text-lg md:text-xl text-gray-700">
                A: No, they have completely different meanings and functions. &quot;To&quot; is a preposition, while &quot;too&quot; is an adverb. Using them incorrectly can change the meaning of your sentence.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Q: How do I remember when to use &quot;too&quot; meaning &quot;also&quot;?
              </h3>
              <p className="text-lg md:text-xl text-gray-700">
                A: Think of &quot;too&quot; as having an extra &quot;o&quot; - just like &quot;also&quot; has an extra meaning. If you can replace the word with &quot;also&quot; in your sentence, use &quot;too.&quot;
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Q: Is it ever correct to use &quot;to&quot; before an adjective?
              </h3>
              <p className="text-lg md:text-xl text-gray-700">
                A: Yes! &quot;To&quot; is used before adjectives in infinitive phrases like &quot;to be happy&quot; or &quot;to become stronger.&quot; This is different from &quot;too&quot; which modifies adjectives like &quot;too happy&quot; or &quot;too strong.&quot;
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Q: What about &quot;two&quot; - how does it fit in?
              </h3>
              <p className="text-lg md:text-xl text-gray-700">
                A: &quot;Two&quot; is the number 2 and is completely different from both &quot;to&quot; and &quot;too.&quot; It&apos;s a noun/adjective that refers to quantity, not direction or degree.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Q: Can you give me a sentence using all three words correctly?
              </h3>
              <p className="text-lg md:text-xl text-gray-700">
                A: &quot;I want <strong>to</strong> go <strong>too</strong>, but I have <strong>two</strong> meetings <strong>to</strong> attend first.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}