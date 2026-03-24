"use client"

import Link from "next/link"

export default function AdjectivesWithLetterT() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With Letter T
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover terrific, thoughtful, and talented adjectives containing the letter T to enhance your vocabulary
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Terrific Adjectives With Letter T
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter T appears in countless adjectives, adding texture, tone, and terrific qualities to our language.
                From &quot;thoughtful&quot; to &quot;talented,&quot; these words help us express intelligence, describe abilities,
                and add precision to our descriptions.
              </p>
            </div>

            {/* Popular T Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives With Letter T
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-4">Intelligence & Character</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Thoughtful</p>
                      <p className="text-teal-600 text-sm">Considerate and reflective</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Talented</p>
                      <p className="text-teal-600 text-sm">Having natural ability or skill</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Trustworthy</p>
                      <p className="text-teal-600 text-sm">Reliable and honest</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Terrific</p>
                      <p className="text-teal-600 text-sm">Extraordinarily good</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Physical & Emotional</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Tender</p>
                      <p className="text-cyan-600 text-sm">Gentle and caring</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Tough</p>
                      <p className="text-cyan-600 text-sm">Strong and resilient</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Tranquil</p>
                      <p className="text-cyan-600 text-sm">Peaceful and calm</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Thrilling</p>
                      <p className="text-cyan-600 text-sm">Exciting and exhilarating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More T Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives With Letter T
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-3">Personality Traits</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>Thoughtful</li>
                    <li>Trustworthy</li>
                    <li>Tenacious</li>
                    <li>Truthful</li>
                    <li>Tolerant</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-700 mb-3">Abilities & Skills</h4>
                  <ul className="text-indigo-600 space-y-1 text-sm">
                    <li>Talented</li>
                    <li>Technical</li>
                    <li>Tactful</li>
                    <li>Thorough</li>
                    <li>Timely</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">Physical Qualities</h4>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>Tender</li>
                    <li>Tough</li>
                    <li>Tiny</li>
                    <li>Tremendous</li>
                    <li>Tropical</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz: T-Adjective Definitions
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">What does &quot;tenacious&quot; mean?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q1" className="mr-2" />
                      <span>Very talented and skilled</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q1" className="mr-2" />
                      <span>Persistent and determined</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q1" className="mr-2" />
                      <span>Very thoughtful and kind</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-teal-50 rounded-lg hidden" id="answer1">
                    <p className="text-teal-800 font-semibold">Correct Answer: Persistent and determined</p>
                    <p className="text-teal-600 text-sm">Tenacious describes someone who is persistent, determined, and doesn&apos;t give up easily.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Which word means &quot;gentle and caring&quot;?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q2" className="mr-2" />
                      <span>Thoughtful</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q2" className="mr-2" />
                      <span>Tender</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q2" className="mr-2" />
                      <span>Trustworthy</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-cyan-50 rounded-lg hidden" id="answer2">
                    <p className="text-cyan-800 font-semibold">Correct Answer: Tender</p>
                    <p className="text-cyan-600 text-sm">Tender means gentle, caring, and showing kindness and affection.</p>
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
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Complete: &quot;She is a very _____ person who always keeps her promises.&quot;</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q3" className="mr-2" />
                      <span>Talented</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q3" className="mr-2" />
                      <span>Trustworthy</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q3" className="mr-2" />
                      <span>Thoughtful</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg hidden" id="answer3">
                    <p className="text-blue-800 font-semibold">Correct Answer: Trustworthy</p>
                    <p className="text-blue-600 text-sm">Trustworthy means reliable, honest, and someone you can depend on.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Complete: &quot;His _____ approach solved the complex problem.&quot;</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q4" className="mr-2" />
                      <span>Thorough</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q4" className="mr-2" />
                      <span>Tender</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q4" className="mr-2" />
                      <span>Tranquil</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-indigo-50 rounded-lg hidden" id="answer3">
                    <p className="text-indigo-800 font-semibold">Correct Answer: Thorough</p>
                    <p className="text-indigo-600 text-sm">Thorough means complete, detailed, and leaving nothing out.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz: T-Adjective Synonyms
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Which word is a synonym for &quot;terrific&quot;?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q5" className="mr-2" />
                      <span>Thoughtful</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q5" className="mr-2" />
                      <span>Excellent</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q5" className="mr-2" />
                      <span>Trustworthy</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg hidden" id="answer5">
                    <p className="text-purple-800 font-semibold">Correct Answer: Excellent</p>
                    <p className="text-purple-600 text-sm">Terrific and excellent both mean extraordinarily good or wonderful.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-xl">
                  <p className="font-semibold text-gray-800 mb-3">Which word is a synonym for &quot;tranquil&quot;?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="q6" className="mr-2" />
                      <span>Talented</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q6" className="mr-2" />
                      <span>Peaceful</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="q6" className="mr-2" />
                      <span>Thoughtful</span>
                    </label>
                  </div>
                  <div className="mt-4 p-3 bg-pink-50 rounded-lg hidden" id="answer6">
                    <p className="text-pink-800 font-semibold">Correct Answer: Peaceful</p>
                    <p className="text-pink-600 text-sm">Tranquil and peaceful both mean calm, quiet, and free from disturbance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for T-Adjectives
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Comparative and Superlative Forms</h3>
                  <ul className="text-teal-600 space-y-2">
                    <li><strong>Thoughtful:</strong> thoughtful → more thoughtful → most thoughtful</li>
                    <li><strong>Talented:</strong> talented → more talented → most talented</li>
                    <li><strong>Trustworthy:</strong> trustworthy → more trustworthy → most trustworthy</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Usage Tips</h3>
                  <ul className="text-cyan-600 space-y-2">
                    <li>Use &quot;thoughtful&quot; to describe considerate and reflective behavior</li>
                    <li>&quot;Talented&quot; works well for describing natural abilities and skills</li>
                    <li>&quot;Trustworthy&quot; is perfect for describing reliable and honest people</li>
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
                <div className="border-l-4 border-teal-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What&apos;s the difference between &quot;thoughtful&quot; and &quot;thoughtful&quot;?</h3>
                  <p className="text-gray-600">Actually, &quot;thoughtful&quot; is spelled the same way! It means considerate and reflective, showing care for others&apos; feelings.</p>
                </div>
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Can &quot;tenacious&quot; be used for positive traits?</h3>
                  <p className="text-gray-600">Yes! &quot;Tenacious&quot; is often positive, describing someone who is persistent, determined, and doesn&apos;t give up easily.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I use &quot;tactful&quot; correctly?</h3>
                  <p className="text-gray-600">Use &quot;tactful&quot; when describing someone who is diplomatic, sensitive to others&apos; feelings, and handles situations skillfully.</p>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-teal-800 mb-4">
                Key Takeaways
              </h2>
              <ul className="text-teal-700 space-y-2 text-lg">
                <li>• T-adjectives are excellent for describing intelligence, character, and abilities</li>
                <li>• Many T-adjectives work well in professional and personal contexts</li>
                <li>• Use these words to add precision and positive emphasis to your descriptions</li>
                <li>• Remember that context matters when choosing the right T-adjective</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/good-adjectives-starting-with-t" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Good T-Adjectives
                </Link>
                <Link href="/grammar/positive-adjective-that-starts-with-t" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Positive T-Adjectives
                </Link>
                <Link href="/grammar/adjectives-with-letter-c" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Adjectives with Letter C
                </Link>
                <Link href="/grammar/adjectives-with-letter-v" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Adjectives with Letter V
                </Link>
                <Link href="/grammar/adjectives-with-letter-y" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Adjectives with Letter Y
                </Link>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-cyan-700">
                <p><strong>Thoughtful:</strong> Considerate and reflective</p>
                <p><strong>Talented:</strong> Having natural ability</p>
                <p><strong>Trustworthy:</strong> Reliable and honest</p>
                <p><strong>Terrific:</strong> Extraordinarily good</p>
                <p><strong>Tender:</strong> Gentle and caring</p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Pro Tip</h3>
              <p className="text-blue-700">
                When using T-adjectives, consider the context carefully. Words like &quot;thoughtful&quot; work well for personality,
                while &quot;technical&quot; is perfect for describing skills. Choose words that precisely match your intended meaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}