"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Хэрэв аль хэдийн нэвтэрсэн бол шууд нүүр хуудсанд
    if (localStorage.getItem("isLoggedIn") === "true") {
      router.replace("/nuurhuudas");
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Зөв хэрэглэгч шалгах
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/nuurhuudas");
    } else {
      setError("Нэр эсвэл нууц үг буруу байна!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 transition-colors duration-500">
      <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl w-[400px] relative">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-purple-600">
          Нэвтрэх
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Нэвтрэх нэр"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border border-purple-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Нууц үг"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border border-purple-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-purple-500 font-medium hover:text-purple-700"
            >
              {showPassword ? "Нуух" : "Харах"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
          >
            Нэвтрэх
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500">
          Шинэ хэрэглэгч үү?{" "}
          <span className="text-purple-600 font-semibold cursor-pointer">
            Бүртгүүлэх
          </span>
        </p>
      </div>
    </div>
  );
}
