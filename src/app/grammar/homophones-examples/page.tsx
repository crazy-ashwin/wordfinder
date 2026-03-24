import Link from 'next/link';

export default function HomophonesExamplesPage() {
  return (
    <div className="min-h-screen bg-cyan-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-800">Homophones Examples</h1>
            <p className="text-lg text-gray-700">
              Homophones are words that sound the same but have different meanings and spellings. They can be tricky to use correctly in writing.
            </p>
            <p className="text-sm text-cyan-600 font-medium">
              Key Takeaway: Understanding homophones helps improve spelling and writing accuracy.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 border-b-2 border-cyan-200 pb-2">
              What are Homophones?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Homophones are words that are pronounced the same way but have different meanings and often different spellings. 
              They can cause confusion in writing because they sound identical when spoken.
            </p>
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-2">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Same pronunciation (sound alike)</li>
                <li>Different meanings</li>
                <li>Different spellings (usually)</li>
                <li>Common source of spelling errors</li>
                <li>Important for clear communication</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 border-b-2 border-cyan-200 pb-2">
              Common Homophones
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">1. There, Their, They&apos;re</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>There</strong> - indicates a place or location</li>
                  <li><strong>Their</strong> - shows possession (belonging to them)</li>
                  <li><strong>They&apos;re</strong> - contraction of &quot;they are&quot;</li>
                </ul>
                <div className="mt-2 bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">Examples: &quot;Put the book <strong>there</strong>.&quot; &quot;It&apos;s <strong>their</strong> car.&quot; &quot;<strong>They&apos;re</strong> coming soon.&quot;</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">2. Your, You&apos;re</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Your</strong> - shows possession (belonging to you)</li>
                  <li><strong>You&apos;re</strong> - contraction of &quot;you are&quot;</li>
                </ul>
                <div className="mt-2 bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">Examples: &quot;Is this <strong>your</strong> book?&quot; &quot;<strong>You&apos;re</strong> very kind.&quot;</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">3. To, Too, Two</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>To</strong> - preposition or infinitive marker</li> 
                  <li><strong>Too</strong> - means &quot;also&quot; or &quot;excessively&quot;</li>
                  <li><strong>Two</strong> - the number 2</li>
                </ul>
                <div className="mt-2 bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">Examples: &quot;I&apos;m going <strong>to</strong> the store.&quot; &quot;I want <strong>too</strong>.&quot; &quot;I have <strong>two</strong> cats.&quot;</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">4. Its, It&apos;s</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Its</strong> - shows possession (belonging to it)</li>
                  <li><strong>It&apos;s</strong> - contraction of &quot;it is&quot; or &quot;it has&quot;</li>
                </ul>
                <div className="mt-2 bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800">Examples: &quot;The dog wagged <strong>its</strong> tail.&quot; &quot;<strong>It&apos;s</strong> raining today.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 border-b-2 border-cyan-200 pb-2">
              More Homophone Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Common Pairs:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Accept</strong> vs <strong>Except</strong></li>
                  <li><strong>Affect</strong> vs <strong>Effect</strong></li>
                  <li><strong>Allowed</strong> vs <strong>Aloud</strong></li>
                  <li><strong>Bare</strong> vs <strong>Bear</strong></li>
                  <li><strong>Brake</strong> vs <strong>Break</strong></li>
                  <li><strong>Buy</strong> vs <strong>By</strong></li>
                  <li><strong>Cell</strong> vs <strong>Sell</strong></li>
                  <li><strong>Cent</strong> vs <strong>Scent</strong></li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-2">More Examples:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Deer</strong> vs <strong>Dear</strong></li>
                  <li><strong>Die</strong> vs <strong>Dye</strong></li>
                  <li><strong>Fair</strong> vs <strong>Fare</strong></li>
                  <li><strong>Flour</strong> vs <strong>Flower</strong></li>
                  <li><strong>Hair</strong> vs <strong>Hare</strong></li>
                  <li><strong>Hear</strong> vs <strong>Here</strong></li>
                  <li><strong>Hole</strong> vs <strong>Whole</strong></li>
                  <li><strong>Hour</strong> vs <strong>Our</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 border-b-2 border-cyan-200 pb-2">
              Homophones in Sentences
            </h2>
            <div className="space-y-4">
              {[
                { sentence: "I can hear the music from here.", word1: "hear", word2: "here" },
                { sentence: "The bear has bare feet.", word1: "bear", word2: "bare" },
                { sentence: "I need to buy a new car by next week.", word1: "buy", word2: "by" },
                { sentence: "The flower needs flour to grow.", word1: "flower", word2: "flour" },
                { sentence: "I can see the sea from my window.", word1: "see", word2: "sea" },
                { sentence: "The knight fought at night.", word1: "knight", word2: "night" }
              ].map((item, index) => (
                <div key={index} className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
                  <p className="text-gray-800 mb-2">{item.sentence}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Homophone 1: <strong>{item.word1}</strong></span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Homophone 2: <strong>{item.word2}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 border-b-2 border-cyan-200 pb-2">
              Worksheet 1: Choose the Correct Homophone
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Select the correct homophone for each sentence:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. I&apos;m going _____ the store. (to/too/two)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>to</strong> - preposition indicating direction</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. _____ going to the party. (There/Their/They&apos;re)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>They&apos;re</strong> - contraction of &quot;they are&quot;</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. Is this _____ book? (your/you&apos;re)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>your</strong> - shows possession</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. The dog wagged _____ tail. (its/it&apos;s)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>its</strong> - shows possession</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. I have _____ cats. (to/too/two)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>two</strong> - the number 2</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 border-b-2 border-cyan-200 pb-2">
              Worksheet 2: Complete the Sentences
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Fill in the blanks with the correct homophone:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. I can _____ the birds singing. (hear/here)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>hear</strong> - to perceive sound</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. The _____ is very hot today. (sun/son)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>sun</strong> - the star that gives us light</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. I need to _____ some groceries. (buy/by)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>buy</strong> - to purchase</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. The _____ is very deep. (hole/whole)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>hole</strong> - an opening or cavity</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. _____ going to be late. (We&apos;re/Were)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-cyan-600 hover:text-cyan-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>We&apos;re</strong> - contraction of &quot;we are&quot;</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 border-b-2 border-cyan-200 pb-2">
              Tips for Using Homophones Correctly
            </h2>
            <div className="bg-cyan-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-cyan-800">Learn the meanings</h3>
                  <p className="text-gray-700">Understand the different meanings of each homophone to choose the correct one.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-cyan-800">Use context clues</h3>
                  <p className="text-gray-700">Look at the surrounding words to determine which homophone makes sense.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-cyan-800">Practice regularly</h3>
                  <p className="text-gray-700">The more you practice, the more familiar you&apos;ll become with common homophones.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-cyan-800">Use a dictionary</h3>
                  <p className="text-gray-700">When in doubt, look up the word to confirm its meaning and spelling.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 border-b-2 border-cyan-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/spelling" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Spelling Rules</h3>
                <p className="text-gray-700 text-sm">Learn important spelling rules and patterns.</p>
              </Link>
              
              <Link href="/grammar/parts-of-speech" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="font-semibold text-green-800">Parts of Speech</h3>
                <p className="text-gray-700 text-sm">Understand the different parts of speech.</p>
              </Link>
              
              <Link href="/grammar/word-lists" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="font-semibold text-yellow-800">Word Lists</h3>
                <p className="text-gray-700 text-sm">Explore different categories of words.</p>
              </Link>
              
              <Link href="/grammar/grammar-rules" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <h3 className="font-semibold text-purple-800">Grammar Rules</h3>
                <p className="text-gray-700 text-sm">Master essential grammar concepts.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 