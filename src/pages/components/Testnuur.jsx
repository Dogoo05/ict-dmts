import Link from "next/link";

export default function Testnuur() {
  const cards = [
    {
      level: "Easy",
      text: "6-р ангийн сурах бичгийн мэдээллийн дагуу текст",
      href: "/test",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      level: "Normal",
      text: "7-р ангийн сурах бичгийн мэдээллийн дагуу текст",
      href: "/test2",
      gradient: "from-blue-500 to-indigo-700",
    },
    {
      level: "Medium",
      text: "8-р ангийн сурах бичгийн мэдээллийн дагуу текст",
      href: "/test3",
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      level: "Hard",
      text: "9-р ангийн сурах бичгийн мэдээллийн дагуу текст",
      href: "/test4",
      gradient: "from-pink-500 to-red-700",
    },
  ];

  return (
    <div className="bg-gradient-to-bl from-blue-500 to-violet-600 w-full">
      {/* Header */}
      <div className="text-center ">
        <h1 className="font-extrabold text-4xl sm:text-5xl text-white mb-4 drop-shadow-lg pt-[20px]">
          Хичээлийн төрлүүд
        </h1>
        <h2 className="text-lg sm:text-xl text-white/90">
          Та өөрийн сонирхолд тохирох хичээлийг сонгоорой
        </h2>
      </div>

      {/* Cards */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {cards.map((card, i) => (
          <Link key={i} href={card.href}>
            <div
              className={`p-6 rounded-3xl shadow-lg 
                          hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 
                          flex flex-col items-center text-center group cursor-pointer 
                          bg-gradient-to-r ${card.gradient}`}
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="90px"
                viewBox="0 -960 960 960"
                width="90px"
                className="mb-4 transition-transform duration-300 group-hover:scale-110 fill-white"
              >
                <path
                  d="M329.33-120v-66.67h84V-280H146.67q-27 0-46.84-19.83Q80-319.67 
                  80-346.67v-426.66q0-27 19.83-46.84Q119.67-840 146.67-840h666.66q27 0 
                  46.84 19.83Q880-800.33 880-773.33v426.66q0 27-19.83 46.84Q840.33-280 
                  813.33-280H546.67v93.33h84V-120H329.33ZM146.67-346.67h666.66v-426.66H146.67v426.66Z"
                />
              </svg>
              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-2">
                {card.level}
              </h2>
              <p className="text-sm text-white/90 mb-6">{card.text}</p>
              {/* Button */}
              <span className="px-5 py-2 rounded-full bg-white/30 text-white font-medium shadow-md hover:bg-white/50 transition-all">
                Эхлэх
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
