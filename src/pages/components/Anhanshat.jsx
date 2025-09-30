import Link from "next/link";

const lessons = [
  {
    title: "Компьютер гэж юу вэ?",
    desc: "Компьютер бол мэдээллийг боловсруулах, хадгалах, тооцоолох чадвартай электрон төхөөрөмж.",
    img: "https://dlcdnrog.asus.com/rog/media/172782111228.webp",
    video: "https://www.youtube.com/watch?v=SzJ46YA_RaA",
    href: "/buleg1",
  },
  {
    title: "Мэдээллийн технологийн хэрэглээ",
    desc: "Өгөгдөл боловсруулах, мэдээллийн сан, програм хангамжаар олон салбарт өргөн хэрэглэгддэг.",
    img: "https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg",

    video: "https://www.youtube.com/watch?v=2J4aGQKJt5A",
    href: "/buleg2",
  },
  {
    title: "Интернет гэж юу вэ?",
    desc: "Дэлхий даяар холбогдсон компьютерийн сүлжээ, мэдээлэл авах, харилцах боломж олгодог.",
    img: "https://www.degrouptest.com/uploads/media/box-wifi.jpg",
    video: "https://www.youtube.com/watch?v=AEaKrq3SpW8",
    href: "/",
  },
  {
    title: "Мэдээллийн аюулгүй байдал",
    desc: "Вирус, хортой програм, нууц үг, антивирус зэрэг ойлголтууд мэдээллийг хамгаална.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nThhhlWmdKuue-nQakVI9NKzv1iMg9Ho0Q&s",
    video: "https://www.youtube.com/watch?v=9XnhMxlgQ1c",
    href: "/",
  },
];

export default function Anhanshat() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="sticky top-0 z-100"></div>
      <div className="bg-gradient-to-r from-violet-500 to-blue-500 p-10 ">
        <div className="max-w-7xl h-370 mx-auto text-white">
          <h2 className="text-3xl font-extrabold text-center mb-10 flex flex-wrap items-center gap-60">
            <Link
              href="/hicheeluud"
              className="p-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             text-white font-bold 
             hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 
              ease-in-out"
            >
              ⬅ Буцах
            </Link>
            6-р ангийн сэдвүүд
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {lessons.map((lesson, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md hover:scale-[1.02] transition flex flex-col"
              >
                <img
                  src={lesson.img}
                  alt={lesson.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 text-blue-100">
                    {i + 1}. {lesson.title}
                  </h3>
                  <p className="text-white/90 mb-4 flex-grow">{lesson.desc}</p>
                  <h2 className="flex flex-row w-80 gap-5">
                    <a
                      href={lesson.video}
                      target="_blank"
                      className="mt-auto inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:from-pink-600 hover:to-red-600 transition self-start"
                    >
                      Видео
                    </a>
                    <a
                      href={lesson.href}
                      target="_blank"
                      className="mt-auto inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-gray-400 to-slate-400 text-white font-semibold shadow hover:from-gray-500 hover:to-gray-500 transition self-start"
                    >
                      Дэлгэрэнгүй
                    </a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
