"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesStartingWithLToDescribePersonPositively() {
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
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Positive Adjectives Starting With L
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover loving, loyal, and lively adjectives to describe people positively
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-lime-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Loving Adjectives Starting With L for Positive People
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter L introduces us to a world of loving and loyal adjectives that perfectly describe people&apos;s positive qualities. 
                From &quot;loving&quot; to &quot;loyal,&quot; these words help us express admiration, describe wonderful personality traits, 
                and celebrate the lively characteristics that make each person special.
              </p>
            </div>

            {/* Popular L Adjectives for Positive People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Positive Personality Adjectives Starting With L
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-xl border-l-4 border-lime-400">
                  <h3 className="text-2xl font-semibold text-lime-700 mb-4">Loving Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Loving</p>
                      <p className="text-lime-600 text-sm">Affectionate and caring</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Loyal</p>
                      <p className="text-lime-600 text-sm">Faithful and devoted</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Lively</p>
                      <p className="text-lime-600 text-sm">Energetic and spirited</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Lucky</p>
                      <p className="text-lime-600 text-sm">Fortunate and blessed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Positive Character Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Leader</p>
                      <p className="text-green-600 text-sm">Guiding and inspiring</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Learned</p>
                      <p className="text-green-600 text-sm">Educated and wise</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Lighthearted</p>
                      <p className="text-green-600 text-sm">Cheerful and carefree</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Lovable</p>
                      <p className="text-green-600 text-sm">Endearing and charming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Positive L-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each positive L-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Loyal&quot; when describing a person means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="loyal"
                            value="A"
                            onChange={() => handleQuiz1Change('loyal', 'A')}
                            className="text-lime-600"
                          />
                          <span>A) Faithful and devoted</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="loyal"
                            value="B"
                            onChange={() => handleQuiz1Change('loyal', 'B')}
                            className="text-lime-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="loyal"
                            value="C"
                            onChange={() => handleQuiz1Change('loyal', 'C')}
                            className="text-lime-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Faithful and devoted</p>
                          {quiz1Answers['loyal'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['loyal']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-lime-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-lime-600 transition-colors"
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
                <Link href="/grammar/adjectives-for-monday-starting-with-m" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives for Monday Starting With M
                </Link>
                <Link href="/grammar/adjectives-start-with-m-to-describe-person" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With M to Describe Person
                </Link>
                <Link href="/grammar/adjectives-starting-with-ab" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With Ab
                </Link>
                <Link href="/grammar/adjectives-starting-with-b-to-describe-a-person-positively" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With B to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-e-to-describe-a-person-positively" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With E to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-g-to-describe-a-person-positively" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With G to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-i-to-describe-a-person-positively" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With I to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-k-to-describe-a-person-positively" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With K to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-s-to-describe-a-person-positively" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With S to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-t-to-describe-a-person-positively" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With T to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-v-to-describe-a-person-positively" className="block text-lime-600 hover:text-lime-800 font-medium">
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
