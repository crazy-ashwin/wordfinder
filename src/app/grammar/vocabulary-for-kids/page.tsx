"use client"

import Link from "next/link"

export default function VocabularyForKids() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Vocabulary for Kids
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Build a strong vocabulary foundation with fun words, activities, and learning strategies for children
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What is Vocabulary?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Vocabulary is the collection of words that a person knows and uses. For kids, building a strong vocabulary is essential for reading, writing, speaking, and understanding the world around them. A rich vocabulary helps children express their thoughts clearly, understand stories better, and succeed in school. Learning new words can be fun through games, <Link href="/grammar/word-building" className="text-pink-600 hover:text-pink-800 font-semibold">word building</Link>, and everyday conversations.
              </p>
            </div>

            {/* Vocabulary Building Strategies */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Vocabulary Building Strategies
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">1. Read Every Day</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Strategy</p>
                      <p className="text-pink-600">Read books, magazines, and stories</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Benefits</p>
                      <p className="text-pink-600">Exposes kids to new words naturally</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Examples</p>
                      <p className="text-pink-600">Picture books, chapter books, comics</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Activity</p>
                      <p className="text-pink-600">Read together and discuss new words</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-3">2. Word Games and Puzzles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Strategy</p>
                      <p className="text-rose-600">Play word games and solve puzzles</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Benefits</p>
                      <p className="text-rose-600">Makes learning fun and engaging</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Examples</p>
                      <p className="text-rose-600">Crosswords, word searches, Scrabble</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Activity</p>
                      <p className="text-rose-600">Create family word game nights</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">3. Context Clues</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Strategy</p>
                      <p className="text-red-600">Use surrounding words to guess meaning</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Benefits</p>
                      <p className="text-red-600">Helps understand words without a dictionary</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Examples</p>
                      <p className="text-red-600">Synonyms, antonyms, examples</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Activity</p>
                      <p className="text-red-600">Practice with sentence examples</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">4. Word Families</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Strategy</p>
                      <p className="text-pink-600">Learn groups of related words</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Benefits</p>
                      <p className="text-pink-600">Makes learning multiple words easier</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Examples</p>
                      <p className="text-pink-600">happy, happiness, happily, unhappy</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Activity</p>
                      <p className="text-pink-600">Create word family trees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Age-Appropriate Vocabulary */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Age-Appropriate Vocabulary
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4">Preschool (Ages 3-5)</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <span className="font-semibold text-pink-800">Basic words:</span>
                      <span className="text-pink-600 ml-2">Colors, numbers, animals</span>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <span className="font-semibold text-pink-800">Action words:</span>
                      <span className="text-pink-600 ml-2">Run, jump, eat, sleep</span>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <span className="font-semibold text-pink-800">Descriptive words:</span>
                      <span className="text-pink-600 ml-2">Big, small, hot, cold</span>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <span className="font-semibold text-pink-800">Family words:</span>
                      <span className="text-pink-600 ml-2">Mom, dad, sister, brother</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-rose-700 mb-4">Elementary (Ages 6-10)</h3>
                  <div className="space-y-3">
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <span className="font-semibold text-rose-800">School words:</span>
                      <span className="text-rose-600 ml-2">Learn, study, homework, test</span>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <span className="font-semibold text-rose-800">Emotion words:</span>
                      <span className="text-rose-600 ml-2">Excited, nervous, proud, worried</span>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <span className="font-semibold text-rose-800">Science words:</span>
                      <span className="text-rose-600 ml-2">Experiment, observe, measure, record</span>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <span className="font-semibold text-rose-800">Story words:</span>
                      <span className="text-rose-600 ml-2">Character, plot, setting, conflict</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Word Meanings
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match these words with their meanings:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Curious&quot; means:</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Wanting to know or learn something</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Generous&quot; means:</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Willing to give or share with others</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Brave&quot; means:</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Ready to face danger or difficulty</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Word Families
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these word families:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Happy&quot; family: happy, _____, happily, _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: happiness, unhappy</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Care&quot; family: care, _____, _____, careless</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: careful, caring</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Friend&quot; family: friend, _____, _____, friendly</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: friendship, friendless</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Context Clues
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Use context clues to understand these words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The child was <strong>furious</strong> when his toy broke.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Very angry (context: toy broke)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;The <strong>massive</strong> elephant was bigger than the car.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Very large (context: bigger than car)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;She was <strong>exhausted</strong> after running the marathon.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Very tired (context: after running marathon)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Vocabulary Challenge
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using these vocabulary words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;adventure&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: Going camping was a great adventure for our family.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;determined&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The determined student studied hard to pass the test.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;creative&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The creative artist painted a beautiful picture.</p>
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
                <li>• Children learn vocabulary best through repeated exposure and meaningful context</li>
                <li>• Reading aloud to children helps them hear new words and understand their meanings</li>
                <li>• Word games make vocabulary learning fun and engaging for kids</li>
                <li>• Encourage children to use new words in conversations and writing</li>
                <li>• Building vocabulary is a gradual process that happens over time</li>
              </ul>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Building Vocabulary
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Make It Fun</h4>
                    <p className="text-gray-600">Use games, songs, and activities to make vocabulary learning enjoyable.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use New Words</h4>
                    <p className="text-gray-600">Encourage children to use new vocabulary words in daily conversations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Read Together</h4>
                    <p className="text-gray-600">Reading with children helps them learn new words in context.</p>
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
                <Link href="/grammar/word-building" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Word Building
                </Link>
                <Link href="/grammar/reading-skills" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Reading Skills
                </Link>
                <Link href="/grammar/compound-words-for-kids" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Compound Words
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/reading-comprehension" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Reading Comprehension
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Strategies:</span>
                  <span className="text-gray-600">4 main methods</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Build word knowledge</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-pink-100">
                Children learn 3,000-4,000 new words per year through reading and conversation!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
