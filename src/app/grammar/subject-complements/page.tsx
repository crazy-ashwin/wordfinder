"use client"

import Link from "next/link"

export default function SubjectComplements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Subject Complements
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about subject complements and how they complete the meaning of linking verbs in sentences
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Subject Complements?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Subject complements are words or phrases that follow <Link href="/grammar/linking-verbs" className="text-green-600 hover:text-green-800 font-semibold">linking verbs</Link> and complete the meaning of the subject. They provide more information about the subject, either by renaming it or describing it. Subject complements are essential for creating complete, meaningful sentences and are closely related to <Link href="/grammar/sentence-structure" className="text-green-600 hover:text-green-800 font-semibold">sentence structure</Link> and <Link href="/grammar/parts-of-speech" className="text-green-600 hover:text-green-800 font-semibold">parts of speech</Link>.
              </p>
            </div>

            {/* Types of Subject Complements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Subject Complements
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">1. Predicate Nominatives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Definition</p>
                      <p className="text-green-600">Nouns or pronouns that rename the subject</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Examples</p>
                      <p className="text-green-600">teacher, doctor, winner</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Function</p>
                      <p className="text-green-600">Identifies what the subject is</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Sentence</p>
                      <p className="text-green-600">Sarah is a teacher.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">2. Predicate Adjectives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Definition</p>
                      <p className="text-emerald-600">Adjectives that describe the subject</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Examples</p>
                      <p className="text-emerald-600">happy, tall, intelligent</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Function</p>
                      <p className="text-emerald-600">Describes qualities of the subject</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Sentence</p>
                      <p className="text-emerald-600">The weather is sunny.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">3. Noun Phrases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Definition</p>
                      <p className="text-teal-600">Groups of words that function as nouns</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Examples</p>
                      <p className="text-teal-600">the best student, my favorite book</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Function</p>
                      <p className="text-teal-600">Provides more specific information</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Sentence</p>
                      <p className="text-teal-600">Tom became the team captain.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">4. Adjective Phrases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Definition</p>
                      <p className="text-green-600">Groups of words that function as adjectives</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Examples</p>
                      <p className="text-green-600">very happy, extremely tired</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Function</p>
                      <p className="text-green-600">Provides detailed descriptions</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Sentence</p>
                      <p className="text-green-600">She seems very excited.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Linking Verbs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Linking Verbs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Forms of &quot;Be&quot;</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="font-semibold text-green-800">Present:</span>
                      <span className="text-green-600 ml-2">am, is, are</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="font-semibold text-green-800">Past:</span>
                      <span className="text-green-600 ml-2">was, were</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="font-semibold text-green-800">Future:</span>
                      <span className="text-green-600 ml-2">will be</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="font-semibold text-green-800">Perfect:</span>
                      <span className="text-green-600 ml-2">has been, have been</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Other Linking Verbs</h3>
                  <div className="space-y-3">
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">Senses:</span>
                      <span className="text-emerald-600 ml-2">look, sound, feel, taste, smell</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">States:</span>
                      <span className="text-emerald-600 ml-2">become, remain, stay, grow</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">Appearances:</span>
                      <span className="text-emerald-600 ml-2">appear, seem, look</span>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="font-semibold text-emerald-800">Changes:</span>
                      <span className="text-emerald-600 ml-2">turn, get, become</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Subject Complements
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the subject complement in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The cake tastes delicious.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: delicious (predicate adjective)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;My brother is a doctor.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: doctor (predicate nominative)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The flowers smell sweet.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: sweet (predicate adjective)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add appropriate subject complements to these sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The weather feels _____&quot; (add an adjective)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: warm, cold, humid, etc.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She became _____&quot; (add a noun)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: a teacher, a doctor, a lawyer, etc.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The movie seems _____&quot; (add an adjective)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: interesting, boring, exciting, etc.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Linking Verbs vs Action Verbs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify if the verb is linking or action:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The cat <strong>sleeps</strong> on the couch.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Action verb (shows what the cat does)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;The cat <strong>is</strong> sleepy.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Linking verb (connects subject to complement)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The flowers <strong>grow</strong> in the garden.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Action verb (shows what the flowers do)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Sentence Building
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences with subject complements:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: subject + linking verb + predicate nominative</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: My sister is a nurse.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: subject + linking verb + predicate adjective</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The soup tastes salty.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: subject + linking verb + adjective phrase</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The child seems very happy.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>• Subject complements always follow linking verbs, not action verbs</li>
                <li>• Predicate nominatives can be replaced with pronouns (he, she, it, they)</li>
                <li>• Predicate adjectives describe the subject&apos;s qualities or characteristics</li>
                <li>• Subject complements are essential for complete sentence meaning</li>
                <li>• Some verbs can be both linking and action depending on context</li>
              </ul>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Subject Complements
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Linking Verb Required</h4>
                    <p className="text-gray-600">Subject complements only appear after linking verbs, not action verbs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Subject-Object Relationship</h4>
                    <p className="text-gray-600">Subject complements refer back to and complete the subject of the sentence.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">No Direct Objects</h4>
                    <p className="text-gray-600">Linking verbs with subject complements cannot have direct objects.</p>
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
                <Link href="/grammar/linking-verbs" className="block text-green-600 hover:text-green-800 font-medium">
                  Linking Verbs
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-green-600 hover:text-green-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-green-600 hover:text-green-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-green-600 hover:text-green-800 font-medium">
                  English Grammar
                </Link>
                <Link href="/grammar/verb-tenses" className="block text-green-600 hover:text-green-800 font-medium">
                  Verb Tenses
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">4 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Complete subject meaning</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-green-100">
                Subject complements make sentences more descriptive and informative by adding details about the subject!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
