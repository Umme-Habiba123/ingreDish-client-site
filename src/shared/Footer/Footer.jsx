"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black mt-16 transition">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">Ingredish</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Cook smart with what you already have 🍅
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-black dark:hover:text-white">Home</a>
          <a href="#" className="hover:text-black dark:hover:text-white">Recipes</a>
          <a href="#" className="hover:text-black dark:hover:text-white">About</a>
        </div>

        {/* Theme Toggle */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-gray-600 dark:text-gray-400">Switch Theme</p>
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full border border-gray-400 
                       bg-gray-200 dark:bg-gray-800 
                       hover:scale-110 transition"
          >
            {isDark ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-800 text-lg" />
            )}
          </button>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Ingredish. All rights reserved.
      </div>
    </footer>
  );
}
