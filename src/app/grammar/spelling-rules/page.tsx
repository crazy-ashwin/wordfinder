import { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Spelling Rules - Complete Guide with Examples & Interactive Quizzes',
  description: 'Master essential English spelling rules including I before E, silent E, double consonants, and Y to I changes. Includes interactive quizzes and examples.',
  keywords: 'spelling rules, English spelling, I before E rule, silent E, double consonants, Y to I rule, spelling patterns, English grammar',
  openGraph: {
    title: 'Spelling Rules - Complete Guide with Examples & Interactive Quizzes',
    description: 'Master essential English spelling rules including I before E, silent E, double consonants, and Y to I changes.',
    type: 'website',
  },
}

export default function SpellingRules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Spelling Rules
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master essential English spelling rules and patterns to improve your writing accuracy
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Spelling Rules?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Spelling rules are systematic patterns that help us spell words correctly in English. While English spelling can seem irregular, there are many consistent rules that govern how words are written. Understanding these rules can help you spell thousands of words correctly and avoid common spelling mistakes. These rules apply to <Link href="/grammar/prefixes" className="text-purple-600 hover:text-purple-800 font-semibold">prefixes</Link>, <Link href="/grammar/suffixes" className="text-purple-600 hover:text-purple-800 font-semibold">suffixes</Link>, and base words.
              </p>
            </div>

            {/* Basic Spelling Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Basic Spelling Rules
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">1. I Before E Rule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Rule</p>
                      <p className="text-purple-600">I before E, except after C</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Examples</p>
                      <p className="text-purple-600">believe, receive, ceiling</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Exceptions</p>
                      <p className="text-purple-600">weird, seize, protein</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Sentence</p>
                      <p className="text-purple-600">I believe you will receive the ceiling fan.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">2. Silent E Rule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Rule</p>
                      <p className="text-violet-600">Silent E makes the vowel long</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Examples</p>
                      <p className="text-violet-600">make, time, hope, cute</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Usage</p>
                      <p className="text-violet-600">E at end makes vowel say its name</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Sentence</p>
                      <p className="text-violet-600">The cute cat made time to hope.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">3. Double Consonant Rule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Rule</p>
                      <p className="text-indigo-600">Double final consonant before suffix</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Examples</p>
                      <p className="text-indigo-600">run → running, big → bigger</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Usage</p>
                      <p className="text-indigo-600">When adding -ing, -ed, -er, -est</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Sentence</p>
                      <p className="text-indigo-600">The runner is getting bigger.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">4. Y to I Rule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Rule</p>
                      <p className="text-purple-600">Change Y to I before suffixes</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Examples</p>
                      <p className="text-purple-600">happy → happiness, try → tries</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Usage</p>
                      <p className="text-purple-600">Before -ness, -ly, -ful, -less</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Sentence</p>
                      <p className="text-purple-600">The happy child tries to be helpful.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Spelling Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Advanced Spelling Rules
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">Plural Rules</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-semibold text-purple-800">Most words:</span>
                      <span className="text-purple-600 ml-2">Add -s (cat → cats)</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-semibold text-purple-800">Words ending in -s, -x, -z, -ch, -sh:</span>
                      <span className="text-purple-600 ml-2">Add -es (box → boxes)</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-semibold text-purple-800">Words ending in -y:</span>
                      <span className="text-purple-600 ml-2">Change to -ies (baby → babies)</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-semibold text-purple-800">Words ending in -f or -fe:</span>
                      <span className="text-purple-600 ml-2">Change to -ves (leaf → leaves)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">Suffix Rules</h3>
                  <div className="space-y-3">
                    <div className="bg-violet-50 p-3 rounded-lg">
                      <span className="font-semibold text-violet-800">-able vs -ible:</span>
                      <span className="text-violet-600 ml-2">Use -able for most words</span>
                    </div>
                    <div className="bg-violet-50 p-3 rounded-lg">
                      <span className="font-semibold text-violet-800">-ance vs -ence:</span>
                      <span className="text-violet-600 ml-2">Check the root word</span>
                    </div>
                    <div className="bg-violet-50 p-3 rounded-lg">
                      <span className="font-semibold text-violet-800">-tion vs -sion:</span>
                      <span className="text-violet-600 ml-2">Use -tion for most words</span>
                    </div>
                    <div className="bg-violet-50 p-3 rounded-lg">
                      <span className="font-semibold text-violet-800">-ly suffix:</span>
                      <span className="text-violet-600 ml-2">Add to adjectives (quick → quickly)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: I Before E Rule
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these words using the I before E rule:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. bel___ve (believe or beleive?)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: believe (I before E)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. rec___ve (receive or recieve?)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: receive (E before I after C)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. ch___f (chief or cheif?)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: chief (I before E)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Silent E Rule
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add or remove silent E to make the vowel long:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Tim&quot; (short i) → &quot;Tim___&quot; (long i)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Time</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Hop&quot; (short o) → &quot;Hop___&quot; (long o)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Hope</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Cut&quot; (short u) → &quot;Cut___&quot; (long u)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Cute</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Double Consonant Rule
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add suffixes to these words (double consonants when needed):</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Run&quot; + &quot;-ing&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: running (double the n)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Big&quot; + &quot;-er&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: bigger (double the g)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Look&quot; + &quot;-ing&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: looking (no doubling needed)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Y to I Rule
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Change Y to I before adding suffixes:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Happy&quot; + &quot;-ness&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: happiness (y → i)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Try&quot; + &quot;-s&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: tries (y → i)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Play&quot; + &quot;-ing&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: playing (keep y before -ing)</p>
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
                <li>• English spelling rules have many exceptions, but learning the basic patterns helps with most words</li>
                <li>• The I before E rule works for about 75% of words, but there are important exceptions</li>
                <li>• Silent E not only makes vowels long but also prevents words from ending in certain letters</li>
                <li>• Double consonants help maintain short vowel sounds when adding suffixes</li>
                <li>• Y changes to I before most suffixes, but not before -ing or -ed</li>
              </ul>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Spelling Guidelines
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Learn Patterns</h4>
                    <p className="text-gray-600">Focus on learning spelling patterns rather than memorizing individual words.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Regularly</h4>
                    <p className="text-gray-600">Regular practice with spelling rules helps them become automatic.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Context</h4>
                    <p className="text-gray-600">Consider the word&apos;s meaning and context when applying spelling rules.</p>
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
                <Link href="/grammar/word-building" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Word Building
                </Link>
                <Link href="/grammar/prefixes" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Prefixes
                </Link>
                <Link href="/grammar/suffixes" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Suffixes
                </Link>
                <Link href="/grammar/plural-nouns" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Plural Nouns
                </Link>
                <Link href="/grammar/english-grammar" className="block text-purple-600 hover:text-purple-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Rules:</span>
                  <span className="text-gray-600">4 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Improve spelling accuracy</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-purple-100">
                Learning spelling rules helps you spell thousands of words correctly instead of memorizing each one!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
