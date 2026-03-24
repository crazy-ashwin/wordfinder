"use client"

import Link from "next/link"

export default function AdjectiveBeginWithN() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With N
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover natural, nice, and noble adjectives starting with the letter N
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
                Natural Adjectives Starting With N
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter N introduces us to a world of natural and noble adjectives that can enhance our language. 
                From &quot;natural&quot; to &quot;nice,&quot; these words help us express qualities, describe characteristics, 
                and add nuance to our descriptions.
              </p>
            </div>

            {/* Popular N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl border-l-4 border-slate-400">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Natural</p>
                      <p className="text-slate-600 text-sm">Existing in nature, not artificial</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Nice</p>
                      <p className="text-slate-600 text-sm">Pleasant and agreeable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Noble</p>
                      <p className="text-slate-600 text-sm">Having high moral qualities</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Neat</p>
                      <p className="text-slate-600 text-sm">Clean and organized</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-zinc-50 p-6 rounded-xl border-l-4 border-gray-400">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">Nurturing</p>
                      <p className="text-gray-600 text-sm">Caring and supportive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">Notable</p>
                      <p className="text-gray-600 text-sm">Worthy of attention</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">Nimble</p>
                      <p className="text-gray-600 text-sm">Quick and agile</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">Nurturing</p>
                      <p className="text-gray-600 text-sm">Caring and supportive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-zinc-50 to-neutral-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-zinc-700 mb-3">Characteristics</h4>
                  <ul className="text-zinc-600 space-y-1 text-sm">
                    <li>New</li>
                    <li>Normal</li>
                    <li>Necessary</li>
                    <li>Numerous</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-neutral-50 to-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-neutral-700 mb-3">States</h4>
                  <ul className="text-neutral-600 space-y-1 text-sm">
                    <li>Nervous</li>
                    <li>Noisy</li>
                    <li>Numb</li>
                    <li>Nasty</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-stone-50 to-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-700 mb-3">Qualities</h4>
                  <ul className="text-stone-600 space-y-1 text-sm">
                    <li>Native</li>
                    <li>Neutral</li>
                    <li>Narrow</li>
                    <li>Near</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: N-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each N-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Noble&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Having high moral qualities</p>
                        <p className="text-gray-600">C) Being very expensive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Having high moral qualities</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Nimble&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very tall</p>
                        <p className="text-gray-600">B) Being very strong</p>
                        <p className="text-gray-600">C) Quick and agile</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Quick and agile</p>
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
                <div className="bg-gradient-to-r from-gray-50 to-zinc-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate N-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ teacher helped every student.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: nurturing (caring and supportive)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She made a _____ discovery in science.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: notable (worthy of attention)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ athlete moved quickly across the field.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: nimble (quick and agile)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: N-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-zinc-50 to-neutral-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each N-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Natural&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Artificial, synthetic, man-made</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Nice&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Mean, unpleasant, disagreeable</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Neat&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Messy, disorganized, untidy</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for N-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">N-adjectives typically come before the noun they describe: &quot;a natural beauty&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before N-adjectives since N is a consonant sound: &quot;a nice day&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many N-adjectives use &quot;more&quot; for comparison: &quot;more natural&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>N-adjectives are excellent for describing natural and noble qualities</li>
                <li>Many N-adjectives have positive connotations, making them great for compliments</li>
                <li>Some N-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of N-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-m" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-that-start-with-o" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Parts of Speech
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
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">N</span>
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

            <div className="bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-slate-100">
                N-adjectives are perfect for describing natural and noble qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
