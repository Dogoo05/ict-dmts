"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Data3 from "../utils/test-3";

export default function Test3() {
  const router = useRouter();

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [locked, setLocked] = useState(false);

  const [timeLeft, setTimeLeft] = useState(30); // ⏳ 30 секундийн хугацаа

  const total = Data3.length;
  const q = Data3[currentQ];

  // Таймер ажиллуулах
  useEffect(() => {
    if (showResult) return;

    if (timeLeft === 0) {
      // хугацаа дууссан бол дараагийн асуулт руу автоматаар орно
      const next = currentQ + 1;
      if (next >= total) {
        setShowResult(true);
      } else {
        setCurrentQ(next);
        setTimeLeft(30); // дараагийн асуултанд дахин 30 секунд
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
        setTimeLeft(30); // шинэ асуулт эхлэхэд таймерийг дахин эхлүүлэх
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
    setTimeLeft(30); // дахин эхлэхэд таймерийг 30 болгоно
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
          {/* Таймер харуулах */}
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
