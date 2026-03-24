"use client"

import Link from "next/link"

export default function NiceAdjectivesStartingWithA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Nice Adjectives Starting With A
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover amazing, awesome, and admirable nice adjectives starting with A
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Introduction to Nice A-Adjectives
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Nice adjectives that start with the letter A are wonderful tools for expressing 
                pleasant qualities and positive characteristics. These words help us describe 
                people, places, and things in a kind and agreeable way.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                From &quot;amazing&quot; to &quot;awesome,&quot; A-adjectives offer a delightful vocabulary for 
                creating positive impressions and building friendly relationships. They&apos;re 
                particularly useful in social interactions, compliments, and encouraging communication.
              </p>
              <p className="text-lg text-gray-700">
                Understanding and using these nice adjectives can make your conversations more 
                pleasant and help you express kindness more effectively.
              </p>
            </div>

            {/* Popular Nice A-Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Nice Adjectives Starting With A
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Amazing</h3>
                  <p className="text-gray-700">Causing great surprise or wonder, astonishing</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Awesome</h3>
                  <p className="text-gray-700">Extremely impressive or daunting, inspiring awe</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Admirable</h3>
                  <p className="text-gray-700">Deserving respect and approval</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Agreeable</h3>
                  <p className="text-gray-700">Pleasant, willing to agree, easy to get along with</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Attractive</h3>
                  <p className="text-gray-700">Pleasing or appealing to the senses</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Affectionate</h3>
                  <p className="text-gray-700">Readily feeling or showing fondness or tenderness</p>
                </div>
              </div>
            </div>

            {/* More Nice A-Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Nice Adjectives Starting With A
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-blue-600 font-semibold">•</span>
                  <span className="text-gray-700">Appreciative</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-indigo-600 font-semibold">•</span>
                  <span className="text-gray-700">Authentic</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-purple-600 font-semibold">•</span>
                  <span className="text-gray-700">Amusing</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-blue-600 font-semibold">•</span>
                  <span className="text-gray-700">Adorable</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-indigo-600 font-semibold">•</span>
                  <span className="text-gray-700">Ambitious</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-purple-600 font-semibold">•</span>
                  <span className="text-gray-700">Artistic</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-blue-600 font-semibold">•</span>
                  <span className="text-gray-700">Adventurous</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-indigo-600 font-semibold">•</span>
                  <span className="text-gray-700">Accomplished</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-purple-600 font-semibold">•</span>
                  <span className="text-gray-700">Amicable</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-blue-600 font-semibold">•</span>
                  <span className="text-gray-700">Adaptable</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-indigo-600 font-semibold">•</span>
                  <span className="text-gray-700">Appealing</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <span className="text-purple-600 font-semibold">•</span>
                  <span className="text-gray-700">Assured</span>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Nice A-Adjective Definitions
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Question 1:</h3>
                  <p className="text-gray-700 mb-3">Which adjective means &quot;causing great surprise or wonder&quot;?</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q1" id="q1a" className="text-blue-600" />
                      <label htmlFor="q1a" className="text-gray-700">A) Awesome</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q1" id="q1b" className="text-blue-600" />
                      <label htmlFor="q1b" className="text-gray-700">B) Amazing</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q1" id="q1c" className="text-blue-600" />
                      <label htmlFor="q1c" className="text-gray-700">C) Admirable</label>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Question 2:</h3>
                  <p className="text-gray-700 mb-3">Which adjective means &quot;pleasant and easy to get along with&quot;?</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q2" id="q2a" className="text-indigo-600" />
                      <label htmlFor="q2a" className="text-gray-700">A) Attractive</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q2" id="q2b" className="text-indigo-600" />
                      <label htmlFor="q2b" className="text-gray-700">B) Agreeable</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q2" id="q2c" className="text-indigo-600" />
                      <label htmlFor="q2c" className="text-gray-700">C) Ambitious</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Sentence Completion with Nice A-Adjectives
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Complete the sentence:</h3>
                  <p className="text-gray-700 mb-3">&quot;She has an _____ personality that everyone loves.&quot;</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q3" id="q3a" className="text-purple-600" />
                      <label htmlFor="q3a" className="text-gray-700">A) Amazing</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q3" id="q3b" className="text-purple-600" />
                      <label htmlFor="q3b" className="text-gray-700">B) Awesome</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q3" id="q3c" className="text-purple-600" />
                      <label htmlFor="q3c" className="text-gray-700">C) Admirable</label>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Complete the sentence:</h3>
                  <p className="text-gray-700 mb-3">&quot;The _____ child smiled at everyone.&quot;</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q4" id="q4a" className="text-blue-600" />
                      <label htmlFor="q4a" className="text-gray-700">A) Adorable</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q4" id="q4b" className="text-blue-600" />
                      <label htmlFor="q4b" className="text-gray-700">B) Amazing</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q4" id="q4c" className="text-blue-600" />
                      <label htmlFor="q4c" className="text-gray-700">C) Awesome</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Nice A-Adjective Opposites
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Question 1:</h3>
                  <p className="text-gray-700 mb-3">What&apos;s the opposite of &quot;agreeable&quot;?</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q5" id="q5a" className="text-indigo-600" />
                      <label htmlFor="q5a" className="text-gray-700">A) Disagreeable</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q5" id="q5b" className="text-indigo-600" />
                      <label htmlFor="q5b" className="text-gray-700">B) Unpleasant</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q5" id="q5c" className="text-indigo-600" />
                      <label htmlFor="q5c" className="text-gray-700">C) Both A and B</label>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Question 2:</h3>
                  <p className="text-gray-700 mb-3">What&apos;s the opposite of &quot;amazing&quot;?</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q6" id="q6a" className="text-purple-600" />
                      <label htmlFor="q6a" className="text-gray-700">A) Ordinary</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q6" id="q6b" className="text-purple-600" />
                      <label htmlFor="q6b" className="text-gray-700">B) Unamazing</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="q6" id="q6c" className="text-purple-600" />
                      <label htmlFor="q6c" className="text-gray-700">C) Both A and B</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for Nice A-Adjectives
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Positive Connotation</h3>
                  <p className="text-gray-700">
                    Nice A-adjectives carry pleasant meanings and are used to express agreeable qualities, 
                    positive characteristics, and favorable impressions.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Social Usage</h3>
                  <p className="text-gray-700">
                    These adjectives are commonly used in social interactions, compliments, and 
                    situations where you want to create a positive atmosphere.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Comparative Forms</h3>
                  <p className="text-gray-700">
                    Most nice A-adjectives can form comparatives and superlatives: amazing → more amazing → most amazing.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Emotional Impact</h3>
                  <p className="text-gray-700">
                    Nice A-adjectives can create positive emotional responses and help build 
                    friendly, supportive relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Important Notes</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💡</span>
                  <p className="text-blue-100">
                    Nice A-adjectives are excellent for building rapport and creating positive 
                    social environments.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎯</span>
                  <p className="text-blue-100">
                    Use these adjectives genuinely to express appreciation and create 
                    pleasant interactions.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌟</span>
                  <p className="text-blue-100">
                    Remember that sincerity is key when using nice adjectives - 
                    they&apos;re most effective when genuine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-a" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With A
                </Link>
                <Link href="/grammar/positive-adjectives" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Positive Adjectives
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-blue-600 hover:text-blue-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">A</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Type:</span>
                  <span className="text-gray-600">Nice/Pleasant</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">25+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-blue-100">
                Nice A-adjectives are perfect for creating positive social interactions 
                and building friendly relationships!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
