"use client"

import Link from "next/link"

export default function SentenceStructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Sentence Structure</h1>
          <p className="text-xl opacity-90">
            Learn how to build clear, effective sentences in English
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-4">
                What Is Sentence Structure?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Sentence structure refers to the way words are organized to form meaningful sentences. It includes the arrangement of subjects, verbs, objects, and other elements that make up a complete thought.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Understanding sentence structure helps you write clearly, avoid confusion, and create more engaging and varied writing.
              </p>
            </div>

            {/* Basic Sentence Elements */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">
                Basic Sentence Elements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Subject</h3>
                  <p className="text-gray-700 mb-3">
                    Who or what the sentence is about
                  </p>
                  <p className="text-gray-600">
                    <strong>The cat</strong> sleeps.<br />
                    <strong>She</strong> reads books.<br />
                    <strong>Children</strong> play outside.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Verb</h3>
                  <p className="text-gray-700 mb-3">
                    What the subject does or is
                  </p>
                  <p className="text-gray-600">
                    The cat <strong>sleeps</strong>.<br />
                    She <strong>reads</strong> books.<br />
                    Children <strong>play</strong> outside.
                  </p>
                </div>
              </div>
            </div>

            {/* Types of Sentences */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">
                Types of Sentences
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">Simple Sentences</h3>
                  <p className="text-gray-700 mb-3">
                    One independent clause with a subject and verb
                  </p>
                  <p className="text-gray-600 italic">
                    The dog barks.<br />
                    Birds sing in the morning.<br />
                    I love chocolate ice cream.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">Compound Sentences</h3>
                  <p className="text-gray-700 mb-3">
                    Two or more independent clauses joined by conjunctions
                  </p>
                  <p className="text-gray-600 italic">
                    I like coffee, but my sister prefers tea.<br />
                    The sun was shining, and the birds were singing.<br />
                    He studied hard, so he passed the test.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-yellow-700 mb-2">Complex Sentences</h3>
                  <p className="text-gray-700 mb-3">
                    One independent clause and one or more dependent clauses
                  </p>
                  <p className="text-gray-600 italic">
                    When it rains, I stay inside.<br />
                    The book that I read was excellent.<br />
                    Although it was late, we continued working.
                  </p>
                </div>
              </div>
            </div>

            {/* Sentence Patterns */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">
                Common Sentence Patterns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Subject + Verb</h3>
                  <p className="text-gray-700 mb-3">
                    Basic pattern for simple statements
                  </p>
                  <p className="text-gray-600">
                    Birds fly.<br />
                    Flowers bloom.<br />
                    Time passes.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Subject + Verb + Object</h3>
                  <p className="text-gray-700 mb-3">
                    Pattern for transitive verbs
                  </p>
                  <p className="text-gray-600">
                    I read books.<br />
                    She loves music.<br />
                    They play soccer.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-yellow-700 mb-3">Subject + Verb + Complement</h3>
                  <p className="text-gray-700 mb-3">
                    Pattern for linking verbs
                  </p>
                  <p className="text-gray-600">
                    He is happy.<br />
                    The soup tastes delicious.<br />
                    She became a doctor.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Subject + Verb + Indirect Object + Direct Object</h3>
                  <p className="text-gray-700 mb-3">
                    Pattern for ditransitive verbs
                  </p>
                  <p className="text-gray-600">
                    I gave her a gift.<br />
                    She told me a story.<br />
                    They sent us a letter.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-orange-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-orange-700 cursor-pointer hover:text-orange-800">
                    Quiz 1: Identify Sentence Types
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">What type of sentence is each example?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;The cat sleeps on the couch.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Simple sentence (one independent clause)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;I like coffee, but my sister prefers tea.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Compound sentence (two independent clauses joined by &quot;but&quot;)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-amber-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-amber-700 cursor-pointer hover:text-amber-800">
                    Quiz 2: Find Sentence Elements
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Identify the subject, verb, and object:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;The children play in the park.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Subject: The children, Verb: play, Object: in the park</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;She reads books every day.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Subject: She, Verb: reads, Object: books</p>
                    </div>
                  </div>
                </details>

                <details className="bg-yellow-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-yellow-700 cursor-pointer hover:text-yellow-800">
                    Quiz 3: Complete Sentences
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Complete these sentence fragments:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. The beautiful flowers _____</p>
                      <p className="text-gray-600 text-sm">Answer: bloom in spring. (add verb and object)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. When the sun sets _____</p>
                      <p className="text-gray-600 text-sm">Answer: the stars appear. (add independent clause)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-orange-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-orange-700 cursor-pointer hover:text-orange-800">
                    Quiz 4: Sentence Patterns
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Match sentences to their patterns:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I gave her a gift&quot; follows which pattern?</p>
                      <p className="text-gray-600 text-sm">Answer: Subject + Verb + Indirect Object + Direct Object</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The soup tastes delicious&quot; follows which pattern?</p>
                      <p className="text-gray-600 text-sm">Answer: Subject + Verb + Complement</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Every sentence must have a subject and a verb to be complete.</p>
                <p>• Vary your sentence structure to make your writing more interesting and engaging.</p>
                <p>• Complex sentences can add depth, but don&apos;t overuse them - simple sentences are often clearer.</p>
                <p>• Pay attention to word order - English follows specific patterns that affect meaning.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Start with simple sentences when writing, then combine them to create variety. Remember: clear communication is more important than complex structure.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-orange-600 hover:text-orange-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/clauses" className="text-orange-600 hover:text-orange-800 hover:underline">
                    Clauses
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/conjunctions" className="text-orange-600 hover:text-orange-800 hover:underline">
                    Conjunctions
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-orange-600 hover:text-orange-800 hover:underline">
                    English Grammar
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/verb-tenses" className="text-orange-600 hover:text-orange-800 hover:underline">
                    Verb Tenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
