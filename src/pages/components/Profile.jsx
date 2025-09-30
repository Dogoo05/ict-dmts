"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("admin@example.com");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrl3tOPa3g-EoyzJT88YBeX4oFkZIFKh_7yA&s"
  );
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.replace("/login");
    } else {
      setUsername(localStorage.getItem("username") || "Admin");
      setPhone(localStorage.getItem("phone") || "99999999");
      setProfileImage(
        localStorage.getItem("profileImage") ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrl3tOPa3g-EoyzJT88YBeX4oFkZIFKh_7yA&s"
      );
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("phone");
    localStorage.removeItem("profileImage");
    router.replace("/login");
  };

  const handleSave = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("phone", phone);
    localStorage.setItem("profileImage", profileImage);
    setIsEditing(false);
  };

  // Зураг upload хийх
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // base64 болгож state-д хадгална
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[420px] p-6 flex flex-col items-center border border-gray-200">
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-purple-400 shadow-lg mb-4 object-cover"
        />

        {!isEditing ? (
          <>
            {/* Username & Email */}
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              {username}
            </h1>
            <p className="text-gray-500 mb-1 text-sm">{email}</p>
            <p className="text-gray-600 mb-4 text-sm">📱 {phone}</p>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-lg text-sm shadow hover:from-blue-600 hover:to-indigo-600 transition"
            >
              Засах
            </button>
          </>
        ) : (
          <>
            {/* Edit Form */}
            <div className="w-full flex flex-col gap-3 mb-4">
              <input
                type="text"
                placeholder="Нэрээ оруулах"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-purple-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                type="text"
                placeholder="Утасны дугаар"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-purple-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 outline-none"
              />

              {/* File upload */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="border border-purple-300 rounded-lg px-3 py-2 text-sm file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-purple-500 file:text-white hover:file:bg-purple-600 cursor-pointer"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:from-green-500 hover:to-emerald-600 transition"
              >
                Хадгалах
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm shadow hover:bg-gray-300 transition"
              >
                Болих
              </button>
            </div>
          </>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full mt-6">
          <button
            onClick={() => router.push("/nuurhuudas")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium shadow hover:from-purple-600 hover:to-pink-600 transition w-full"
          >
            Нүүр хуудас руу буцах
          </button>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-400 to-red-600 text-white py-3 rounded-lg font-medium shadow hover:from-red-500 hover:to-red-700 transition w-full"
          >
            Гарах
          </button>
        </div>
      </div>
    </div>
  );
}
