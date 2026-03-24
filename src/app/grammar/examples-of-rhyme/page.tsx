import Link from 'next/link';

export default function ExamplesOfRhymePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">Examples of Rhyme</h1>
            <p className="text-lg text-gray-700">
              Rhyme is the repetition of similar sounds at the end of words. It&apos;s a fundamental element of poetry and songwriting that creates rhythm and musicality.
            </p>
            <p className="text-sm text-green-600 font-medium">
              Key Takeaway: Rhyme adds musical quality and helps with memorization in poetry and songs.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
              What is Rhyme?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Rhyme occurs when words have similar ending sounds. It&apos;s a literary device that creates a pleasing musical effect and helps 
              establish rhythm in poetry and songs. Rhyme can make text more memorable and enjoyable to read or hear.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Types of Rhyme:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Perfect Rhyme (exact sound match)</li>
                <li>Slant Rhyme (similar but not exact sounds)</li>
                <li>Internal Rhyme (rhyme within a line)</li>
                <li>End Rhyme (rhyme at line endings)</li>
                <li>Eye Rhyme (looks the same but sounds different)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
              Perfect Rhyme Examples
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Words have identical ending sounds</li>
                <li>Most common type of rhyme</li>
                <li>Creates strong musical effect</li>
                <li>Easy to identify and remember</li>
              </ul>
              
              <h4 className="font-semibold text-blue-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800"><strong>Cat</strong> and <strong>hat</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800"><strong>Light</strong> and <strong>bright</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800"><strong>Moon</strong> and <strong>spoon</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800"><strong>Star</strong> and <strong>far</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800"><strong>Tree</strong> and <strong>free</strong></p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
              Slant Rhyme Examples
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Words have similar but not identical sounds</li>
                <li>More subtle than perfect rhyme</li>
                <li>Creates interesting sound patterns</li>
                <li>Common in modern poetry</li>
              </ul>
              
              <h4 className="font-semibold text-purple-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800"><strong>Love</strong> and <strong>move</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800"><strong>Heart</strong> and <strong>part</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800"><strong>Eyes</strong> and <strong>lies</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800"><strong>Home</strong> and <strong>come</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800"><strong>Wind</strong> and <strong>mind</strong></p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
              Internal Rhyme Examples
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Rhyme occurs within a single line</li>
                <li>Creates internal rhythm</li>
                <li>Adds musical quality to poetry</li>
                <li>Can be combined with end rhyme</li>
              </ul>
              
              <h4 className="font-semibold text-yellow-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;Once upon a <strong>midnight</strong> <strong>dreary</strong>&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;The <strong>rain</strong> in <strong>Spain</strong> falls mainly on the plain&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;I <strong>hear</strong> the <strong>clear</strong> call of the wild&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;The <strong>light</strong> of the <strong>night</strong> was bright&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;In the <strong>deep</strong> of <strong>sleep</strong>, I dream&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
              Common Rhyme Patterns
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">AABB Pattern:</h3>
                <p className="text-gray-700 mb-2">Lines 1 and 2 rhyme, lines 3 and 4 rhyme:</p>
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">Roses are <strong>red</strong>, (A)<br/>
                  Violets are <strong>blue</strong>, (A)<br/>
                  Sugar is <strong>sweet</strong>, (B)<br/>
                  And so are <strong>you</strong>. (B)</p>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-2">ABAB Pattern:</h3>
                <p className="text-gray-700 mb-2">Alternating rhyme pattern:</p>
                <div className="bg-white p-3 rounded border-l-4 border-indigo-400">
                  <p className="text-gray-800">The <strong>sun</strong> is bright, (A)<br/>
                  The <strong>day</strong> is long, (B)<br/>
                  Birds take their <strong>flight</strong>, (A)<br/>
                  Singing their <strong>song</strong>. (B)</p>
                </div>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-semibold text-pink-800 mb-2">ABC Pattern:</h3>
                <p className="text-gray-700 mb-2">No rhyme pattern (free verse):</p>
                <div className="bg-white p-3 rounded border-l-4 border-pink-400">
                  <p className="text-gray-800">The wind blows through the <strong>trees</strong>, (A)<br/>
                  Whispering secrets to the <strong>leaves</strong>, (B)<br/>
                  While children play in the <strong>breeze</strong>. (C)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
              Worksheet: Identify the Rhyme
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Read each pair of words and identify if they rhyme:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. <strong>Cat</strong> and <strong>hat</strong></p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-600 hover:text-green-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Perfect Rhyme - identical ending sounds</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. <strong>Love</strong> and <strong>move</strong></p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-600 hover:text-green-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Slant Rhyme - similar but not identical sounds</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. <strong>Book</strong> and <strong>look</strong></p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-600 hover:text-green-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Perfect Rhyme - identical ending sounds</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. <strong>Home</strong> and <strong>come</strong></p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-600 hover:text-green-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Slant Rhyme - similar but not identical sounds</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. <strong>Tree</strong> and <strong>free</strong></p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-600 hover:text-green-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Perfect Rhyme - identical ending sounds</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
              Tips for Using Rhyme
            </h2>
            <div className="bg-green-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-green-800">Don&apos;t force it</h3>
                  <p className="text-gray-700">Rhyme should enhance your message, not distract from it. Don&apos;t sacrifice meaning for rhyme.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-green-800">Vary your patterns</h3>
                  <p className="text-gray-700">Mix perfect and slant rhymes to create more interesting and natural-sounding poetry.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-green-800">Read aloud</h3>
                  <p className="text-gray-700">Always read your rhyming poetry aloud to hear how it sounds and flows.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-green-800">Consider your audience</h3>
                  <p className="text-gray-700">Simple rhymes work well for children, while more complex patterns appeal to older readers.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/alliteration-examples" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Alliteration Examples</h3>
                <p className="text-gray-700 text-sm">Learn about repetition of initial consonant sounds.</p>
              </Link>
              
              <Link href="/grammar/assonance-examples" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <h3 className="font-semibold text-purple-800">Assonance Examples</h3>
                <p className="text-gray-700 text-sm">Explore repetition of vowel sounds in nearby words.</p>
              </Link>
              
              <Link href="/grammar/figurative-language" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="font-semibold text-yellow-800">Figurative Language</h3>
                <p className="text-gray-700 text-sm">Discover metaphors, similes, and other literary devices.</p>
              </Link>
              
              <Link href="/grammar/poetry-writing" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <h3 className="font-semibold text-red-800">Poetry Writing</h3>
                <p className="text-gray-700 text-sm">Learn techniques for writing effective poetry.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 