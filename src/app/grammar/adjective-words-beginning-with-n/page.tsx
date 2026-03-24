"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectiveWordsBeginningWithN() {
  const [quiz1Answers, setQuiz1Answers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)

  const handleQuiz1Change = (question: string, answer: string) => {
    setQuiz1Answers(prev => ({ ...prev, [question]: answer }))
  }

  const checkAnswers = () => {
    setShowResults(true)
  }

  const resetQuiz = () => {
    setQuiz1Answers({})
    setShowResults(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 text-white py-16">
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
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Natural Adjectives Starting With N
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter N introduces us to a world of natural and nice adjectives that can enhance our language. 
                From &quot;natural&quot; to &quot;nice,&quot; these words help us express nature, describe pleasant qualities, 
                and add warmth to our descriptions.
              </p>
            </div>

            {/* Popular N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Natural</p>
                      <p className="text-emerald-600 text-sm">Existing in nature, not artificial</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Nice</p>
                      <p className="text-emerald-600 text-sm">Pleasant and agreeable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Noble</p>
                      <p className="text-emerald-600 text-sm">Having high moral qualities</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">New</p>
                      <p className="text-emerald-600 text-sm">Recently made or discovered</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-lime-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Nurturing</p>
                      <p className="text-green-600 text-sm">Caring and supportive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Neat</p>
                      <p className="text-green-600 text-sm">Tidy and organized</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Nimble</p>
                      <p className="text-green-600 text-sm">Quick and agile</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Notable</p>
                      <p className="text-green-600 text-sm">Worthy of attention</p>
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
                <div className="bg-gradient-to-br from-lime-50 to-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lime-700 mb-3">Characteristics</h4>
                  <ul className="text-lime-600 space-y-1 text-sm">
                    <li>Necessary</li>
                    <li>Normal</li>
                    <li>Numerous</li>
                    <li>Narrow</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-3">States</h4>
                  <ul className="text-yellow-600 space-y-1 text-sm">
                    <li>Near</li>
                    <li>Next</li>
                    <li>Native</li>
                    <li>Nervous</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-700 mb-3">Qualities</h4>
                  <ul className="text-orange-600 space-y-1 text-sm">
                    <li>Nurturing</li>
                    <li>Natural</li>
                    <li>Noteworthy</li>
                    <li>Noble</li>
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
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each N-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Natural&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural"
                            value="A"
                            onChange={() => handleQuiz1Change('natural', 'A')}
                            className="text-emerald-600"
                          />
                          <span>A) Being very old</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural"
                            value="B"
                            onChange={() => handleQuiz1Change('natural', 'B')}
                            className="text-emerald-600"
                          />
                          <span>B) Existing in nature, not artificial</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural"
                            value="C"
                            onChange={() => handleQuiz1Change('natural', 'C')}
                            className="text-emerald-600"
                          />
                          <span>C) Being very expensive</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: B) Existing in nature, not artificial</p>
                          {quiz1Answers['natural'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['natural']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Nurturing&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nurturing"
                            value="A"
                            onChange={() => handleQuiz1Change('nurturing', 'A')}
                            className="text-emerald-600"
                          />
                          <span>A) Caring and supportive</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nurturing"
                            value="B"
                            onChange={() => handleQuiz1Change('nurturing', 'B')}
                            className="text-emerald-600"
                          />
                          <span>B) Being very fast</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nurturing"
                            value="C"
                            onChange={() => handleQuiz1Change('nurturing', 'C')}
                            className="text-emerald-600"
                          />
                          <span>C) Being very tall</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Caring and supportive</p>
                          {quiz1Answers['nurturing'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['nurturing']}</p>
                          )}
                        </div>
                      )}
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
                <div className="bg-gradient-to-r from-green-50 to-lime-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate N-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ teacher always encouraged her students.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('encouraging', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: nurturing, nice, noble</p>
                          {quiz1Answers['encouraging'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['encouraging']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ approach to solving problems.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('approach', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: natural, neat, nimble</p>
                          {quiz1Answers['approach'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['approach']}</p>
                          )}
                        </div>
                      )}
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
                <div className="bg-gradient-to-r from-lime-50 to-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each N-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Natural&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('natural_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: artificial, synthetic, man-made</p>
                          {quiz1Answers['natural_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['natural_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Nice&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('nice_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: mean, nasty, unpleasant</p>
                          {quiz1Answers['nice_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['nice_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for N-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">N-adjectives typically come before the noun they describe: &quot;a natural environment&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before N-adjectives since N is a consonant sound: &quot;a nice person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many N-adjectives use &quot;more&quot; for comparison: &quot;more natural&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What makes N-adjectives special?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    N-adjectives often describe natural qualities, nurturing characteristics, and nice personality traits. They&apos;re great for describing people and environments.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How do I use N-adjectives in sentences?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Place them before nouns or after linking verbs. For example: &quot;She is nice&quot; or &quot;He has a natural talent.&quot;
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Are there any common mistakes with N-adjectives?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Yes! Remember to use &quot;a&quot; instead of &quot;an&quot; before N-adjectives, and be careful with spelling variations like &quot;natural&quot; vs &quot;naturall.&quot;
                  </p>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>N-adjectives are excellent for describing natural and nurturing qualities</li>
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
                <Link href="/grammar/adjective-word-start-with-i" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With I
                </Link>
                <Link href="/grammar/adjective-words-start-with-b" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/adjective-words-that-start-with-c" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/adjectives-beginning-with-g-to-describe-a-person" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With G
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-d" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With D
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-m" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-y" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With Y
                </Link>
                <Link href="/grammar/adjectives-beginning-with-un" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With Un
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

            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-emerald-100">
                N-adjectives are perfect for describing natural and nurturing qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
