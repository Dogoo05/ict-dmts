"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Data4 массивийг шууд энд оруулсан
const Data4 = [
  {
    id: 1,
    question: "Компьютерийн үндсэн гурван хэсэг аль вэ?",
    answers: [
      "A. Оролт, Гаралт, Хадгалалт",
      "B. CPU, RAM, хатуу диск",
      "C. Оролт, Гаралт, Боловсруулалт",
      "D. Тэжээл, Кейс, Кабель",
    ],
    correct_answer: "C",
  },
  {
    id: 2,
    question: "Алгоритм гэж юу вэ?",
    answers: [
      "A. Компьютерийн програм",
      "B. Дүрэм, дараалал бүхий асуудлыг шийдэх алхмууд",
      "C. Төхөөрөмжийн нэр",
      "D. Сүлжээний протокол",
    ],
    correct_answer: "B",
  },
  {
    id: 3,
    question: "RAM ямар үүрэгтэй вэ?",
    answers: [
      "A. Мэдээллийг байнга хадгалдаг",
      "B. Түр хугацаанд хадгалж, CPU-д өгөгдөл дамжуулдаг",
      "C. Өгөгдлийг интернетээр дамжуулдаг",
      "D. График дүрслэл хадгалдаг",
    ],
    correct_answer: "B",
  },
  {
    id: 4,
    question: "Интернетийн үндсэн сүлжээний протокол аль вэ?",
    answers: ["A. HTTP", "B. FTP", "C. TCP/IP", "D. SMTP"],
    correct_answer: "C",
  },
  {
    id: 5,
    question: "Мэдээллийн аюулгүй байдлын гурван тулгуур ойлголт аль вэ?",
    answers: [
      "A. Хурд, Найдвартай байдал, Нууцлал",
      "B. Нууцлал, Бүрэн бүтэн байдал, Хүртээмж",
      "C. Дамжуулалт, Хадгалалт, Ашиглалт",
      "D. Сүлжээ, Протокол, Нууц үг",
    ],
    correct_answer: "B",
  },
  {
    id: 6,
    question: "Өгөгдлийн сангийн үндсэн обьект аль вэ?",
    answers: ["A. Хүснэгт", "B. CPU", "C. Вэб хуудас", "D. Програм"],
    correct_answer: "A",
  },
  {
    id: 7,
    question: "HTML ямар зориулалттай вэ?",
    answers: [
      "A. Вэб хуудсыг бүтэцлэх",
      "B. Зураг боловсруулах",
      "C. Програмчлалын хэл",
      "D. Өгөгдлийн сан удирдах",
    ],
    correct_answer: "A",
  },
  {
    id: 8,
    question: "Компьютерийн сүлжээний давуу тал юу вэ?",
    answers: [
      "A. Хурдан тооцоолол хийх",
      "B. Нөөцийг хуваалцах, мэдээлэл солилцох",
      "C. Дэлгэцийн чанарыг сайжруулах",
      "D. Энерги хэмнэх",
    ],
    correct_answer: "B",
  },
  {
    id: 9,
    question: "Компьютерийн вирус гэж юу вэ?",
    answers: [
      "A. Компьютерийн төхөөрөмж",
      "B. Сүлжээний төхөөрөмж",
      "C. Өөрийгөө хуулбарлан тарааж хор хөнөөл учруулдаг програм",
      "D. Мэдээллийг хамгаалах систем",
    ],
    correct_answer: "C",
  },
  {
    id: 10,
    question: "Алгоритмыг дүрслэх аргууд аль вэ?",
    answers: [
      "A. Хүснэгт, График, Дүрс",
      "B. Урсгалын зураг, Псевдокод, Байгалийн хэл",
      "C. Вэб хуудас, Код, Дүрс",
      "D. Текст, Фото, Видео",
    ],
    correct_answer: "B",
  },

  {
    id: 11,
    question: "Компьютерийн хамгийн жижиг мэдээллийн нэгж юу вэ?",
    answers: ["A. Байт", "B. Гигабайт", "C. Бит", "D. Мегабайт"],
    correct_answer: "C",
  },
  {
    id: 12,
    question: "CPU-г бас юу гэж нэрлэдэг вэ?",
    answers: [
      "A. Төв процессор",
      "B. Санах ой",
      "C. Хадгалах төхөөрөмж",
      "D. Оролтын төхөөрөмж",
    ],
    correct_answer: "A",
  },
  {
    id: 13,
    question: "Хаана өгөгдөл байнга хадгалагддаг вэ?",
    answers: ["A. RAM", "B. Cache", "C. Хатуу диск", "D. CPU"],
    correct_answer: "C",
  },
  {
    id: 14,
    question: "IP хаяг гэж юу вэ?",
    answers: [
      "A. Компьютерийн нэр",
      "B. Компьютерийн сүлжээнд холбогдох хаяг",
      "C. Програмын код",
      "D. Өгөгдлийн төрөл",
    ],
    correct_answer: "B",
  },
  {
    id: 15,
    question: "Өгөгдлийг нууцлан хадгалах процессыг юу гэдэг вэ?",
    answers: [
      "A. Нууц үг үүсгэх",
      "B. Шифрлэлт",
      "C. Хуулбарлах",
      "D. Хуваалцах",
    ],
    correct_answer: "B",
  },
  {
    id: 16,
    question: "Програмчлалын хэлний жишээ аль вэ?",
    answers: ["A. Python", "B. HTML", "C. CSS", "D. XML"],
    correct_answer: "A",
  },
  {
    id: 17,
    question: "Binary тооллын систем хэдэн оронтой вэ?",
    answers: ["A. 8", "B. 2", "C. 10", "D. 16"],
    correct_answer: "B",
  },
  {
    id: 18,
    question: "LAN гэж юу вэ?",
    answers: [
      "A. Дотоод сүлжээ",
      "B. Өргөн хүрээний сүлжээ",
      "C. Интернэт",
      "D. Утасгүй холбоо",
    ],
    correct_answer: "A",
  },
  {
    id: 19,
    question: "WAN гэж юу вэ?",
    answers: [
      "A. Өргөн хүрээний сүлжээ",
      "B. Дотоод сүлжээ",
      "C. Вэб сервер",
      "D. Сүлжээний карт",
    ],
    correct_answer: "A",
  },
  {
    id: 20,
    question: "WWW гэж юуны товчлол вэ?",
    answers: [
      "A. Wide World Web",
      "B. World Wide Web",
      "C. Web Wide World",
      "D. Web World Wide",
    ],
    correct_answer: "B",
  },

  {
    id: 21,
    question: "DNS ямар үүрэгтэй вэ?",
    answers: [
      "A. IP хаягийг домэйн нэртэй холбох",
      "B. Вирус илрүүлэх",
      "C. Мэдээлэл дамжуулах",
      "D. Файлын өргөтгөл тодорхойлох",
    ],
    correct_answer: "A",
  },
  {
    id: 22,
    question: "Компьютерийн оролтын төхөөрөмж аль вэ?",
    answers: ["A. Дэлгэц", "B. Хулгана", "C. Принтер", "D. Чанга яригч"],
    correct_answer: "B",
  },
  {
    id: 23,
    question: "Компьютерийн гаралтын төхөөрөмж аль вэ?",
    answers: ["A. Гарт", "B. Принтер", "C. Хулгана", "D. Клавиатур"],
    correct_answer: "B",
  },
  {
    id: 24,
    question: "Өгөгдлийн төрөлд аль нь хамаарах вэ?",
    answers: ["A. Тоон", "B. Текст", "C. Логик", "D. Дээрх бүгд"],
    correct_answer: "D",
  },
  {
    id: 25,
    question: "Програм хангамж хэдэн төрөл байдаг вэ?",
    answers: [
      "A. Системийн ба хэрэглээний програм",
      "B. График ба текстийн програм",
      "C. Онлайн ба оффлайн програм",
      "D. Сүлжээ ба серверийн програм",
    ],
    correct_answer: "A",
  },

  {
    id: 26,
    question: "Хүний уншиж ойлгох хэл гэж юу вэ?",
    answers: [
      "A. Машин код",
      "B. Ассемблер",
      "C. Өндөр түвшний хэл",
      "D. Бинар",
    ],
    correct_answer: "C",
  },
  {
    id: 27,
    question: "Компилятор ямар үүрэгтэй вэ?",
    answers: [
      "A. Кодыг мөр мөрөөр хөрвүүлэх",
      "B. Кодыг бүхэлд нь хөрвүүлж гүйцэтгэх",
      "C. Кодыг хадгалах",
      "D. Кодыг нууцлах",
    ],
    correct_answer: "B",
  },
  {
    id: 28,
    question: "Интерпретатор ямар үүрэгтэй вэ?",
    answers: [
      "A. Кодыг мөр мөрөөр хөрвүүлж гүйцэтгэх",
      "B. Кодыг бүхэлд нь хөрвүүлэх",
      "C. Кодыг шахах",
      "D. Кодыг хуулах",
    ],
    correct_answer: "A",
  },
  {
    id: 29,
    question: "Алгоритмын шинж чанар юу вэ?",
    answers: [
      "A. Тодорхой, төгсгөлтэй, үр дүнтэй",
      "B. Санамсаргүй, дуусахгүй",
      "C. Хязгааргүй алхамтай",
      "D. Нууцлаг, ойлгомжгүй",
    ],
    correct_answer: "A",
  },
  {
    id: 30,
    question: "Flowchart гэж юу вэ?",
    answers: [
      "A. Програм",
      "B. Алгоритмын урсгалын зураг",
      "C. Өгөгдлийн хүснэгт",
      "D. Сүлжээний зураг",
    ],
    correct_answer: "B",
  },

  {
    id: 31,
    question: "Binary системийн 1011 тоо 10тын системд хэд вэ?",
    answers: ["A. 11", "B. 13", "C. 9", "D. 15"],
    correct_answer: "A",
  },
  {
    id: 32,
    question: "ASCII код юуг илэрхийлдэг вэ?",
    answers: [
      "A. Зураг",
      "B. Текст тэмдэгтүүдийг кодлох",
      "C. Дуу",
      "D. Видео",
    ],
    correct_answer: "B",
  },
  {
    id: 33,
    question: "Алгоритмын алхамыг бичихэд аль аргыг ашиглаж болох вэ?",
    answers: ["A. Псевдокод", "B. Код", "C. Фото зураг", "D. Аудио"],
    correct_answer: "A",
  },
  {
    id: 34,
    question: "Хэрэглэгчийн интерфейс гэж юу вэ?",
    answers: [
      "A. Хүний ба компьютертэй харилцах орчин",
      "B. Програмын код",
      "C. Компьютерийн дотоод төхөөрөмж",
      "D. Сүлжээний протокол",
    ],
    correct_answer: "A",
  },
  {
    id: 35,
    question: "Өгөгдлийн баазын удирдлагын систем аль вэ?",
    answers: ["A. MS Word", "B. MySQL", "C. Photoshop", "D. Excel"],
    correct_answer: "B",
  },

  {
    id: 36,
    question: "Мэдээллийн системийн бүрэлдэхүүн хэсэг юу вэ?",
    answers: [
      "A. Хүмүүс, техник, програм, өгөгдөл",
      "B. Зөвхөн техник",
      "C. Зөвхөн програм",
      "D. Зөвхөн өгөгдөл",
    ],
    correct_answer: "A",
  },
  {
    id: 37,
    question: "Кибер гэмт хэрэг гэж юу вэ?",
    answers: [
      "A. Сүлжээ ашиглан үйлдсэн хууль бус үйлдэл",
      "B. Компьютер тоглоом",
      "C. Интернэт хэрэглээ",
      "D. Вирус устгал",
    ],
    correct_answer: "A",
  },
  {
    id: 38,
    question: "Мэдээллийг алдагдахаас хамгаалах хамгийн түгээмэл арга юу вэ?",
    answers: [
      "A. Файлыг устгах",
      "B. Нөөцлөх",
      "C. Вирус тараах",
      "D. Тасалдуулах",
    ],
    correct_answer: "B",
  },
  {
    id: 39,
    question: "Электрон шуудангийн протокол аль вэ?",
    answers: ["A. SMTP", "B. HTTP", "C. FTP", "D. IP"],
    correct_answer: "A",
  },
  {
    id: 40,
    question: "Cloud үйлчилгээ гэж юу вэ?",
    answers: [
      "A. Интернэтээр өгөгдөл хадгалах, боловсруулах үйлчилгээ",
      "B. Компьютерийн вирус",
      "C. Тоглоомын платформ",
      "D. Офлайн хадгалалт",
    ],
    correct_answer: "A",
  },

  {
    id: 41,
    question: "IPV4 хэдэн битийн хаягтай вэ?",
    answers: ["A. 64", "B. 32", "C. 128", "D. 16"],
    correct_answer: "B",
  },
  {
    id: 42,
    question: "IPV6 хэдэн битийн хаягтай вэ?",
    answers: ["A. 128", "B. 32", "C. 64", "D. 16"],
    correct_answer: "A",
  },
  {
    id: 43,
    question: "Компьютерийн сүлжээний топологи аль вэ?",
    answers: [
      "A. Од, Шугам, Цагираг",
      "B. Дугуй, Шугам, Гурвалжин",
      "C. Вэб, Домэйн, Сервер",
      "D. LAN, WAN, MAN",
    ],
    correct_answer: "A",
  },
  {
    id: 44,
    question: "Алгоритм ямар шинжтэй байх ёстой вэ?",
    answers: [
      "A. Тодорхой, үр дүнтэй, дуусдаг",
      "B. Дуусдаггүй, тодорхой бус",
      "C. Хязгааргүй алхамтай",
      "D. Зөвхөн текстээр илэрхийлдэг",
    ],
    correct_answer: "A",
  },
  {
    id: 45,
    question: "Компьютерийн сүлжээнд өгөгдөл дамжуулах нэгжийг юу гэдэг вэ?",
    answers: ["A. Пакет", "B. Файл", "C. Програм", "D. Код"],
    correct_answer: "A",
  },

  {
    id: 46,
    question: "IP хаягийн ангилалд багтахгүй нь аль вэ?",
    answers: ["A. A", "B. B", "C. C", "D. Z"],
    correct_answer: "D",
  },
  {
    id: 47,
    question: "TCP протокол ямар үүрэгтэй вэ?",
    answers: [
      "A. Холболтыг баталгаажуулан өгөгдөл дамжуулах",
      "B. Зураг шахах",
      "C. Өгөгдлийг шифрлэх",
      "D. Интернэт таслах",
    ],
    correct_answer: "A",
  },
  {
    id: 48,
    question: "UDP протокол ямар онцлогтой вэ?",
    answers: [
      "A. Холболтгүй, хурдан дамжуулалт",
      "B. Холболттой, баталгаатай",
      "C. Шифрлэлттэй",
      "D. Тохиргоотой",
    ],
    correct_answer: "A",
  },
  {
    id: 49,
    question: "Firewall ямар зориулалттай вэ?",
    answers: [
      "A. Сүлжээг хамгаалах",
      "B. Зураг боловсруулах",
      "C. Тоглоом ажиллуулах",
      "D. Дуу тоглуулах",
    ],
    correct_answer: "A",
  },
  {
    id: 50,
    question: "Програм хангамжийн лицензийн төрөл аль вэ?",
    answers: [
      "A. Freeware, Shareware, Commercial",
      "B. RAM, ROM, HDD",
      "C. LAN, WAN, MAN",
      "D. HTTP, FTP, SMTP",
    ],
    correct_answer: "A",
  },
];

export default function Test4() {
  const router = useRouter();

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [locked, setLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const total = Data4.length;
  const q = Data4[currentQ];

  useEffect(() => {
    if (showResult) return;

    if (timeLeft === 0) {
      const next = currentQ + 1;
      if (next >= total) {
        setShowResult(true);
      } else {
        setCurrentQ(next);
        setTimeLeft(30);
      }
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, currentQ, showResult, total]);

  const handleAnswer = (id, selected) => {
    if (locked) return;
    setLocked(true);
    setAnswers((s) => ({ ...s, [id]: selected }));

    const questionObj = Data4.find((x) => x.id === id);
    const isCorrect = selected === questionObj.correct_answer;
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      const next = currentQ + 1;
      if (next >= total) {
        setShowResult(true);
      } else {
        setCurrentQ(next);
        setTimeLeft(30);
      }
      setLocked(false);
    }, 700);
  };

  const finishQuiz = () => {
    setShowResult(true);
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setLocked(false);
    setTimeLeft(30);
  };

  if (showResult) {
    let message = "";
    if (score <= total * 0.3) {
      message = "😅 Дахин хичээгээрэй!";
    } else if (score <= total * 0.7) {
      message = "👏 Сайн байна, дахиад бага зэрэг хичээ!";
    } else {
      message = "🌟 Гайхалтай! Та маш сайн байна!";
    }

    return (
      <div
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJ0ppFfLkCZUmbbZL9w6-rCqQnZqgREu4fw&s')",
        }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"
      >
        <div className="bg-gradient-to-br from-white/95 to-gray-100 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-white/30">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800 drop-shadow">
            🎉 Тест дууслаа!
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6 overflow-hidden shadow-inner">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-green-400 to-teal-500 transition-all duration-700 ease-out"
              style={{ width: `${(score / total) * 100}%` }}
            ></div>
          </div>

          <p className="text-lg mb-2">
            Та авсан оноо:{" "}
            <span className="font-extrabold text-green-600 text-2xl">
              {score}
            </span>{" "}
            / {total}
          </p>

          <p className="text-xl font-semibold text-indigo-600 mb-8">
            {message}
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={restart}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              🔄 Давтлах
            </button>
            <button
              onClick={() => router.push("/testnuu")}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              📂 Ангилал руу очих
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/022/966/113/non_2x/binary-code-digital-cryptocurrency-background-generative-ai-photo.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            <h2>4-р шат</h2>
            Асуулт: {currentQ + 1} / {total}
          </div>
          <div className="text-sm">
            Оноо: <span className="font-semibold text-indigo-600">{score}</span>
          </div>
          <div className="text-sm font-bold text-red-600">
            ⏳ {timeLeft} сек
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {q.id}. {q.question}
        </h3>

        <ul className="space-y-4">
          {q.answers.map((ans, idx) => {
            const optionLetter = ans.trim().charAt(0);
            const selected = answers[q.id];
            const isSelected = selected === optionLetter;
            const isCorrect = q.correct_answer === optionLetter;

            let bgClass =
              "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800";
            if (isSelected) {
              if (isCorrect) {
                bgClass =
                  "bg-gradient-to-r from-green-400 to-green-600 text-white";
              } else {
                bgClass = "bg-gradient-to-r from-red-400 to-red-600 text-white";
              }
            }

            return (
              <li key={idx}>
                <button
                  onClick={() => handleAnswer(q.id, optionLetter)}
                  disabled={locked || !!selected}
                  className={`w-full text-left p-4 rounded-xl font-medium shadow transition transform hover:scale-[1.02] ${bgClass}`}
                >
                  {ans}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
          <div>
            Хариулсан:{" "}
            <span className="font-semibold text-gray-800">
              {Object.keys(answers).length}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                const next = currentQ + 1;
                if (next >= total) setShowResult(true);
                else {
                  setCurrentQ(next);
                  setTimeLeft(30); // Алгасах үед таймер дахин эхлэнэ
                }
              }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow hover:from-yellow-500 hover:to-orange-600"
            >
              Алгасах
            </button>
            <button
              onClick={finishQuiz}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white shadow hover:from-red-600 hover:to-pink-700"
            >
              Дуусгах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
