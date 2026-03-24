import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eagle vs Hawk: Understanding the Differences | Bird Guide',
  description: 'Learn the key differences between eagles and hawks, including their appearance, behavior, hunting styles, and characteristics. Perfect for bird enthusiasts and nature lovers.',
  keywords: 'eagle vs hawk, birds of prey, raptors, bird identification, eagle vs hawk differences',
}

export default function EagleVsHawkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Eagle vs Hawk
          </h1>
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Understanding the differences between these majestic birds of prey
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Eagles</strong> are larger, more powerful birds with massive wingspans and incredible strength, often symbolizing freedom and power. 
            <strong>Hawks</strong> are smaller, more agile hunters with excellent maneuverability and speed. 
            While both are skilled predators, they have distinct hunting strategies and physical characteristics.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold mb-4 text-amber-800 flex items-center">
              🦅 Eagle Characteristics
            </h3>
            <ul className="text-lg md:text-xl text-amber-700 space-y-3">
              <li>• Larger size (up to 15 lbs)</li>
              <li>• Massive wingspan (6-8 feet)</li>
              <li>• Powerful talons and beak</li>
              <li>• Soaring flight pattern</li>
              <li>• Symbol of strength and freedom</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              🦅 Hawk Characteristics
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• Smaller size (1-4 lbs)</li>
              <li>• Compact wingspan (2-4 feet)</li>
              <li>• Sharp vision and agility</li>
              <li>• Quick, darting flight</li>
              <li>• Excellent maneuverability</li>
            </ul>
          </div>
        </div>

        {/* Physical Differences */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Physical Differences</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-amber-700">Size & Build</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Eagles are significantly larger and more robust:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Eagle:</strong> 15-20 inches tall, 8-15 pounds</li>
                <li>• <strong>Hawk:</strong> 10-15 inches tall, 1-4 pounds</li>
                <li>• <strong>Eagle:</strong> Massive head and beak</li>
                <li>• <strong>Hawk:</strong> Smaller, more streamlined head</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Wings & Flight</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Their flight characteristics are quite different:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Eagle:</strong> Broad, rounded wings for soaring</li>
                <li>• <strong>Hawk:</strong> Pointed, narrow wings for speed</li>
                <li>• <strong>Eagle:</strong> Wingspan 6-8 feet</li>
                <li>• <strong>Hawk:</strong> Wingspan 2-4 feet</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hunting Styles */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Hunting Styles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Eagle Hunting</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Soaring:</strong> Eagles soar high above, scanning for prey
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Power:</strong> Use massive talons to grab and crush prey
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Size:</strong> Can take down larger prey like deer fawns
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Hawk Hunting</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Speed:</strong> Quick, darting attacks from perches
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Agility:</strong> Excellent maneuverability in dense areas
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Precision:</strong> Sharp vision for small prey detection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Habitat & Behavior */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Habitat & Behavior</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Eagles:</strong> Prefer open areas, mountains, coastlines, large lakes</li>
            <li>• <strong>Hawks:</strong> Found in forests, grasslands, urban areas, mixed habitats</li>
            <li>• <strong>Eagles:</strong> More solitary, territorial behavior</li>
            <li>• <strong>Hawks:</strong> More social, can be seen in groups</li>
          </ul>
        </div>

        {/* Cultural Significance */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Eagle Symbolism:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Freedom, power, strength, national symbol, spiritual significance</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Hawk Symbolism:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Vision, focus, determination, messenger, hunting prowess</p>
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
                    Which one is stronger - eagle or hawk?
                  </h3>
                  <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-amber-700">A:</span> Eagles are significantly stronger than hawks. They have larger, more powerful talons that can exert tremendous pressure, allowing them to catch and carry larger prey. Eagles can lift prey weighing up to 4-5 pounds, while hawks typically catch smaller prey like rodents and small birds.
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
                    Can eagles and hawks live in the same area?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Yes, eagles and hawks can coexist in the same area, but they typically occupy different ecological niches. Eagles prefer open areas and larger bodies of water, while hawks are more adaptable and can thrive in various habitats including forests and urban areas. They rarely compete directly for the same prey.
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
                    How can I tell them apart when flying?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Eagles have broad, rounded wings and soar in wide circles high in the sky. Hawks have pointed wings and fly with quick, darting movements. Eagles also appear much larger and have a more majestic, soaring flight pattern, while hawks are more agile and can make sharp turns quickly.
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
                    Which one makes a better pet?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> Neither eagles nor hawks make good pets! Both are wild birds of prey that require specialized care, permits, and extensive training. They are protected by law in most countries and need professional falconers to handle them properly. It&apos;s best to admire them in the wild or visit wildlife rehabilitation centers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-red-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    What&apos;s the lifespan difference between eagles and hawks?
                  </h3>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-red-700">A:</span> Eagles generally live longer than hawks. Bald eagles can live 20-30 years in the wild, while golden eagles can live 25-35 years. Hawks typically live 10-20 years, with some species like red-tailed hawks living up to 25 years in captivity. The larger size and slower metabolism of eagles contributes to their longer lifespan.
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
