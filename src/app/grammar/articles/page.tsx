"use client"

import Link from "next/link"

export default function Articles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Articles
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the use of articles (a, an, the) to make your English more accurate and natural
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
                What Are Articles?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Articles are small words that come before <Link href="/grammar/nouns" className="text-teal-600 hover:text-teal-800 font-semibold">nouns</Link> to indicate whether the noun is specific or general. There are three articles in English: &quot;a,&quot; &quot;an,&quot; and &quot;the.&quot; Understanding how to use articles correctly is essential for proper <Link href="/grammar/sentence-structure" className="text-teal-600 hover:text-teal-800 font-semibold">sentence structure</Link> and clear communication. Articles are fundamental to <Link href="/grammar/english-grammar" className="text-teal-600 hover:text-teal-800 font-semibold">English grammar</Link>.
              </p>
            </div>

            {/* Types of Articles */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Articles
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">1. Indefinite Article &quot;A&quot;</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Definition</p>
                      <p className="text-teal-600">Used before consonant sounds</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Examples</p>
                      <p className="text-teal-600">a cat, a book, a university</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Usage</p>
                      <p className="text-teal-600">General, non-specific nouns</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Sentence</p>
                      <p className="text-teal-600">I saw a cat in the garden.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">2. Indefinite Article &quot;An&quot;</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Definition</p>
                      <p className="text-emerald-600">Used before vowel sounds</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Examples</p>
                      <p className="text-emerald-600">an apple, an hour, an MBA</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Usage</p>
                      <p className="text-emerald-600">General, non-specific nouns</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Sentence</p>
                      <p className="text-emerald-600">I ate an apple for lunch.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">3. Definite Article &quot;The&quot;</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Definition</p>
                      <p className="text-green-600">Used before specific nouns</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Examples</p>
                      <p className="text-green-600">the cat, the book, the sun</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Usage</p>
                      <p className="text-green-600">Specific, known nouns</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Sentence</p>
                      <p className="text-green-600">The cat is sleeping on the sofa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Use Articles */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                When to Use Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-teal-700 mb-4">Use &quot;A&quot; or &quot;An&quot;</h3>
                  <div className="space-y-3">
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">First mention:</span>
                      <span className="text-teal-600 ml-2">Introducing something new</span>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">General reference:</span>
                      <span className="text-teal-600 ml-2">Any example of a category</span>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">Professions:</span>
                      <span className="text-teal-600 ml-2">She is a doctor</span>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">Quantities:</span>
                      <span className="text-teal-600 ml-2">A few, a lot of</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Use &quot;The&quot;</h3>
                  <div className="space-y-3">
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">Specific items:</span>
                      <span className="text-emerald-600 ml-2">Known to speaker and listener</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">Unique things:</span>
                      <span className="text-emerald-600 ml-2">The sun, the moon, the earth</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">Second mention:</span>
                      <span className="text-emerald-600 ml-2">Referring back to something</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">Superlatives:</span>
                      <span className="text-emerald-600 ml-2">The best, the most</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Cases */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Special Cases and Exceptions
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">No Article (Zero Article)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Plural nouns:</p>
                      <p className="text-green-600">General categories</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Examples</p>
                      <p className="text-green-600">Cats are animals. (not The cats)</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Proper nouns:</p>
                      <p className="text-green-600">Names of people, places</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Examples</p>
                      <p className="text-green-600">John lives in London.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">Sound vs. Spelling</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Rule</p>
                      <p className="text-teal-600">Use sound, not spelling</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Examples</p>
                      <p className="text-teal-600">a university, an hour</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Explanation</p>
                      <p className="text-teal-600">University starts with /y/ sound</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">More examples</p>
                      <p className="text-teal-600">a European, an FBI agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Choose the Right Article
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Select the correct article for each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I saw _____ elephant at the zoo.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: an (elephant starts with vowel sound)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She is _____ university student.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: a (university starts with /y/ sound)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;_____ sun is very bright today.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The (unique object)</p>
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
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate articles:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I bought _____ book yesterday. _____ book is very interesting.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: a, The (first mention, then specific)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She is _____ honest person.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: an (honest starts with vowel sound)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;_____ children love playing games.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: (no article - general plural)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Article or No Article?
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Decide if you need an article or not:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;_____ Paris is _____ beautiful city.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: (no article), a (Paris is proper noun, city is general)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;_____ water is essential for life.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: (no article - uncountable noun)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;_____ United States is _____ large country.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The, a (country name with &quot;The&quot;, then general)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Article Challenge
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using articles correctly:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;doctor&quot; + article + &quot;works in hospital&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: A doctor works in a hospital.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;apple&quot; + article + &quot;is red&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: An apple is red.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;sun&quot; + article + &quot;rises in east&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The sun rises in the east.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>• Use &quot;a&quot; before consonant sounds, &quot;an&quot; before vowel sounds</li>
                <li>• Use &quot;the&quot; for specific, known, or unique items</li>
                <li>• No article is needed for general plural nouns or proper nouns</li>
                <li>• Pay attention to sound, not spelling (a university, an hour)</li>
                <li>• Articles help make your English sound more natural and accurate</li>
              </ul>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Articles
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sound-Based Choice</h4>
                    <p className="text-gray-600">Choose &quot;a&quot; or &quot;an&quot; based on the sound, not the letter.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Specific vs. General</h4>
                    <p className="text-gray-600">Use &quot;the&quot; for specific items, &quot;a/an&quot; for general ones.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Context Matters</h4>
                    <p className="text-gray-600">The same noun might need different articles in different contexts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/nouns" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Nouns
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-teal-600 hover:text-teal-800 font-medium">
                  English Grammar
                </Link>
                <Link href="/grammar/quantifiers" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Quantifiers
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">3 articles</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                      <span className="text-gray-600">Specify nouns</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-teal-100">
                Mastering articles is one of the quickest ways to make your English sound more natural!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
