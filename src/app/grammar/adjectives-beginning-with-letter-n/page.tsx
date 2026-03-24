"use client"

import Link from "next/link"

export default function AdjectivesBeginningWithLetterN() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-slate-50 to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-neutral-600 via-slate-600 to-gray-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives Beginning With Letter N
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover nice, noble, and natural adjectives starting with the letter N
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-neutral-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Nice Adjectives Starting With N
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter N introduces us to a world of nice and noble adjectives that can enhance our language. 
                From &quot;nice&quot; to &quot;natural,&quot; these words help us express goodness, describe qualities, 
                and add nuance to our descriptions.
              </p>
            </div>

            {/* Popular N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-neutral-50 to-slate-50 p-6 rounded-xl border-l-4 border-neutral-400">
                  <h3 className="text-2xl font-semibold text-neutral-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-neutral-800">Nice</p>
                      <p className="text-neutral-600 text-sm">Pleasant and agreeable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-neutral-800">Noble</p>
                      <p className="text-neutral-600 text-sm">Having high moral qualities</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-neutral-800">Natural</p>
                      <p className="text-neutral-600 text-sm">Existing in nature</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-neutral-800">Neat</p>
                      <p className="text-neutral-600 text-sm">Clean and orderly</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl border-l-4 border-slate-400">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Nurturing</p>
                      <p className="text-slate-600 text-sm">Caring and supportive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Notable</p>
                      <p className="text-slate-600 text-sm">Worthy of attention</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Nimble</p>
                      <p className="text-slate-600 text-sm">Quick and agile</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">New</p>
                      <p className="text-slate-600 text-sm">Recently created</p>
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
                <div className="bg-gradient-to-br from-gray-50 to-zinc-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-3">Characteristics</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>Narrow</li>
                    <li>Near</li>
                    <li>Next</li>
                    <li>Normal</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-zinc-50 to-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-zinc-700 mb-3">States</h4>
                  <ul className="text-zinc-600 space-y-1 text-sm">
                    <li>Necessary</li>
                    <li>Needy</li>
                    <li>Nervous</li>
                    <li>Numb</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-stone-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-700 mb-3">Qualities</h4>
                  <ul className="text-stone-600 space-y-1 text-sm">
                    <li>Numerous</li>
                    <li>Nurturing</li>
                    <li>Noteworthy</li>
                    <li>Novel</li>
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
                <div className="bg-gradient-to-r from-neutral-50 to-slate-50 p-6 rounded-xl">
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
                        <summary className="cursor-pointer text-neutral-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Having high moral qualities</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Nimble&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fast</p>
                        <p className="text-gray-600">B) Quick and agile</p>
                        <p className="text-gray-600">C) Being very strong</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-neutral-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Quick and agile</p>
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
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate N-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ teacher always encouraged her students.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: nurturing (caring and supportive)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ personality that everyone admired.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: noble (having high moral qualities)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ athlete moved gracefully across the field.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
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
                <div className="bg-gradient-to-r from-gray-50 to-zinc-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each N-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Narrow&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Wide, broad, spacious</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Near&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Far, distant, remote</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;New&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Old, ancient, aged</p>
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
                  <div className="bg-neutral-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">N-adjectives typically come before the noun they describe: &quot;a nice movie&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-neutral-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before N-adjectives since N is a consonant sound: &quot;a noble person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-neutral-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many N-adjectives use &quot;more&quot; for comparison: &quot;more noble&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">What are some common N-adjectives?</h3>
                  <p className="text-gray-600">Common N-adjectives include nice, noble, natural, neat, nurturing, notable, nimble, new, narrow, near, next, and normal.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I use N-adjectives in sentences?</h3>
                  <p className="text-gray-600">N-adjectives typically come before nouns: &quot;The nice garden&quot; or after linking verbs: &quot;The garden is nice.&quot;</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Are all N-adjectives positive?</h3>
                  <p className="text-gray-600">No, while many N-adjectives like &quot;nice&quot; and &quot;noble&quot; are positive, others like &quot;nervous&quot; or &quot;numb&quot; can be neutral or negative depending on context.</p>
                </div>
                
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Can N-adjectives be used as adverbs?</h3>
                  <p className="text-gray-600">Some N-adjectives can function as adverbs, but they often need to be modified: &quot;He moved nimbly&quot; (nimbly is an adverb form).</p>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>N-adjectives are excellent for describing nice and noble qualities</li>
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
                <Link href="/grammar/adjectives-that-start-with" className="block text-neutral-600 hover:text-neutral-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-neutral-600 hover:text-neutral-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-neutral-600 hover:text-neutral-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-neutral-600 hover:text-neutral-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-m" className="block text-neutral-600 hover:text-neutral-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-o" className="block text-neutral-600 hover:text-neutral-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-neutral-600 hover:text-neutral-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-neutral-600 hover:text-neutral-800 font-medium">
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

            <div className="bg-gradient-to-r from-neutral-500 to-slate-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-neutral-100">
                N-adjectives are perfect for describing nice and noble qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
