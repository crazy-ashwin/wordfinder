import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aspen vs Birch: Understanding Tree Differences | Nature Guide',
  description: 'Learn the key differences between aspen and birch trees, including their appearance, habitat, uses, and characteristics. Perfect for nature enthusiasts and tree identification.',
  keywords: 'aspen vs birch, tree identification, deciduous trees, aspen birch differences, tree guide',
}

export default function AspenVsBirchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Aspen vs Birch
          </h1>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Understanding the differences between these beautiful deciduous trees
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Aspen</strong> trees are known for their distinctive white bark with black markings, trembling leaves, and ability to form large colonies through root suckers. 
            <strong>Birch</strong> trees feature smooth, papery bark that peels in layers, elegant drooping branches, and are often found in cooler northern climates. 
            Both are beautiful trees but have distinct characteristics and growing habits.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              🌳 Aspen Characteristics
            </h3>
            <ul className="text-lg md:text-xl text-gray-700 space-y-3">
              <li>• White bark with black markings</li>
              <li>• Trembling, quaking leaves</li>
              <li>• Forms colonies (clones)</li>
              <li>• Grows in various climates</li>
              <li>• Fast-growing pioneer species</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold mb-4 text-amber-800 flex items-center">
              🌳 Birch Characteristics
            </h3>
            <ul className="text-lg md:text-xl text-amber-700 space-y-3">
              <li>• Smooth, papery bark</li>
              <li>• Elegant drooping branches</li>
              <li>• Individual tree growth</li>
              <li>• Prefers cooler climates</li>
              <li>• Slower, more controlled growth</li>
            </ul>
          </div>
        </div>

        {/* Physical Differences */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Physical Differences</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-green-700">Bark Appearance</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                The bark is one of the most distinguishing features:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Aspen:</strong> White to cream-colored with distinctive black markings and scars</li>
                <li>• <strong>Birch:</strong> Smooth, papery bark that peels in thin layers, often white or silver</li>
                <li>• <strong>Aspen:</strong> Bark becomes rough and furrowed with age</li>
                <li>• <strong>Birch:</strong> Bark remains smooth and can be peeled off in sheets</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-amber-700">Leaf Characteristics</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Leaves have distinct shapes and behaviors:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Aspen:</strong> Round to heart-shaped leaves that &quot;quake&quot; in the wind</li>
                <li>• <strong>Birch:</strong> Oval to triangular leaves with serrated edges</li>
                <li>• <strong>Aspen:</strong> Leaves attached by flattened petioles that cause trembling</li>
                <li>• <strong>Birch:</strong> Leaves are more rigid and don&apos;t tremble as much</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Growth Patterns */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Growth Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Aspen Growth</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Colonial:</strong> Forms large groves through root suckers
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Fast:</strong> Rapid growth rate, reaching 40-80 feet quickly
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Pioneer:</strong> One of the first trees to colonize disturbed areas
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Birch Growth</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Individual:</strong> Grows as single trees or small groups
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Moderate:</strong> Steady growth rate, reaching 40-70 feet
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Established:</strong> Prefers stable, established forest environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Habitat & Climate */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Habitat & Climate</h3>
          <ul className="text-lg md:text-xl text-blue-800 space-y-3">
            <li>• <strong>Aspen:</strong> Adaptable to various climates, from cold mountains to warm valleys</li>
            <li>• <strong>Birch:</strong> Prefers cooler, northern climates with adequate moisture</li>
            <li>• <strong>Aspen:</strong> Found in mountains, valleys, and disturbed areas</li>
            <li>• <strong>Birch:</strong> Common in northern forests, wetlands, and cool mountain areas</li>
          </ul>
        </div>

        {/* Uses & Benefits */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Uses & Benefits</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Aspen:</strong> Excellent for wildlife habitat, erosion control, and quick shade</li>
            <li>• <strong>Birch:</strong> Valued for ornamental beauty, wood products, and traditional uses</li>
            <li>• <strong>Aspen:</strong> Wood used for paper, particleboard, and firewood</li>
            <li>• <strong>Birch:</strong> Wood used for furniture, flooring, and birch syrup production</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Why do aspen leaves &quot;quake&quot; or tremble?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Aspen leaves tremble because they have flattened petioles (leaf stems) that are oriented perpendicular to the leaf blade. This unique structure allows the leaves to move easily in even the slightest breeze, creating the characteristic &quot;quaking&quot; effect. This adaptation may help reduce water loss and increase photosynthesis efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-amber-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can I grow aspen and birch in my backyard?
                  </h3>
                  <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-amber-700">A:</span> It depends on your climate and space. Aspen trees are more adaptable and can grow in various conditions, but they spread aggressively through root suckers and need plenty of space. Birch trees prefer cooler climates and are better suited for smaller yards, but they&apos;re more sensitive to heat and drought. Consider your climate zone and available space before planting either.
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
                    How can I tell them apart in winter when they have no leaves?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> In winter, look at the bark and overall tree structure. Aspen bark is white with distinctive black markings and scars, while birch bark is smooth and papery, often peeling in thin layers. Aspen trees also tend to grow in clusters or groves, while birch trees are usually individual or in small groups. The branch structure is also different - aspen branches are more upright, while birch branches often droop elegantly.
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
                    Which tree is better for wildlife?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> Both trees are excellent for wildlife, but they serve different purposes. Aspen groves provide excellent habitat for deer, elk, and other large mammals, while the trembling leaves create a unique sound that many animals recognize. Birch trees are particularly valuable for birds, providing nesting sites and attracting insects that birds feed on. The best choice depends on what wildlife you want to attract to your area.
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
                    Are aspen and birch related to each other?
                  </h3>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-red-700">A:</span> While both are deciduous trees, they belong to different families. Aspen trees are part of the Populus genus in the Salicaceae (willow) family, which also includes cottonwoods and poplars. Birch trees belong to the Betula genus in the Betulaceae family, which also includes alders and hazelnuts. Despite some visual similarities, they are not closely related and have evolved different adaptations for their environments.
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
