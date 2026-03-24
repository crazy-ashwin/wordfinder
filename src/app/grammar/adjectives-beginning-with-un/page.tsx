"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesBeginningWithUn() {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With Un
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover unique, unusual, and unbelievable adjectives starting with the prefix Un
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Unique Adjectives Starting With Un
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The prefix &quot;Un&quot; introduces us to a world of unique and unusual adjectives that can enhance our language. 
                From &quot;unique&quot; to &quot;unusual,&quot; these words help us express negation, describe special qualities, 
                and add variety to our descriptions.
              </p>
            </div>

            {/* Popular Un Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With Un
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="text-2xl font-semibold text-red-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Unique</p>
                      <p className="text-red-600 text-sm">One of a kind, special</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Unusual</p>
                      <p className="text-red-600 text-sm">Not common or typical</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Unbelievable</p>
                      <p className="text-red-600 text-sm">Amazing and hard to believe</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Unlimited</p>
                      <p className="text-red-600 text-sm">Without restrictions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4">Negation Words</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Unhappy</p>
                      <p className="text-pink-600 text-sm">Not happy, sad</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Unfair</p>
                      <p className="text-pink-600 text-sm">Not fair, unjust</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Unknown</p>
                      <p className="text-pink-600 text-sm">Not known, unfamiliar</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Uncertain</p>
                      <p className="text-pink-600 text-sm">Not certain, doubtful</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Un-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each Un-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Unique&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="unique"
                            value="A"
                            onChange={() => handleQuiz1Change('unique', 'A')}
                            className="text-red-600"
                          />
                          <span>A) One of a kind, special</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="unique"
                            value="B"
                            onChange={() => handleQuiz1Change('unique', 'B')}
                            className="text-red-600"
                          />
                          <span>B) Being very old</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="unique"
                            value="C"
                            onChange={() => handleQuiz1Change('unique', 'C')}
                            className="text-red-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) One of a kind, special</p>
                          {quiz1Answers['unique'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['unique']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-red-600 transition-colors"
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
                <Link href="/grammar/adjective-word-start-with-i" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With I
                </Link>
                <Link href="/grammar/adjective-words-beginning-with-n" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-words-start-with-b" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/adjective-words-that-start-with-c" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/adjectives-beginning-with-g-to-describe-a-person" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With G
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-d" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With D
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-m" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-y" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With Y
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
