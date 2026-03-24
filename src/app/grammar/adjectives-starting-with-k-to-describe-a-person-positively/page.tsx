"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesStartingWithKToDescribePersonPositively() {
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Positive Adjectives Starting With K
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover kind, knowledgeable, and keen adjectives to describe people positively
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-sky-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Kind Adjectives Starting With K for Positive People
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter K introduces us to a world of kind and knowledgeable adjectives that perfectly describe people&apos;s positive qualities. 
                From &quot;kind&quot; to &quot;knowledgeable,&quot; these words help us express admiration, describe wonderful personality traits, 
                and celebrate the keen characteristics that make each person special.
              </p>
            </div>

            {/* Popular K Adjectives for Positive People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Positive Personality Adjectives Starting With K
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border-l-4 border-sky-400">
                  <h3 className="text-2xl font-semibold text-sky-700 mb-4">Kind Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-sky-800">Kind</p>
                      <p className="text-sky-600 text-sm">Gentle and caring</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-sky-800">Knowledgeable</p>
                      <p className="text-sky-600 text-sm">Well-informed and educated</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-sky-800">Keen</p>
                      <p className="text-sky-600 text-sm">Eager and enthusiastic</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-sky-800">Kindhearted</p>
                      <p className="text-sky-600 text-sm">Warm and compassionate</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Positive Character Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Knightly</p>
                      <p className="text-blue-600 text-sm">Chivalrous and honorable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Keen-minded</p>
                      <p className="text-blue-600 text-sm">Sharp and intelligent</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Kindly</p>
                      <p className="text-blue-600 text-sm">Friendly and benevolent</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Knowledge-seeking</p>
                      <p className="text-blue-600 text-sm">Curious and eager to learn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Positive K-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each positive K-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Knowledgeable&quot; when describing a person means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="knowledgeable"
                            value="A"
                            onChange={() => handleQuiz1Change('knowledgeable', 'A')}
                            className="text-sky-600"
                          />
                          <span>A) Well-informed and educated</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="knowledgeable"
                            value="B"
                            onChange={() => handleQuiz1Change('knowledgeable', 'B')}
                            className="text-sky-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="knowledgeable"
                            value="C"
                            onChange={() => handleQuiz1Change('knowledgeable', 'C')}
                            className="text-sky-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Well-informed and educated</p>
                          {quiz1Answers['knowledgeable'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['knowledgeable']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-sky-600 transition-colors"
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
                <Link href="/grammar/adjectives-for-monday-starting-with-m" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives for Monday Starting With M
                </Link>
                <Link href="/grammar/adjectives-start-with-m-to-describe-person" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With M to Describe Person
                </Link>
                <Link href="/grammar/adjectives-starting-with-ab" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With Ab
                </Link>
                <Link href="/grammar/adjectives-starting-with-b-to-describe-a-person-positively" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With B to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-e-to-describe-a-person-positively" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With E to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-g-to-describe-a-person-positively" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With G to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-i-to-describe-a-person-positively" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With I to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-l-to-describe-a-person-positively" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With L to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-s-to-describe-a-person-positively" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With S to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-t-to-describe-a-person-positively" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With T to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-starting-with-v-to-describe-a-person-positively" className="block text-sky-600 hover:text-sky-800 font-medium">
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
