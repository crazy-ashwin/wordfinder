import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bear vs Bare: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "bear" and "bare" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English writing.',
  keywords: 'bear vs bare, grammar, english, homophones, writing tips, spelling differences',
}

export default function BearVsBarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Bear vs Bare
          </h1>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these commonly confused homophones
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Bear&quot;</strong> means to carry, support, endure, or give birth, and also refers to the large mammal. 
            <strong>&quot;Bare&quot;</strong> means uncovered, naked, or to reveal/expose something. 
            While they sound identical, they have completely different meanings and uses.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• I can&apos;t <strong>bear</strong> the pain</li>
              <li>• The tree has <strong>bare</strong> branches</li>
              <li>• She will <strong>bear</strong> the responsibility</li>
              <li>• He <strong>bared</strong> his soul to her</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• I can&apos;t <strong>bare</strong> the pain</li>
              <li>• The tree has <strong>bear</strong> branches</li>
              <li>• She will <strong>bare</strong> the responsibility</li>
              <li>• He <strong>beared</strong> his soul to her</li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-amber-700">Bear (Carry/Endure)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                To carry, support, endure, or give birth:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Carry:</strong> &quot;She will <strong>bear</strong> the burden&quot;</li>
                <li>• <strong>Endure:</strong> &quot;I can&apos;t <strong>bear</strong> the heat&quot;</li>
                <li>• <strong>Support:</strong> &quot;The bridge can <strong>bear</strong> heavy loads&quot;</li>
                <li>• <strong>Give Birth:</strong> &quot;She will <strong>bear</strong> a child&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-orange-700">Bare (Uncovered/Reveal)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Uncovered, naked, or to reveal:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Uncovered:</strong> &quot;The tree has <strong>bare</strong> branches&quot;</li>
                <li>• <strong>Naked:</strong> &quot;He walked with <strong>bare</strong> feet&quot;</li>
                <li>• <strong>Reveal:</strong> &quot;She <strong>bared</strong> her teeth&quot;</li>
                <li>• <strong>Expose:</strong> &quot;He <strong>bared</strong> his soul&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Using &quot;Bear&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;I can&apos;t <strong>bear</strong> to see you in pain.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;She will <strong>bear</strong> the responsibility for the project.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The bridge can <strong>bear</strong> heavy traffic.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-700">Using &quot;Bare&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;The winter trees have <strong>bare</strong> branches.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;He walked on the hot sand with <strong>bare</strong> feet.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;She <strong>bared</strong> her soul in the letter.&quot;
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
            <li>• <strong>Bear</strong> has &quot;ear&quot; - think of hearing and enduring sounds</li>
            <li>• <strong>Bare</strong> has &quot;are&quot; - think of being exposed or revealed</li>
            <li>• <strong>Bear</strong> = Endure (both have &quot;ear&quot;)</li>
            <li>• <strong>Bare</strong> = Expose (both have &quot;are&quot;)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Bear:</h3>
              <p className="text-lg md:text-xl text-indigo-700">carry, support, endure, tolerate, withstand</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Bare:</h3>
              <p className="text-lg md:text-xl text-indigo-700">naked, uncovered, exposed, revealed, empty</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-amber-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can I use &quot;bear&quot; and &quot;bare&quot; interchangeably?
                  </h3>
                  <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-amber-700">A:</span> No, they have completely different meanings and cannot be used interchangeably. &quot;Bear&quot; means to carry, support, or endure, while &quot;bare&quot; means uncovered, naked, or to reveal. Using them incorrectly will change the meaning of your sentence and confuse readers.
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
                    When should I use &quot;bear&quot;?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> Use &quot;bear&quot; when you want to express carrying, supporting, enduring, or tolerating something. It can also mean giving birth. Examples include &quot;bear the burden,&quot; &quot;bear responsibility,&quot; &quot;can&apos;t bear the pain,&quot; or &quot;bear children.&quot;
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
                    When should I use &quot;bare&quot;?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Use &quot;bare&quot; when describing something that is uncovered, naked, or exposed. It can also mean to reveal or expose something. Examples include &quot;bare feet,&quot; &quot;bare branches,&quot; &quot;bare the truth,&quot; or &quot;bare your soul.&quot;
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
                      <span className="font-semibold text-purple-700">A:</span> &quot;I can&apos;t <strong>bear</strong> to see the tree with <strong>bare</strong> branches in winter.&quot; Notice that I can&apos;t endure (bear) seeing the tree, while the branches are uncovered (bare).
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
                    What about the animal &quot;bear&quot;?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Yes, &quot;bear&quot; also refers to the large mammal (like a grizzly bear or polar bear). This is a completely different meaning from the verb &quot;bear&quot; (to carry/endure). The animal &quot;bear&quot; is always a noun, while the verb &quot;bear&quot; is an action word. Context usually makes it clear which meaning is intended.
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
