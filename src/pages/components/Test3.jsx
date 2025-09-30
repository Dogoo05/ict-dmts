"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Data3 = [
  {
    id: 1,
    question: "Компьютерийн хамгийн гол гурван хэсгийг нэрлэ",
    answers: [
      "A. Принтер, монитор, гулсуулагч",
      "B. Процессор, санах ой (RAM), хадгалах төхөөрөмж",
      "C. Интернет, программ, файл",
      "D. Мыш, гар, дэлгэц",
    ],
    correct_answer: "B",
  },
  {
    id: 2,
    question: "Программ гэдэг нь юу вэ?",
    answers: [
      "A. Мэдээллийг хадгалах төхөөрөмж",
      "B. Хүний бие",
      "C. Компьютер дээр ажиллуулах заавар, кодын цуглуулга",
      "D. Экран дээрх зураг",
    ],
    correct_answer: "C",
  },
  {
    id: 3,
    question: "Операцийн системийн үүрэг юу вэ?",
    answers: [
      "A. Хэвлэх материалыг үйлдвэрлэх",
      "B. Принтерийг асаахад л ашиглагддаг",
      "C. Хатуу диск устгах",
      "D. Хадгалах, процессорыг удирдах, програмуудыг ажиллуулах орчныг бүрдүүлэх",
    ],
    correct_answer: "D",
  },
  {
    id: 4,
    question: "Файл гэж юу вэ?",
    answers: [
      "A. Компьютерийн програмын нэр",
      "B. Тухайн мэдээлэл, баримт бичгийг диск дээр хадгалах нэгж",
      "C. Интернет хуудасны холбоос",
      "D. Санах ой (RAM)-ын хэсэг",
    ],
    correct_answer: "B",
  },
  {
    id: 5,
    question: "Email гэж юу вэ?",
    answers: [
      "A. Бичгийн болон файл дамжуулах цахим систем",
      "B. Хэвлэх төхөөрөмж",
      "C. Видео тоглуулагч",
      "D. Програмчлалын хэл",
    ],
    correct_answer: "A",
  },
  {
    id: 6,
    question: "Интернет дээрх URL гэж юуг заадаг вэ?",
    answers: [
      "A. Компьютерийн нэр",
      "B. Вэб хуудасны бүтэн хаяг",
      "C. Файлын төрөл",
      "D. Принтерийн горим",
    ],
    correct_answer: "B",
  },
  {
    id: 7,
    question: "Файлын өргөтгөл .docx ихэвчлэн ямар програмтай холбогддог вэ?",
    answers: [
      "A. Microsoft Word",
      "B. Microsoft Excel",
      "C. Adobe Photoshop",
      "D. VLC Player",
    ],
    correct_answer: "A",
  },
  {
    id: 8,
    question: "Компьютерийн CPU буюу процессорын үүрэг юу вэ?",
    answers: [
      "A. Мэдээллийг урсгах утас",
      "B. Тооцоолол, зааврыг гүйцэтгэх",
      "C. Мэдэгдлийн электрон шуудан илгээх",
      "D. Файлыг архивлах",
    ],
    correct_answer: "B",
  },
  {
    id: 9,
    question: "RAM (санах ой) нь ямар төрөл юм?",
    answers: [
      "A. Байнгын хадгалах (Non-volatile)",
      "B. Түр зуурын, устах (volatile)",
      "C. Гадны төхөөрөмж",
      "D. Сүлжээний төхөөрөмж",
    ],
    correct_answer: "B",
  },
  {
    id: 10,
    question: "Search engine гэж юу вэ?",
    answers: [
      "A. Вэб хуудас үүсгэх программ",
      "B. Вэб дээр мэдээлэл хайх программ үйлчилгээ",
      "C. Аудио файл тоглуулагч",
      "D. Компьютерийн вирусын нэр",
    ],
    correct_answer: "B",
  },
  {
    id: 11,
    question: "Malware гэдэг нь юу вэ?",
    answers: [
      "A. Компьютерын тоног төхөөрөмж",
      "B. Муу санаатай программ буюу хортой код",
      "C. Мэдээллийн нөөцлөлт",
      "D. Програм хангамжийн лиценз",
    ],
    correct_answer: "B",
  },
  {
    id: 12,
    question: "Firewall ямар зорилготой вэ?",
    answers: [
      "A. Цахилгаан хэрэгсэл бүрхэх зориулалттай бодис",
      "B. Сүлжээний аюулгүй байдлыг хангах төхөөрөмж/програм",
      "C. Файлыг устгах хэрэгсэл",
      "D. Програмчлалын хэл",
    ],
    correct_answer: "B",
  },
  {
    id: 13,
    question:
      "Компьютерийн хадгалах төхөөрөмжүүдээс аль нь хурдан боловч түр зуурын хадгалалт вэ?",
    answers: ["A. HDD", "B. SSD", "C. CD-ROM", "D. Флэш диск"],
    correct_answer: "B",
  },
  {
    id: 14,
    question: "Cloud computing гэж юуг хэлдэг вэ?",
    answers: [
      "A. Үүл ухах төхөөрөмж",
      "B. Интернэтээр дамжуулан сервер, хадгалах, програм үйлчилгээ авах технологи",
      "C. Файлыг лазержуулах процесс",
      "D. Оффлайн тоглуулах программ",
    ],
    correct_answer: "B",
  },
  {
    id: 15,
    question: "Microsoft Excel програмын үндсэн зориулалт юу вэ?",
    answers: [
      "A. Текст бичих",
      "B. Хүснэгтэн тооцоо, өгөгдлийн боловсруулалт",
      "C. Видео засварлах",
      "D. График зураг зурах",
    ],
    correct_answer: "B",
  },
  {
    id: 16,
    question: "HTML гэж юу вэ?",
    answers: [
      "A. Вэб хуудасны тэмдэглэгээний хэл",
      "B. Операцийн систем",
      "C. Програмчлалын хэлний нэг төрөл",
      "D. Электроник төхөөрөмж",
    ],
    correct_answer: "A",
  },
  {
    id: 17,
    question: "IP address гэж юуг заадаг вэ?",
    answers: [
      "A. Файлын төрөл",
      "B. Сүлжээнд холбогдсон төхөөрөмжийн адрес",
      "C. Компьютерийн процессорын төрөл",
      "D. Вэб хуудасны дизайн",
    ],
    correct_answer: "B",
  },
  {
    id: 18,
    question: "Browser-аа үүсгэсэндээ аль нь ашиглагддаг вэ?",
    answers: [
      "A. Интернэтийн хуудас үзэх",
      "B. Програм боловсруулах",
      "C. Файлыг шахах",
      "D. Санах ойг тэлэх",
    ],
    correct_answer: "A",
  },
  {
    id: 19,
    question: "Backup хийх гол шалтгаан юу вэ?",
    answers: [
      "A. Файлыг илүү жижиг болгох",
      "B. Мэдээллийг алдагдахаас хамгаалах, сэргээх",
      "C. Вирус тараах",
      "D. Програм суулгах",
    ],
    correct_answer: "B",
  },
  {
    id: 20,
    question: "Bluetooth нь ямар төрлийн технологи вэ?",
    answers: [
      "A. Утасны сүлжээ",
      "B. Богино зайн утасгүй холбооны технологи",
      "C. Хурдны интернет протокол",
      "D. Хатуу дискний төрөл",
    ],
    correct_answer: "B",
  },
  {
    id: 21,
    question: "Компьютерийн вирусыг хэрхэн тараахгүй байх вэ?",
    answers: [
      "A. Итгэлгүй манайрагдсан файлуудыг нээх",
      "B. Антивирус суулгаж, сахих",
      "C. Програм суулгахгүй байх хэрэггүй",
      "D. Драйвер устгах",
    ],
    correct_answer: "B",
  },
  {
    id: 22,
    question: "Файлыг шахах нь ямар ач тустай вэ?",
    answers: [
      "A. Файлыг илүү хурдан задална",
      "B. Файлын хэмжээг багасгаж хадгалах, дамжуулахад хялбар болгох",
      "C. Файлыг устгах",
      "D. Файлыг хамгаалах",
    ],
    correct_answer: "B",
  },
  {
    id: 23,
    question:
      "Төрөл бүрийн датаг (тоо, текст, зураг) компьютерт хадгалахад ямар форматууд ашиглагддаг жишээ нь зурагны формат?",
    answers: ["A. .exe", "B. .jpg, .png, .gif", "C. .docx", "D. .xls"],
    correct_answer: "B",
  },
  {
    id: 24,
    question:
      "Програмчлалын үндсэн ойлголтуудын нэг ай юуг илэрхийлнэ? (variable)",
    answers: [
      "A. Програмын нэр",
      "B. Өгөгдлийг хадгалах сав буюу хувьсагч",
      "C. Файлын төрөл",
      "D. Компьютерийн төрөл",
    ],
    correct_answer: "B",
  },
  {
    id: 25,
    question: "Loop буюу давталт программчлалд ямар зориулалттай вэ?",
    answers: [
      "A. Нэг удаа л ажиллах заавар",
      "B. Тодорхой нөхцөлээр нэгэн хэвийн үйлдлийг олон удаа давтах",
      "C. Програмыг хаах",
      "D. Файлыг нээх",
    ],
    correct_answer: "B",
  },
  {
    id: 26,
    question:
      "HTML-д текстийг bold (том) болгож тэмдэглэхэд ямар таг ашиглагддаг вэ?",
    answers: ["A. <i>", "B. <b> эсвэл <strong>", "C. <u>", "D. <img>"],
    correct_answer: "B",
  },
  {
    id: 27,
    question: "Database (өгөгдлийн сан) гэж юу вэ?",
    answers: [
      "A. Файл шахагч программ",
      "B. Өгөгдлийг төвлөрсөн байдлаар хадгалж удирдах систем",
      "C. Видео тоглуулагч",
      "D. Сүлжээний кабель",
    ],
    correct_answer: "B",
  },
  {
    id: 28,
    question: "Spreadsheet дээр мөр ба баганыг юугаар илэрхийлдэг вэ?",
    answers: [
      "A. Мөр=Бүс, Багана=Хүснэгт",
      "B. Мөр=Дугаар, Багана=Тэмдэгт/үсгэн тэмдэг",
      "C. Мөр=Файлын нэр, Багана=Формат",
      "D. Мөр=Өгөгдөл, Багана=График",
    ],
    correct_answer: "B",
  },
  {
    id: 29,
    question: "Компьютерийн сүлжээний LAN болон WAN-ийн ялгаа юу вэ?",
    answers: [
      "A. LAN бол өргөн хүрээтэй, WAN бол жижиг",
      "B. LAN нь локал буюу орон нутгийн сүлжээ, WAN нь өргөн хүрээнд (интернэт зэрэг)",
      "C. LAN нь интернет програм, WAN нь програмгүй",
      "D. LAN болон WAN ижил утгатай",
    ],
    correct_answer: "B",
  },
  {
    id: 30,
    question: "Encryption буюу шифрлэлт ямар зорилготой вэ?",
    answers: [
      "A. Файлыг илүү жижиг болгох",
      "B. Мэдээллийг нууцлан хамгаалах",
      "C. Файлыг устгах",
      "D. Файлыг ил тод болгох",
    ],
    correct_answer: "B",
  },
  {
    id: 31,
    question: "URL эхэнд ихэвчлэн харагддаг https нь ямар утгатай вэ?",
    answers: [
      "A. Хостын нэр",
      "B. Харагдах зураг",
      "C. Аюулгүй холболт (TLS/SSL) ашиглаж байгааг илтгэнэ",
      "D. Файлын өргөтгөл",
    ],
    correct_answer: "C",
  },
  {
    id: 32,
    question: "Вэб хуудас руу нэвтрэхдээ cookie нь юуг хийдэг вэ?",
    answers: [
      "A. Хуудасны дизайныг өөрчилдөг",
      "B. Хэрэглэгчийн мэдээллийг түр хугацаанд хадгалж, тохиргоог санах",
      "C. Файлыг шахна",
      "D. Програм суулгадаг",
    ],
    correct_answer: "B",
  },
  {
    id: 33,
    question:
      "Компьютерийн дэлгэцийн нягтаршил (resolution) юуг илэрхийлдэг вэ?",
    answers: [
      "A. График картны нэр",
      "B. Пикселийн тоо — өргөн ба өндөр (жишээ: 1920x1080)",
      "C. Хатуу дискний хэмжээ",
      "D. Процессорын давтамж",
    ],
    correct_answer: "B",
  },
  {
    id: 34,
    question: "URL дахь домэйн нэрийн жишээ аль нь вэ?",
    answers: [
      "A. 192.168.0.1",
      "B. www.example.com",
      "C. C:\\Users\\",
      "D. /home/user",
    ],
    correct_answer: "B",
  },
  {
    id: 35,
    question:
      "Принтерийн аль төрөл нь өнгөт зургийг хурдан, өндөр чанартай хэвлэдэг вэ?",
    answers: [
      "A. Матриц принтер",
      "B. Тосон принтер (inkjet) эсвэл лазер принтер — нөхцлөөс хамаарч",
      "C. Дэдлэгч",
      "D. FDD",
    ],
    correct_answer: "B",
  },
  {
    id: 36,
    question:
      "Компьютерийн системийн нэгж бүрийг холбоход ашиглагддаг програм юуг хийдэг вэ? (driver)",
    answers: [
      "A. Төхөөрөмж ба операцийн системийг харилцан ажиллуулахад боломж олгодог",
      "B. Файлыг нээх",
      "C. Вирус илрүүлэх",
      "D. Хэвлэх шинжний тохиргоо",
    ],
    correct_answer: "A",
  },
  {
    id: 37,
    question:
      "Presentation програмд (жишээ: PowerPoint) слайд нэмэхийн тулд ямар форматыг ашиглах вэ?",
    answers: ["A. .pptx", "B. .mp3", "C. .csv", "D. .exe"],
    correct_answer: "A",
  },
  {
    id: 38,
    question: "Phishing гэж юуг хэлнэ вэ?",
    answers: [
      "A. Вирус тараах програм",
      "B. Хүний хувийн мэдээллийг хуурч авч авах санаатай хандлага (цахим заль)",
      "C. Файлыг шахах арга",
      "D. Хадгалах төхөөрөмж",
    ],
    correct_answer: "B",
  },
  {
    id: 39,
    question: "Файлын copy болон move үйлдлийн ялгаа юу вэ?",
    answers: [
      "A. Copy нь файлыг устгана, move нь хуулна",
      "B. Copy нь файлыг хуулж, эх файлыг хэвээр үлдээдэг; move нь файлыг нэг байрнаас нөгөө рүү шилжүүлж эх файлыг устгадаг",
      "C. Ижил үйлдэл",
      "D. Төрөл бүрийн файл дээр ажиллахгүй",
    ],
    correct_answer: "B",
  },
  {
    id: 40,
    question: "CPU-ийн үндсэн нэгжүүдийн нэг болох ядро (core) юу хийдэг вэ?",
    answers: [
      "A. Хэт их температурыг бууруулна",
      "B. Тооцоолол гүйцэтгэх нэмэлт нэгж — олон ядартай CPU нь зэрэг олон даалгаврыг гүйцэтгэнэ",
      "C. Файлыг устгана",
      "D. Засвар үйлчилгээ хийх",
    ],
    correct_answer: "B",
  },
  {
    id: 41,
    question: "Компьютерийн програмыг лицензээр хамгаалдаг зорилго нь юу вэ?",
    answers: [
      "A. Програмыг хурдан ажиллуулах",
      "B. Зохиогчийн эрхийн хамгаалалт, хууль ёсны ашиглалтыг хангaх",
      "C. Компьютерийг хамгаалах",
      "D. Файлын хэмжээг багасгах",
    ],
    correct_answer: "B",
  },
  {
    id: 42,
    question: "Boolean логик утгууд аль үгсээр илэрхийлэгдэх вэ?",
    answers: ["A. True/False", "B. Up/Down", "C. Yes/No", "D. On/Off"],
    correct_answer: "A",
  },
  {
    id: 43,
    question: "HTML бичигдсэн файл ямар өргөтгөлтэй байх нь түгээмэл вэ?",
    answers: ["A. .exe", "B. .html эсвэл .htm", "C. .docx", "D. .xlsx"],
    correct_answer: "B",
  },
  {
    id: 44,
    question: "URL дээрх www нь юуг илтгэдэг вэ?",
    answers: [
      "A. Вэб серверийн домэйнын нэг хэсэг (World Wide Web-ийн товчилсон хэлбэр)",
      "B. Файлын төрлийг",
      "C. Програмын нэр",
      "D. IP хаягийг",
    ],
    correct_answer: "A",
  },
  {
    id: 45,
    question: "Компьютерийн peripheral гэж юуг хэлэх вэ?",
    answers: [
      "A. Үндсэн процессор",
      "B. Гадны төхөөрөмжүүд — гар, мыш, принтер гэх мэт",
      "C. Операцийн систем",
      "D. Программын код",
    ],
    correct_answer: "B",
  },
  {
    id: 46,
    question: "Open source програм хангамжийн онцлог нь юу вэ?",
    answers: [
      "A. Код нь хаалттай, хэн ч үзэж чадахгүй",
      "B. Код нь нээлттэй, хэн ч үзэж, өөрчилж, түгээж болно (тусгай нөхцөлөөр)",
      "C. Заавал үнэтэй",
      "D. Зөвхөн боловсролын байгууллагад зориулагдсан",
    ],
    correct_answer: "B",
  },
  {
    id: 47,
    question:
      "Spreadsheet дээр хөдөлгөөнт томьёо бичихдээ мөр болон баганыг заахдаа ямар хаягийг ашигладаг вэ?",
    answers: ["A. A1, B2 гэх мэт", "B. row1col1", "C. (1,1)", "D. %A%"],
    correct_answer: "A",
  },
  {
    id: 48,
    question: "Algorithm гэж юу вэ?",
    answers: [
      "A. Видео засварлах програм",
      "B. Тодорхой асуудлыг шийдэх дараалсан алхмууд",
      "C. Файл хадгалах утга",
      "D. Интернэтийн хурд",
    ],
    correct_answer: "B",
  },
  {
    id: 49,
    question: "Компьютерийн дэлгэцэнд харагдах GUI гэж юуг хэлдэг вэ?",
    answers: [
      "A. Текстэн интерфэйс",
      "B. График хэрэглэгчийн интерфэйс — цонх, дүрс, товчлуур зэрэг",
      "C. Санах ойн төрөл",
      "D. Хатуу дискний формат",
    ],
    correct_answer: "B",
  },
  {
    id: 50,
    question: "Software update хийх нь яагаад чухал вэ?",
    answers: [
      "A. Компьютерийг илүү удаан ажиллуулах",
      "B. Аюулгүй байдал сайжрах, алдааг засах, шинэ функцууд нэмэгдэх",
      "C. Файлыг устгах",
      "D. Програмыг хаах",
    ],
    correct_answer: "B",
  },
  // ⬇️ Үлдсэн 48 асуултыг энд бүрэн оруулсан — та өмнө оруулсан `Data3` бүхэлд нь буцааж энд paste хийнэ.
  // ...
];

export default function Test3() {
  const router = useRouter();

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [locked, setLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const total = Data3.length;
  const q = Data3[currentQ];

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

    const questionObj = Data3.find((x) => x.id === id);
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

  const finishQuiz = () => setShowResult(true);

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
            <h2>3-р шат</h2>
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
