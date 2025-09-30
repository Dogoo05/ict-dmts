export default function Footer() {
  return (
    <footer className="bg-[#1c1f26] text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Нууцлалын бодлого */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Нууцлалын бодлого</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Энэхүү цахим хуудасны шинэлэгчилсэн хувилбарыг НҮБ-ын Хүүхдийн Сан,
            НҮБ-ын Хяну Агга Хэмжээ, Нэхэн Сэргэх Сангийн дэмжлэгтэйгээр
            Боловсрол, Шинжлэх Ухааны Яам, Боловсролын Мэдээллийн Технологийн
            Төв хөгжүүлэв. 2025 он
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <i className="fa-regular fa-copyright"></i>
            <i className="fa-solid fa-shield-halved"></i>
            <i className="fa-solid fa-globe"></i>
          </div>
        </div>

        {/* Гар утасны апп татах */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Гар утасны аппликейшн татах
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200"
            >
              <img
                src="https://yt3.googleusercontent.com/PJh5BeCRze4_08Qp8zOtb2bV6JGLiqmmc9QIRTVeTlrVmC2828C7gw5KIOU8uk70jN__SSY5Ug=s900-c-k-c0x00ffffff-no-rj"
                alt="Google Play"
                className="h-6"
              />
              Google Play
            </a>
            <a
              href="#"
              className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbq1Vy5L1xsPE_CMGj8U6SoBUkbSnmmVkgQ&s"
                alt="App Store"
                className="h-6"
              />
              App Store
            </a>
          </div>
        </div>

        {/* Холбоо барих */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Холбоо барих</h2>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>📅 Даваа – Баасан: 08:30 – 17:30</li>
            <li>📅 Бямба – Ням: Амарна</li>
            <li>📧 medeelel@.mn</li>
            <li>📍9911****</li>
          </ul>
        </div>
      </div>

      {/* доод хэсгийн social */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2025 ЕБС Сургалт. Бүх эрх хуулиар хамгаалагдаагүй</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
