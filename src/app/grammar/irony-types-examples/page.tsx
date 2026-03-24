"use client"

import Link from "next/link"

export default function IronyTypesExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-600 via-slate-600 to-zinc-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Irony: Types & Examples
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Explore the different types of irony and how they add depth to literature and communication
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-gray-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Is Irony?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Irony is a literary device where the intended meaning is different from the actual meaning. 
                It creates contrast between what is expected and what actually happens. 
                From verbal irony to dramatic irony, this device adds complexity and humor to writing.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Irony
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">Verbal Irony</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Sarcasm</p>
                      <p className="text-gray-600">&quot;Great, another rainy day!&quot; (when it&apos;s been raining for weeks)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Understatement</p>
                      <p className="text-gray-600">&quot;It&apos;s just a scratch&quot; (referring to a major injury)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Overstatement</p>
                      <p className="text-gray-600">&quot;I&apos;ve told you a million times&quot; (exaggeration)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Saying the Opposite</p>
                      <p className="text-gray-600">&quot;What a beautiful day!&quot; (during a storm)</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-3">Dramatic Irony</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Audience Knows</p>
                      <p className="text-slate-600">Viewers know the killer is hiding, but the character doesn&apos;t</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Character Unaware</p>
                      <p className="text-slate-600">Character thinks they&apos;re safe, but audience knows danger awaits</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Tragic Irony</p>
                      <p className="text-slate-600">Character makes a decision that will lead to their downfall</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Situational Awareness</p>
                      <p className="text-slate-600">Character acts based on false information the audience knows is wrong</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-zinc-500 pl-6">
                  <h3 className="text-2xl font-semibold text-zinc-700 mb-3">Situational Irony</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Unexpected Outcome</p>
                      <p className="text-zinc-600">A fire station burns down</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Reversal of Expectations</p>
                      <p className="text-zinc-600">A traffic cop gets a speeding ticket</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Contradictory Result</p>
                      <p className="text-zinc-600">A marriage counselor gets divorced</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Ironic Coincidence</p>
                      <p className="text-zinc-600">A weatherman gets caught in a rainstorm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Examples in Literature
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border-l-4 border-gray-400">
                  <p className="text-lg">
                    <span className="font-semibold text-gray-700">Verbal Irony:</span> &quot;I love waking up early on Mondays!&quot; (said sarcastically)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-slate-50 to-zinc-50 p-6 rounded-xl border-l-4 border-slate-400">
                  <p className="text-lg">
                    <span className="font-semibold text-slate-700">Dramatic Irony:</span> Romeo thinks Juliet is dead, but the audience knows she&apos;s just sleeping
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-zinc-50 to-stone-50 p-6 rounded-xl border-l-4 border-zinc-400">
                  <p className="text-lg">
                    <span className="font-semibold text-zinc-700">Situational Irony:</span> A pilot afraid of heights
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-stone-50 to-neutral-50 p-6 rounded-xl border-l-4 border-stone-400">
                  <p className="text-lg">
                    <span className="font-semibold text-stone-700">Cosmic Irony:</span> A person who saves lives for a living dies in a car accident
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Irony Types
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">What type of irony is shown in each example?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) &quot;Oh great, another flat tire!&quot; (said with sarcasm)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Verbal Irony</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">B) A firefighter&apos;s house burns down</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Situational Irony</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">C) The audience knows the killer is behind the door, but the character doesn&apos;t</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dramatic Irony</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Create Irony Examples
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-zinc-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create examples of each type of irony:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Create a verbal irony example about bad weather</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;What perfect weather for a picnic!&quot; (said during a thunderstorm)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Create a situational irony example about a doctor</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: A doctor who smokes cigarettes</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Create a dramatic irony example about a surprise party</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Everyone is hiding for a surprise party, but the birthday person already knows</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Real-Life Irony
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-zinc-50 to-stone-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the irony in these real-life situations:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A police officer gets arrested for speeding</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Situational Irony - unexpected outcome</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Someone says &quot;I love Mondays!&quot; with obvious sarcasm</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Verbal Irony - saying the opposite of what they mean</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A weather forecaster gets caught in a rainstorm without an umbrella</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Situational Irony - ironic coincidence</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Literature Examples
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-stone-50 to-neutral-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the irony in these literary examples:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">In &quot;Romeo and Juliet,&quot; Romeo thinks Juliet is dead, but she&apos;s just sleeping</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-stone-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dramatic Irony - audience knows what character doesn&apos;t</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">In &quot;The Gift of the Magi,&quot; a wife cuts her hair to buy her husband a watch chain, while he sells his watch to buy her combs</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-stone-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Situational Irony - their gifts become useless</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">In &quot;Animal Farm,&quot; the pigs become the very thing they rebelled against</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-stone-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Situational Irony - reversal of expectations</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Irony
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Sparingly</h4>
                    <p className="text-gray-600">Too much irony can become predictable or lose its impact.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Consider Your Audience</h4>
                    <p className="text-gray-600">Make sure your audience will understand the irony you&apos;re using.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Enhance Meaning</h4>
                    <p className="text-gray-600">Use irony to add depth and complexity to your writing.</p>
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
                <Link href="/grammar/figurative-language" className="block text-gray-600 hover:text-gray-800 font-medium">
                  Figurative Language
                </Link>
                <Link href="/grammar/satire" className="block text-gray-600 hover:text-gray-800 font-medium">
                  Satire
                </Link>
                <Link href="/grammar/sarcasm" className="block text-gray-600 hover:text-gray-800 font-medium">
                  Sarcasm
                </Link>
                <Link href="/grammar/literary-devices" className="block text-gray-600 hover:text-gray-800 font-medium">
                  Literary Devices
                </Link>
                <Link href="/grammar/writing-techniques" className="block text-gray-600 hover:text-gray-800 font-medium">
                  Writing Techniques
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Irony Types:</span>
                  <span className="text-gray-600">3 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Use:</span>
                  <span className="text-gray-600">Literature & speech</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Advanced</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-500 to-slate-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-gray-100">
                Irony adds sophistication and humor to writing - master it to create more engaging and thought-provoking content!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 