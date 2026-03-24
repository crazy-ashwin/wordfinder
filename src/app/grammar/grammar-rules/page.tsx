"use client"

import Link from "next/link"

export default function GrammarRules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Grammar Rules</h1>
          <p className="text-xl opacity-90">
            Essential rules and guidelines for proper English grammar
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                What Are Grammar Rules?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Grammar rules are the fundamental principles that govern how words are combined to form meaningful sentences in English. They provide structure and consistency to language.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Understanding and following these rules helps ensure clear communication and makes your writing more professional and effective.
              </p>
            </div>

            {/* Basic Grammar Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Basic Grammar Rules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Subject-Verb Agreement</h3>
                  <p className="text-gray-700 mb-3">
                    The verb must match the subject
                  </p>
                  <p className="text-gray-600">
                    Singular: The cat <strong>runs</strong>.<br />
                    Plural: The cats <strong>run</strong>.<br />
                    I <strong>am</strong> happy.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Sentence Structure</h3>
                  <p className="text-gray-700 mb-3">
                    Every sentence needs a subject and verb
                  </p>
                  <p className="text-gray-600">
                    Subject + Verb + Object<br />
                    The dog (subject) + chases (verb) + the ball (object)<br />
                    Complete thought = complete sentence
                  </p>
                </div>
              </div>
            </div>

            {/* More Essential Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                More Essential Rules
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">Tense Consistency</h3>
                  <p className="text-gray-700 mb-3">
                    Maintain consistent verb tenses within a sentence
                  </p>
                  <p className="text-gray-600 italic">
                    ✅ I <strong>went</strong> to the store and <strong>bought</strong> milk.<br />
                    ❌ I <strong>went</strong> to the store and <strong>buy</strong> milk.<br />
                    Both verbs should be in the same tense.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">Pronoun Agreement</h3>
                  <p className="text-gray-700 mb-3">
                    Pronouns must match their antecedents
                  </p>
                  <p className="text-gray-600 italic">
                    ✅ The student <strong>left his</strong> book.<br />
                    ✅ The student <strong>left her</strong> book.<br />
                    ❌ The student <strong>left their</strong> book. (unless referring to multiple students)
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Article Usage</h3>
                  <p className="text-gray-700 mb-3">
                    Use &quot;a,&quot; &quot;an,&quot; and &quot;the&quot; correctly
                  </p>
                  <p className="text-gray-600 italic">
                    <strong>A:</strong> before consonant sounds (a book, a university)<br />
                    <strong>An:</strong> before vowel sounds (an apple, an hour)<br />
                    <strong>The:</strong> for specific or known items
                  </p>
                </div>
              </div>
            </div>

            {/* Punctuation Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Punctuation Rules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Commas</h3>
                  <p className="text-gray-700 mb-3">
                    Use commas to separate items and clauses
                  </p>
                  <p className="text-gray-600">
                    Lists: apples, oranges, bananas<br />
                    Clauses: When it rains, I stay inside.<br />
                    Direct address: John, please help me.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Apostrophes</h3>
                  <p className="text-gray-700 mb-3">
                    Show possession and contractions
                  </p>
                  <p className="text-gray-600">
                    Possession: the dog&apos;s bone<br />
                    Contractions: don&apos;t, can&apos;t, it&apos;s<br />
                    Plural: the dogs&apos; bones
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-amber-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-amber-700 cursor-pointer hover:text-amber-800">
                    Quiz 1: Subject-Verb Agreement
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Choose the correct verb form:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. The students _____ (is/are) studying.</p>
                      <p className="text-gray-600 text-sm">Answer: are (plural subject needs plural verb)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. Neither John nor Mary _____ (like/likes) coffee.</p>
                      <p className="text-gray-600 text-sm">Answer: likes (singular verb with &quot;neither...nor&quot;)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-orange-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-orange-700 cursor-pointer hover:text-orange-800">
                    Quiz 2: Fix Grammar Errors
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Correct these sentences:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;Me and him went to the store.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;He and I went to the store.&quot; (use subject pronouns)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The book is laying on the table.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;The book is lying on the table.&quot; (lay = put down, lie = recline)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-red-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-red-700 cursor-pointer hover:text-red-800">
                    Quiz 3: Article Usage
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Choose the correct article:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I saw _____ elephant at the zoo.</p>
                      <p className="text-gray-600 text-sm">Answer: an (elephant starts with vowel sound)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. She is _____ university student.</p>
                      <p className="text-gray-600 text-sm">Answer: a (university starts with consonant sound /ju/)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-amber-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-amber-700 cursor-pointer hover:text-amber-800">
                    Quiz 4: Punctuation
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add correct punctuation:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;Lets eat Grandma&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;Let&apos;s eat, Grandma!&quot; (apostrophe for contraction, comma for direct address)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The students books are on the desk&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;The students&apos; books are on the desk.&quot; (apostrophe for possession, period)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Grammar rules exist to make communication clear and effective, not to restrict creativity.</p>
                <p>• Context matters - formal writing requires stricter adherence to rules than casual conversation.</p>
                <p>• Practice is essential - reading good writing helps develop an intuitive sense of correct grammar.</p>
                <p>• When in doubt, keep sentences simple and clear rather than complex and potentially incorrect.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Read your writing aloud. Your ear often catches grammar mistakes that your eye might miss. If something sounds wrong, it probably is wrong.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-amber-600 hover:text-amber-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/sentence-structure" className="text-amber-600 hover:text-amber-800 hover:underline">
                    Sentence Structure
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/punctuation" className="text-amber-600 hover:text-amber-800 hover:underline">
                    Punctuation
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-amber-600 hover:text-amber-800 hover:underline">
                    English Grammar
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/verb-tenses" className="text-amber-600 hover:text-amber-800 hover:underline">
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
