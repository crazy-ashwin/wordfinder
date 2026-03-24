"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectiveWordsThatStartWithC() {
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With C
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover creative, clever, and charming adjectives starting with the letter C
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Creative Adjectives Starting With C
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter C introduces us to a world of creative and clever adjectives that can enhance our language. 
                From &quot;creative&quot; to &quot;clever,&quot; these words help us express creativity, describe mental abilities, 
                and add charm to our descriptions.
              </p>
            </div>

            {/* Popular C Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With C
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Creative</p>
                      <p className="text-cyan-600 text-sm">Having imagination and originality</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Clever</p>
                      <p className="text-cyan-600 text-sm">Quick to understand and learn</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Charming</p>
                      <p className="text-cyan-600 text-sm">Pleasant and attractive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Confident</p>
                      <p className="text-cyan-600 text-sm">Sure of oneself</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Curious</p>
                      <p className="text-teal-600 text-sm">Eager to learn or know</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Caring</p>
                      <p className="text-teal-600 text-sm">Kind and concerned</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Calm</p>
                      <p className="text-teal-600 text-sm">Peaceful and relaxed</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Cheerful</p>
                      <p className="text-teal-600 text-sm">Happy and optimistic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More C Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With C
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-700 mb-3">Characteristics</h4>
                  <ul className="text-emerald-600 space-y-1 text-sm">
                    <li>Colorful</li>
                    <li>Complex</li>
                    <li>Clear</li>
                    <li>Cool</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-lime-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-3">States</h4>
                  <ul className="text-green-600 space-y-1 text-sm">
                    <li>Comfortable</li>
                    <li>Complete</li>
                    <li>Correct</li>
                    <li>Current</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-lime-50 to-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lime-700 mb-3">Qualities</h4>
                  <ul className="text-lime-600 space-y-1 text-sm">
                    <li>Capable</li>
                    <li>Creative</li>
                    <li>Clever</li>
                    <li>Charming</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: C-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each C-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Creative&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="creative"
                            value="A"
                            onChange={() => handleQuiz1Change('creative', 'A')}
                            className="text-cyan-600"
                          />
                          <span>A) Having imagination and originality</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="creative"
                            value="B"
                            onChange={() => handleQuiz1Change('creative', 'B')}
                            className="text-cyan-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="creative"
                            value="C"
                            onChange={() => handleQuiz1Change('creative', 'C')}
                            className="text-cyan-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Having imagination and originality</p>
                          {quiz1Answers['creative'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['creative']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Curious&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="curious"
                            value="A"
                            onChange={() => handleQuiz1Change('curious', 'A')}
                            className="text-cyan-600"
                          />
                          <span>A) Being very old</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="curious"
                            value="B"
                            onChange={() => handleQuiz1Change('curious', 'B')}
                            className="text-cyan-600"
                          />
                          <span>B) Eager to learn or know</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="curious"
                            value="C"
                            onChange={() => handleQuiz1Change('curious', 'C')}
                            className="text-cyan-600"
                          />
                          <span>C) Being very expensive</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: B) Eager to learn or know</p>
                          {quiz1Answers['curious'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['curious']}</p>
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
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate C-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ artist always came up with unique ideas.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('artist', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: creative, clever, capable</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ personality that everyone admired.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('personality', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: charming, caring, cheerful</p>
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
                Interactive Quiz 3: C-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each C-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Creative&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('creative_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: uncreative, unimaginative, dull</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Calm&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('calm_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: agitated, anxious, restless</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for C-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">C-adjectives typically come before the noun they describe: &quot;a creative solution&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before C-adjectives since C is a consonant sound: &quot;a clever idea&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many C-adjectives use &quot;more&quot; for comparison: &quot;more creative&quot;</p>
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
                    <span>What makes C-adjectives special?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    C-adjectives often describe creative qualities, clever characteristics, and charming personality traits. They&apos;re great for describing people and their abilities.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How do I use C-adjectives in sentences?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Place them before nouns or after linking verbs. For example: &quot;She is creative&quot; or &quot;He has a clever mind.&quot;
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Are there any common mistakes with C-adjectives?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Yes! Remember to use &quot;a&quot; instead of &quot;an&quot; before C-adjectives, and be careful with spelling variations like &quot;creative&quot; vs &quot;creativ.&quot;
                  </p>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>C-adjectives are excellent for describing creative and clever qualities</li>
                <li>Many C-adjectives have positive connotations, making them great for compliments</li>
                <li>Some C-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of C-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-word-start-with-i" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With I
                </Link>
                <Link href="/grammar/adjective-words-beginning-with-n" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-words-start-with-b" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/adjectives-beginning-with-g-to-describe-a-person" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With G
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-d" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With D
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-m" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-y" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With Y
                </Link>
                <Link href="/grammar/adjectives-beginning-with-un" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With Un
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">35+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-cyan-100">
                C-adjectives are perfect for describing creative and clever qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
