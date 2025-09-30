"use client";
import React, { useEffect, useState, useRef } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Menu from "./Menu";

const easyWords = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К"];
const mediumSentences = [
  "Миний нэрийг Бат гэдэг.",
  "Би сургуульдаа өдөр бүр явдаг.",
];
const hardSentences = [
  "Монгол Улс бол тусгаар тогтносон, бүрэн эрхт улс юм.",
  "Боловсрол бол хүн бүрийн хөгжлийн хамгийн чухал суурь юм.",
];

const layout = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Е", "Щ", "Backspace"],
  ["Tab", "Ф", "Ц", "У", "Ж", "Э", "Н", "Г", "Ш", "Ү", "З", "К", "[", "]"],
  ["CapsLock", "Й", "Ы", "Б", "Ө", "А", "Х", "Р", "О", "Л", "Д", "П", "Enter"],
  ["Shift", "Я", "Ч", "Ё", "С", "М", "И", "Т", "Ь", "В", "Ю", "-", "Shift"],
];

export default function KeyboardTrainer() {
  const [level, setLevel] = useState("easy");
  const [wordList, setWordList] = useState(easyWords);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [target, setTarget] = useState("");
  const [input, setInput] = useState("");
  const [blocked, setBlocked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPressed, setLastPressed] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [xp, setXp] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const timerRef = useRef(null);

  function pickRandom() {
    const choice = wordList[Math.floor(Math.random() * wordList.length)];
    setTarget(choice.toUpperCase());
    setInput("");
    setBlocked(false);
  }

  function startTimer() {
    clearInterval(timerRef.current);
    if (durationSeconds === 0) return;
    setTimeLeft(durationSeconds);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setBlocked(true);
          setIsRunning(false);
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  function changeLevel(newLevel) {
    if (newLevel === "easy") {
      setWordList(easyWords);
      setDurationSeconds(0);
      setTimeLeft(0);
    } else if (newLevel === "medium") {
      setWordList(mediumSentences);
      setDurationSeconds(60);
      setTimeLeft(60);
    } else if (newLevel === "hard") {
      setWordList(hardSentences);
      setDurationSeconds(180);
      setTimeLeft(180);
    }
    setLevel(newLevel);
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (blocked || !isRunning) return;
      const key = e.key.toUpperCase();

      if (/^[А-ЯӨҮЁ.,\-]$/.test(key)) {
        e.preventDefault();
        handleKeyClick(key);
      } else if (e.code === "Space") {
        e.preventDefault();
        handleKeyClick(" ");
      } else if (e.code === "Backspace") {
        e.preventDefault();
        handleKeyClick("АРИЛГАХ");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input, blocked, target, isRunning]);

  function handleKeyClick(k) {
    if (blocked || !isRunning) return;

    if (k === "ЗАЙ" || k === " ") {
      k = " ";
    } else if (k === "АРИЛГАХ") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    const expectedChar = target[input.length];
    const isCorrect = k === expectedChar;

    setLastPressed(k);
    setTotalCount((c) => c + 1);
    if (isCorrect) setCorrectCount((c) => c + 1);
    else setWrongCount((c) => c + 1);

    const newInput = input + k;
    setInput(newInput);

    if (newInput.length >= target.length) {
      setBlocked(true);
      const gainedXp = Math.max(
        Math.round((correctCount / (totalCount || 1)) * 10),
        1
      );
      setXp((x) => x + gainedXp);
      setTimeout(
        () => {
          pickRandom();
        },
        level === "easy" ? 200 : 800
      );
    }
  }

  function getKeyStyle(k) {
    return "bg-white text-black";
  }

  function handleStart() {
    setIsRunning(true);
    setBlocked(false);
    setShowResult(false);
    setCorrectCount(0);
    setWrongCount(0);
    setTotalCount(0);
    pickRandom();
    startTimer();
  }

  function handleStop() {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setBlocked(true);
    setShowResult(true);
  }

  function handleReset() {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setBlocked(false);
    setShowResult(false);
    setCorrectCount(0);
    setWrongCount(0);
    setTotalCount(0);
    setTimeLeft(durationSeconds);
    setInput("");
    setXp(0);
  }

  return (
    <div className="flex flex-col min-h-screen gap-5 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 items-center justify-center p-5">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-6 border-2 border-purple-300 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded hover:bg-gray-100"
            >
              <MenuIcon className="w-6 h-6 text-gray-700" />
            </button>
            <div>
              <div className="text-sm text-gray-500">Түвшин</div>
              <div className="text-2xl font-extrabold text-purple-700">
                {level === "easy"
                  ? "Easy"
                  : level === "medium"
                  ? "Medium"
                  : "Hard"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {durationSeconds > 0 && (
              <div className="text-xl font-mono font-bold text-gray-800">
                ⏱ {timeLeft}s
              </div>
            )}
            {!isRunning ? (
              <>
                <button
                  onClick={handleStart}
                  className="p-1 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md hover:from-green-500 hover:to-green-700"
                >
                  ▶ Start
                </button>
                <button
                  onClick={handleReset}
                  className="p-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700"
                >
                  ⟳ Reset
                </button>
              </>
            ) : (
              <button
                onClick={handleStop}
                className="p-1 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg shadow-md hover:from-red-500 hover:to-red-700"
              >
                ⏹ Stop
              </button>
            )}
          </div>
        </div>

        {/* Popup Menu */}
        {menuOpen && (
          <div className="absolute top-12 left-4 bg-white border rounded-xl shadow-lg p-3 space-y-2 z-50">
            <button
              onClick={() => changeLevel("easy")}
              className="block w-full text-left px-3 py-1 hover:bg-blue-50 rounded"
            >
              Easy (цагаан толгой, хугацаагүй)
            </button>
            <button
              onClick={() => changeLevel("medium")}
              className="block w-full text-left px-3 py-1 hover:bg-blue-50 rounded"
            >
              Medium (60s, өгүүлбэр)
            </button>
            <button
              onClick={() => changeLevel("hard")}
              className="block w-full text-left px-3 py-1 hover:bg-blue-50 rounded"
            >
              Hard (180s, өгүүлбэр)
            </button>
          </div>
        )}

        {/* Зорилго */}
        <div className="mb-4">
          <div className="text-gray-600 text-sm">Зорилго:</div>
          <div className="flex flex-wrap gap-1 mt-1">
            {Array.from(target).map((ch, i) => {
              const displayChar = ch === " " ? "\u00A0" : ch;
              const isCurrent = i === input.length && !blocked && isRunning;
              return (
                <span
                  key={i}
                  className="relative inline-block px-1 text-2xl font-mono font-bold text-black"
                >
                  {displayChar}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-[3px] rounded ${
                      isCurrent ? "bg-blue-200 animate-pulse" : "bg-gray-400"
                    }`}
                  />
                </span>
              );
            })}
          </div>
        </div>

        {/* Хэрэглэгчийн бичсэн */}
        <div className="mb-6">
          <div className="text-gray-600 text-sm">Таны бичсэн:</div>
          <div className="flex flex-wrap gap-1 mt-2">
            {Array.from(target).map((_, i) => {
              const typedChar = input[i];
              let status = "pending";
              if (typedChar != null)
                status = typedChar === target[i] ? "correct" : "wrong";

              const displayChar =
                typedChar != null
                  ? typedChar === " "
                    ? "\u00A0"
                    : typedChar
                  : "\u00A0";

              return (
                <span
                  key={i}
                  className={`relative inline-block px-1 text-2xl font-mono font-bold ${
                    status === "correct"
                      ? "text-green-600"
                      : status === "wrong"
                      ? "text-red-100"
                      : "text-gray-700"
                  }`}
                >
                  {displayChar}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-[3px] rounded ${
                      status === "correct"
                        ? "bg-green-500"
                        : status === "wrong"
                        ? "bg-red-500"
                        : ""
                    }`}
                  />
                </span>
              );
            })}
          </div>
        </div>

        {/* Keyboard */}
        <div className="flex flex-col gap-3">
          {layout.map((row, ri) => (
            <div key={ri} className="flex justify-center gap-2">
              {row.map((k) => (
                <button
                  key={k}
                  onClick={() => handleKeyClick(k)}
                  disabled={blocked || !isRunning}
                  className={`select-none rounded-lg p-1 text-auto font-semibold shadow-md active:scale-95 transition ${getKeyStyle(
                    k
                  )}`}
                >
                  {k}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Статистик */}
        <div className="text-[8px] mt-6 grid grid-cols-4 md:grid-cols-4 gap-3 text-center font-bold">
          <div className="p-1 bg-green-300 rounded-xl">
            ✅ Зөв: {correctCount}
          </div>
          <div className="p-1 bg-red-300 rounded-xl">
            ❌ Алдсан: {wrongCount}
          </div>
          <div className="p-1 bg-blue-300 rounded-xl">
            ⌨️ Нийт: {totalCount}
          </div>
          <div className="p-1 bg-yellow-300 rounded-xl">⭐ XP: {xp}</div>
        </div>

        {showResult && durationSeconds > 0 && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-50 text-center shadow-inner">
            <h2 className="text-lg font-bold mb-2 text-purple-700">
              ⏱ Хугацаа дууслаа!
            </h2>
            <p>✅ Зөв: {correctCount}</p>
            <p>❌ Алдсан: {wrongCount}</p>
            <p>⌨️ Нийт: {totalCount}</p>
            <p>⭐ XP: {xp}</p>
          </div>
        )}
      </div>

      <div>
        <img
          className="rounded-3xl shadow-xl border-4 border-white"
          src="https://cdn.vanderbilt.edu/vu-news/files/20190417220710/colored-keys.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
