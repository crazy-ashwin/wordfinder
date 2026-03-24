"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectiveWordStartWithI() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With I
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover incredible, intelligent, and inspiring adjectives starting with the letter I
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Incredible Adjectives Starting With I
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter I introduces us to a world of incredible and intelligent adjectives that can enhance our language. 
                From &quot;incredible&quot; to &quot;intelligent,&quot; these words help us express amazement, describe mental qualities, 
                and add impact to our descriptions.
              </p>
            </div>

            {/* Popular I Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With I
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Incredible</p>
                      <p className="text-indigo-600 text-sm">Extraordinarily good or amazing</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Intelligent</p>
                      <p className="text-indigo-600 text-sm">Having great mental ability</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Inspiring</p>
                      <p className="text-indigo-600 text-sm">Motivating and uplifting</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Important</p>
                      <p className="text-indigo-600 text-sm">Significant and valuable</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Independent</p>
                      <p className="text-blue-600 text-sm">Self-reliant and autonomous</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Innovative</p>
                      <p className="text-blue-600 text-sm">Creative and original</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Imaginative</p>
                      <p className="text-blue-600 text-sm">Creative and inventive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Influential</p>
                      <p className="text-blue-600 text-sm">Having power to affect others</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More I Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With I
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-700 mb-3">Characteristics</h4>
                  <ul className="text-cyan-600 space-y-1 text-sm">
                    <li>Interesting</li>
                    <li>Intense</li>
                    <li>Immediate</li>
                    <li>Ideal</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-700 mb-3">States</h4>
                  <ul className="text-teal-600 space-y-1 text-sm">
                    <li>Involved</li>
                    <li>Informed</li>
                    <li>Inspired</li>
                    <li>Impressed</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-3">Qualities</h4>
                  <ul className="text-green-600 space-y-1 text-sm">
                    <li>Impressive</li>
                    <li>Incredible</li>
                    <li>Influential</li>
                    <li>Inspiring</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: I-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each I-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Intelligent&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent"
                            value="A"
                            onChange={() => handleQuiz1Change('intelligent', 'A')}
                            className="text-indigo-600"
                          />
                          <span>A) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent"
                            value="B"
                            onChange={() => handleQuiz1Change('intelligent', 'B')}
                            className="text-indigo-600"
                          />
                          <span>B) Having great mental ability</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent"
                            value="C"
                            onChange={() => handleQuiz1Change('intelligent', 'C')}
                            className="text-indigo-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: B) Having great mental ability</p>
                          {quiz1Answers['intelligent'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['intelligent']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Innovative&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative"
                            value="A"
                            onChange={() => handleQuiz1Change('innovative', 'A')}
                            className="text-indigo-600"
                          />
                          <span>A) Creative and original</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative"
                            value="B"
                            onChange={() => handleQuiz1Change('innovative', 'B')}
                            className="text-indigo-600"
                          />
                          <span>B) Being very old</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative"
                            value="C"
                            onChange={() => handleQuiz1Change('innovative', 'C')}
                            className="text-indigo-600"
                          />
                          <span>C) Being very expensive</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Creative and original</p>
                          {quiz1Answers['innovative'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['innovative']}</p>
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
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate I-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always came up with creative solutions.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('creative', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: imaginative, innovative, intelligent</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had an _____ idea that revolutionized the industry.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('revolutionary', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: incredible, innovative, impressive</p>
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
                Interactive Quiz 3: I-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each I-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Intelligent&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('intelligent_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: unintelligent, stupid, foolish, ignorant</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Independent&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('independent_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: dependent, reliant, needy, helpless</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for I-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">I-adjectives typically come before the noun they describe: &quot;an incredible movie&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;an&quot; before I-adjectives since I is a vowel sound: &quot;an intelligent person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many I-adjectives use &quot;more&quot; for comparison: &quot;more intelligent&quot;</p>
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
                    <span>What makes I-adjectives special?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    I-adjectives often describe intellectual qualities, innovation, and inspiration. They&apos;re great for academic writing and professional communication.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How do I use I-adjectives in sentences?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Place them before nouns or after linking verbs. For example: &quot;She is intelligent&quot; or &quot;He has an innovative idea.&quot;
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Are there any common mistakes with I-adjectives?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Yes! Remember to use &quot;an&quot; instead of &quot;a&quot; before I-adjectives, and be careful with spelling variations like &quot;independent&quot; vs &quot;independant.&quot;
                  </p>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>I-adjectives are excellent for describing intellectual and innovative qualities</li>
                <li>Many I-adjectives have positive connotations, making them great for academic and professional writing</li>
                <li>Some I-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of I-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-words-start-with-b" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/adjective-words-that-start-with-c" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/adjectives-beginning-with-g-to-describe-a-person" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With G
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-d" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With D
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-m" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-y" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With Y
                </Link>
                <Link href="/grammar/adjectives-beginning-with-un" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With Un
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Parts of Speech
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">I</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">30+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-indigo-100">
                I-adjectives are perfect for describing intellectual and innovative qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
