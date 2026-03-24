"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesBeginningWithGToDescribeAPerson() {
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives Beginning With G to Describe a Person
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover generous, genuine, and gracious adjectives starting with the letter G to describe people
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Generous Adjectives Starting With G to Describe People
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter G introduces us to a world of generous and genuine adjectives that perfectly describe people&apos;s qualities. 
                From &quot;generous&quot; to &quot;genuine,&quot; these words help us express positive personality traits, 
                describe character qualities, and add warmth to our descriptions of people.
              </p>
            </div>

            {/* Popular G Adjectives for People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With G to Describe People
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-4">Positive Character Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Generous</p>
                      <p className="text-amber-600 text-sm">Willing to give and share</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Genuine</p>
                      <p className="text-amber-600 text-sm">Sincere and authentic</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Gracious</p>
                      <p className="text-amber-600 text-sm">Courteous and kind</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Grateful</p>
                      <p className="text-amber-600 text-sm">Appreciative and thankful</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-4">Personality Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Gentle</p>
                      <p className="text-orange-600 text-sm">Kind and mild-mannered</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Gifted</p>
                      <p className="text-orange-600 text-sm">Naturally talented</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Good-natured</p>
                      <p className="text-orange-600 text-sm">Friendly and pleasant</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Goal-oriented</p>
                      <p className="text-orange-600 text-sm">Focused on achieving objectives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More G Adjectives for People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With G to Describe People
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">Behavioral Traits</h4>
                  <ul className="text-red-600 space-y-1 text-sm">
                    <li>Giving</li>
                    <li>Grounded</li>
                    <li>Grateful</li>
                    <li>Genuine</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">Mental Qualities</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Gifted</li>
                    <li>Goal-oriented</li>
                    <li>Grounded</li>
                    <li>Generous</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-700 mb-3">Social Qualities</h4>
                  <ul className="text-rose-600 space-y-1 text-sm">
                    <li>Gracious</li>
                    <li>Good-natured</li>
                    <li>Generous</li>
                    <li>Genuine</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: G-Adjective Definitions for People
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each G-adjective used to describe people:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Genuine&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="genuine"
                            value="A"
                            onChange={() => handleQuiz1Change('genuine', 'A')}
                            className="text-amber-600"
                          />
                          <span>A) Sincere and authentic</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="genuine"
                            value="B"
                            onChange={() => handleQuiz1Change('genuine', 'B')}
                            className="text-amber-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="genuine"
                            value="C"
                            onChange={() => handleQuiz1Change('genuine', 'C')}
                            className="text-amber-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Sincere and authentic</p>
                          {quiz1Answers['genuine'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['genuine']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Gracious&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="gracious"
                            value="A"
                            onChange={() => handleQuiz1Change('gracious', 'A')}
                            className="text-amber-600"
                          />
                          <span>A) Being very old</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="gracious"
                            value="B"
                            onChange={() => handleQuiz1Change('gracious', 'B')}
                            className="text-amber-600"
                          />
                          <span>B) Courteous and kind</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="gracious"
                            value="C"
                            onChange={() => handleQuiz1Change('gracious', 'C')}
                            className="text-amber-600"
                          />
                          <span>C) Being very expensive</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: B) Courteous and kind</p>
                          {quiz1Answers['gracious'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['gracious']}</p>
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
                Interactive Quiz 2: Complete the Sentences About People
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate G-adjectives to describe people:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ teacher always helped students in need.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('teacher', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: generous, gracious, good-natured</p>
                          {quiz1Answers['teacher'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['teacher']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ personality that everyone trusted.</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('personality', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: genuine, gentle, gracious</p>
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
                Interactive Quiz 3: G-Adjective Opposites for People
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each G-adjective used to describe people:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Generous&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('generous_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: selfish, stingy, greedy</p>
                          {quiz1Answers['generous_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['generous_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Genuine&quot; is the opposite of _____</p>
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        onChange={(e) => handleQuiz1Change('genuine_opposite', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Suggested Answer: fake, insincere, phony</p>
                          {quiz1Answers['genuine_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['genuine_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-amber-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for G-Adjectives Describing People
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">G-adjectives typically come before the noun they describe: &quot;a generous person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before G-adjectives since G is a consonant sound: &quot;a genuine friend&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many G-adjectives use &quot;more&quot; for comparison: &quot;more generous&quot;</p>
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
                    <span>What makes G-adjectives special for describing people?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    G-adjectives often describe generous qualities, genuine characteristics, and gracious personality traits. They&apos;re perfect for describing people&apos;s character and behavior.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How do I use G-adjectives to describe people in sentences?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Place them before nouns or after linking verbs. For example: &quot;She is generous&quot; or &quot;He has a genuine smile.&quot;
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Are there any common mistakes with G-adjectives for people?</span>
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Yes! Remember to use &quot;a&quot; instead of &quot;an&quot; before G-adjectives, and be careful with spelling variations like &quot;generous&quot; vs &quot;generus.&quot;
                  </p>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>G-adjectives are excellent for describing people&apos;s generous and genuine qualities</li>
                <li>Many G-adjectives have positive connotations, making them great for compliments about people</li>
                <li>Some G-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of G-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-word-start-with-i" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With I
                </Link>
                <Link href="/grammar/adjective-words-beginning-with-n" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-words-start-with-b" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/adjective-words-that-start-with-c" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-d" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With D
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-m" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-y" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With Y
                </Link>
                <Link href="/grammar/adjectives-beginning-with-un" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With Un
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">G</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">20+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-amber-100">
                G-adjectives are perfect for describing generous and genuine people!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
