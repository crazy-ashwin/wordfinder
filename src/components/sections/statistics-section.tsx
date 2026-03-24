import { TrendingUp, Users, Zap, Award } from "lucide-react"

export function StatisticsSection() {
  const stats = [
    {
      value: "2M+",
      label: "Words Found Daily",
      description: "Players discover millions of words every day",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      value: "500K+",
      label: "Active Users",
      description: "Word game enthusiasts trust our tools",
      icon: Users,
      color: "text-blue-600",
    },
    {
      value: "15+",
      label: "Word Tools",
      description: "Comprehensive suite of word game helpers",
      icon: Zap,
      color: "text-purple-600",
    },
    {
      value: "99.9%",
      label: "Accuracy Rate",
      description: "Reliable results from verified dictionaries",
      icon: Award,
      color: "text-orange-600",
    },
  ]

  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Word Game Players Worldwide</h2>
          <p className="text-xl text-gray-600">
            Join millions of players who use our tools daily to improve their game
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-700">150+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-700">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-700">0.2s</div>
              <div className="text-sm text-gray-600">Average Response</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-700">100%</div>
              <div className="text-sm text-gray-600">Free to Use</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
