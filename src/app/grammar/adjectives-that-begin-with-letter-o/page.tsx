"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesThatBeginWithLetterO() {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With Letter O
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover outstanding, optimistic, and original adjectives starting with the letter O
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Outstanding Adjectives Beginning With O
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter O introduces us to a world of outstanding and optimistic adjectives that can enhance our language. 
                From &quot;outstanding&quot; to &quot;optimistic,&quot; these words help us express excellence, describe positive qualities, 
                and add originality to our descriptions.
              </p>
            </div>

            {/* Popular O Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With O
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Outstanding</p>
                      <p className="text-orange-600 text-sm">Exceptionally good and excellent</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Optimistic</p>
                      <p className="text-orange-600 text-sm">Hopeful and positive about the future</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Original</p>
                      <p className="text-orange-600 text-sm">New and creative</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Organized</p>
                      <p className="text-orange-600 text-sm">Well-arranged and systematic</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Open-minded</p>
                      <p className="text-amber-600 text-sm">Willing to consider new ideas</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Observant</p>
                      <p className="text-amber-600 text-sm">Good at noticing things</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Outgoing</p>
                      <p className="text-amber-600 text-sm">Friendly and sociable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Obedient</p>
                      <p className="text-amber-600 text-sm">Following rules and instructions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: O-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each O-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Outstanding&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="outstanding"
                            value="A"
                            onChange={() => handleQuiz1Change('outstanding', 'A')}
                            className="text-orange-600"
                          />
                          <span>A) Exceptionally good and excellent</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="outstanding"
                            value="B"
                            onChange={() => handleQuiz1Change('outstanding', 'B')}
                            className="text-orange-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="outstanding"
                            value="C"
                            onChange={() => handleQuiz1Change('outstanding', 'C')}
                            className="text-orange-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Exceptionally good and excellent</p>
                          {quiz1Answers['outstanding'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['outstanding']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-colors"
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
                <Link href="/grammar/adjectives-starting-with-vowels" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/adjectives-starting-with-y-to-describe-a-person-positively" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With Y to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-e" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Begin With Letter E
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-the-letter-d" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Begin With Letter D
                </Link>
                <Link href="/grammar/adjectives-that-start-with-b-to-describe-a-person" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Start With B to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-c-to-describe-a-person-positively" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Start With C to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-start-with-ch" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Start With Ch
                </Link>
                <Link href="/grammar/adjectives-that-start-with-d-to-describe-a-person" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Start With D to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-g-to-describe-a-person" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Start With G to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-in" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Start With In
                </Link>
                <Link href="/grammar/adjectives-that-start-with-vowels" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Start With Vowels
                </Link>
                <Link href="/grammar/adjectives-that-start-with-y-to-describe-a-person" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives That Start With Y to Describe Person
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
