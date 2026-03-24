"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectiveWordsStartWithB() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With B
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover beautiful, bright, and brilliant adjectives starting with the letter B
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Beautiful Adjectives Starting With B
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter B introduces us to a world of beautiful and bright adjectives that can enhance our language. 
                From &quot;beautiful&quot; to &quot;bright,&quot; these words help us express beauty, describe positive qualities, 
                and add brilliance to our descriptions.
              </p>
            </div>

            {/* Popular B Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With B
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Beautiful</p>
                      <p className="text-blue-600 text-sm">Pleasing to look at</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Bright</p>
                      <p className="text-blue-600 text-sm">Giving off much light</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Brilliant</p>
                      <p className="text-blue-600 text-sm">Exceptionally clever</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Brave</p>
                      <p className="text-blue-600 text-sm">Ready to face danger</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Bold</p>
                      <p className="text-indigo-600 text-sm">Confident and courageous</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Benevolent</p>
                      <p className="text-indigo-600 text-sm">Kind and generous</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Balanced</p>
                      <p className="text-indigo-600 text-sm">Stable and harmonious</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Bubbly</p>
                      <p className="text-indigo-600 text-sm">Lively and enthusiastic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More B Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With B
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">Characteristics</h4>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>Big</li>
                    <li>Busy</li>
                    <li>Brief</li>
                    <li>Broad</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">States</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Better</li>
                    <li>Best</li>
                    <li>Bitter</li>
                    <li>Blind</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-700 mb-3">Qualities</h4>
                  <ul className="text-rose-600 space-y-1 text-sm">
                    <li>Bold</li>
                    <li>Beautiful</li>
                    <li>Brilliant</li>
                    <li>Brave</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: B-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each B-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Brilliant&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="brilliant"
                            value="A"
                            onChange={() => handleQuiz1Change('brilliant', 'A')}
                            className="text-blue-600"
                          />
                          <span>A) Exceptionally clever</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="brilliant"
                            value="B"
                            onChange={() => handleQuiz1Change('brilliant', 'B')}
                            className="text-blue-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="brilliant"
                            value="C"
                            onChange={() => handleQuiz1Change('brilliant', 'C')}
                            className="text-blue-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Exceptionally clever</p>
                          {quiz1Answers['brilliant'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['brilliant']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Bold&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="bold"
                            value="A"
                            onChange={() => handleQuiz1Change('bold', 'A')}
                            className="text-blue-600"
                          />
                          <span>A) Being very old</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="bold"
                            value="B"
                            onChange={() => handleQuiz1Change('bold', 'B')}
                            className="text-blue-600"
                          />
                          <span>B) Confident and courageous</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="bold"
                            value="C"
                            onChange={() => handleQuiz1Change('bold', 'C')}
                            className="text-blue-600"
                          />
                          <span>C) Being very expensive</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: B) Confident and courageous</p>
                          {quiz1Answers['bold'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['bold']}</p>
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
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate B-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always asked challenging questions.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('challenging', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: bright, brilliant, bold</p>
                          {quiz1Answers['challenging'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['challenging']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ personality that everyone loved.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('personality', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: beautiful, bubbly, benevolent</p>
                          {quiz1Answers['personality'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['personality']}</p>
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
                Interactive Quiz 3: B-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each B-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Bright&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('bright_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: dim, dark, dull</p>
                          {quiz1Answers['bright_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['bright_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Beautiful&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('beautiful_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: ugly, unattractive, hideous</p>
                          {quiz1Answers['beautiful_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['beautiful_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for B-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">B-adjectives typically come before the noun they describe: &quot;a beautiful sunset&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before B-adjectives since B is a consonant sound: &quot;a bright idea&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many B-adjectives use &quot;more&quot; for comparison: &quot;more beautiful&quot;</p>
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
                    <span>What makes B-adjectives special?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    B-adjectives often describe beautiful qualities, bright characteristics, and bold personality traits. They&apos;re great for descriptive writing and compliments.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How do I use B-adjectives in sentences?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Place them before nouns or after linking verbs. For example: &quot;She is beautiful&quot; or &quot;He has a bright future.&quot;
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Are there any common mistakes with B-adjectives?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Yes! Remember to use &quot;a&quot; instead of &quot;an&quot; before B-adjectives, and be careful with spelling variations like &quot;beautiful&quot; vs &quot;beautifull.&quot;
                  </p>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>B-adjectives are excellent for describing beautiful and bright qualities</li>
                <li>Many B-adjectives have positive connotations, making them great for compliments</li>
                <li>Some B-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of B-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-word-start-with-i" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With I
                </Link>
                <Link href="/grammar/adjective-words-beginning-with-n" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-words-that-start-with-c" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/adjectives-beginning-with-g-to-describe-a-person" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With G
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-d" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With D
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-m" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-y" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With Y
                </Link>
                <Link href="/grammar/adjectives-beginning-with-un" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With Un
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">B</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">30+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-blue-100">
                B-adjectives are perfect for describing beautiful and bright qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
