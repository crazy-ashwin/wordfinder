"use client"

import Link from "next/link"

export default function ListOfAdjectivesStartingWithA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            List of Adjectives Starting With A
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover amazing, awesome, and abundant adjectives starting with A to enhance your vocabulary
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Amazing Adjectives That Start With A
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter A introduces us to a world of amazing and awesome descriptive words that can enhance our language. 
                From &quot;amazing&quot; to &quot;awesome,&quot; these words help us express wonder, describe qualities, 
                and add excitement to our descriptions.
              </p>
            </div>

            {/* Popular A Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives That Start With A
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-4">Excellence & Wonder</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Amazing</p>
                      <p className="text-amber-600 text-sm">Causing great surprise or wonder</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Awesome</p>
                      <p className="text-amber-600 text-sm">Extremely impressive or daunting</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Adorable</p>
                      <p className="text-amber-600 text-sm">Delightful and lovable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Ambitious</p>
                      <p className="text-amber-600 text-sm">Having a strong desire for success</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-4">Character & Behavior</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Active</p>
                      <p className="text-orange-600 text-sm">Engaged in action or movement</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Adventurous</p>
                      <p className="text-orange-600 text-sm">Willing to take risks</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Attentive</p>
                      <p className="text-orange-600 text-sm">Paying close attention</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Authentic</p>
                      <p className="text-orange-600 text-sm">Genuine and real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More A Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives That Start With A
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">Personality Traits</h4>
                  <ul className="text-red-600 space-y-1 text-sm">
                    <li>Affectionate</li>
                    <li>Agreeable</li>
                    <li>Alert</li>
                    <li>Artistic</li>
                    <li>Assertive</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">Work & Achievement</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Accomplished</li>
                    <li>Accurate</li>
                    <li>Adaptable</li>
                    <li>Advanced</li>
                    <li>Analytical</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-700 mb-3">Relationships</h4>
                  <ul className="text-rose-600 space-y-1 text-sm">
                    <li>Accepting</li>
                    <li>Affectionate</li>
                    <li>Appreciative</li>
                    <li>Approachable</li>
                    <li>Attractive</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz: A-Adjective Definitions
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">What does &quot;ambitious&quot; mean?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q1" className="mr-2" />
                      <span>Very kind and gentle</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q1" className="mr-2" />
                      <span>Having a strong desire for success</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q1" className="mr-2" />
                      <span>Very intelligent and smart</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg hidden" id="answer1">
                    <p className="text-orange-800 font-semibold">Correct Answer: Having a strong desire for success</p>
                    <p className="text-orange-600 text-sm">Ambitious describes someone who is determined to achieve their goals and succeed.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Which word means &quot;genuine and real&quot;?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q2" className="mr-2" />
                      <span>Amazing</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q2" className="mr-2" />
                      <span>Authentic</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q2" className="mr-2" />
                      <span>Adorable</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg hidden" id="answer2">
                    <p className="text-red-800 font-semibold">Correct Answer: Authentic</p>
                    <p className="text-red-600 text-sm">Authentic means genuine, real, and not fake or artificial.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz: Complete the Sentence
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Complete: &quot;She is a very _____ person who loves to try new things.&quot;</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q3" className="mr-2" />
                      <span>Amazing</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q3" className="mr-2" />
                      <span>Adventurous</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q3" className="mr-2" />
                      <span>Adorable</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-pink-50 rounded-lg hidden" id="answer3">
                    <p className="text-pink-800 font-semibold">Correct Answer: Adventurous</p>
                    <p className="text-pink-600 text-sm">Adventurous means willing to take risks and try new experiences.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Complete: &quot;His _____ work ethic impressed all his colleagues.&quot;</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q4" className="mr-2" />
                      <span>Adorable</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q4" className="mr-2" />
                      <span>Accomplished</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q4" className="mr-2" />
                      <span>Active</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-rose-50 rounded-lg hidden" id="answer4">
                    <p className="text-rose-800 font-semibold">Correct Answer: Accomplished</p>
                    <p className="text-rose-600 text-sm">Accomplished means highly skilled and successful in a particular area.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz: A-Adjective Synonyms
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-rose-100 to-red-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Which word is a synonym for &quot;amazing&quot;?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q5" className="mr-2" />
                      <span>Active</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q5" className="mr-2" />
                      <span>Incredible</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q5" className="mr-2" />
                      <span>Adorable</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg hidden" id="answer5">
                    <p className="text-red-800 font-semibold">Correct Answer: Incredible</p>
                    <p className="text-red-600 text-sm">Amazing and incredible both mean causing great surprise or wonder.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Which word is a synonym for &quot;authentic&quot;?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q6" className="mr-2" />
                      <span>Amazing</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q6" className="mr-2" />
                      <span>Genuine</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q6" className="mr-2" />
                      <span>Active</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg hidden" id="answer6">
                    <p className="text-orange-800 font-semibold">Correct Answer: Genuine</p>
                    <p className="text-orange-600 text-sm">Authentic and genuine both mean real, true, and not fake.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for A-Adjectives
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Comparative and Superlative Forms</h3>
                  <ul className="text-amber-600 space-y-2">
                    <li><strong>Amazing:</strong> amazing → more amazing → most amazing</li>
                    <li><strong>Active:</strong> active → more active → most active</li>
                    <li><strong>Adorable:</strong> adorable → more adorable → most adorable</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Usage Tips</h3>
                  <ul className="text-orange-600 space-y-2">
                    <li>Use &quot;adventurous&quot; to describe someone willing to take risks</li>
                    <li>&quot;Accomplished&quot; works well in professional and achievement contexts</li>
                    <li>&quot;Affectionate&quot; is perfect for describing loving relationships</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What&apos;s the difference between &quot;amazing&quot; and &quot;awesome&quot;?</h3>
                  <p className="text-gray-600">While both express wonder, &quot;amazing&quot; often implies surprise, while &quot;awesome&quot; suggests being impressive or daunting.</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Can &quot;adorable&quot; be used for adults?</h3>
                  <p className="text-gray-600">Yes! &quot;Adorable&quot; can describe adults who are charming, lovable, or endearing in their behavior.</p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I use &quot;ambitious&quot; correctly?</h3>
                  <p className="text-gray-600">Use &quot;ambitious&quot; when describing someone who has strong goals and is determined to achieve success.</p>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Key Takeaways
              </h2>
              <ul className="text-amber-700 space-y-2 text-lg">
                <li>• A-adjectives are excellent for describing excellence, wonder, and positive qualities</li>
                <li>• Many A-adjectives work well in personal and professional contexts</li>
                <li>• Use these words to add excitement and positive emphasis to your descriptions</li>
                <li>• Remember that context matters when choosing the right A-adjective</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with-vowels" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/good-adjectives-starting-with-s" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Good S-Adjectives
                </Link>
                <Link href="/grammar/good-adjectives-starting-with-t" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Good T-Adjectives
                </Link>
                <Link href="/grammar/positive-adjective-that-starts-with-e" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Positive E-Adjectives
                </Link>
                <Link href="/grammar/positive-adjective-that-starts-with-o" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Positive O-Adjectives
                </Link>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-orange-700">
                <p><strong>Amazing:</strong> Causing great surprise or wonder</p>
                <p><strong>Awesome:</strong> Extremely impressive or daunting</p>
                <p><strong>Adorable:</strong> Delightful and lovable</p>
                <p><strong>Ambitious:</strong> Having a strong desire for success</p>
                <p><strong>Authentic:</strong> Genuine and real</p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">Pro Tip</h3>
              <p className="text-red-700">
                When using A-adjectives, consider the context carefully. Words like &quot;ambitious&quot; work well for career contexts, 
                while &quot;adorable&quot; is perfect for describing charming personalities. Choose words that precisely match your intended meaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
