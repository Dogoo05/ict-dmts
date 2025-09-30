"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// --- Quiz өгөгдөл (10 асуулт) ---
const quizData = [
  {
    question: "“Объект” гэж юу вэ?",
    options: [
      "Бодит ертөнцийн аливаа зүйл, үзэгдэл",
      "Зөвхөн компьютерийн програм",
      "Зураг",
      "Тоо",
    ],
    answer: "Бодит ертөнцийн аливаа зүйл, үзэгдэл",
  },
  {
    question: "Объект ямар шинж чанартай байдаг вэ?",
    options: [
      "Зөвхөн өнгө",
      "Зөвхөн хэмжээ",
      "Өнгө, хэлбэр, хэмжээ, байрлал",
      "Зөвхөн нэр",
    ],
    answer: "Өнгө, хэлбэр, хэмжээ, байрлал",
  },
  {
    question: "Объектын үйл ажиллагаа гэж юу вэ?",
    options: [
      "Объектын нэр",
      "Объектын хийж чадах ажил",
      "Объектын хэмжээ",
      "Объектын өнгө",
    ],
    answer: "Объектын хийж чадах ажил",
  },
  {
    question: "Нар, сар, одод ямар объектод хамаарах вэ?",
    options: [
      "Байгалийн объект",
      "Хиймэл объект",
      "Сэтгэхүйн объект",
      "Загвар",
    ],
    answer: "Байгалийн объект",
  },
  {
    question: "Загвар гэж юу вэ?",
    options: [
      "Жижиг хэмжээтэй зүйл",
      "Объектыг орлуулж дүрслэн үзүүлсэн зүйл",
      "Бодит объект",
      "Зураг",
    ],
    answer: "Объектыг орлуулж дүрслэн үзүүлсэн зүйл",
  },
  {
    question: "Газрын зураг ямар төрлийн загвар вэ?",
    options: ["Бодит", "Бэлгэдлийн", "Тоон", "Текстэн"],
    answer: "Бэлгэдлийн",
  },
  {
    question: "Загварын гол зорилго юу вэ?",
    options: [
      "Чимэглэл хийх",
      "Судлах, турших, төсөөлөх",
      "Зураг зурах",
      "Бичих",
    ],
    answer: "Судлах, турших, төсөөлөх",
  },
  {
    question: "Хүүхэлдэй байшин ямар загвар вэ?",
    options: [
      "Тоон загвар",
      "Бодит (материаллаг) загвар",
      "Бэлгэдлийн загвар",
      "Дижитал загвар",
    ],
    answer: "Бодит (материаллаг) загвар",
  },
  {
    question: "Сэтгэхүйн объект гэж юу вэ?",
    options: [
      "Бодит зүйл",
      "Хүний толгойд бий болсон төсөөлөл",
      "Компьютерийн програм",
      "Материаллаг зүйл",
    ],
    answer: "Хүний толгойд бий болсон төсөөлөл",
  },
  {
    question: "Тоон загварын жишээ аль нь вэ?",
    options: [
      "Газрын зураг",
      "Математикийн томъёо",
      "Хүүхэлдэй байшин",
      "Зураг",
    ],
    answer: "Математикийн томъёо",
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousScores, setPreviousScores] = useState([]);
  const [showPrevious, setShowPrevious] = useState(false);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("allScores")) || [];
    setPreviousScores(savedScores);
  }, []);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    let newScore = score;

    if (option === quizData[currentQuestion].answer) {
      newScore += 1;
      setScore(newScore);
    }

    setTimeout(() => {
      const next = currentQuestion + 1;
      if (next < quizData.length) {
        setCurrentQuestion(next);
        setSelectedOption(null);
      } else {
        setShowResult(true);
        const savedScores = JSON.parse(localStorage.getItem("allScores")) || [];
        savedScores.push(newScore);
        localStorage.setItem("allScores", JSON.stringify(savedScores));
        setPreviousScores(savedScores);
      }
    }, 1200);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setShowPrevious(false);
  };

  const xp = score * 10;
  const average = Math.round((score / quizData.length) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-xl w-full relative border-t-8 border-blue-500">
        {!showResult ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
              Асуулт {currentQuestion + 1} / {quizData.length}
            </h2>

            <button
              onClick={() => setShowPrevious(!showPrevious)}
              className="mb-3 bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg font-medium shadow transition"
            >
              {showPrevious ? "Өмнөх оноо хаах" : "Өмнөх оноо харах"}
            </button>

            {showPrevious && previousScores.length > 0 && (
              <div className="mb-6 max-h-40 overflow-y-auto p-3 border rounded-xl bg-gray-50">
                {previousScores.map((s, i) => (
                  <div
                    key={i}
                    className="text-sm text-gray-700 py-1 border-b last:border-b-0"
                  >
                    Тест {i + 1}:{" "}
                    <span className="font-semibold">{s} оноо</span>
                  </div>
                ))}
              </div>
            )}

            <p className="mb-6 text-lg font-medium text-gray-800">
              {quizData[currentQuestion].question}
            </p>

            <div className="space-y-3">
              {quizData[currentQuestion].options.map((option, index) => {
                let buttonStyle =
                  "w-full py-3 px-5 rounded-xl shadow text-white font-medium transition ";
                if (selectedOption) {
                  if (option === quizData[currentQuestion].answer)
                    buttonStyle += "bg-green-500";
                  else if (option === selectedOption)
                    buttonStyle += "bg-red-500";
                  else buttonStyle += "bg-blue-400";
                } else {
                  buttonStyle += "bg-blue-500 hover:bg-blue-600";
                }

                return (
                  <button
                    key={index}
                    onClick={() => !selectedOption && handleAnswer(option)}
                    className={buttonStyle}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-4 text-green-700">
              🎉 Тест дууслаа!
            </h2>
            <p className="text-lg mb-2">
              Зөв хариулт:{" "}
              <span className="font-semibold">
                {score} / {quizData.length}
              </span>
            </p>
            <p className="text-lg mb-2 text-green-600">XP: {xp}</p>
            <p className="text-lg mb-4 text-purple-600">Дундаж: {average}%</p>

            <button
              onClick={() => setShowPrevious(!showPrevious)}
              className="mb-3 bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg font-medium shadow transition"
            >
              {showPrevious ? "Өмнөх оноо хаах" : "Өмнөх оноо харах"}
            </button>

            {showPrevious && previousScores.length > 0 && (
              <div className="mb-4 max-h-40 overflow-y-auto p-3 border rounded-xl bg-gray-50">
                {previousScores.map((s, i) => (
                  <div
                    key={i}
                    className="text-sm text-gray-700 py-1 border-b last:border-b-0"
                  >
                    Тест {i + 1}:{" "}
                    <span className="font-semibold">{s} оноо</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={restartQuiz}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-xl font-semibold shadow transition"
              >
                Дахин эхлэх
              </button>

              <Link
                href="/buleg1"
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-xl font-semibold shadow transition"
              >
                Гарах
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
