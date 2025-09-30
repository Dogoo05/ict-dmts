"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Асуултуудын өгөгдөл
const DAta = [
  {
    id: 1,
    question: "Компьютерийн үндсэн гурван хэсгийг нэрлэ?",
    answers: [
      "A. Хатуу диск, дэлгэц, принтер",
      "B. Процессор, санах ой (RAM), хадгалах төхөөрөмж",
      "C. Товчлуур, хулгана, спикер",
      "D. Модем, маршрутизатор, кабель",
    ],
    correct_answer: "B",
  },
  {
    id: 2,
    question: "Программ хангамж (software) гэж юу вэ?",
    answers: [
      "A. Компьютерийн физик эд анги",
      "B. Компьютерийг ажиллуулах программ, програмчлал",
      "C. Зураг болон принтер",
      "D. Дэлгэцний хамгаалалт",
    ],
    correct_answer: "B",
  },
  {
    id: 3,
    question: "Интернетэд хандахын тулд шаардлагатай төхөөрөмж юу вэ?",
    answers: [
      "A. Хэт хүчирхэн процессор",
      "B. Сүлжээний холболт (жишээ: модем, маршрутизатор) ба сүлжээ",
      "C. Олон принтер",
      "D. Том хэмжээний принтер",
    ],
    correct_answer: "B",
  },
  {
    id: 4,
    question: "Microsoft Word програм ямар төрлийн програм вэ?",
    answers: [
      "A. Текст боловсруулах програм",
      "B. Зураг боловсруулах програм",
      "C. Дээрмийн програм",
      "D. Видео тоглуулах програм",
    ],
    correct_answer: "A",
  },
  {
    id: 5,
    question:
      "Файл хадгалах үед файлын өргөтгөл (.docx, .xlsx г.м) нь юу заадаг вэ?",
    answers: [
      "A. Файлын өнгө",
      "B. Файлын төрөл ба түүнтэй холбоотой програм",
      "C. Файлын эзний нэр",
      "D. Файлын хэмжээ",
    ],
    correct_answer: "B",
  },
  {
    id: 6,
    question:
      "Хэрэв таны компьютер маш удаан ачааллаж байвал эхний шалгах зүйл юу вэ?",
    answers: [
      "A. Вирусгүй эсэхийг шалгах",
      "B. Принтерийн төгсөлтийг шалгах",
      "C. USB холболтыг салгах",
      "D. Дэлгэцний гэрлийг нэмэх",
    ],
    correct_answer: "A",
  },
  {
    id: 7,
    question: "HTML нь вэб хуудасны ямар хэсгийг тодорхойлно?",
    answers: [
      "A. Вэб хуудасны бүтэц (мөр, хэсэг, холбоос)",
      "B. Хуудасны өнгө зөвхөн",
      "C. Серверийн тохиргоо",
      "D. Принтерт хэвлэх тохиргоо",
    ],
    correct_answer: "A",
  },
  {
    id: 8,
    question: "Спредшит програм (жишээ: Excel) дээр `SUM` функц юу хийдэг вэ?",
    answers: [
      "A. Мэдээг задлах",
      "B. Элементийн нийлбэрийг тооцох",
      "C. График үүсгэх",
      "D. Нөхцлийг шалгах",
    ],
    correct_answer: "B",
  },
  {
    id: 9,
    question: "Програмчлалд хувьсагч (variable) гэж юу вэ?",
    answers: [
      "A. График үүсгэгч",
      "B. Мэдэгдэж буй утгыг хадгалах нэрлэгдсэн сав",
      "C. Принтерийн тохиргоо",
      "D. Интернэтийн хурд",
    ],
    correct_answer: "B",
  },
  {
    id: 10,
    question: "Алгоритм гэж юу вэ?",
    answers: [
      "A. Нэг программын нэр",
      "B. Асуудлыг шийдвэрлэх дараалсан заавар",
      "C. Компьютерийн физик хэсэг",
      "D. Файл хадгалах формат",
    ],
    correct_answer: "B",
  },
  {
    id: 11,
    question: "Компьютерийн RAM санах ой ямар зорилготой вэ?",
    answers: [
      "A. Байнгийн хадгалах (long-term) мэдээлэл хадгалах",
      "B. Түр зуурын (ажиллах явцад) мэдээлэл хадгалах, програм ажиллуулахад ашиглах",
      "C. Вирус устгах",
      "D. Принтерт илгээх",
    ],
    correct_answer: "B",
  },
  {
    id: 12,
    question: "Файлын нууцлал (permission) ямар зорилготой вэ?",
    answers: [
      "A. Файлыг зураг болгон хөрвүүлэх",
      "B. Хэн файлыг үзэж, засаж болохыг хянах",
      "C. Файлын өнгийг өөрчлөх",
      "D. Файлыг хуулах",
    ],
    correct_answer: "B",
  },
  {
    id: 13,
    question:
      "Интернет дээр итгэж болох мэдээллийг олж авахын тулд хамгийн сайн арга нь юу вэ?",
    answers: [
      "A. Нэг блогт итгэх",
      "B. Олон эх сурвалжээс шалгах ба итгэмжит сайтууд ашиглах",
      "C. Зөвхөн форумд тулгуурлах",
      "D. Нэг хүнээс асууж өгөх",
    ],
    correct_answer: "B",
  },
  {
    id: 14,
    question: "Файл шифрлэх (encrypt) хийснээр юу болно?",
    answers: [
      "A. Файлыг зураг болгоно",
      "B. Файлын материалыг кодлож, зөв түлхүүргүйгээр уншиж болохгүй болгоно",
      "C. Файлыг хурдан болгох",
      "D. Файлыг олон хэл дээр хөрвүүлэх",
    ],
    correct_answer: "B",
  },
  {
    id: 15,
    question: "Вирус ба хортой програм хоёрыг ялгаж тайлбарла:",
    answers: [
      "A. Вирус бол файлд нэвтрэн хуулбарлагддаг, хортой програм нь аливаа хорт үйлдэл хийдэг програм",
      "B. Хоёул ижил зүйл бөгөөд ялгаа байхгүй",
      "C. Вирус зөвхөн принтерт нөлөөлдөг",
      "D. Хортой програм зөвхөн интернетгүй үед ажилладаг",
    ],
    correct_answer: "A",
  },
  {
    id: 16,
    question: "Дараах ямар нь URL-д (вэб хаяг) харгалдах элемент вэ?",
    answers: ["A. http://", "B. .exe", "C. .docx", "D. jpg"],
    correct_answer: "A",
  },
  {
    id: 17,
    question: "Энгийн логик операторууд: AND, OR, NOT ямар зориулалттай вэ?",
    answers: [
      "A. Массив үүсгэх",
      "B. Нөхцлийн логик шалгалтуудыг хийх",
      "C. Файлыг устгах",
      "D. Түлхүүр үг хайх",
    ],
    correct_answer: "B",
  },
  {
    id: 18,
    question:
      "Дараах төхөөрөмжүүдээс 'гаралтын төхөөрөмж' (output device) аль вэ?",
    answers: [
      "A. Хулгана (mouse)",
      "B. Дэлгэц (monitor)",
      "C. Товчлуур (keyboard)",
      "D. Микрофон (microphone)",
    ],
    correct_answer: "B",
  },
  {
    id: 19,
    question: "Wi-Fi гэж юу вэ?",
    answers: [
      "A. Утасгүй сүлжээний стандарт",
      "B. Компьютерийн нэр",
      "C. Принтерийн төрөл",
      "D. Файлын формат",
    ],
    correct_answer: "A",
  },
  {
    id: 20,
    question: "Хэрэв та имэйл явуулахдаа 'CC' гэж оруулбал ямар эффект байна?",
    answers: [
      "A. Файлыг нууцлах",
      "B. Имэйлийг хэн нэгэнд өөртэй адил хуулах (копи) хэлбэрээр илгээх",
      "C. Имэйлийг устгах",
      "D. Имэйлийг шифрлэх",
    ],
    correct_answer: "B",
  },
  {
    id: 21,
    question: "Файлыг нөөцлөх (backup) гэдэг нь юу вэ?",
    answers: [
      "A. Файлыг устгах",
      "B. Файлын хуулбарыг аюулгүй газар хадгалах",
      "C. Файлыг шифрлэхгүйгээр илгээх",
      "D. Файлыг жижиглэх",
    ],
    correct_answer: "B",
  },
  {
    id: 22,
    question:
      "Хост (host) болон клиент (client) гэж сүлжээнд ямар үүрэгтэй вэ?",
    answers: [
      "A. Хост өгөгдөл үйлчилгээ үзүүлдэг, клиент үйлчилгээ авдаг",
      "B. Хоёул ижил үүрэгтэй",
      "C. Клиент зөвхөн принтер юм",
      "D. Хост зөвхөн хулгана юм",
    ],
    correct_answer: "A",
  },
  {
    id: 23,
    question:
      "Презентаци (PowerPoint) хийхдээ тайлбар нэмэхэд хамгийн тохиромжтой элемент юу вэ?",
    answers: [
      "A. График, зураг, текст",
      "B. Вирус",
      "C. Үгийн тоог өсгөх",
      "D. Нүдэмлэг",
    ],
    correct_answer: "A",
  },
  {
    id: 24,
    question: "Хэрэв таны нууц үг сул байвал яах вэ?",
    answers: [
      "A. Түүнтэй адил нууц үг ашиглах",
      "B. Хүчтэй, урт нууц үг сонгож, хоёр хүчинт баталгаажуулалт ашиглах",
      "C. Нууц үгийг хэнд ч хэлэх",
      "D. Нууц үгийг бичиж ширээн дээрээ тавих",
    ],
    correct_answer: "B",
  },
  {
    id: 25,
    question: "Дээд зэргийн (cloud) тооцоолол буюу cloud computing гэж юу вэ?",
    answers: [
      "A. Компьютерийг үүлэн дээр байрлуулж явуулах",
      "B. Интернетээр дамжуулан сервер, хадгалах, програм тэргүүтнийг үйлчилгээ хэлбэрээр ашиглах",
      "C. Файлыг муухай болгох",
      "D. Принтерийн төрөл",
    ],
    correct_answer: "B",
  },
  {
    id: 26,
    question: "Дараах аль нь өгөгдлийн бааз (database) ашиглах жишээ вэ?",
    answers: [
      "A. Номын санд номын мэдээллийг цэгцлэх",
      "B. Зураг зурсан",
      "C. Дэлгэцийн гэрлийг өөрчлөх",
      "D. Файлын фонтыг өөрчлөх",
    ],
    correct_answer: "A",
  },
  {
    id: 27,
    question: "Компьютерийн процессор (CPU) ямар үүрэгтэй вэ?",
    answers: [
      "A. Хадгалах",
      "B. Заавар гүйцэтгэж тооцоолол хийх гол бүрэлдэхүүн",
      "C. Принтерийг ажиллуулах",
      "D. Дэлгэцийг цэвэрлэх",
    ],
    correct_answer: "B",
  },
  {
    id: 28,
    question: "Файлын форматуудын аль нь зураг файлын форматын жишээ вэ?",
    answers: ["A. .mp3", "B. .jpg", "C. .docx", "D. .xls"],
    correct_answer: "B",
  },
  {
    id: 29,
    question:
      'Интернет хайлт хийхдээ ""trustworthy"" эх сурвалжийг яаж таних вэ?',
    answers: [
      "A. Домэйний төгсгөл (.edu, .gov) болон олон эх сурвалжаас бататгах",
      "B. Зөвхөн нэг сайтын мэдээлэлд итгэх",
      "C. Тухайн сайт дээр зар сурталчилгаа байгаа эсэхийг харах",
      "D. Зөвхөн зурагтай сайт руу итгэх",
    ],
    correct_answer: "A",
  },
  {
    id: 30,
    question: "Програмчлалын нөхцөл (if statement) ямар зорилготой вэ?",
    answers: [
      "A. Үйлдлийг нөхцлийн дагуу шийдэх (хэрвээ нөхцөл биелвэл ...)",
      "B. Файлыг устгах",
      "C. Зураг үүсгэх",
      "D. Хайлт хийх",
    ],
    correct_answer: "A",
  },
  {
    id: 31,
    question: "Бит (bit) болон байт (byte) гэж юу вэ?",
    answers: [
      "A. Бит нь мэдээллийн хамгийн жижиг нэгж (0 эсвэл 1), байт нь 8 бит",
      "B. Бит 1000 байттай тэнцэнэ",
      "C. Байт нь харааны нэгж",
      "D. Энэ хоёр нь ижил утгатай",
    ],
    correct_answer: "A",
  },
  {
    id: 32,
    question:
      "Дараах ямар нь өгөгдлийг шүүж (filter) ашиглан сонгон авдаг програмын хэсэг вэ?",
    answers: [
      "A. Спредшит (жишээ: Excel)",
      "B. Видео тоглуулагч",
      "C. Дэлгэцийн хамгаалалт",
      "D. Принтер драйвер",
    ],
    correct_answer: "A",
  },
  {
    id: 33,
    question: 'Файлыг "zip" хэлбэрээр шахах (compress) гол шалтгаан нь юу вэ?',
    answers: [
      "A. Файлыг устгах",
      "B. Хэмжээг багасгаж илгээх, хадгалах боломжтой болгох",
      "C. Файлыг зураг болгох",
      "D. Файлыг шифрлэхгүйгээр илгээх",
    ],
    correct_answer: "B",
  },
  {
    id: 34,
    question: "Bluetooth технологи юу хийхэд хэрэглэдэг вэ?",
    answers: [
      "A. Утасгүй ойрхон холболт (жишээ: чихэвч, хос төхөөрөмж холбох)",
      "B. Интернэтийн хурдыг нэмэгдүүлэх",
      "C. Компьютер хурдыг бууруулах",
      "D. Принтерийг сүлжээнд холбохгүйгээр ашиглах",
    ],
    correct_answer: "A",
  },
  {
    id: 35,
    question: "Хэрвээ вэб хуудасны ачаалалт удаан байвал эхлээд юу шалгах вэ?",
    answers: [
      "A. Компьютерийн өнгө",
      "B. Интернет холболт ба сүлжээний дохио",
      "C. Принтерийн драйвер",
      "D. Файлын нэр",
    ],
    correct_answer: "B",
  },
  {
    id: 36,
    question: "Дараах аль нь программын бүтцийн элемент биш вэ?",
    answers: [
      "A. Функц/туслах процедур",
      "B. Давталт (loop)",
      "C. Хувьсагч (variable)",
      "D. Принтер драйвер",
    ],
    correct_answer: "D",
  },
  {
    id: 37,
    question: "Цахим гэмт хэрэг (cyberbullying) гэж юу вэ?",
    answers: [
      "A. Гэмт хэрэггүй үйл явдал",
      "B. Интернэт ашиглан хүн доромжлох, дарамтлах үйлдэл",
      "C. Компьютерийг цэвэрлэх",
      "D. Хэрэглэгчийн нэр өөрчлөх",
    ],
    correct_answer: "B",
  },
  {
    id: 38,
    question:
      "Дараах өгөгдлийн төрөлүүдээс ямар нь 'текст' төрөлд хамаарах вэ?",
    answers: ["A. PNG", "B. String (мөр)", "C. Boolean", "D. Binary"],
    correct_answer: "B",
  },
  {
    id: 39,
    question: "Вэб хуудасны лавлах файлд (index.html) ямар ач холбогдолтой вэ?",
    answers: [
      "A. Вэб сервер дээр анх ачааллагдах хуудас (мөн үндсэн хуудас)",
      "B. Зөвхөн зураг хадгалах",
      "C. Серверийн нууц үгийг хадгалах",
      "D. Принтерээ тохируулах",
    ],
    correct_answer: "A",
  },
  {
    id: 40,
    question: "USB портоор юу хийх вэ?",
    answers: [
      "A. Санах ойг цэвэрлэх",
      "B. Төхөөрөмж холбох, өгөгдөл дамжуулах",
      "C. Интернэтийн хурдыг ихэсгэх",
      "D. Дэлгэцийг томруулах",
    ],
    correct_answer: "B",
  },
  {
    id: 41,
    question: "QR код нь юуны зориулалттай вэ?",
    answers: [
      "A. Принтерийн түргэн тохиргоо",
      "B. Мэдээллийг (вэб хаяг, текст гэх мэт) түргэн унших боломж олгох хоёр хэмжээст код",
      "C. Компьютерийн вирус",
      "D. Хулганыг хянах",
    ],
    correct_answer: "B",
  },
  {
    id: 42,
    question: "Энгийн байршлын (GPS) систем нь аль технологид тулгуурладаг вэ?",
    answers: [
      "A. Дулааны систем",
      "B. Дагуулын (satellite) дохио",
      "C. Принтерийн холбоо",
      "D. Видео код",
    ],
    correct_answer: "B",
  },
  {
    id: 43,
    question: "Интернет дээр хувийн мэдээллээ хэрхэн хамгаалах вэ?",
    answers: [
      "A. Нууц үг хуваалцах",
      "B. Хувийн мэдээллийг олон нийтэд тавих",
      "C. Хүчтэй нууц үг, хоёр хүчинт баталгаажуулалт ашиглах, хэт хувийн мэдээллийг хуваалцахгүй байх",
      "D. Бүх Wi-Fi-д холбогдох",
    ],
    correct_answer: "C",
  },
  {
    id: 44,
    question: "HTML-д текстийг томруулдаг таг ямар вэ?",
    answers: [
      "A. <small>",
      "B. <big> эсвэл CSS ашиглан font-size өөрчлөх (өрөх)",
      "C. <script>",
      "D. <img>",
    ],
    correct_answer: "B",
  },
  {
    id: 45,
    question: "Дурын програмд латин капсула (backup) хийх нь яагаад чухал вэ?",
    answers: [
      "A. Хурдыг нэмэгдүүлэх",
      "B. Алдагдсан эсвэл эвдэрсэн өгөгдлийг сэргээх боломж олгох учраас",
      "C. Файлын өнгийг өөрчлөх",
      "D. Принтерийг унших",
    ],
    correct_answer: "B",
  },
  {
    id: 46,
    question: "Интернет дээр 'phishing' гэж хэдэн төрөл юм?",
    answers: [
      "A. Ямар ч гэмт хэрэг биш",
      "B. Хулгайн мэдээлэл авах зорилготой мэхлэх имэйл болон сайтууд",
      "C. Файлыг шахах програм",
      "D. Хэт их хайлт хийх",
    ],
    correct_answer: "B",
  },
  {
    id: 47,
    question: "Давталт (loop) гэж программчлалд юуг хэлдэг вэ?",
    answers: [
      "A. Нэг үйлдлийг олон удаа давтан гүйцэтгэх бүтэц",
      "B. Файлыг устгах команд",
      "C. Дэлгэцийг унтраах",
      "D. Вирус устгах",
    ],
    correct_answer: "A",
  },
  {
    id: 48,
    question:
      "Хэрэв та жишээ мэдээлэл үзүүлж байгаа бол диаграмм ашиглахад ямар давуу тал байна вэ?",
    answers: [
      "A. Тоог илүү ойлгомжгүй болгодог",
      "B. Мэдээллийг харагдахаар, харьцуулахад хялбар болгодог",
      "C. Програмыг удаашруулдаг",
      "D. Файлын хэмжээг нэмэгдүүлдэг",
    ],
    correct_answer: "B",
  },
  {
    id: 49,
    question: "Дараах аль нь нээлттэй эх (open source) програмын онцлог вэ?",
    answers: [
      "A. Код нь хаалттай, зөвхөн компанид байдаг",
      "B. Хүмүүс кодыг үзэж, өөрчилж, тарааж болдог",
      "C. Үнэндээ үнэгүй вирус байдаг",
      "D. Зөвхөн нэг хэрэглэгч ашиглах боломжтой",
    ],
    correct_answer: "B",
  },
  {
    id: 50,
    question:
      "Мэдээллийн технологийн ёс зүй (computer ethics) гэж юу заадаг вэ?",
    answers: [
      "A. Компьютер засварлах аргачлал",
      "B. Технологийг ашиглахдаа хууль, ёс зүй, хүний эрхийг хүндэтгэх зарчмууд",
      "C. Програм хангамж худалдан авах зөвлөгөө",
      "D. Төхөөрөмж худалдах стратеги",
    ],
    correct_answer: "B",
  },
];

export default function Test2() {
  const router = useRouter();

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [locked, setLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const total = DAta.length;
  const q = DAta[currentQ];

  // Таймер
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

    const questionObj = DAta.find((x) => x.id === id);
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
            <h2>2-р шат</h2>
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
              bgClass = isCorrect
                ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
                : "bg-gradient-to-r from-red-400 to-red-600 text-white";
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
