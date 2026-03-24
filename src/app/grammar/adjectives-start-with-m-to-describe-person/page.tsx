"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesStartWithMToDescribePerson() {
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives Starting With M to Describe a Person
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover magnificent, marvelous, and meaningful adjectives to describe people&apos;s personalities
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
                Magnificent Adjectives Starting With M for People
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter M introduces us to a world of magnificent and marvelous adjectives that perfectly describe people&apos;s qualities. 
                From &quot;magnificent&quot; to &quot;marvelous,&quot; these words help us express admiration, describe personality traits, 
                and celebrate the unique characteristics that make each person special.
              </p>
            </div>

            {/* Popular M Adjectives for People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Personality Adjectives Starting With M
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Positive Character Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Magnificent</p>
                      <p className="text-emerald-600 text-sm">Extremely impressive and beautiful</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Marvelous</p>
                      <p className="text-emerald-600 text-sm">Wonderful and astonishing</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Mature</p>
                      <p className="text-emerald-600 text-sm">Responsible and grown-up</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Modest</p>
                      <p className="text-emerald-600 text-sm">Humble and unpretentious</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-4">Personal Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Motivated</p>
                      <p className="text-teal-600 text-sm">Driven and enthusiastic</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Mindful</p>
                      <p className="text-teal-600 text-sm">Conscious and aware</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Magnetic</p>
                      <p className="text-teal-600 text-sm">Attractive and engaging</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Meaningful</p>
                      <p className="text-teal-600 text-sm">Purposeful and significant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: M-Adjective Definitions for People
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each M-adjective used to describe people:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Magnificent&quot; when describing a person means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="A"
                            onChange={() => handleQuiz1Change('magnificent', 'A')}
                            className="text-emerald-600"
                          />
                          <span>A) Extremely impressive and beautiful</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="B"
                            onChange={() => handleQuiz1Change('magnificent', 'B')}
                            className="text-emerald-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="C"
                            onChange={() => handleQuiz1Change('magnificent', 'C')}
                            className="text-emerald-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Extremely impressive and beautiful</p>
                          {quiz1Answers['magnificent'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['magnificent']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-6 text-center">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-for-monday-starting-with-m" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives for Monday Starting With M
                </Link>
                <Link href="/grammar/adjectives-starting-with-b-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With B to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-e-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With E to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-g-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With G to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-i-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With I to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-k-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With K to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-l-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With L to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-s-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With S to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-t-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With T to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-v-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
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
