"use client";
import Link from "next/link";
import Apps from "./App";
import Ap from "./App2";
import Appp from "./App3";
import Appa from "./App4";
import Appaa from "./App5";

export default function Hicheeluud() {
  const cards = [
    {
      title: "Мэдээлэл объект загвар",
      href: "/anhanshat",
      comp: <Apps />,
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Компьютер",
      href: "/dund",
      comp: <Ap />,
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "Бичвэр мэдээлэл боловсруулах ",
      href: "/",
      comp: <Appp />,
      color: "from-purple-400 to-fuchsia-600",
    },
    {
      title: "Зураг боловсруулах технологи",
      href: "/",
      comp: <Appa />,
      color: "from-pink-400 to-rose-600",
    },
    {
      title: "Цахим харилцаа ба интернэт",
      href: "/",
      comp: <Appaa />,
      color: "from-orange-400 to-red-600",
    },
  ];

  return (
    <div className=" bg-gradient-to-bl from-blue-500 to-violet-500 min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-center mt-24 mb-12">
        <h1 className="font-extrabold text-2xl sm:text-3xl text-white mb-4 drop-shadow-lg">
          Хичээлийн төрлүүд
        </h1>
        <h2 className="text-lg sm:text-xl text-white/90">
          Та өөрийн сонирхолд тохирох хичээлийг сонгоорой
        </h2>
      </header>

      {/* Cards */}
      {/* Cards */}
      <div className="p-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <Link key={i} href={card.href}>
            <div
              className={`bg-gradient-to-br ${card.color} 
                    p-6 rounded-2xl shadow-xl 
                    hover:rotate-1 hover:scale-105 hover:shadow-2xl 
                    transition-all duration-300 ease-in-out 
                    flex flex-col items-center text-center h-76`}
            >
              {/* Icon */}

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-2">
                {card.title}
              </h2>
              <p className="text-sm text-white/90 mb-6">{card.text}</p>

              {/* Button / component */}
              {card.comp && (
                <div className="mt-auto">
                  <div className="p-1 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition-all">
                    {card.comp}
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
