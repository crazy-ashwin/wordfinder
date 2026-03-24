"use client"

import Link from "next/link"

export default function StateAbbreviations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            State Abbreviations
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn the official two-letter abbreviations for all 50 US states
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are State Abbreviations?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                State abbreviations are two-letter codes used to represent the 50 states of the United States. 
                These abbreviations are standardized by the US Postal Service and are commonly used in addresses, 
                forms, databases, and official documents. They help save space and ensure consistency in communication.
              </p>
            </div>

            {/* State Abbreviations Table */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Complete List of State Abbreviations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">A - F</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Alabama</span>
                      <span className="text-red-600 font-semibold">AL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Alaska</span>
                      <span className="text-red-600 font-semibold">AK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Arizona</span>
                      <span className="text-red-600 font-semibold">AZ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Arkansas</span>
                      <span className="text-red-600 font-semibold">AR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">California</span>
                      <span className="text-red-600 font-semibold">CA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Colorado</span>
                      <span className="text-red-600 font-semibold">CO</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Connecticut</span>
                      <span className="text-red-600 font-semibold">CT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Delaware</span>
                      <span className="text-red-600 font-semibold">DE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Florida</span>
                      <span className="text-red-600 font-semibold">FL</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">G - M</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Georgia</span>
                      <span className="text-pink-600 font-semibold">GA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Hawaii</span>
                      <span className="text-pink-600 font-semibold">HI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Idaho</span>
                      <span className="text-pink-600 font-semibold">ID</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Illinois</span>
                      <span className="text-pink-600 font-semibold">IL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Indiana</span>
                      <span className="text-pink-600 font-semibold">IN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Iowa</span>
                      <span className="text-pink-600 font-semibold">IA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Kansas</span>
                      <span className="text-pink-600 font-semibold">KS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Kentucky</span>
                      <span className="text-pink-600 font-semibold">KY</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Louisiana</span>
                      <span className="text-pink-600 font-semibold">LA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Maine</span>
                      <span className="text-pink-600 font-semibold">ME</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Maryland</span>
                      <span className="text-pink-600 font-semibold">MD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Massachusetts</span>
                      <span className="text-pink-600 font-semibold">MA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Michigan</span>
                      <span className="text-pink-600 font-semibold">MI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Minnesota</span>
                      <span className="text-pink-600 font-semibold">MN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Mississippi</span>
                      <span className="text-pink-600 font-semibold">MS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Missouri</span>
                      <span className="text-pink-600 font-semibold">MO</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Montana</span>
                      <span className="text-pink-600 font-semibold">MT</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-rose-500 pl-4">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">N - Z</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Nebraska</span>
                      <span className="text-rose-600 font-semibold">NE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Nevada</span>
                      <span className="text-rose-600 font-semibold">NV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">New Hampshire</span>
                      <span className="text-rose-600 font-semibold">NH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">New Jersey</span>
                      <span className="text-rose-600 font-semibold">NJ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">New Mexico</span>
                      <span className="text-rose-600 font-semibold">NM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">New York</span>
                      <span className="text-rose-600 font-semibold">NY</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">North Carolina</span>
                      <span className="text-rose-600 font-semibold">NC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">North Dakota</span>
                      <span className="text-rose-600 font-semibold">ND</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Ohio</span>
                      <span className="text-rose-600 font-semibold">OH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Oklahoma</span>
                      <span className="text-rose-600 font-semibold">OK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Oregon</span>
                      <span className="text-rose-600 font-semibold">OR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Pennsylvania</span>
                      <span className="text-rose-600 font-semibold">PA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Rhode Island</span>
                      <span className="text-rose-600 font-semibold">RI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">South Carolina</span>
                      <span className="text-rose-600 font-semibold">SC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">South Dakota</span>
                      <span className="text-rose-600 font-semibold">SD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Tennessee</span>
                      <span className="text-rose-600 font-semibold">TN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Texas</span>
                      <span className="text-rose-600 font-semibold">TX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Utah</span>
                      <span className="text-rose-600 font-semibold">UT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Vermont</span>
                      <span className="text-rose-600 font-semibold">VT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Virginia</span>
                      <span className="text-rose-600 font-semibold">VA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Washington</span>
                      <span className="text-rose-600 font-semibold">WA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">West Virginia</span>
                      <span className="text-rose-600 font-semibold">WV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Wisconsin</span>
                      <span className="text-rose-600 font-semibold">WI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Wyoming</span>
                      <span className="text-rose-600 font-semibold">WY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Usage Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">Address: 123 Main St, New York, NY 10001</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">Form: State of Residence: CA</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <p className="text-lg">
                    <span className="font-semibold text-rose-700">Database: TX, FL, NY, CA</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">License Plate: CA-ABC123</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: State to Abbreviation
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">What is the abbreviation for each state?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. California</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: CA</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Texas</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: TX</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Florida</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: FL</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Abbreviation to State
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">What state does each abbreviation represent?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. NY</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: New York</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. WA</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Washington</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. MA</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Massachusetts</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Complete the Address
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each address with the correct state abbreviation:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">123 Oak St, Los Angeles, _____ 90210</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: CA (California)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">456 Pine Ave, Miami, _____ 33101</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: FL (Florida)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">789 Elm Blvd, Seattle, _____ 98101</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: WA (Washington)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: State Abbreviation Patterns
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify patterns in state abbreviations:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">States ending in &quot;A&quot;: Alabama (AL), Alaska (AK), Arizona (AZ)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Many &quot;A&quot; states use first and last letters</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">States with &quot;New&quot;: New Hampshire (NH), New Jersey (NJ), New Mexico (NM), New York (NY)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;New&quot; states use N + first letter of second word</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">States with &quot;North&quot; and &quot;South&quot;: North Carolina (NC), North Dakota (ND), South Carolina (SC), South Dakota (SD)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Use first letter of each word</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Learning State Abbreviations
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Look for Patterns</h4>
                    <p className="text-gray-600">Many abbreviations use the first and last letters of the state name.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice with Addresses</h4>
                    <p className="text-gray-600">Use state abbreviations when writing addresses to memorize them.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use in Forms</h4>
                    <p className="text-gray-600">Practice using abbreviations when filling out forms and documents.</p>
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
                <Link href="/grammar/abbreviations" className="block text-red-600 hover:text-red-800 font-medium">
                  Abbreviations
                </Link>
                <Link href="/grammar/address-formatting" className="block text-red-600 hover:text-red-800 font-medium">
                  Address Formatting
                </Link>
                <Link href="/grammar/us-geography" className="block text-red-600 hover:text-red-800 font-medium">
                  US Geography
                </Link>
                <Link href="/grammar/writing-tips" className="block text-red-600 hover:text-red-800 font-medium">
                  Writing Tips
                </Link>
                <Link href="/grammar/formal-writing" className="block text-red-600 hover:text-red-800 font-medium">
                  Formal Writing
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Total States:</span>
                  <span className="text-gray-600">50 states</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Format:</span>
                  <span className="text-gray-600">2 letters</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-red-100">
                State abbreviations are always two letters and are standardized by the US Postal Service!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 