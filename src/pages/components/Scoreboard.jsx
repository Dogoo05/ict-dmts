export default function Scoreboard() {
  const players = [
    { username: "@boldoo", score: 9765 },
    { username: "@anu", score: 7567 },
    { username: "@tulgaa", score: 4674 },
    { username: "@saraa", score: 5743 },
    { username: "@bat", score: 4567 },
    { username: "@bayraa", score: 3751 },
    { username: "@ogi", score: 2243 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4e1e97] via-[#37146f] to-[#1f0c47] p-4 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-6xl w-full">
        {/* Leaderboard card */}
        <div className="bg-gradient-to-br from-[#5c2cbf] to-[#2e0f66] rounded-3xl p-4 sm:p-6 shadow-2xl">
          <h2 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
            SCOREBOARD
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <button className="px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-purple-900 font-semibold shadow-md text-sm sm:text-base">
              All time
            </button>
            <button className="px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-purple-700 text-white text-sm sm:text-base">
              This Week
            </button>
            <button className="px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-purple-700 text-white text-sm sm:text-base">
              This Month
            </button>
          </div>

          {/* Player list */}
          <ul className="space-y-3">
            {players.map((player, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gradient-to-r from-purple-600 to-purple-700 px-4 sm:px-5 py-3 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center font-bold text-purple-900 shadow text-sm sm:text-base">
                    {i + 1}
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">
                    {player.username}
                  </span>
                </div>
                <span className="text-yellow-300 font-semibold text-sm sm:text-base">
                  {player.score} pts
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Podium card */}
        <div className="bg-gradient-to-br from-[#5c2cbf] to-[#2e0f66] rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center">
          <h2 className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent text-2xl sm:text-3xl font-extrabold mb-2">
            LEADERBOARD
          </h2>
          <p className="text-gray-300 text-center text-xs sm:text-sm mb-6 sm:mb-8 px-2 sm:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </p>

          <div className="flex items-end justify-center gap-4 sm:gap-8 mt-4 sm:mt-6">
            {/* 2nd place */}
            <div className="flex flex-col items-center order-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 flex items-center justify-center text-sm sm:text-lg font-bold text-purple-900 shadow-xl">
                👤
              </div>
              <span className="mt-1 sm:mt-2 text-white text-sm">@anu</span>
              <span className="text-xs text-gray-200">7567</span>
              <div className="mt-2 sm:mt-3 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-t from-yellow-600 to-yellow-300 text-purple-900 font-bold flex items-center justify-center rounded-t-xl shadow-xl">
                2
              </div>
            </div>

            {/* 1st place */}
            <div className="flex flex-col items-center order-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-400 flex items-center justify-center text-lg sm:text-2xl font-extrabold text-purple-900 shadow-2xl">
                👑
              </div>
              <span className="mt-1 sm:mt-2 text-white text-sm sm:text-base">@boldoo</span>
              <span className="text-xs text-gray-200">9765</span>
              <div className="mt-2 sm:mt-3 w-24 sm:w-28 h-24 sm:h-32 bg-gradient-to-t from-yellow-600 to-yellow-300 text-purple-900 font-extrabold flex items-center justify-center rounded-t-xl shadow-2xl">
                1
              </div>
            </div>

            {/* 3rd place */}
            <div className="flex flex-col items-center order-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center text-sm sm:text-lg font-bold text-purple-900 shadow-xl">
                👤
              </div>
              <span className="mt-1 sm:mt-2 text-white text-sm">@tulgaa</span>
              <span className="text-xs text-gray-200">4674</span>
              <div className="mt-2 sm:mt-3 w-20 sm:w-24 h-16 sm:h-20 bg-gradient-to-t from-yellow-600 to-yellow-300 text-purple-900 font-bold flex items-center justify-center rounded-t-xl shadow-xl">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
