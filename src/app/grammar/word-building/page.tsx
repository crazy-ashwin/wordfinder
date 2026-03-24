"use client"

import Link from "next/link"

export default function WordBuilding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Word Building
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the art of creating new words through prefixes, suffixes, root words, and compound formation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What is Word Building?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Word building is the process of creating new words by combining existing word parts like <Link href="/grammar/prefixes" className="text-emerald-600 hover:text-emerald-800 font-semibold">prefixes</Link>, <Link href="/grammar/suffixes" className="text-emerald-600 hover:text-emerald-800 font-semibold">suffixes</Link>, and <Link href="/grammar/root-words" className="text-emerald-600 hover:text-emerald-800 font-semibold">root words</Link>. It&apos;s a powerful way to expand your vocabulary and understand how words are constructed in English. By learning word building techniques, you can decode unfamiliar words and create new ones.
              </p>
            </div>

            {/* Word Building Methods */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Methods of Word Building
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">1. Prefixes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Definition</p>
                      <p className="text-emerald-600">Word parts added to the beginning of words</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Examples</p>
                      <p className="text-emerald-600">un-, re-, pre-, dis-, mis-</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Usage</p>
                      <p className="text-emerald-600">Change meaning or create opposites</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Sentence</p>
                      <p className="text-emerald-600">The unhappy child was misbehaving.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">2. Suffixes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Definition</p>
                      <p className="text-teal-600">Word parts added to the end of words</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Examples</p>
                      <p className="text-teal-600">-ly, -ness, -ful, -less, -tion</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Usage</p>
                      <p className="text-teal-600">Change word class or add meaning</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Sentence</p>
                      <p className="text-teal-600">The teacher spoke carefully about happiness.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">3. Root Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Definition</p>
                      <p className="text-cyan-600">Base words that carry core meaning</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Examples</p>
                      <p className="text-cyan-600">act, form, port, struct, dict</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Usage</p>
                      <p className="text-cyan-600">Foundation for building complex words</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Sentence</p>
                      <p className="text-cyan-600">The actor performed an action actively.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">4. Compound Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Definition</p>
                      <p className="text-emerald-600">Words made from two or more words</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Examples</p>
                      <p className="text-emerald-600">sunshine, homework, basketball</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Usage</p>
                      <p className="text-emerald-600">Combine meanings to create new concepts</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Sentence</p>
                      <p className="text-emerald-600">The homework was done in the sunshine.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Prefixes and Suffixes */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Prefixes and Suffixes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Common Prefixes</h3>
                  <div className="space-y-3">
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">un-</span>
                      <span className="text-emerald-600 ml-2">(not, opposite) - unhappy, unfair</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">re-</span>
                      <span className="text-emerald-600 ml-2">(again, back) - rewrite, return</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">pre-</span>
                      <span className="text-emerald-600 ml-2">(before) - preview, prepare</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">dis-</span>
                      <span className="text-emerald-600 ml-2">(not, opposite) - disagree, disappear</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">mis-</span>
                      <span className="text-emerald-600 ml-2">(wrongly) - misunderstand, misbehave</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-teal-700 mb-4">Common Suffixes</h3>
                  <div className="space-y-3">
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">-ly</span>
                      <span className="text-teal-600 ml-2">(adverb) - quickly, happily</span>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">-ness</span>
                      <span className="text-teal-600 ml-2">(noun) - happiness, kindness</span>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">-ful</span>
                      <span className="text-teal-600 ml-2">(full of) - beautiful, helpful</span>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">-less</span>
                      <span className="text-teal-600 ml-2">(without) - careless, hopeless</span>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <span className="font-semibold text-teal-800">-tion</span>
                      <span className="text-teal-600 ml-2">(noun) - education, creation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Word Parts
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Break down these words into their parts:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Unhappiness&quot; = _____ + _____ + _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: un- + happy + -ness</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Misunderstanding&quot; = _____ + _____ + _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: mis- + understand + -ing</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Preparations&quot; = _____ + _____ + _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: pre- + prepare + -ation + -s</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Create New Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add prefixes or suffixes to create new words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Add &quot;un-&quot; to &quot;happy&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: unhappy</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Add &quot;-ness&quot; to &quot;kind&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: kindness</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Add &quot;re-&quot; to &quot;write&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: rewrite</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Compound Word Formation
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Combine words to create compound words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Sun&quot; + &quot;shine&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: sunshine</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Home&quot; + &quot;work&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: homework</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Basket&quot; + &quot;ball&quot; = _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: basketball</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Word Building Challenge
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Build words using these word parts:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;re-&quot; + &quot;form&quot; + &quot;-ation&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: reformation</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;un-&quot; + &quot;forget&quot; + &quot;-able&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: unforgettable</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;pre-&quot; + &quot;determine&quot; + &quot;-ed&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: predetermined</p>
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
                <li>• Word building helps you understand unfamiliar words by breaking them down into familiar parts</li>
                <li>• Prefixes usually change the meaning of words, while suffixes often change the word class</li>
                <li>• Compound words can be written as one word, hyphenated, or as separate words</li>
                <li>• Learning common prefixes and suffixes can help you decode thousands of new words</li>
                <li>• Root words often come from Latin or Greek and appear in many English words</li>
              </ul>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Word Building
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Spelling Changes</h4>
                    <p className="text-gray-600">Sometimes adding prefixes or suffixes requires spelling changes (e.g., happy → happiness, beauty → beautiful).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Meaning Changes</h4>
                    <p className="text-gray-600">Prefixes can completely change a word&apos;s meaning (e.g., possible → impossible, like → dislike).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Word Class Changes</h4>
                    <p className="text-gray-600">Suffixes often change a word from one part of speech to another (e.g., quick → quickly, happy → happiness).</p>
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
                <Link href="/grammar/prefixes" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Prefixes
                </Link>
                <Link href="/grammar/suffixes" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Suffixes
                </Link>
                <Link href="/grammar/compound-words-for-kids" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Compound Words
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/vocabulary-for-kids" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Vocabulary for Kids
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Methods:</span>
                  <span className="text-gray-600">4 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Create new words</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-emerald-100">
                Learning just 20 common prefixes and suffixes can help you understand thousands of new words!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
