import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nigiri vs Sashimi: Understanding Sushi Differences | Food Guide',
  description: 'Learn the key differences between nigiri and sashimi, including their preparation, ingredients, and presentation. Perfect for sushi enthusiasts and food lovers.',
  keywords: 'nigiri vs sashimi, sushi types, japanese food, nigiri sashimi differences, sushi guide',
}

export default function NigiriVsSashimiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Nigiri vs Sashimi
          </h1>
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Understanding the differences between these Japanese delicacies
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Nigiri</strong> is a type of sushi consisting of a small mound of vinegared rice topped with a slice of fish, seafood, or other ingredients, often held together with a strip of nori or wasabi. 
            <strong>Sashimi</strong> is thinly sliced raw fish or seafood served without rice, typically accompanied by soy sauce, wasabi, and pickled ginger. 
            While both feature raw fish, nigiri includes rice and is considered sushi, while sashimi is just the fish itself.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold mb-4 text-amber-800 flex items-center">
              🍣 Nigiri
            </h3>
            <ul className="text-lg md:text-xl text-amber-700 space-y-3">
              <li>• Includes vinegared rice</li>
              <li>• Fish/seafood on top</li>
              <li>• Considered sushi</li>
              <li>• Often has wasabi</li>
              <li>• Can include nori strips</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
              🐟 Sashimi
            </h3>
            <ul className="text-lg md:text-xl text-blue-700 space-y-3">
              <li>• Raw fish/seafood only</li>
              <li>• No rice included</li>
              <li>• Not technically sushi</li>
              <li>• Served with condiments</li>
              <li>• Pure fish experience</li>
            </ul>
          </div>
        </div>

        {/* Key Differences */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Differences</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-amber-700">Rice Component</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                The presence of rice is the main distinction:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Nigiri:</strong> Contains vinegared sushi rice as the base</li>
                <li>• <strong>Sashimi:</strong> No rice - just the fish or seafood</li>
                <li>• <strong>Nigiri:</strong> Rice provides texture and flavor balance</li>
                <li>• <strong>Sashimi:</strong> Pure fish flavor without rice interference</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Classification</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                How they fit into Japanese cuisine:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Nigiri:</strong> Classified as sushi (includes rice)</li>
                <li>• <strong>Sashimi:</strong> Not sushi - just raw fish/seafood</li>
                <li>• <strong>Nigiri:</strong> Part of sushi tradition</li>
                <li>• <strong>Sashimi:</strong> Standalone dish category</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Preparation Methods */}
        <div className="bg-gradient-to-r from-pink-50 to-red-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Preparation Methods</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-pink-700">Nigiri Preparation</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Rice:</strong> Vinegared sushi rice is shaped into small mounds
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Topping:</strong> Fish/seafood is sliced and placed on rice
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Assembly:</strong> Often includes wasabi between rice and fish
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">Sashimi Preparation</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Cutting:</strong> Fish is sliced into thin, precise pieces
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Presentation:</strong> Arranged artistically on a plate
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Accompaniments:</strong> Served with soy sauce, wasabi, ginger
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Ingredients */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Common Ingredients</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Nigiri:</strong> Salmon, tuna, shrimp, eel, tamago (egg), uni (sea urchin)</li>
            <li>• <strong>Sashimi:</strong> Tuna, salmon, yellowtail, mackerel, scallops, octopus</li>
            <li>• <strong>Nigiri:</strong> Can include cooked ingredients like eel or tamago</li>
            <li>• <strong>Sashimi:</strong> Primarily raw fish and seafood</li>
          </ul>
        </div>

        {/* Serving Style */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Serving Style</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Nigiri Serving:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Usually served in pairs or sets, often on wooden boards or plates</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Sashimi Serving:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Artistically arranged on plates, sometimes with decorative garnishes</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-amber-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Is sashimi considered sushi?
                  </h3>
                  <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-amber-700">A:</span> No, sashimi is not technically considered sushi. The word &quot;sushi&quot; refers to dishes that contain vinegared rice. Since sashimi is just raw fish or seafood without rice, it&apos;s classified as a separate category in Japanese cuisine. Nigiri, on the other hand, contains rice and is therefore considered sushi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Which one is healthier - nigiri or sashimi?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Sashimi is generally considered healthier because it contains only the fish/seafood without the added rice. This means fewer calories and carbohydrates. However, nigiri provides more energy and can be more satisfying due to the rice content. Both are excellent sources of protein and omega-3 fatty acids. The choice depends on your dietary goals and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    How do I eat nigiri and sashimi properly?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> For nigiri, you can eat it with your hands or chopsticks. Dip the fish side (not the rice) lightly in soy sauce to avoid making the rice soggy. For sashimi, use chopsticks and dip each piece in soy sauce. Add a small amount of wasabi if desired, and eat the pickled ginger between different types to cleanse your palate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-purple-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can beginners start with either one?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> Yes! Beginners can start with either, but nigiri is often recommended for those new to raw fish because the rice provides a familiar texture and helps balance the fish flavor. Sashimi is more intense since it&apos;s pure fish. Start with milder fish like salmon or tuna, and gradually try more adventurous options like mackerel or sea urchin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    What&apos;s the price difference between nigiri and sashimi?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> Generally, sashimi tends to be more expensive per piece because it contains more fish and no rice filler. Nigiri is often more affordable since the rice helps stretch the fish portion. However, prices vary significantly based on the type and quality of fish used. Premium fish like bluefin tuna or sea urchin will be expensive regardless of whether it&apos;s served as nigiri or sashimi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
