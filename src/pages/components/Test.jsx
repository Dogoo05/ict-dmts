"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const datashu = [
  {
    id: 1,
    question: "Компьютер гэдэг юу вэ?",
    answers: [
      "A. Хүнсний бүтээгдэхүүн",
      "B. Мэдээллийг боловсруулах, хадгалах, дамжуулах төхөөрөмж",
      "C. Тээврийн хэрэгсэл",
      "D. Уурын зуух",
    ],
    correct_answer: "B",
  },
  {
    id: 2,
    question: "Компьютерийн үндсэн хэсгүүдэд ямар зүйл багтдаг вэ?",
    answers: [
      "A. Зай, шавар, цавуу",
      "B. Процессор, санах ой, хадгалах төхөөрөмж",
      "C. Утаа, гал, ус",
      "D. Гэрэл, сүүдэр, өнгө",
    ],
    correct_answer: "B",
  },
  {
    id: 3,
    question: "Клавиатур нь ямар зориулалттай төхөөрөмж вэ?",
    answers: [
      "A. Мэдээлэл хэвлэх",
      "B. Мэдээлэл оруулах (жишээ нь тэмдэгт бичих)",
      "C. Мэдээллийг дэлгэцэнд харуулах",
      "D. Мэдээллийг хадгалах",
    ],
    correct_answer: "B",
  },
  {
    id: 4,
    question: "Монитор (дэлгэц) ямар төрлийн төхөөрөмж вэ?",
    answers: [
      "A. Оруулах төхөөрөмж",
      "B. Гүйцэтгэх төхөөрөмж",
      "C. Гарах (output) төхөөрөмж",
      "D. Хадгалах төхөөрөмж",
    ],
    correct_answer: "C",
  },
  {
    id: 5,
    question: "Программ хангамж (software) гэж юу вэ?",
    answers: [
      "A. Компьютерийн физик эд анги",
      "B. Компьютерт ажиллах заавар, програмууд",
      "C. Цахилгаан тэжээл",
      "D. Дэлгэцийн хамгаалалт",
    ],
    correct_answer: "B",
  },
  {
    id: 6,
    question: "Үндсэн (операцийн) системийн зорилго нь юу вэ?",
    answers: [
      "A. Интернетээр дүрс үзүүлэх",
      "B. Компьютерийн тоног төхөөрөмжийг удирдах, програм ажиллуулах",
      "C. Текст бичих зөвшөөрөхгүй",
      "D. Цаасан баримт хэвлэх",
    ],
    correct_answer: "B",
  },
  {
    id: 7,
    question: "Файлын өргөтгөл .txt ямар төрлийн файлыг илэрхийлдэг вэ?",
    answers: [
      "A. Бичгийн энгийн файл",
      "B. Зурган файл",
      "C. Аудио файл",
      "D. Видео файл",
    ],
    correct_answer: "A",
  },
  {
    id: 8,
    question: "Интернетэд холбогддог төхөөрөмжийг юу гэж нэрлэдэг вэ?",
    answers: [
      "A. Микрофон",
      "B. Сервер",
      "C. Клиент (жишээ нь компьютер)",
      "D. Принтер",
    ],
    correct_answer: "C",
  },
  {
    id: 9,
    question: "И-мэйл (email) нь юунд ашиглагддаг вэ?",
    answers: [
      "A. Хүн таних",
      "B. Цахим шуудан илгээх, хүлээн авах",
      "C. Хэн нэгний компьютер унтраах",
      "D. Програм код бичих",
    ],
    correct_answer: "B",
  },
  {
    id: 10,
    question: "Файлыг компьютерт хадгалахдаа хамгийн зөв практик нь аль вэ?",
    answers: [
      "A. Нэр өгөхгүйгээр олон файл нэг фолдерт хийх",
      "B. Тодорхой, утга агуулсан нэр өгч фолдерт ангилах",
      "C. Бүгдийг ширээн дээр байрлуулах",
      "D. Файлыг устгах",
    ],
    correct_answer: "B",
  },
  {
    id: 11,
    question: "Вирус гэж юу вэ?",
    answers: [
      "A. Тоглоомын нэр",
      "B. Компьютерийн програмд нөлөөлж гэмтээдэг хортой програм",
      "C. Компьютерийн бренд",
      "D. Принтерийн төрөл",
    ],
    correct_answer: "B",
  },
  {
    id: 12,
    question: "Антивирус програм юунд хэрэгтэй вэ?",
    answers: [
      "A. Зураг үүсгэх",
      "B. Вирус илрүүлэх, устгах",
      "C. Мультимедиа тоглуулах",
      "D. Интернет хурдыг сайжруулах",
    ],
    correct_answer: "B",
  },
  {
    id: 13,
    question: "Хэвлэх (print) төхөөрөмжийн нэр юу вэ?",
    answers: ["A. Скeннер", "B. Принтер", "C. Мыш", "D. Монитор"],
    correct_answer: "B",
  },
  {
    id: 14,
    question: "Сканнерийг юунд ашигладаг вэ?",
    answers: [
      "A. Цахим зураг, баримтыг тоон хэлбэрт оруулах",
      "B. Дуу бичих",
      "C. Програм суулгах",
      "D. Терминал нээх",
    ],
    correct_answer: "A",
  },
  {
    id: 15,
    question: "Интернет хайлт хийх шилдэг хэрэгсэл юу гэж нэрлэгддэг вэ?",
    answers: [
      "A. Үндсэн систем",
      "B. Вэб хөтөч (web browser)",
      "C. Принтер",
      "D. Клавиатур",
    ],
    correct_answer: "B",
  },
  {
    id: 16,
    question: "Вэб хөтөчүүдийн жишээ аль нь вэ?",
    answers: [
      "A. Microsoft Word",
      "B. Google Chrome, Mozilla Firefox",
      "C. Excel, PowerPoint",
      "D. Photoshop",
    ],
    correct_answer: "B",
  },
  {
    id: 17,
    question: "Интернет аюулгүй хэрэглээ гэж юуг хэлдэг вэ?",
    answers: [
      "A. Бүх нууцыг хуваалцах",
      "B. Нууц үг, хувийн мэдээллийг хамгаалах, сэжигтэй холбоос руу битгий орох",
      "C. Нууц үг үүсгэхгүй байх",
      "D. Тусламжгүйгээр хэн ч руу мессеж илгээх",
    ],
    correct_answer: "B",
  },
  {
    id: 18,
    question:
      "Файлыг хуулбарлах (copy) болон зөөх (move) үйлдэл хоорондоо юугаараа ялгаатай вэ?",
    answers: [
      "A. Хоёр үйлдэл ижил",
      "B. Copy нь эх файлыг хадгалж, Move нь эх файлыг шинэ байршилд шилжүүлж эх байршилд байхгүй болгодог",
      "C. Move нь файл устгадаг",
      "D. Copy нь файл формат өөрчилдөг",
    ],
    correct_answer: "B",
  },
  {
    id: 19,
    question: "Файлын нээхдээ хэрэглэдэг програмыг юу гэж нэрлэдэг вэ?",
    answers: [
      "A. Файлын менежер",
      "B. Програм (application)",
      "C. Кабель",
      "D. Цахилгаан",
    ],
    correct_answer: "B",
  },
  {
    id: 20,
    question: "Сүлжээ (network) гэж юу вэ?",
    answers: [
      "A. Олон компьютеруудыг хооронд нь холбосон систем",
      "B. Нэг компьютер дээр ажилладаг програм",
      "C. Принтерийн төрөл",
      "D. Цахим шуудан биш",
    ],
    correct_answer: "A",
  },
  {
    id: 21,
    question: "Wi-Fi техникээр ямар үүрэгтэй вэ?",
    answers: [
      "A. Сүлжээг утсаар дамжуулах",
      "B. Утасгүйгээр интернетэд холбогдох боломж олгох",
      "C. Зургийг хэвлэх",
      "D. Файлыг шахах",
    ],
    correct_answer: "B",
  },
  {
    id: 22,
    question: "USB флеш драйв (flash drive) ямар зориулалттай вэ?",
    answers: [
      "A. Программ суулгах",
      "B. Мэдээлэл дамжуулах, хадгалах",
      "C. Дэлгэц тодруулах",
      "D. Аудио тоглуулах",
    ],
    correct_answer: "B",
  },
  {
    id: 23,
    question: "Save үйлдэл ямар үүрэгтэй вэ?",
    answers: [
      "A. Файлыг устгах",
      "B. Файлыг одоогийн байдалд хадгалах",
      "C. Файлыг илгээх",
      "D. Файлын нэрийг өөрчлөх",
    ],
    correct_answer: "B",
  },
  {
    id: 24,
    question: "Copy‑Paste гэж юуг хэлдэг вэ?",
    answers: [
      "A. Файлыг устгах хэлбэр",
      "B. Текст буюу объектын хуулбар үүсгэж тухайн байршилд наах үйлдэл",
      "C. Файлыг шахах",
      "D. Програм татах",
    ],
    correct_answer: "B",
  },
  {
    id: 25,
    question: "Интернет хаяг (URL) гэж юуг заадаг вэ?",
    answers: [
      "A. Файлын төрөл",
      "B. Вэб хуудасны байршил буюу холбоос",
      "C. Компьютерийн нэр",
      "D. Програмын хувилбар",
    ],
    correct_answer: "B",
  },
  {
    id: 26,
    question: "Cloud буюу үүлэн тооцоолуур гэж юу вэ?",
    answers: [
      "A. Тэнгэрийн үүл",
      "B. Интернетээр дамжуулан сервер дээр мэдээлэл хадгалах үйлчилгээ",
      "C. Компьютерийн хувилбар",
      "D. Програмчлагдсан тоглоом",
    ],
    correct_answer: "B",
  },
  {
    id: 27,
    question: "Файлын форматын .jpg нь ямар төрлийн файлыг заадаг вэ?",
    answers: [
      "A. Текст файл",
      "B. Зураг (Raster image)",
      "C. Аудио файл",
      "D. Хүснэгт файл",
    ],
    correct_answer: "B",
  },
  {
    id: 28,
    question: "Компьютерийн санах ой (RAM) юунд нөлөөлдөг вэ?",
    answers: [
      "A. Дэлгэцийн хэмжээ",
      "B. Програм нэгэн зэрэг хурдан ажиллах чадварт",
      "C. Принтерийн хурд",
      "D. USB портын тоо",
    ],
    correct_answer: "B",
  },
  {
    id: 29,
    question: "Back up хийх нь ямар ач холбогдолтой вэ?",
    answers: [
      "A. Файлыг илгээхгүй байх",
      "B. Мэдээллийг алдагдал, гэмтлээс хамгаалж нөөцлөх",
      "C. Файлыг устгах",
      "D. Компьютерыг унтраах",
    ],
    correct_answer: "B",
  },
  {
    id: 30,
    question: "Програмчлалын ерөнхий ойлголт юу вэ?",
    answers: [
      "A. Компьютер худалдах",
      "B. Компьютерийг заавраар удирдахад зориулсан код бичих үйл явц",
      "C. Монитор засварлах",
      "D. Файлыг нээх",
    ],
    correct_answer: "B",
  },
  {
    id: 31,
    question: "HTML ямар зориулалттай вэ?",
    answers: [
      "A. Вэб хуудас бүтээгч тэмдэглэлийн хэл",
      "B. Програмчлалын өндөр түвшний хэл",
      "C. Зураг засварлах програм",
      "D. Мультимедиа тоглуулагч",
    ],
    correct_answer: "A",
  },
  {
    id: 32,
    question: "Search engine гэдэг нь юу вэ?",
    answers: [
      "A. Файлыг шахах хэрэгсэл",
      "B. Вэб дээр мэдээллийг хайж олох үйлчилгээ (жишээ: Google)",
      "C. Програм суулгах апп",
      "D. Принтерийн драйвер",
    ],
    correct_answer: "B",
  },
  {
    id: 33,
    question: "Phishing гэдэг аюул нь юуны төлөө гэж тооцогддог вэ?",
    answers: [
      "A. Компьютерний хурд өсгөх",
      "B. Хүний хувийн мэдээллийг залилан мэхлэн авахаар оролддог үйлдэл",
      "C. Файлыг нөөцлөх",
      "D. Вирус устгах арга",
    ],
    correct_answer: "B",
  },
  {
    id: 34,
    question: "Компьютерийн өгөгдлийг бит (bit) гэж яаж илэрхийлдэг вэ?",
    answers: [
      "A. 0 болон 1 гэсэн хоёр утга",
      "B. 2 болон 3",
      "C. A болон B",
      "D. Текст ба тоо",
    ],
    correct_answer: "A",
  },
  {
    id: 35,
    question: "Word процессор гэж юуг хэлэх вэ?",
    answers: [
      "A. Текст бичих, засварлах програм",
      "B. Зураг зурдаг програм",
      "C. Видео тоглуулагч",
      "D. Интернэт хөтөч",
    ],
    correct_answer: "A",
  },
  {
    id: 36,
    question: "HDD ба SSD ямар ялгаатай вэ?",
    answers: [
      "A. HDD нь цахилгаан хэрэглэдэггүй",
      "B. SSD нь хөдөлгөөнт хэсэггүй учир хурдан, тэсвэртэй",
      "C. HDD нь интернет юм",
      "D. Тэд ижилхэн",
    ],
    correct_answer: "B",
  },
  {
    id: 37,
    question: "Firewall буюу гал хамгаалагчийн үүрэг юу вэ?",
    answers: [
      "A. Гэрлийг хязгаарлах",
      "B. Сүлжээний аюултай холболт, хакерын оролдлогуудыг хаах",
      "C. Файлыг устгах",
      "D. Програмыг хурдан болгох",
    ],
    correct_answer: "B",
  },
  {
    id: 38,
    question: "Username ба Password юунд хэрэгтэй вэ?",
    answers: [
      "A. Компьютер засахад",
      "B. Хувийн данс руу нэвтрэхдээ таних, хамгаалах зорилгоор",
      "C. Принтер тохируулахад",
      "D. Файлыг нээхэд туслахгүй",
    ],
    correct_answer: "B",
  },
  {
    id: 39,
    question: "URL эхэнд байдаг https нь юуны илрэл вэ?",
    answers: [
      "A. Вэб хуудас аюулгүй байгаа, холболт нь шифрлэгдсэн",
      "B. Файлыг шахсан",
      "C. Зураг хадгалах төрөл",
      "D. Програмын нэр",
    ],
    correct_answer: "A",
  },
  {
    id: 40,
    question: "Компьютерийн 'desktop' гэдэг нь юу вэ?",
    answers: [
      "A. Хатуу дискний төрөл",
      "B. Хэрэглэгчийн дэлгэц дээрх анхны орчин, богино холбоосууд байрлах хэсэг",
      "C. Клавиатурын товч",
      "D. Принтер",
    ],
    correct_answer: "B",
  },
  {
    id: 41,
    question: "Файлын фолдер гэж юуг хэлэх вэ?",
    answers: [
      "A. Файлыг устгах хэрэгсэл",
      "B. Файлуудыг ангилах, багцлах зориулалттай логик хадгалах орон",
      "C. Интернэт хөтөч",
      "D. Мониторын тохиргоо",
    ],
    correct_answer: "B",
  },
  {
    id: 42,
    question: "Ctrl + C комбинейшн ямар үйлдэл гүйцэтгэдэг вэ?",
    answers: [
      "A. Файлыг устгах",
      "B. Сэдэв солих",
      "C. Хуулбарлах (copy) үйлдэл хийх",
      "D. Файлыг хадгалах",
    ],
    correct_answer: "C",
  },
  {
    id: 43,
    question: "Ctrl + V комбинейшн ямар үйлдэл гүйцэтгэдэг вэ?",
    answers: [
      "A. Наах (paste) үйлдэл хийх",
      "B. Хадгалах",
      "C. Хуулбарлах",
      "D. Бүхийг сонгох",
    ],
    correct_answer: "A",
  },
  {
    id: 44,
    question:
      "Компьютерийн урд талд байрлах жижиг гэрэлтэй чип (USB порт) юугаар ашиглагддаг вэ?",
    answers: [
      "A. Дуугаар удирдах",
      "B. Гадны төхөөрөмж (флеш, гадаад диск) холбох",
      "C. Програмчлах",
      "D. Монитор тохируулах",
    ],
    correct_answer: "B",
  },
  {
    id: 45,
    question: "Save As үйлдэл нь ямар үед ашиглагддаг вэ?",
    answers: [
      "A. Файлыг шинэ нэртэй эсвэл өөр байрлалд хадгалах үед",
      "B. Файлыг устгах үед",
      "C. Файлыг нээх үед",
      "D. Файлыг шууд илгээх үед",
    ],
    correct_answer: "A",
  },
  {
    id: 46,
    question:
      "Интернетэд ашигладаг домейн нэрийн төгсгөл .mn нь аль улстай уялдаатай вэ?",
    answers: ["A. Монгол улс", "B. Герман", "C. АНУ", "D. Япон"],
    correct_answer: "A",
  },
  {
    id: 47,
    question: "Attachment гэж вэб мэйлд яаж ойлгогддог вэ?",
    answers: [
      "A. Захидлын гарын үсэг",
      "B. Мэйлд хавсаргасан файл (зураг, баримт)",
      "C. Мэйл устгах",
      "D. Мэйл бүртгэх",
    ],
    correct_answer: "B",
  },
  {
    id: 48,
    question:
      "Bookmark буюу дуртай вэб хуудсыг тэмдэглэх үйлдлийг юунд ашигладаг вэ?",
    answers: [
      "A. Вэб хуудас устгах",
      "B. Дараа дахин ороход хялбар оруулахын тулд хуудасны холбоосыг хадгалах",
      "C. Файлыг шахах",
      "D. Програмчлагдах",
    ],
    correct_answer: "B",
  },
  {
    id: 49,
    question: "Компьютерийн принтерийн өнгөний төрлийг юу гэж нэрлэдэг вэ?",
    answers: [
      "A. Монохром (хар/цагаан) ба өнгөт (color)",
      "B. Том болон жижиг",
      "C. Текст ба зураг",
      "D. Хатуу ба зөөлөн",
    ],
    correct_answer: "A",
  },
  {
    id: 50,
    question: "Интернет дээрх мэдээллийг үнэн зөв эсэхийг хэрхэн шалгах вэ?",
    answers: [
      "A. Зөвхөн нэг эх сурвалжаас итгэх",
      "B. Олон эх сурвалжаар харьцуулж, найдвартай сайтуудаас шалгах",
      "C. Үнэхээр сайхан харагдвал үнэн",
      "D. Бусдын сэтгэгдэл уншихгүй байх",
    ],
    correct_answer: "B",
  },
];

export default function Test() {
  const router = useRouter();

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [locked, setLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const total = datashu.length;
  const q = datashu[currentQ];

  useEffect(() => {
    if (showResult) return;
    if (timeLeft === 0) {
      goNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showResult]);

  const goNext = () => {
    const next = currentQ + 1;
    if (next >= total) {
      setShowResult(true);
    } else {
      setCurrentQ(next);
      setTimeLeft(30);
      setLocked(false);
    }
  };

  const handleAnswer = (id, selected) => {
    if (locked) return;
    setLocked(true);
    setAnswers((s) => ({ ...s, [id]: selected }));

    const questionObj = datashu.find((x) => x.id === id);
    const isCorrect = selected === questionObj.correct_answer;
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(goNext, 700);
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
          "url('https://content.ikon.mn/news/2019/7/26/2b7c45_information-technology_x974.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            <h2>1-р шат</h2>
            Асуулт: {currentQ + 1} / {total}
          </div>
          <div className="text-sm">
            Оноо: <span className="font-semibold text-indigo-600">{score}</span>
          </div>
          <div className="text-sm font-bold text-red-600">⏱ {timeLeft} сек</div>
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
              onClick={goNext}
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
