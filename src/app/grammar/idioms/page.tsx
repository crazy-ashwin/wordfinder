"use client"

import Link from "next/link"

export default function Idioms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            English Idioms
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the colorful expressions that make English vibrant and engaging
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Idioms?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Idioms are phrases or expressions that have a figurative meaning different from their literal meaning. 
                They add color, personality, and cultural richness to language. 
                From &quot;raining cats and dogs&quot; to &quot;break a leg,&quot; idioms make English more expressive and fun!
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Idiom Categories
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Weather & Nature</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Raining cats and dogs</p>
                      <p className="text-yellow-600">Raining very heavily</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Under the weather</p>
                      <p className="text-yellow-600">Feeling sick or unwell</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">A ray of sunshine</p>
                      <p className="text-yellow-600">Someone who brings happiness</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Every cloud has a silver lining</p>
                      <p className="text-yellow-600">Good can come from bad situations</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-3">Body Parts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Keep an eye on</p>
                      <p className="text-amber-600">To watch carefully</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Pull someone&apos;s leg</p>
                      <p className="text-amber-600">To joke or tease someone</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Cost an arm and a leg</p>
                      <p className="text-amber-600">To be very expensive</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Get it off your chest</p>
                      <p className="text-amber-600">To share your feelings</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">Animals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Let the cat out of the bag</p>
                      <p className="text-orange-600">To reveal a secret</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Kill two birds with one stone</p>
                      <p className="text-orange-600">To accomplish two things at once</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">The elephant in the room</p>
                      <p className="text-orange-600">An obvious problem no one discusses</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Curiosity killed the cat</p>
                      <p className="text-orange-600">Being too curious can be dangerous</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Idioms in Context
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-lg">
                    <span className="font-semibold text-yellow-700">It&apos;s raining cats and dogs</span> outside, so we&apos;ll stay home.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <p className="text-lg">
                    <span className="font-semibold text-amber-700">Keep an eye on</span> the children while I&apos;m gone.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-lg">
                    That new car will <span className="font-semibold text-orange-700">cost an arm and a leg</span>!
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">Let the cat out of the bag</span> and tell us the surprise!
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Match the Idiom
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each idiom with its meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;raining cats and dogs&quot; mean?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Raining very heavily</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;cost an arm and a leg&quot; mean?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: To be very expensive</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;let the cat out of the bag&quot; mean?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: To reveal a secret</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Idiom
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these common idioms:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Every cloud has a _____ lining</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: silver</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Kill two _____ with one stone</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: birds</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ in the room</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: elephant</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Use in Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Use these idioms in sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;under the weather&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I&apos;m feeling under the weather today, so I&apos;ll stay home.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;pull someone&apos;s leg&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Don&apos;t worry, I was just pulling your leg about the surprise party.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;get it off your chest&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: If something is bothering you, just get it off your chest.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: True or False
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Determine if these idiom meanings are correct:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">True or False: &quot;A ray of sunshine&quot; means someone who brings happiness.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: True</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">True or False: &quot;Curiosity killed the cat&quot; means cats are naturally curious.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: False - it means being too curious can be dangerous</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">True or False: &quot;Keep an eye on&quot; means to watch carefully.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: True</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Idioms
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Understand the Context</h4>
                    <p className="text-gray-600">Make sure you understand when and how to use each idiom appropriately.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Regularly</h4>
                    <p className="text-gray-600">Use idioms in conversation and writing to become more comfortable with them.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Learn the Origins</h4>
                    <p className="text-gray-600">Understanding where idioms come from helps you remember and use them better.</p>
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
                <Link href="/grammar/idiom-worksheets" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Idiom Worksheets
                </Link>
                <Link href="/grammar/figurative-language" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Figurative Language
                </Link>
                <Link href="/grammar/metaphors" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Metaphors
                </Link>
                <Link href="/grammar/similes" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Similes
                </Link>
                <Link href="/grammar/expressions" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Common Expressions
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Idiom Categories:</span>
                  <span className="text-gray-600">15+ categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Idioms:</span>
                  <span className="text-gray-600">200+ expressions</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-yellow-100">
                Idioms make your English more colorful and engaging - practice them regularly to sound more natural!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 