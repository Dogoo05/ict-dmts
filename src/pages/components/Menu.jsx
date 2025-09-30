import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrl3tOPa3g-EoyzJT88YBeX4oFkZIFKh_7yA&s"
  );
  const router = useRouter();

  useEffect(() => {
    // login хийгээгүй бол /login руу буцаах
    if (localStorage.getItem("isLoggedIn") !== "true") {
      router.replace("/login");
    } else {
      // Profile зураг localStorage-с авна
      const savedImage = localStorage.getItem("profileImage");
      if (savedImage) {
        setProfileImage(savedImage);
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("profileImage");
    router.replace("/login");
  };

  return (
    <div className="sticky top-0 z-[100] bg-white shadow-md">
      <div className="flex flex-row items-center justify-between p-4 border-b-[4px] border-blue-600 ">
        {/* Logo хэсэг */}
        <div className="flex flex-row justify-center items-center gap-3 w-30 pl-[50px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUoo6qrbl67f3Yn3DZxmJfiKXPqInuzwOAjQ&s"
            alt=""
          />
          <div className="flex flex-col w-[100px]">
            <h1 className="font-extrabold text-[15px] text-blue-600 ">
              ICT platform
            </h1>
            <h3 className="text-[10px] text-gray-500">
              Мэдээлэл технологийн систем
            </h3>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex flex-row items-center justify-center gap-[50px] font-semibold pr-[50px] text-gray-700">
          <Link
            href="/"
            className="transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Нүүр хуудас
          </Link>
          <Link
            href="/hicheeluud"
            className="transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Хичээлүүд
          </Link>
          <Link
            href="/shivelt"
            className="transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Шивэлт
          </Link>
          <Link
            href="/testnuu"
            className="transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Тест
          </Link>
          <Link
            href="/onoo"
            className="transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Онооны самбар
          </Link>

          <Link className="flex flex-col items-center" href="/profile">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover border border-gray-300 shadow cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
              src={profileImage}
              alt="profile"
            />
            <h2>Profile</h2>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div
          className="sm:hidden flex items-center justify-center cursor-pointer gap-[10px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Link href="/profile">
            <img
              className="w-[40px] h-[40px] rounded-full object-cover border border-gray-300 shadow cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
              src={profileImage}
              alt="profile"
            />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="30px"
            width="30px"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-white p-4 border-t-2 border-blue-600">
          <Link
            href="/"
            className="block py-2 text-gray-700 transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Нүүр хуудас
          </Link>
          <Link
            href="/hicheeluud"
            className="block py-2 text-gray-700 transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Хичээлүүд
          </Link>
          <Link
            href="/shivelt"
            className="block py-2 text-gray-700 transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Шивэлт
          </Link>
          <Link
            href="/testnuu"
            className="block py-2 text-gray-700 transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Тест
          </Link>
          <Link
            href="/onoo"
            className="block py-2 text-gray-700 transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:translate-y-[-3px] hover:bg-blue-100 hover:px-2 hover:rounded-lg"
          >
            Онооны самбар
          </Link>
        </div>
      )}
    </div>
  );
}
