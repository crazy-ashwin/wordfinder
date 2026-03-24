"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesThatBeginWithLetterE() {
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With Letter E
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover excellent, energetic, and exciting adjectives starting with the letter E
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
                Excellent Adjectives Beginning With E
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter E introduces us to a world of excellent and energetic adjectives that can enhance our language. 
                From &quot;excellent&quot; to &quot;energetic,&quot; these words help us express admiration, describe impressive qualities, 
                and add excitement to our descriptions.
              </p>
            </div>

            {/* Popular E Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With E
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Excellent</p>
                      <p className="text-emerald-600 text-sm">Outstanding and superior</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Energetic</p>
                      <p className="text-emerald-600 text-sm">Full of life and vigor</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Exciting</p>
                      <p className="text-emerald-600 text-sm">Thrilling and stimulating</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Elegant</p>
                      <p className="text-emerald-600 text-sm">Graceful and refined</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-lime-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Enthusiastic</p>
                      <p className="text-green-600 text-sm">Passionate and excited</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Empathetic</p>
                      <p className="text-green-600 text-sm">Understanding and caring</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Extraordinary</p>
                      <p className="text-green-600 text-sm">Remarkable and exceptional</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Enlightened</p>
                      <p className="text-green-600 text-sm">Wise and knowledgeable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: E-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each E-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Energetic&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="energetic"
                            value="A"
                            onChange={() => handleQuiz1Change('energetic', 'A')}
                            className="text-emerald-600"
                          />
                          <span>A) Full of life and vigor</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="energetic"
                            value="B"
                            onChange={() => handleQuiz1Change('energetic', 'B')}
                            className="text-emerald-600"
                          />
                          <span>B) Being very tired</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="energetic"
                            value="C"
                            onChange={() => handleQuiz1Change('energetic', 'C')}
                            className="text-emerald-600"
                          />
                          <span>C) Being very slow</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Full of life and vigor</p>
                          {quiz1Answers['energetic'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['energetic']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-6 text-center">
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
                <Link href="/grammar/adjectives-starting-with-vowels" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/adjectives-starting-with-y-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With Y to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-o" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter O
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-the-letter-d" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter D
                </Link>
                <Link href="/grammar/adjectives-that-start-with-b-to-describe-a-person" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Start With B to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-c-to-describe-a-person-positively" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Start With C to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-start-with-ch" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Start With Ch
                </Link>
                <Link href="/grammar/adjectives-that-start-with-d-to-describe-a-person" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Start With D to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-g-to-describe-a-person" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Start With G to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-in" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Start With In
                </Link>
                <Link href="/grammar/adjectives-that-start-with-vowels" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Start With Vowels
                </Link>
                <Link href="/grammar/adjectives-that-start-with-y-to-describe-a-person" className="block text-emerald-600 hover:text-emerald-800 font-medium">
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
