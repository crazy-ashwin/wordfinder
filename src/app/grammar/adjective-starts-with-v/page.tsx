"use client"

import Link from "next/link"

export default function AdjectiveStartsWithV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With V
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover vibrant, valuable, and victorious adjectives starting with the letter V
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-violet-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Vibrant Adjectives Starting With V
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter V introduces us to a world of vibrant and valuable adjectives that can enhance our language. 
                From &quot;vibrant&quot; to &quot;victorious,&quot; these words help us express energy, describe qualities, 
                and add vitality to our descriptions.
              </p>
            </div>

            {/* Popular V Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With V
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Vibrant</p>
                      <p className="text-violet-600 text-sm">Full of energy and enthusiasm</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Valuable</p>
                      <p className="text-violet-600 text-sm">Worth a great deal of money or importance</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Victorious</p>
                      <p className="text-violet-600 text-sm">Having won a victory or success</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Virtuous</p>
                      <p className="text-violet-600 text-sm">Having high moral standards</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Vain</p>
                      <p className="text-purple-600 text-sm">Excessively proud of appearance</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Vicious</p>
                      <p className="text-purple-600 text-sm">Deliberately cruel or violent</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Vulnerable</p>
                      <p className="text-purple-600 text-sm">Susceptible to physical or emotional attack</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Volatile</p>
                      <p className="text-purple-600 text-sm">Liable to change rapidly and unpredictably</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More V Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With V
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-fuchsia-700 mb-3">Characteristics</h4>
                  <ul className="text-fuchsia-600 space-y-1 text-sm">
                    <li>Various</li>
                    <li>Vast</li>
                    <li>Visible</li>
                    <li>Vital</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">States</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Valid</li>
                    <li>Vague</li>
                    <li>Vivid</li>
                    <li>Vocal</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-700 mb-3">Qualities</h4>
                  <ul className="text-rose-600 space-y-1 text-sm">
                    <li>Versatile</li>
                    <li>Vigorous</li>
                    <li>Venerable</li>
                    <li>Viable</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: V-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each V-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Vibrant&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very valuable</p>
                        <p className="text-gray-600">B) Full of energy and enthusiasm</p>
                        <p className="text-gray-600">C) Being very victorious</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Full of energy and enthusiasm</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Virtuous&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very valuable</p>
                        <p className="text-gray-600">B) Being very victorious</p>
                        <p className="text-gray-600">C) Having high moral standards</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Having high moral standards</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate V-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ colors of the sunset were breathtaking.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: vibrant (full of energy and enthusiasm)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She made a _____ contribution to the project.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: valuable (worth a great deal of money or importance)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The team was _____ after winning the championship.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: victorious (having won a victory or success)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: V-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each V-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Vibrant&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dull, lifeless, boring</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Valuable&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Worthless, cheap, unimportant</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Virtuous&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Wicked, immoral, corrupt</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for V-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">V-adjectives typically come before the noun they describe: &quot;a vibrant sunset&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before V-adjectives since V is a consonant sound: &quot;a valuable contribution&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many V-adjectives use &quot;more&quot; for comparison: &quot;more vibrant&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>V-adjectives are relatively rare in English, making them valuable for unique expression</li>
                <li>Many V-adjectives have Latin origins, particularly from words like &quot;vita&quot; (life) and &quot;virtus&quot; (virtue)</li>
                <li>V-adjectives often convey strong emotional or moral qualities</li>
                <li>Use V-adjectives sparingly to maintain their impact and avoid repetition</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-start-with-f" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/adjective-start-with-j" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With J
                </Link>
                <Link href="/grammar/adjective-start-with-l" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With L
                </Link>
                <Link href="/grammar/adjective-start-with-m" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjective-start-with-n" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-start-with-o" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/adjective-start-with-p" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With P
                </Link>
                <Link href="/grammar/adjective-start-with-r" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With R
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">V</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">25+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-violet-100">
                V-adjectives are perfect for describing vibrant and valuable qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
