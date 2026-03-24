import Link from 'next/link';

export default function ExamplesOfPointOfViewPage() {
  return (
    <div className="min-h-screen bg-purple-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800">Examples of Point of View</h1>
            <p className="text-lg text-gray-700">
              Point of view is the perspective from which a story is told. It determines who is narrating the story and how much the narrator knows.
            </p>
            <p className="text-sm text-purple-600 font-medium">
              Key Takeaway: Point of view affects how readers experience and understand a story.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2">
              What is Point of View?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Point of view (POV) is the narrative perspective from which a story is told. It determines the narrator&apos;s relationship to the story 
              and how much information they can share with the reader. The choice of point of view significantly impacts how readers experience the story.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Main Types of Point of View:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>First Person (I, me, we, us)</li>
                <li>Second Person (you, your)</li>
                <li>Third Person Limited (he, she, they - limited knowledge)</li>
                <li>Third Person Omniscient (he, she, they - all-knowing)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2">
              First Person Point of View
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Uses &quot;I,&quot; &quot;me,&quot; &quot;we,&quot; &quot;us&quot; pronouns</li>
                <li>Narrator is a character in the story</li>
                <li>Limited to what the narrator knows and experiences</li>
                <li>Creates intimacy and immediacy</li>
              </ul>
              
              <h4 className="font-semibold text-blue-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">&quot;I walked down the dark alley, my heart pounding in my chest.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">&quot;We couldn&apos;t believe what we were seeing.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">&quot;My hands trembled as I opened the mysterious letter.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2">
              Second Person Point of View
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Uses &quot;you,&quot; &quot;your&quot; pronouns</li>
                <li>Addresses the reader directly</li>
                <li>Creates immersive, interactive experience</li>
                <li>Less common in fiction, more common in instructions</li>
              </ul>
              
              <h4 className="font-semibold text-green-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">&quot;You walk into the room and immediately notice the strange painting on the wall.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">&quot;Your heart races as you realize you&apos;re not alone.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">&quot;You can feel the tension building as you approach the door.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2">
              Third Person Limited Point of View
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Uses &quot;he,&quot; &quot;she,&quot; &quot;they&quot; pronouns</li>
                <li>Narrator is outside the story</li>
                <li>Limited to one character&apos;s thoughts and feelings</li>
                <li>Balances intimacy with objectivity</li>
              </ul>
              
              <h4 className="font-semibold text-yellow-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;Sarah felt her stomach drop as she read the email.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;He wondered if he had made the right decision.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;Maria couldn&apos;t believe what she was seeing.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2">
              Third Person Omniscient Point of View
            </h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Characteristics:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Uses &quot;he,&quot; &quot;she,&quot; &quot;they&quot; pronouns</li>
                <li>Narrator knows everything about all characters</li>
                <li>Can reveal multiple character&apos;s thoughts and feelings</li>
                <li>Provides the broadest perspective</li>
              </ul>
              
              <h4 className="font-semibold text-red-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">&quot;John thought the meeting was going well, but Sarah was secretly plotting against him.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">&quot;Both sisters wanted the same thing, but neither knew the other&apos;s true feelings.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">&quot;The detective suspected the butler, while the butler was actually innocent.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2">
              Worksheet: Identify the Point of View
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Read each sentence and identify the point of view:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. &quot;I couldn&apos;t believe my eyes when I saw the treasure.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-purple-600 hover:text-purple-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">First Person - uses &quot;I&quot;</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. &quot;You turn the corner and see a beautiful garden.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-purple-600 hover:text-purple-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Second Person - uses &quot;you&quot;</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. &quot;She felt nervous about the presentation.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-purple-600 hover:text-purple-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Third Person Limited - uses &quot;she&quot; and shows her feelings</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. &quot;Tom wanted to go home, but Mary was having too much fun.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-purple-600 hover:text-purple-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Third Person Omniscient - shows both characters&apos; thoughts</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. &quot;We decided to take the scenic route.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-purple-600 hover:text-purple-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">First Person - uses &quot;we&quot;</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2">
              Tips for Choosing Point of View
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-purple-800">Consider your story&apos;s needs</h3>
                  <p className="text-gray-700">Think about what information you want to reveal and how intimate you want the reader to feel with the characters.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-purple-800">Be consistent</h3>
                  <p className="text-gray-700">Once you choose a point of view, stick with it throughout your story unless you have a specific reason to change.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-purple-800">Consider your audience</h3>
                  <p className="text-gray-700">Different points of view work better for different audiences and genres.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-purple-800">Practice different perspectives</h3>
                  <p className="text-gray-700">Try writing the same scene from different points of view to see which works best.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/figurative-language" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Figurative Language</h3>
                <p className="text-gray-700 text-sm">Learn about metaphors, similes, and other literary devices.</p>
              </Link>
              
              <Link href="/grammar/examples-of-rhyme" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="font-semibold text-green-800">Rhyme Examples</h3>
                <p className="text-gray-700 text-sm">Explore different types of rhyme in poetry and writing.</p>
              </Link>
              
              <Link href="/grammar/reading-comprehension" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="font-semibold text-yellow-800">Reading Comprehension</h3>
                <p className="text-gray-700 text-sm">Improve your understanding of written texts.</p>
              </Link>
              
              <Link href="/grammar/parts-of-speech" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <h3 className="font-semibold text-red-800">Parts of Speech</h3>
                <p className="text-gray-700 text-sm">Understand the building blocks of language.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 