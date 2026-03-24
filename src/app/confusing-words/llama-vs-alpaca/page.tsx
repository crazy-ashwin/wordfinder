import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Llama vs Alpaca: Understanding the Differences | Animal Guide',
  description: 'Learn the key differences between llamas and alpacas, including their appearance, behavior, uses, and characteristics. Perfect for animal enthusiasts and farmers.',
  keywords: 'llama vs alpaca, camelids, andean animals, livestock differences, alpaca vs llama',
}

export default function LlamaVsAlpacaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Llama vs Alpaca
          </h1>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Understanding the differences between these Andean camelids
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Llamas</strong> are larger, stronger animals used primarily for pack carrying and guarding livestock. 
            <strong>Alpacas</strong> are smaller, gentler animals bred specifically for their soft, luxurious fiber. 
            While they look similar, they serve very different purposes and have distinct personalities.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
              🦙 Llama Characteristics
            </h3>
            <ul className="text-lg md:text-xl text-blue-700 space-y-3">
              <li>• Larger size (250-450 lbs)</li>
              <li>• Stronger, used for packing</li>
              <li>• Protective of herds</li>
              <li>• Coarser, dual-coated fiber</li>
              <li>• More independent nature</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <h3 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
              🦙 Alpaca Characteristics
            </h3>
            <ul className="text-lg md:text-xl text-purple-700 space-y-3">
              <li>• Smaller size (100-175 lbs)</li>
              <li>• Gentle, docile temperament</li>
              <li>• Bred for fiber production</li>
              <li>• Soft, single-coated fiber</li>
              <li>• More social and herd-oriented</li>
            </ul>
          </div>
        </div>

        {/* Physical Differences */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Physical Differences</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-orange-700">Size & Build</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Llamas are significantly larger and more robust:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Llama:</strong> 5.5-6 feet tall, 250-450 pounds</li>
                <li>• <strong>Alpaca:</strong> 4.5-5 feet tall, 100-175 pounds</li>
                <li>• <strong>Llama:</strong> Longer face and ears</li>
                <li>• <strong>Alpaca:</strong> Shorter, more compact face</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-red-700">Fiber Quality</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                The fiber characteristics are quite different:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Llama:</strong> Coarse, dual-coated, less valuable</li>
                <li>• <strong>Alpaca:</strong> Fine, single-coated, highly prized</li>
                <li>• <strong>Llama:</strong> Fiber used for ropes and rugs</li>
                <li>• <strong>Alpaca:</strong> Fiber used for luxury clothing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Behavioral Differences */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Behavioral Differences</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Llama Behavior</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Protective:</strong> Excellent guard animals for sheep and alpaca herds
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Independent:</strong> More solitary and territorial nature
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Strong-willed:</strong> Can be stubborn and need firm handling
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Alpaca Behavior</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Gentle:</strong> Very docile and easy to handle
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Social:</strong> Prefer to live in herds and are very social
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Curious:</strong> Intelligent and interested in their surroundings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Uses and Purposes */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Primary Uses</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Llamas:</strong> Pack animals, livestock guardians, trekking companions</li>
            <li>• <strong>Alpacas:</strong> Fiber production, pets, therapy animals</li>
            <li>• <strong>Llamas:</strong> Can carry 25-30% of their body weight</li>
            <li>• <strong>Alpacas:</strong> Produce 5-10 pounds of fiber annually</li>
          </ul>
        </div>

        {/* Care Requirements */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Care Requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Llama Care:</h3>
              <p className="text-lg md:text-xl text-indigo-700">More space needed, regular training, herd management</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Alpaca Care:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Less space, easier handling, regular shearing</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-orange-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can llamas and alpacas live together?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> Yes! Llamas are often used as guard animals for alpaca herds. They protect the alpacas from predators and can live harmoniously together. This is actually a common and beneficial arrangement.
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
                    Which one makes a better pet?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Alpacas generally make better pets due to their gentler nature and smaller size. They&apos;re easier to handle, more social, and don&apos;t require the same level of training as llamas. However, both need proper care and attention.
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
                    How long do they live?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Both llamas and alpacas typically live 15-25 years with proper care. Llamas tend to live slightly longer, often reaching 20-25 years, while alpacas commonly live 15-20 years.
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
                    Are they related to camels?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> Yes! Llamas and alpacas are both members of the camelid family, along with camels, vicuñas, and guanacos. They all share common ancestors and have similar digestive systems and body structures.
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
                    Which one is more expensive to buy?
                  </h3>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-red-700">A:</span> Generally, alpacas are more expensive to purchase initially due to their valuable fiber production potential. However, llamas can be more expensive to maintain due to their larger size and higher feed requirements.
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
