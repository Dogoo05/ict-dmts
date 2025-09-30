import Link from "next/link";

const lessons = [
  {
    title: "Мэдээлэл ба Мэдээллийн Технологи",
    desc: "Мэдээлэл гэдэг нь харилцан хамааралтай өгөгдөл, утга агуулгатай материал. Харин мэдээллийн технологи нь мэдээллийг удирдах, боловсруулах, хадгалах, түгээхэд ашиглагдана.",
    img: "https://content.ikon.mn/news/2019/7/26/2b7c45_information-technology_x974.jpg",
    video: "https://www.youtube.com/watch?v=SzJ46YA_RaA",
  },
  {
    title: "Компьютерийн Систем ба Техникүүд",
    desc: "Компьютер нь hardware (CPU, RAM, диск) болон software (үйлдлийн систем, програм) бүрдэлтэй. Тэдгээрийн хамтран ажиллалтаар хэрэглэгчийн шаардлагыг биелүүлдэг.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oh8JgBigTtSr5yVL7AZq26fpTQusMYP3OA&s",
    video: "https://www.youtube.com/watch?v=2J4aGQKJt5A",
  },
  {
    title: "Програмчлалын Хэл ба Аргачлал",
    desc: "Програмчлалын хэлүүд нь алгоритм бичих хэрэгсэл. Жишээлбэл: Python, C, Java. Алгоритм бол асуудлыг шийдэх алхамуудын дараалал.",
    img: "https://lit.mn/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_181710900524.jpg",
    video: "https://www.youtube.com/watch?v=AEaKrq3SpW8",
  },
  {
    title: "Өгөгдлийн Сан",
    desc: "SQL болон NoSQL өгөгдлийн сан нь мэдээллийг цэгцтэй хадгалах, хайх, засварлах боломж олгодог.",
    img: "https://www.tee.education/wp-content/uploads/2023/01/images-2.png",
    video: "https://www.youtube.com/watch?v=9XnhMxlgQ1c",
  },
  {
    title: "Сүлжээний Технологи",
    desc: "LAN, WAN болон TCP/IP, HTTP зэрэг протоколууд нь сүлжээний үндэс суурийг бүрдүүлдэг.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ436aG7CovVCqoFlXlAv2dSwDicmQ9u7fgEw&s",
    video: "https://www.youtube.com/watch?v=UuSYRG8m3Fk",
  },
  {
    title: "Интернэт ба Веб Хөгжүүлэлт",
    desc: "HTML, CSS, JavaScript ашиглан веб хуудсыг бүтээж, динамик болгож өгдөг.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XR41bXe-iI5109qitmVU2vvkrYXX9fk4CTgCIOUwhNHMGIMDSo3E8uf9791Y19JuMCQ&usqp=CAU",
    video: "https://www.youtube.com/watch?v=3ZAFz5_JQjM",
  },
  {
    title: "Мэдээллийн Аюулгүй Байдал",
    desc: "Криптографи, Firewall, антивирус зэрэг технологи нь мэдээллийг хамгаална.",
    img: "https://itools.mn/wp-content/uploads/2022/09/MicrosoftTeams-imagebc8000376f5bd64a84fb731c7ddb89820eb1d142fffd334d8daa3090259024a1.jpg",
    video: "https://www.youtube.com/watch?v=vy-H7Q3Ytyw",
  },
  {
    title: "Мобайл Хөгжүүлэлт",
    desc: "Android, iOS болон React Native ашиглан мобайл аппликэйшн бүтээнэ.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3NwnBo0EKK1fD89dPZCjFzdLp_UejBRrJg&s",
    video: "https://www.youtube.com/watch?v=UMy4v8l2O_k",
  },
  {
    title: "Өгөгдлийн Анализ",
    desc: "Python, R, Excel ашиглан өгөгдөлд дүн шинжилгээ хийх боломжтой.",
    img: "https://www.bodi-electronics.mn/files/img/0.311000001680859789.jpg",
    video: "https://www.youtube.com/watch?v=4_x0Jz4a-qw",
  },
  {
    title: "Нээлттэй Эх Код",
    desc: "GitHub, Apache, Linux зэрэг нь нээлттэй эхийн програм хангамжуудын жишээ.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmPYWXAdBVPmOr2UNwOAwq7x7v7KdvT7Esw&s",
    video: "https://www.youtube.com/watch?v=6nI0YfXG3aQ",
  },
];

export default function Dundshat() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="sticky top-0 z-10 bg-white shadow-md"></div>
      <div className="bg-gradient-to-r from-violet-500 to-blue-500 p-10">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl font-extrabold text-center mb-10 flex flex-row items-center gap-60">
            7-р ангийн сэдвүүд
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <a
                    href={lesson.video}
                    target="_blank"
                    className="mt-auto inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:from-pink-600 hover:to-red-600 transition self-start"
                  >
                    🎥 Видео үзэх
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
