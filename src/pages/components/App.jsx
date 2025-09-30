import QuizApp from "./Quiz";

function ProgressBar({ value }) {
  return (
    <div>
      {/* Прогресс бар */}
      <div className="w-full bg-gray-200 h-3 rounded-full">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      {/* Хувь текст */}
      <p className="text-sm text-right text-gray-600 mt-1">{value}%</p>
    </div>
  );
}

export default function Apps() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <h1 className="text-lg font-semibold mb-4">Интернет гэж юу вэ?</h1>
      {/* Хүссэн хувь дамжуулна */}
      <ProgressBar value={50} />
    </div>
  );
}
