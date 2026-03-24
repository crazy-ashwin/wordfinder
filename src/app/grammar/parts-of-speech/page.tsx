"use client"

import Link from "next/link"

export default function PartsOfSpeechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Parts of Speech
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the building blocks of English grammar with comprehensive definitions, examples, and interactive quizzes
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
                What are Parts of Speech?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Parts of speech are the fundamental categories into which words are classified based on their function in a sentence. 
                Understanding these categories helps you construct grammatically correct sentences and communicate effectively. 
                The eight main parts of speech are: <strong>nouns</strong>, <strong>verbs</strong>, <strong>adjectives</strong>, 
                <strong>adverbs</strong>, <strong>pronouns</strong>, <strong>prepositions</strong>, <strong>conjunctions</strong>, 
                and <strong>interjections</strong>.
              </p>
            </div>

            {/* Parts of Speech Grid */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Eight Parts of Speech
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Nouns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Definition</p>
                      <p className="text-blue-600">Words that name people, places, things, or ideas</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Examples</p>
                      <p className="text-blue-600">teacher, city, book, happiness</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Function</p>
                      <p className="text-blue-600">Subject, object, or complement in sentences</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Sentence</p>
                      <p className="text-blue-600">The <Link href="/grammar/nouns" className="text-blue-600 hover:text-blue-800 font-semibold">teacher</Link> loves her <Link href="/grammar/common-nouns" className="text-blue-600 hover:text-blue-800 font-semibold">students</Link>.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">2. Verbs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Definition</p>
                      <p className="text-green-600">Words that express actions, states, or occurrences</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Examples</p>
                      <p className="text-green-600">run, is, think, have</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Function</p>
                      <p className="text-green-600">Show what the subject does or is</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Sentence</p>
                      <p className="text-green-600">The cat <Link href="/grammar/action-verb-examples" className="text-green-600 hover:text-green-800 font-semibold">runs</Link> quickly.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">3. Adjectives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Definition</p>
                      <p className="text-purple-600">Words that describe or modify nouns and pronouns</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Examples</p>
                      <p className="text-purple-600">beautiful, tall, smart, red</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Function</p>
                      <p className="text-purple-600">Provide more information about nouns</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Sentence</p>
                      <p className="text-purple-600">The <Link href="/grammar/adjectives" className="text-purple-600 hover:text-purple-800 font-semibold">beautiful</Link> flower bloomed.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">4. Adverbs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Definition</p>
                      <p className="text-orange-600">Words that modify verbs, adjectives, or other adverbs</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Examples</p>
                      <p className="text-orange-600">quickly, very, well, yesterday</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Function</p>
                      <p className="text-orange-600">Describe how, when, where, or to what extent</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Sentence</p>
                      <p className="text-orange-600">She <Link href="/grammar/adverbs" className="text-orange-600 hover:text-orange-800 font-semibold">quickly</Link> finished her work.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">5. Pronouns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Definition</p>
                      <p className="text-red-600">Words that take the place of nouns</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Examples</p>
                      <p className="text-red-600">he, she, it, they, you, them</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Function</p>
                      <p className="text-red-600">Avoid repetition and refer to nouns</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Sentence</p>
                      <p className="text-red-600"><Link href="/grammar/possessive-pronouns" className="text-red-600 hover:text-red-800 font-semibold">He</Link> gave <Link href="/grammar/possessive-pronouns" className="text-red-600 hover:text-red-800 font-semibold">it</Link> to <Link href="/grammar/possessive-pronouns" className="text-red-600 hover:text-red-800 font-semibold">her</Link>.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">6. Prepositions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Definition</p>
                      <p className="text-teal-600">Words that show relationships between words</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Examples</p>
                      <p className="text-teal-600">in, on, at, to, after, with</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Function</p>
                      <p className="text-teal-600">Show location, time, or direction</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Sentence</p>
                      <p className="text-teal-600">The book is <Link href="/grammar/prepositions" className="text-teal-600 hover:text-teal-800 font-semibold">on</Link> the table.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">7. Conjunctions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Definition</p>
                      <p className="text-indigo-600">Words that connect words, phrases, or clauses</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Examples</p>
                      <p className="text-indigo-600">and, but, or, so, because</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Function</p>
                      <p className="text-indigo-600">Join ideas and show relationships</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Sentence</p>
                      <p className="text-indigo-600">I like tea <Link href="/grammar/conjunction-definition-examples" className="text-indigo-600 hover:text-indigo-800 font-semibold">and</Link> coffee.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">8. Interjections</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Definition</p>
                      <p className="text-pink-600">Words that express strong emotions or reactions</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Examples</p>
                      <p className="text-pink-600">wow, oh, ouch, yay, boo</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Function</p>
                      <p className="text-pink-600">Express feelings or reactions</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Sentence</p>
                      <p className="text-pink-600"><strong>Wow</strong>! That was amazing!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Parts of Speech Quiz
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the part of speech for the highlighted word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. The <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">beautiful</span> sunset painted the sky.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Adjective</strong> - &quot;Beautiful&quot; describes the sunset.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. She <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">quickly</span> finished her homework.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Adverb</strong> - &quot;Quickly&quot; modifies the verb &quot;finished.&quot;</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. The <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">students</span> studied diligently.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Noun</strong> - &quot;Students&quot; names the people performing the action.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Quiz Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Advanced Sentence Analysis Quiz
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Analyze this sentence: &quot;The clever cat quickly caught the small mouse in the dark corner.&quot;</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3 text-indigo-700">Identify the parts of speech:</h5>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="bg-yellow-200 px-2 py-1 rounded text-sm">The</span>
                          <span className="text-sm">→</span>
                          <span className="bg-blue-100 px-3 py-1 rounded text-sm">Article</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-yellow-200 px-2 py-1 rounded text-sm">clever</span>
                          <span className="text-sm">→</span>
                          <span className="bg-purple-100 px-3 py-1 rounded text-sm">Adjective</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-yellow-200 px-2 py-1 rounded text-sm">cat</span>
                          <span className="text-sm">→</span>
                          <span className="bg-blue-100 px-3 py-1 rounded text-sm">Noun</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-yellow-200 px-2 py-1 rounded text-sm">quickly</span>
                          <span className="text-sm">→</span>
                          <span className="bg-orange-100 px-3 py-1 rounded text-sm">Adverb</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-yellow-200 px-2 py-1 rounded text-sm">caught</span>
                          <span className="text-sm">→</span>
                          <span className="bg-green-100 px-3 py-1 rounded text-sm">Verb</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-3 text-indigo-700">Sentence Structure:</h5>
                      <div className="bg-gray-50 p-4 rounded">
                        <p className="text-sm text-gray-700">
                          <strong>Subject:</strong> The clever cat<br/>
                          <strong>Predicate:</strong> quickly caught the small mouse in the dark corner<br/>
                          <strong>Direct Object:</strong> the small mouse<br/>
                          <strong>Prepositional Phrase:</strong> in the dark corner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>• Many words can function as different parts of speech depending on how they&apos;re used in a sentence</li>
                <li>• Context is crucial for determining a word&apos;s part of speech</li>
                <li>• Some words can be multiple parts of speech simultaneously (e.g., &quot;running&quot; can be a verb or adjective)</li>
                <li>• Understanding parts of speech helps with sentence structure and grammar rules</li>
                <li>• Practice identifying parts of speech in everyday reading and writing</li>
              </ul>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Parts of Speech
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Word Function</h4>
                    <p className="text-gray-600">A word&apos;s part of speech is determined by how it functions in a sentence, not by the word itself.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Multiple Functions</h4>
                    <p className="text-gray-600">Many words can serve as different parts of speech depending on context (e.g., &quot;light&quot; as noun, adjective, or verb).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sentence Structure</h4>
                    <p className="text-gray-600">Every complete sentence must have at least a subject (noun/pronoun) and a predicate (verb).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/nouns" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Nouns
                </Link>
                <Link href="/grammar/verbs" className="block text-green-600 hover:text-green-800 font-medium">
                  Verbs
                </Link>
                <Link href="/grammar/adjectives" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/adverbs" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adverbs
                </Link>
                <Link href="/grammar/pronouns" className="block text-red-600 hover:text-red-800 font-medium">
                  Pronouns
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="text-gray-600">8 parts</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Word classification</span>
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
                Understanding parts of speech is the foundation for mastering English grammar and improving your writing skills!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 