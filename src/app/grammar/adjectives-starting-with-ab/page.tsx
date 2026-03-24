"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesStartingWithAb() {
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With Ab
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover abundant, absolute, and abstract adjectives starting with the prefix Ab
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-violet-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Abundant Adjectives Starting With Ab
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The prefix &quot;Ab&quot; introduces us to a world of abundant and absolute adjectives that can enhance our language. 
                From &quot;abundant&quot; to &quot;absolute,&quot; these words help us express quantity, describe completeness, 
                and add precision to our descriptions.
              </p>
            </div>

            {/* Popular Ab Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With Ab
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">Quantity & Abundance</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Abundant</p>
                      <p className="text-violet-600 text-sm">Plentiful and well-supplied</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Absolute</p>
                      <p className="text-violet-600 text-sm">Complete and total</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Abstract</p>
                      <p className="text-violet-600 text-sm">Theoretical and conceptual</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Abnormal</p>
                      <p className="text-violet-600 text-sm">Unusual and not typical</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">States & Conditions</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Able</p>
                      <p className="text-purple-600 text-sm">Capable and competent</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Absent</p>
                      <p className="text-purple-600 text-sm">Not present or missing</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Abrupt</p>
                      <p className="text-purple-600 text-sm">Sudden and unexpected</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Abrasive</p>
                      <p className="text-purple-600 text-sm">Harsh and rough</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Ab-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each Ab-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Abundant&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="abundant"
                            value="A"
                            onChange={() => handleQuiz1Change('abundant', 'A')}
                            className="text-violet-600"
                          />
                          <span>A) Plentiful and well-supplied</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="abundant"
                            value="B"
                            onChange={() => handleQuiz1Change('abundant', 'B')}
                            className="text-violet-600"
                          />
                          <span>B) Being very small</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="abundant"
                            value="C"
                            onChange={() => handleQuiz1Change('abundant', 'C')}
                            className="text-violet-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Plentiful and well-supplied</p>
                          {quiz1Answers['abundant'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['abundant']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-violet-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-violet-600 transition-colors"
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
                <Link href="/grammar/adjectives-for-monday-starting-with-m" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives for Monday Starting With M
                </Link>
                <Link href="/grammar/adjectives-start-with-m-to-describe-person" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With M to Describe Person
                </Link>
                <Link href="/grammar/adjectives-starting-with-b-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With B to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-e-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With E to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-g-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With G to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-i-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With I to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-k-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With K to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-l-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With L to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-s-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With S to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-t-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With T to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-v-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
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
