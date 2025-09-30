import Link from "next/link";

export default function Buleg1() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          📘 6-р ангийн Мэдээлэл зүйн Эхний бүлэг
        </h1>

        {/* Жишээ 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border-l-8 border-blue-500 hover:scale-[1.02] transition-transform">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Жишээ 1: Байшингийн зураг
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <b>Багш:</b> Энэ байшингийн зураг ямар дүрснээс бүтсэн байна вэ?{" "}
            <i>(Зураг 1.1.1)</i>
          </p>
          <p>
            <b>Сурагч:</b> Гурвалжин, тэгш өнцөгт.
          </p>
          <p>
            <b>Багш:</b> Гурвалжин, тэгш өнцөгт юунаас бүтдэг вэ?
          </p>
          <p>
            <b>Сурагч:</b> Хэрчмээс.
          </p>
          <p>
            <b>Багш:</b> Хэрчим юунаас бүтдэг вэ?
          </p>
          <p>
            <b>Сурагч:</b> Цэгээс.
          </p>
          <p>
            <b>Багш:</b> Цэг гэж юу вэ?
          </p>
        </div>

        {/* Жишээ 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border-l-8 border-green-500 hover:scale-[1.02] transition-transform">
          <h2 className="text-2xl font-bold text-green-600 mb-3">
            Жишээ 2: Өгүүлбэр гэж юу вэ?
          </h2>
          <p>
            <b>Багш:</b> Өгүүлбэр гэж юу вэ? <i>(Зураг 1.1.2)</i>
          </p>
          <p>
            <b>Сурагч:</b> Өгүүлбэр нь бүрэн төгс утга санааг илэрхийлсэн холбоо
            үгнүүдийн нийлбэр юм.
          </p>
          <p>
            <b>Багш:</b> Харин үг гэж юу вэ?
          </p>
          <p>
            <b>Сурагч:</b> Энэ нь зөв дарааллаар бичигдсэн хэд хэдэн үсэг.
          </p>
          <p>
            <b>Багш:</b> Үсэг гэж юу вэ?
          </p>
        </div>

        {/* Жишээ 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border-l-8 border-purple-500 hover:scale-[1.02] transition-transform">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">
            Жишээ 3: Олимпын амжилт
          </h2>
          <p className="text-gray-700 leading-relaxed">
            2008 онд Бээжингийн олимпод тамирчин <b>Н.Түвшинбаяр</b> Монгол
            Улсын анхны алтан медаль авч, түүхэн амжилт бүтээсэн. Энэ бол
            мэдээллийг дамжуулах, түгээх томоохон жишээ.
          </p>
        </div>

        {/* Дадлага бодлого */}
        <div className="bg-gradient-to-r from-pink-100 to-red-100 shadow-lg rounded-2xl p-6 mt-10">
          <h2 className="text-2xl font-extrabold text-red-600 mb-4">
            📝 Дадлага асуултууд
          </h2>
          <ol className="list-decimal list-inside text-gray-800 leading-relaxed space-y-2">
            <li>Цэг гэж юу вэ? Хэрчмээс юугаар ялгаатай вэ?</li>
            <li>Өгүүлбэр, үг хоёрын ялгааг тайлбарла.</li>
            <li>Мэдээллийг дамжуулах ямар аргууд байдаг вэ?</li>
            <li>
              Мэдээллийг боловсруулах үйлдлүүдээс 3-г нь жишээтэй тайлбарла.
            </li>
            <li>
              Мэдээллийг хадгалах уламжлалт ба орчин үеийн аргуудыг харьцуул.
            </li>
          </ol>
        </div>

        {/* QUIZ товч */}
        <div className="flex justify-center mt-10">
          <Link
            href="/quiz"
            className="relative inline-block px-10 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg rounded-3xl shadow-lg hover:scale-105 transition-transform hover:shadow-2xl"
          >
            🎯 QUIZ ажиллах
            <span className="absolute top-0 left-0 w-full h-full rounded-3xl border-2 border-white opacity-30 animate-ping"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
