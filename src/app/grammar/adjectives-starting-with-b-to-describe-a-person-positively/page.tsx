"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesStartingWithBToDescribePersonPositively() {
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
            Positive Adjectives Starting With B
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover bright, brilliant, and beautiful adjectives to describe people positively
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
                Bright Adjectives Starting With B for Positive People
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter B introduces us to a world of bright and brilliant adjectives that perfectly describe people&apos;s positive qualities. 
                From &quot;bright&quot; to &quot;brilliant,&quot; these words help us express admiration, describe wonderful personality traits, 
                and celebrate the beautiful characteristics that make each person special.
              </p>
            </div>

            {/* Popular B Adjectives for Positive People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Positive Personality Adjectives Starting With B
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Bright Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Bright</p>
                      <p className="text-blue-600 text-sm">Intelligent and cheerful</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Brilliant</p>
                      <p className="text-blue-600 text-sm">Exceptionally intelligent</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Beautiful</p>
                      <p className="text-blue-600 text-sm">Pleasant to look at</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Brave</p>
                      <p className="text-blue-600 text-sm">Courageous and bold</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Positive Character Traits</h3>
                  <div className="space-y-3">
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
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Blessed</p>
                      <p className="text-indigo-600 text-sm">Fortunate and happy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Positive B-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each positive B-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Brilliant&quot; when describing a person means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="brilliant"
                            value="A"
                            onChange={() => handleQuiz1Change('brilliant', 'A')}
                            className="text-blue-600"
                          />
                          <span>A) Exceptionally intelligent</span>
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
                          <p className="text-green-800 font-semibold">Correct Answer: A) Exceptionally intelligent</p>
                          {quiz1Answers['brilliant'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['brilliant']}</p>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-for-monday-starting-with-m" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives for Monday Starting With M
                </Link>
                <Link href="/grammar/adjectives-start-with-m-to-describe-person" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With M to Describe Person
                </Link>
                <Link href="/grammar/adjectives-starting-with-ab" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With Ab
                </Link>
                <Link href="/grammar/adjectives-starting-with-e-to-describe-a-person-positively" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With E to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-g-to-describe-a-person-positively" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With G to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-i-to-describe-a-person-positively" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With I to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-k-to-describe-a-person-positively" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With K to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-l-to-describe-a-person-positively" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With L to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-s-to-describe-a-person-positively" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With S to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-t-to-describe-a-person-positively" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With T to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-v-to-describe-a-person-positively" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With V to Describe Person Positively
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
