import Link from "next/link";

export default function Buleg1() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          📘 Мэдээлэл гэж юу вэ?
        </h1>

        {/* Жишээ 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border-l-8 border-blue-500 hover:scale-[1.02] transition-transform">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Жишээ:</h2>
          <h2>• Нар маргааш мандана гэдэг бол мэдээлэл.</h2>
          <h2>• Найз чинь чамд хичээлийнцагийн хуваарь хэлэх нь мэдээлэл. </h2>
          <h2>
            • Компьютерийн дэлгэц дээр гарчбуй зураг, бичиг ч мөн мэдээлэл.
          </h2>
        </div>

        {/* Жишээ 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border-l-8 border-green-500 hover:scale-[1.02] transition-transform">
          <h2 className="text-2xl font-bold text-green-600 mb-3">Мэдэхүй:</h2>
          Бид хүрээлэн буй орчноосоо аливаа мэдээллийг мэдрэхүййн аргуудаар
          дамжуулан, технологи, техник хэрэгслийг ашиглан хүлээн авдаг.
          Жишээлбэл, сансрын хиймэл дагуул ашиглан байгалийн үзэгдэл, тодорхой
          газарзүйн байршил зэрэг өргөн хүрээний мэдээллийг авч байна. Улмаар
          энэ мэдээлэлд тодорхой байдлаар боловсруулалт хийсний үр дүнд мэдлэг
          бий болдог. Бид өөрсдийн судалж буй хичээлээрээ мэдлэг хуримтлуулж,
          ахуй амьдрал болон хичээл сургалтад тавигдсан аливаа асуудлыг
          шийдвэрлэхэд эзэмшсэн мэдлэг, чадвараа ашигладаг.
        </div>

        {/* Жишээ 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border-l-8 border-purple-500 hover:scale-[1.02] transition-transform">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">
            Хэрэглэхүй:
          </h2>
          Хоёрыг хоёроор үржүүлсэн нь тавтай тэнцүү" гэсэн нь үнэн зөв дүгнэлт
          мөн үү?
          <h2>
            Дараах мэдээлэл ямар утга агуулж болох вэ? Үсгүүдийн санамсаргүй
            цуглуулга Цаг агаарын урьдчилсан мэдээ Хичээлийн хуваарь Сонин дээрх
            зарлал Тэмдэгтүүдийн цуглуулга
          </h2>
        </div>

        {/* Дадлага бодлого */}
        <div className="bg-gradient-to-r from-pink-100 to-red-100 shadow-lg rounded-2xl p-6 mt-10">
          <h2 className="text-2xl font-extrabold text-red-600 mb-4 flex flex-col items-center justify-center w-auto h-auto">
            <img
              src="https://image.slidesharecdn.com/medeelel10-111021232352-phpapp01/85/Medeelel-10-1-320.jpg"
              alt=""
            />
          </h2>
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
