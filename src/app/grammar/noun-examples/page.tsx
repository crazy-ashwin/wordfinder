"use client";
import React from "react";
import Link from "next/link";

export default function NounExamplesPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-blue-700">Noun Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              Nouns are the names of people, places, things, or ideas. They are the foundation of every sentence and help us talk about the world around us. Understanding nouns makes reading, writing, and speaking much easier!
            </p>
            <p className="text-blue-700 font-semibold">There are many types of nouns in English, each with its own role and examples.</p>
          </header>

          {/* Clauses and Nouns */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Clauses and Nouns</h2>
            <p className="mb-2 text-gray-700">A clause is a group of words that makes meaning. Nouns help us identify people, places, things, and ideas in both independent and dependent clauses.</p>
            <div className="bg-blue-50 rounded p-4 mb-2">
              <b>Independent clause:</b> <span className="italic">I picked up the pen.</span><br/>
              <b>Dependent clause:</b> <span className="italic">When I pick up the pen...</span>
            </div>
            <p className="text-blue-700 text-xs">Tip: Nouns are often the subject or object in a clause.</p>
          </section>

          {/* Types of Nouns */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Types of Nouns</h2>
            <div className="space-y-6">
              {/* Common Nouns */}
              <div className="border-l-4 border-blue-200 pl-4 bg-blue-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Common Nouns</h3>
                <p className="text-gray-700 mb-1">Common nouns name general people, places, things, or ideas. They are not capitalized unless at the start of a sentence.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div>
                    <b>People/Animals:</b>
                    <ul className="list-disc ml-4">
                      <li>teacher</li><li>mom</li><li>child</li><li>dog</li><li>manager</li>
                    </ul>
                  </div>
                  <div>
                    <b>Places:</b>
                    <ul className="list-disc ml-4">
                      <li>park</li><li>city</li><li>school</li><li>zoo</li><li>store</li>
                    </ul>
                  </div>
                  <div>
                    <b>Objects:</b>
                    <ul className="list-disc ml-4">
                      <li>book</li><li>car</li><li>table</li><li>computer</li><li>pencil</li>
                    </ul>
                  </div>
                </div>
                <p className="text-blue-700 text-xs mt-2">Tip: Common nouns are everywhere in English!</p>
              </div>
              {/* Proper Nouns */}
              <div className="border-l-4 border-green-200 pl-4 bg-green-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Proper Nouns</h3>
                <p className="text-gray-700 mb-1">Proper nouns name specific people, places, or things. They always start with a capital letter.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div>
                    <b>People/Animals:</b>
                    <ul className="list-disc ml-4">
                      <li>Mrs. Smith</li><li>Hilary</li><li>Freddie</li><li>Queen Elizabeth</li><li>Koko</li>
                    </ul>
                  </div>
                  <div>
                    <b>Places:</b>
                    <ul className="list-disc ml-4">
                      <li>London</li><li>Paris</li><li>Chicago</li><li>Asia</li><li>Mount Everest</li>
                    </ul>
                  </div>
                  <div>
                    <b>Organizations:</b>
                    <ul className="list-disc ml-4">
                      <li>KFC</li><li>NASA</li><li>Google</li><li>United Nations</li><li>Apple</li>
                    </ul>
                  </div>
                </div>
                <p className="text-green-700 text-xs mt-2">Tip: If it&apos;s a name, it&apos;s a proper noun!</p>
              </div>
              {/* Collective Nouns */}
              <div className="border-l-4 border-yellow-200 pl-4 bg-yellow-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Collective Nouns</h3>
                <p className="text-gray-700 mb-1">Collective nouns refer to groups of people, animals, or things.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>a <b>flock</b> of birds</li>
                  <li>a <b>team</b> of players</li>
                  <li>a <b>herd</b> of sheep</li>
                  <li>a <b>choir</b> of singers</li>
                  <li>a <b>panel</b> of judges</li>
                </ul>
                <p className="text-yellow-700 text-xs mt-2">Tip: Collective nouns are often followed by &quot;of&quot; + plural noun.</p>
              </div>
              {/* Concrete Nouns */}
              <div className="border-l-4 border-purple-200 pl-4 bg-purple-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Concrete Nouns</h3>
                <p className="text-gray-700 mb-1">Concrete nouns are things you can see, touch, hear, smell, or taste.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>dog</li><li>ball</li><li>chicken</li><li>boat</li><li>music</li>
                </ul>
                <p className="text-purple-700 text-xs mt-2">Tip: If you can experience it with your senses, it&apos;s a concrete noun.</p>
              </div>
              {/* Abstract Nouns */}
              <div className="border-l-4 border-pink-200 pl-4 bg-pink-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Abstract Nouns</h3>
                <p className="text-gray-700 mb-1">Abstract nouns are ideas, feelings, or qualities you cannot see or touch.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>happiness</li><li>truth</li><li>wisdom</li><li>love</li><li>anxiety</li>
                </ul>
                <p className="text-pink-700 text-xs mt-2">Tip: If you can&apos;t touch it, but you can feel or think it, it&apos;s an abstract noun.</p>
              </div>
              {/* Compound Nouns */}
              <div className="border-l-4 border-red-200 pl-4 bg-red-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Compound Nouns</h3>
                <p className="text-gray-700 mb-1">Compound nouns are made up of two or more words joined together to make a single noun.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>girlfriend</li><li>lunchtime</li><li>turntable</li><li>bluebird</li><li>greenhouse</li>
                </ul>
                <p className="text-red-700 text-xs mt-2">Tip: Compound nouns can be written as one word, separate words, or hyphenated.</p>
              </div>
              {/* Countable Nouns */}
              <div className="border-l-4 border-indigo-200 pl-4 bg-indigo-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Countable Nouns</h3>
                <p className="text-gray-700 mb-1">Countable nouns are things you can count (one, two, three, ...).</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>carrots</li><li>bags</li><li>accidents</li><li>books</li><li>apples</li>
                </ul>
                <p className="text-indigo-700 text-xs mt-2">Tip: Countable nouns can be singular or plural.</p>
              </div>
              {/* Uncountable Nouns */}
              <div className="border-l-4 border-gray-300 pl-4 bg-gray-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Uncountable Nouns</h3>
                <p className="text-gray-700 mb-1">Uncountable nouns (mass nouns) cannot be counted or made plural.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>gold</li><li>beauty</li><li>butter</li><li>music</li><li>advice</li>
                </ul>
                <p className="text-gray-700 text-xs mt-2">Tip: Uncountable nouns are always singular.</p>
              </div>
              {/* Relative Nouns */}
              <div className="border-l-4 border-teal-200 pl-4 bg-teal-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Relative Nouns</h3>
                <p className="text-gray-700 mb-1">Relative nouns (relative pronouns) refer back to a noun already mentioned.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>which</li><li>that</li><li>whose</li><li>whoever</li><li>who</li>
                </ul>
                <p className="text-teal-700 text-xs mt-2">Tip: Relative nouns help connect clauses and add detail.</p>
              </div>
              {/* Reflexive Nouns */}
              <div className="border-l-4 border-orange-200 pl-4 bg-orange-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Reflexive Nouns</h3>
                <p className="text-gray-700 mb-1">Reflexive nouns (reflexive pronouns) refer back to the subject of the sentence.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>myself</li><li>yourself</li><li>herself</li><li>itself</li><li>themselves</li>
                </ul>
                <p className="text-orange-700 text-xs mt-2">Tip: Reflexive nouns end in <span className="font-mono">-self</span> or <span className="font-mono">-selves</span>.</p>
              </div>
            </div>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Practice: What Type of Noun?</h2>
            <p className="mb-2 text-gray-700">Try to identify the type of noun in bold in each sentence:</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              <li>The <b>choir</b> sang beautifully.</li>
              <li>She has a lot of <b>wisdom</b>.</li>
              <li>My <b>girlfriend</b> is coming over.</li>
              <li>He bought some <b>apples</b> at the store.</li>
              <li>We visited <b>London</b> last summer.</li>
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-blue-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                <li>choir – Collective Noun</li>
                <li>wisdom – Abstract Noun</li>
                <li>girlfriend – Compound Noun</li>
                <li>apples – Countable Noun</li>
                <li>London – Proper Noun</li>
              </ul>
            </details>
          </section>

          {/* Conclusion Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Conclusion</h2>
            <p className="mb-2 text-gray-700">Nouns are everywhere! The more you practice, the easier it gets to spot and use them. Try writing your own sentences and see how many types of nouns you can use.</p>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/parts-of-speech" className="text-blue-700 underline hover:text-blue-900">parts of speech</Link>, <b>verbs</b>, <b>adjectives</b>, and <b>adverbs</b> to build even stronger sentences.</li>
              <li>Practice with grammar games and worksheets.</li>
              <li>Read stories and try to spot different types of nouns.</li>
              <li>Ask a teacher or friend to quiz you on noun types.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 