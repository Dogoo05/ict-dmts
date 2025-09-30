// components/Nuurhuudas.tsx
import Link from "next/link";
import HeroSwiper from "./Slider";

export default function Nuurhuudas() {
  return (
    <div
      className="flex flex-col justify-center items-center
                 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700
                 gap-6 min-h-screen px-4"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-extrabold text-3xl md:text-4xl text-white drop-shadow-lg">
          6-р ангийн сурагчдад
        </h1>
        <h1 className="font-extrabold text-3xl md:text-4xl text-yellow-300 drop-shadow-lg">
          зориулсан
        </h1>
        <p className="text-base md:text-lg text-white/90 max-w-[600px] mt-2">
          Интерактив мэдээлэл технологийн сургалтын платформ. Сурах, тоглох,
          амжилт олохын төлөө!
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
        <Link
          href="/"
          className="flex flex-col items-center justify-center bg-white p-5 w-[140px] sm:w-[160px] md:w-[190px]
                     rounded-2xl border-t-[6px] border-blue-700 shadow-xl
                     hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <h1 className="text-3xl text-blue-700">62</h1>
          <p className="text-gray-900 text-center text-sm sm:text-base">
            Нийт хичээл
          </p>
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center justify-center bg-white p-5 w-[140px] sm:w-[160px] md:w-[190px]
                     rounded-2xl border-t-[6px] border-green-700 shadow-xl
                     hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <h1 className="text-3xl text-green-700">100</h1>
          <p className="text-gray-900 text-center text-sm sm:text-base">
            Бүртгэлтэй сурагч
          </p>
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center justify-center bg-white p-5 w-[140px] sm:w-[160px] md:w-[190px]
                     rounded-2xl border-t-[6px] border-purple-700 shadow-xl
                     hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <h1 className="text-3xl text-purple-700">8</h1>
          <p className="text-gray-900 text-center text-sm sm:text-base">
            Амжилтын тэмдэг
          </p>
        </Link>
      </div>

      {/* Slider Section */}
      <div className="w-full max-w-[800px] px-4 py-6">
        <HeroSwiper />
      </div>
    </div>
  );
}
