import React from "react";

export default function Buleg21() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
      <header className="bg-blue-600 text-white shadow-md py-6">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">
            📘 Бичвэр Мэдээлэл Боловсруулах Технологи
          </h1>
          <p className="mt-2 text-blue-100">
            Компьютер ашиглан бичвэр боловсруулах тухай
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {/* Онолын хэсэг */}
        <section className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold mb-3">
            ✍️ Үг, Өгүүлбэр, Цогцолбор гэж юу вэ?
          </h2>
          <p className="mb-2">
            Компьютерийн бичвэрийг зөв ойлгохын тулд бид эхлээд үг, өгүүлбэр,
            цогцолборын тухай ойлголттой байх хэрэгтэй.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Үг:</strong> Тусдаа утгатай нэгж. Жишээ нь:{" "}
              <em>ном, сурагч</em>.
            </li>
            <li>
              <strong>Өгүүлбэр:</strong> Нэг санааг илэрхийлсэн үгсийн цогц.
              Жишээ нь: <em>Би компьютер дээр бичиж байна.</em>
            </li>
            <li>
              <strong>Цогцолбор:</strong> Нэг утгын дор бүрэн бүтэн бүтэцтэй
              өгүүлбэрийн хэсгүүд. Жишээ нь:{" "}
              <em>Сурагчид компьютер дээр бичиж сурч байна.</em>
            </li>
          </ul>
        </section>

        {/* Компьютер дээр бичих дүрэм */}
        <section className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-600">
          <h2 className="text-2xl font-semibold mb-3">
            ⌨️ Компьютер дээр бичих үед анхаарах зүйлс
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Үг бүрийн дараа нэг л зай авна.</li>
            <li>Цэг, таслалын өмнө зай авахгүй, ард нь нэг зай авна.</li>
            <li>Өгүүлбэрийн дараа заавал цэг тавина.</li>
            <li>Хаалт, хашилтын өмнө зай авахгүй, ард нь нэг зай авна.</li>
            <li>Зураг эсвэл хүснэгт оруулах үед хоёр талд нь зай үлдээнэ.</li>
            <li>Цогцолборын дараа дараагийн мөрийг Enter товчоор эхэлнэ.</li>
          </ol>
        </section>

        {/* Дасгал хэсэг */}
        <section className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-600">
          <h2 className="text-2xl font-semibold mb-3">📝 Дасгал</h2>
          <p className="mb-4">Доорх өгүүлбэрүүдийг зөв бичиж үзээрэй:</p>
          <div className="space-y-3">
            <p className="bg-gray-100 p-3 rounded-md">1. nom unshij bn</p>
            <p className="bg-gray-100 p-3 rounded-md">
              2. bi kompyuter deer bichij suuj bn
            </p>
            <p className="bg-gray-100 p-3 rounded-md">
              3. manai angi shine medeelel avch bn
            </p>
          </div>
          <p className="mt-4 text-gray-600 italic">
            → Үг, өгүүлбэр, цогцолборын дүрмийг ашиглан зөв болгоорой.
          </p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-10">
        <div className="max-w-5xl mx-auto text-center text-sm">
          © 2025 Бичвэр Мэдээлэл – Next.js хуудас
        </div>
      </footer>
    </div>
  );
}
