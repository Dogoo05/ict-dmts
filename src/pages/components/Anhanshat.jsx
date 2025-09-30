const lessons = [
  {
    title: "Мэдээлэл гэж юу вэ?",
    desc: "Мэдээлэл гэдэг нь хүн, техник, байгаль орчноосоо авч байгаа аливаа мэдээ, баримт, тоо, зураг, дуу, дүрс зэрэг бидний мэдлэгийг нэмэгдүүлж, шинэ зүйл танин мэдэхэд тусалдаг ойлголт юм.",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwxni10oPN7zb9qqExVTFdUXQD4y7lsU4kXyfW-q4WZhyphenhyphenpzDx5dsMn8cr7a2t_FaR5gy2GKeOo4txdPkremMYSgIGkIDzEO-IlgChOJkMo68cSzIksqn3XGb5clZ_CMm3jKvkM1N-25pZn/s1600/Screenshot_1_500x500.png",
    video: "https://www.youtube.com/watch?v=SzJ46YA_RaA",
    href: "/buleg1",
  },
  {
    title: "Мэдээллийг дүрслэх хэлбэрүүд",
    desc: "Өгөгдөл боловсруулах, мэдээллийн сан, програм хангамжаар олон салбарт өргөн хэрэглэгддэг.",
    img: "https://image.slidesharecdn.com/01-6-210919041915/85/01_6-4-320.jpg",

    video: "https://www.youtube.com/watch?v=2J4aGQKJt5A",
    href: "/buleg2",
  },
  {
    title: "Биднийг хүрээлэн буй орчны объектууд",
    desc: "Дэлхий даяар холбогдсон компьютерийн сүлжээ, мэдээлэл авах, харилцах боломж олгодог.",
    img: "https://i.ytimg.com/vi/Lv5Pndk6fS0/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-BIAC4AOKAgwIABABGH8gLigqMA8=&rs=AOn4CLCZObReJceAIaEy5z0I9DghA5VqXg",
    video: "https://www.youtube.com/watch?v=AEaKrq3SpW8",
    href: "/buleg2",
  },
  {
    title: "Загвар",
    desc: "Вирус, хортой програм, нууц үг, антивирус зэрэг ойлголтууд мэдээллийг хамгаална.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaxFT3hfcmNYdAAyndieYHH7sYUOfz-NznA&s",
    video: "https://www.youtube.com/watch?v=9XnhMxlgQ1c",
    href: "/buleg2",
  },
];

export default function Anhanshat() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="sticky top-0 z-100"></div>
      <div className="bg-gradient-to-r from-violet-500 to-blue-500 p-10 ">
        <div className="max-w-auto h-auto mx-auto text-white flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-center mb-10 flex flex-wrap items-center gap-60">
            Мэдээлэл, Объект, загвар
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {lessons.map((lesson, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md hover:scale-[1.02] transition flex flex-col"
              >
                <img
                  src={lesson.img}
                  alt={lesson.title}
                  className="w-auto h-40 object-cover"
                />
                <div className="p-10 flex flex-col h-full">
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
