import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Batter vs Pitcher: Understanding Baseball Positions | Sports Guide',
  description: 'Learn the key differences between batters and pitchers in baseball, including their roles, skills, and responsibilities. Perfect for baseball fans and players.',
  keywords: 'batter vs pitcher, baseball positions, baseball roles, batter pitcher differences, baseball guide',
}

export default function BatterVsPitcherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Batter vs Pitcher
          </h1>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Understanding the fundamental roles in baseball
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Batters</strong> are offensive players who try to hit the ball and score runs, requiring hand-eye coordination, power, and strategic thinking. 
            <strong>Pitchers</strong> are defensive players who throw the ball to batters, requiring accuracy, speed, strategy, and mental toughness. 
            These two positions represent the core offensive vs defensive dynamic of baseball.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
              ⚾ Batter Role
            </h3>
            <ul className="text-lg md:text-xl text-blue-700 space-y-3">
              <li>• Offensive position</li>
              <li>• Tries to hit the ball</li>
              <li>• Scores runs for team</li>
              <li>• Requires batting skills</li>
              <li>• Strategic base running</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ⚾ Pitcher Role
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• Defensive position</li>
              <li>• Throws the ball</li>
              <li>• Prevents runs</li>
              <li>• Requires pitching skills</li>
              <li>• Strategic pitch selection</li>
            </ul>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Responsibilities</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Batter Responsibilities</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Batters focus on offensive play:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Hitting:</strong> Make contact with pitched balls</li>
                <li>• <strong>Scoring:</strong> Get on base and score runs</li>
                <li>• <strong>Base Running:</strong> Advance bases strategically</li>
                <li>• <strong>Team Support:</strong> Move runners into scoring position</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-green-700">Pitcher Responsibilities</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Pitchers focus on defensive play:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Pitching:</strong> Throw balls with accuracy and strategy</li>
                <li>• <strong>Defense:</strong> Prevent batters from getting hits</li>
                <li>• <strong>Fielding:</strong> Field balls hit back to the mound</li>
                <li>• <strong>Strategy:</strong> Outthink and outmaneuver batters</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Required */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills Required</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Batter Skills</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Hand-Eye Coordination:</strong> Track and hit moving balls
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Power:</strong> Generate bat speed and hitting power
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Patience:</strong> Wait for good pitches to hit
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Pitcher Skills</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Accuracy:</strong> Throw strikes consistently
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Velocity:</strong> Generate pitch speed
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Strategy:</strong> Mix different pitch types
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mental Aspects */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Mental Aspects</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Batters:</strong> Need focus, patience, and confidence at the plate</li>
            <li>• <strong>Pitchers:</strong> Need mental toughness, composure, and strategic thinking</li>
            <li>• <strong>Pressure:</strong> Both face high-pressure situations in crucial moments</li>
            <li>• <strong>Adaptation:</strong> Must adjust strategies based on game situations</li>
          </ul>
        </div>

        {/* Physical Demands */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Physical Demands</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Batter Demands:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Explosive power, quick reflexes, endurance for long at-bats</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Pitcher Demands:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Arm strength, stamina, precise muscle control, recovery ability</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can a player be both a batter and pitcher?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Yes! These players are called &quot;two-way players&quot; and are becoming more common in modern baseball. Famous examples include Shohei Ohtani of the Los Angeles Angels, who excels at both hitting and pitching. However, it&apos;s extremely rare and requires exceptional talent in both areas.
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
                    Which position is more important to a team&apos;s success?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Both positions are equally crucial! The saying &quot;good pitching beats good hitting&quot; is true, but you also need good hitting to score runs. A team needs strong pitchers to prevent runs and strong batters to score runs. The most successful teams typically have balance between both areas.
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
                    What&apos;s the most challenging aspect of each position?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> For batters, the biggest challenge is hitting a small ball traveling at high speeds with movement, while dealing with the pressure of being the center of attention. For pitchers, the biggest challenge is maintaining consistency and accuracy over many pitches while managing the mental pressure of being responsible for preventing runs.
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
                    How do batting and pitching statistics compare?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> Batting statistics focus on offensive production: batting average, home runs, RBIs, on-base percentage, and slugging percentage. Pitching statistics focus on preventing runs: ERA (earned run average), wins, strikeouts, walks, and WHIP (walks plus hits per inning pitched). Both have advanced metrics that measure overall value to the team.
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
                    Which position has a longer career lifespan?
                  </h3>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-red-700">A:</span> Generally, batters tend to have longer careers than pitchers. This is because pitching puts more stress on the arm and shoulder, leading to more injuries and wear. Many pitchers transition to relief roles as they age, while batters can often continue playing into their late 30s or early 40s if they maintain their hitting skills and stay healthy.
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
