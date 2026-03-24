import Link from 'next/link';

export default function DeclarativeSentencePage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800">Declarative Sentence</h1>
            <p className="text-lg text-gray-700">
              A declarative sentence makes a statement or declaration. It&apos;s the most common type of sentence and ends with a period.
            </p>
            <p className="text-sm text-blue-600 font-medium">
              Key Takeaway: Declarative sentences tell us something and always end with a period.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
              What is a Declarative Sentence?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A declarative sentence is a type of sentence that makes a statement, provides information, or declares something. 
              It&apos;s the most common sentence type in English and is used to share facts, opinions, or information.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Makes a statement or declaration</li>
                <li>Ends with a period (.)</li>
                <li>Can be positive or negative</li>
                <li>Usually follows subject-verb-object word order</li>
                <li>Most common sentence type in English</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
              Examples of Declarative Sentences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "The sun rises in the east.",
                "Birds can fly.",
                "She loves reading books.",
                "The movie was entertaining.",
                "Dogs are loyal animals.",
                "The weather is beautiful today.",
                "He doesn't like spicy food.",
                "The library opens at 9 AM.",
                "Flowers need water to grow.",
                "The Earth orbits around the sun."
              ].map((sentence, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                  <p className="text-gray-800">{sentence}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
              Types of Declarative Sentences
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Simple Declarative Sentences</h3>
                <p className="text-gray-700 mb-2">Contain one subject and one verb:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>The cat sleeps.</li>
                  <li>She runs fast.</li>
                  <li>He reads books.</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Compound Declarative Sentences</h3>
                <p className="text-gray-700 mb-2">Contain two or more independent clauses:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>The sun was shining, and the birds were singing.</li>
                  <li>She studied hard, so she passed the test.</li>
                  <li>He likes coffee, but she prefers tea.</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Complex Declarative Sentences</h3>
                <p className="text-gray-700 mb-2">Contain one independent clause and one or more dependent clauses:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>When it rains, the flowers grow.</li>
                  <li>She will call you when she arrives.</li>
                  <li>The book that I read was interesting.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
              Worksheet: Practice with Declarative Sentences
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Complete each sentence to make it a proper declarative sentence:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. The cat _____ on the windowsill.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: sits, sleeps, watches, rests</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. _____ is my favorite color.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: Blue, Red, Green, Purple (any color)</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. The library _____ at 5 PM.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: closes, shuts, ends, finishes</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. Birds _____ in the sky.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: fly, soar, glide, travel</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. The movie _____ very entertaining.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: was, is, seemed, looked</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
              Tips for Writing Declarative Sentences
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-blue-800">Always end with a period</h3>
                  <p className="text-gray-700">Declarative sentences must end with a period, not an exclamation mark or question mark.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-blue-800">Use clear subject-verb structure</h3>
                  <p className="text-gray-700">Make sure your sentence has a clear subject and verb to make a complete statement.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-blue-800">Be specific and clear</h3>
                  <p className="text-gray-700">Make your statements specific and clear so readers understand exactly what you mean.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-blue-800">Vary sentence length</h3>
                  <p className="text-gray-700">Mix short and long declarative sentences to keep your writing interesting and readable.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/compound-sentence" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="font-semibold text-green-800">Compound Sentences</h3>
                <p className="text-gray-700 text-sm">Learn about sentences with multiple independent clauses.</p>
              </Link>
              
              <Link href="/grammar/parts-of-speech" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <h3 className="font-semibold text-purple-800">Parts of Speech</h3>
                <p className="text-gray-700 text-sm">Understand the building blocks of sentences.</p>
              </Link>
              
              <Link href="/grammar/conjunction-definition-examples" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="font-semibold text-yellow-800">Conjunctions</h3>
                <p className="text-gray-700 text-sm">Learn about words that connect parts of sentences.</p>
              </Link>
              
              <Link href="/grammar/noun-examples" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <h3 className="font-semibold text-red-800">Nouns</h3>
                <p className="text-gray-700 text-sm">Explore different types of nouns used in sentences.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 