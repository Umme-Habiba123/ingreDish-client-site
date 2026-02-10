"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="w-full border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black transition">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black dark:text-white">
          Ingredish
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle Icon */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-400 
                       bg-gray-200 dark:bg-gray-800 
                       hover:scale-110 transition"
          >
            {isDark ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-800 text-lg" />
            )}
          </button>

          {/* Login / Logout */}
          <button
            onClick={handleAuth}
            className="px-5 py-2 rounded-lg font-medium border border-gray-400 
                       bg-black text-white hover:bg-gray-800
                       dark:bg-white dark:text-black dark:hover:bg-gray-200
                       transition"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>

        </div>
      </div>
    </nav>
  );
}
