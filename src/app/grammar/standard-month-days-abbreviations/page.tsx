"use client"

import Link from "next/link"

export default function StandardMonthDaysAbbreviations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Standard Month & Days Abbreviations
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn the standard abbreviations for months and days of the week
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Month and Day Abbreviations?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Month and day abbreviations are shortened forms of the full names used to save space and time. 
                They follow standard conventions and are commonly used in calendars, schedules, forms, and informal writing. 
                Learning these abbreviations helps with efficient communication and writing.
              </p>
            </div>

            {/* Month Abbreviations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Standard Month Abbreviations
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Month</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Abbreviation</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">January</td>
                      <td className="border border-gray-300 px-4 py-3">Jan.</td>
                      <td className="border border-gray-300 px-4 py-3">Jan. 15, 2024</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">February</td>
                      <td className="border border-gray-300 px-4 py-3">Feb.</td>
                      <td className="border border-gray-300 px-4 py-3">Feb. 14, 2024</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">March</td>
                      <td className="border border-gray-300 px-4 py-3">Mar.</td>
                      <td className="border border-gray-300 px-4 py-3">Mar. 21, 2024</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">April</td>
                      <td className="border border-gray-300 px-4 py-3">Apr.</td>
                      <td className="border border-gray-300 px-4 py-3">Apr. 1, 2024</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">May</td>
                      <td className="border border-gray-300 px-4 py-3">May</td>
                      <td className="border border-gray-300 px-4 py-3">May 5, 2024</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">June</td>
                      <td className="border border-gray-300 px-4 py-3">Jun.</td>
                      <td className="border border-gray-300 px-4 py-3">Jun. 15, 2024</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">July</td>
                      <td className="border border-gray-300 px-4 py-3">Jul.</td>
                      <td className="border border-gray-300 px-4 py-3">Jul. 4, 2024</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">August</td>
                      <td className="border border-gray-300 px-4 py-3">Aug.</td>
                      <td className="border border-gray-300 px-4 py-3">Aug. 15, 2024</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">September</td>
                      <td className="border border-gray-300 px-4 py-3">Sep.</td>
                      <td className="border border-gray-300 px-4 py-3">Sep. 1, 2024</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">October</td>
                      <td className="border border-gray-300 px-4 py-3">Oct.</td>
                      <td className="border border-gray-300 px-4 py-3">Oct. 31, 2024</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">November</td>
                      <td className="border border-gray-300 px-4 py-3">Nov.</td>
                      <td className="border border-gray-300 px-4 py-3">Nov. 11, 2024</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">December</td>
                      <td className="border border-gray-300 px-4 py-3">Dec.</td>
                      <td className="border border-gray-300 px-4 py-3">Dec. 25, 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Days of the Week Abbreviations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Days of the Week Abbreviations
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-teal-500 to-green-500 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Day</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Abbreviation</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Monday</td>
                      <td className="border border-gray-300 px-4 py-3">Mon.</td>
                      <td className="border border-gray-300 px-4 py-3">Mon. morning</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Tuesday</td>
                      <td className="border border-gray-300 px-4 py-3">Tue.</td>
                      <td className="border border-gray-300 px-4 py-3">Tue. afternoon</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Wednesday</td>
                      <td className="border border-gray-300 px-4 py-3">Wed.</td>
                      <td className="border border-gray-300 px-4 py-3">Wed. evening</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Thursday</td>
                      <td className="border border-gray-300 px-4 py-3">Thu.</td>
                      <td className="border border-gray-300 px-4 py-3">Thu. night</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Friday</td>
                      <td className="border border-gray-300 px-4 py-3">Fri.</td>
                      <td className="border border-gray-300 px-4 py-3">Fri. morning</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Saturday</td>
                      <td className="border border-gray-300 px-4 py-3">Sat.</td>
                      <td className="border border-gray-300 px-4 py-3">Sat. afternoon</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Sunday</td>
                      <td className="border border-gray-300 px-4 py-3">Sun.</td>
                      <td className="border border-gray-300 px-4 py-3">Sun. evening</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Usage Examples */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Usage Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <p className="text-lg">
                    <span className="font-semibold text-emerald-700">Date: Jan. 15, 2024</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <p className="text-lg">
                    <span className="font-semibold text-teal-700">Schedule: Mon. - Fri. 9 AM - 5 PM</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <p className="text-lg">
                    <span className="font-semibold text-green-700">Appointment: Wed. Dec. 25, 2024</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <p className="text-lg">
                    <span className="font-semibold text-emerald-700">Calendar: Sat. Oct. 31, 2024</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Month Abbreviations
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">What is the abbreviation for each month?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. January</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Jan.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. February</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Feb.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. March</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Mar.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Day Abbreviations
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">What is the abbreviation for each day?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Monday</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Mon.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Tuesday</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Tue.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Wednesday</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Wed.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Complete the Date
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each date with the correct abbreviation:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ 15, 2024 (January)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Jan.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ 14, 2024 (February)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Feb.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ 25, 2024 (December)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dec.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Schedule Writing
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Write the schedule using abbreviations:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Monday to Friday, 9 AM to 5 PM</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Mon. - Fri. 9 AM - 5 PM</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Saturday and Sunday, 10 AM to 6 PM</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Sat. - Sun. 10 AM - 6 PM</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">December 25, 2024, Wednesday</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Wed. Dec. 25, 2024</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Month and Day Abbreviations
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Periods</h4>
                    <p className="text-gray-600">Most abbreviations end with a period (Jan., Mon.).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Be Consistent</h4>
                    <p className="text-gray-600">Use the same abbreviation style throughout your document.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Consider Context</h4>
                    <p className="text-gray-600">Use full names in formal writing, abbreviations in informal contexts.</p>
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
                <Link href="/grammar/abbreviations" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Abbreviations
                </Link>
                <Link href="/grammar/writing-tips" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Writing Tips
                </Link>
                <Link href="/grammar/formal-writing" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Formal Writing
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Grammar Rules
                </Link>
                <Link href="/grammar/english-grammar" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Months:</span>
                  <span className="text-gray-600">12 abbreviations</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Days:</span>
                  <span className="text-gray-600">7 abbreviations</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-emerald-100">
                Most month and day abbreviations end with a period and are capitalized!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 