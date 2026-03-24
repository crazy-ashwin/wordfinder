"use client"

import Link from "next/link"

export default function PunctuationApostrophe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Apostrophe Punctuation
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about the apostrophe and its proper usage in English
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-slate-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Is an Apostrophe?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                An apostrophe (&apos;) is a punctuation mark used to indicate possession, contractions, and sometimes 
                plural forms. It is one of the most commonly misused punctuation marks in English. Understanding 
                when and how to use apostrophes correctly is essential for clear and accurate writing.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Uses of Apostrophes
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-3">Possessive Apostrophes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Singular Possession</p>
                      <p className="text-slate-600">The dog&apos;s bone</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Plural Possession</p>
                      <p className="text-slate-600">The dogs&apos; bones</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Names Ending in S</p>
                      <p className="text-slate-600">James&apos;s car</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Joint Possession</p>
                      <p className="text-slate-600">John and Mary&apos;s house</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">Contractions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Common Contractions</p>
                      <p className="text-gray-600">Don&apos;t, can&apos;t, won&apos;t</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Verb Contractions</p>
                      <p className="text-gray-600">I&apos;m, you&apos;re, he&apos;s</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Negative Contractions</p>
                      <p className="text-gray-600">Isn&apos;t, aren&apos;t, hasn&apos;t</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Possessive Pronouns</p>
                      <p className="text-gray-600">Its, yours, theirs (no apostrophe)</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-zinc-500 pl-6">
                  <h3 className="text-2xl font-semibold text-zinc-700 mb-3">Special Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Plural Letters/Numbers</p>
                      <p className="text-zinc-600">Mind your p&apos;s and q&apos;s</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Time Expressions</p>
                      <p className="text-zinc-600">A day&apos;s work</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Abbreviations</p>
                      <p className="text-zinc-600">CD&apos;s, DVD&apos;s</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Omitted Letters</p>
                      <p className="text-zinc-600">Rock &apos;n&apos; roll</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Apostrophe Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl border-l-4 border-slate-400">
                  <p className="text-lg">
                    <span className="font-semibold text-slate-700">The cat&apos;s toy is missing.</span> (Singular possession)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-zinc-50 p-6 rounded-xl border-l-4 border-gray-400">
                  <p className="text-lg">
                    <span className="font-semibold text-gray-700">I don&apos;t want to go.</span> (Contraction)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-zinc-50 to-neutral-50 p-6 rounded-xl border-l-4 border-zinc-400">
                  <p className="text-lg">
                    <span className="font-semibold text-zinc-700">The students&apos; books are on the desk.</span> (Plural possession)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-neutral-50 to-stone-50 p-6 rounded-xl border-l-4 border-neutral-400">
                  <p className="text-lg">
                    <span className="font-semibold text-neutral-700">It&apos;s a beautiful day.</span> (Contraction of &quot;it is&quot;)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Apostrophe Uses
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the use of apostrophes in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The dog&apos;s bone is missing.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Possessive apostrophe (singular)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I don&apos;t want to go.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Contraction (do not)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The students&apos; books are here.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Possessive apostrophe (plural)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Add Apostrophes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-zinc-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add apostrophes where needed:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cats toy is missing.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The cat&apos;s toy is missing.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I do not want to go.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I don&apos;t want to go.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The students books are here.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The students&apos; books are here.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Common Mistakes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-zinc-50 to-neutral-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the mistakes in these sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Its a beautiful day&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Should be &quot;It&apos;s&quot; (contraction of it is)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;The dog&apos;s are barking&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Should be &quot;dogs&quot; (plural, not possessive)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Your going to the store&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Should be &quot;You&apos;re&quot; (contraction of you are)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Possessive vs Plural
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-neutral-50 to-stone-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct form:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. The _____ are playing. (multiple cats)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-neutral-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: cats (plural, no apostrophe)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. The _____ toy is missing. (one cat owns the toy)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-neutral-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: cat&apos;s (singular possessive)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. The _____ toys are missing. (multiple cats own the toys)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-neutral-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: cats&apos; (plural possessive)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Apostrophes
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Possession vs Plural</h4>
                    <p className="text-gray-600">Use apostrophes for possession, not for simple plurals.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Contractions</h4>
                    <p className="text-gray-600">Apostrophes replace omitted letters in contractions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Possessive Pronouns</h4>
                    <p className="text-gray-600">Remember: its, yours, theirs don&apos;t need apostrophes.</p>
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
                <Link href="/grammar/punctuation" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Punctuation
                </Link>
                <Link href="/grammar/punctuation-colon" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Colon Punctuation
                </Link>
                <Link href="/grammar/punctuation-semicolon-rules" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Semicolon Rules
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Grammar Rules
                </Link>
                <Link href="/grammar/english-grammar" className="block text-slate-600 hover:text-slate-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Main Uses:</span>
                  <span className="text-gray-600">2 main uses</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Mistakes:</span>
                  <span className="text-gray-600">3 common errors</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-slate-100">
                Apostrophes show possession and create contractions - they&apos;re essential for clear writing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 