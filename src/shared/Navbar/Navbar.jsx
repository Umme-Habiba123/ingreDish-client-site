"use client";

import { useState, useEffect } from "react";
import { ChefHat, Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // default

  // Load saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    let initialTheme = "light";
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (prefersDark) {
      initialTheme = "dark";
    }

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center text-gray-200 transition-transform hover:scale-105">
              <ChefHat className="w-5 h-5" />
            </div>
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              ingreDish
            </span>
          </div>

          {/* Desktop Navigation + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-10">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              FridgeCheck
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Recipes
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              How It Works
            </a>

            {/* Theme Toggle (visible on desktop) */}
            <label className="swap swap-rotate">
              {/* hidden checkbox that controls the theme */}
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />

              {/* Sun icon = light mode */}
              <Sun className="swap-off w-6 h-6 text-gray-300 hover:text-white" />

              {/* Moon icon = dark mode */}
              <Moon className="swap-on w-6 h-6 text-gray-300 hover:text-white" />
            </label>
          </div>

          {/* Mobile: Actions + Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Theme Toggle (small version for mobile) */}
            <label className="swap swap-rotate lg:hidden">
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <Sun className="swap-off w-5 h-5 text-gray-300" />
              <Moon className="swap-on w-5 h-5 text-gray-300" />
            </label>

            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl border-t border-gray-800/60 px-5 py-6 space-y-5">
          <a
            href="#"
            className="block text-gray-200 hover:text-white text-base font-medium transition-colors"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-200 hover:text-white text-base font-medium transition-colors"
            onClick={closeMenu}
          >
            FridgeCheck
          </a>
          <a
            href="#"
            className="block text-gray-200 hover:text-white text-base font-medium transition-colors"
            onClick={closeMenu}
          >
            Recipes
          </a>
          <a
            href="#"
            className="block text-gray-200 hover:text-white text-base font-medium transition-colors"
            onClick={closeMenu}
          >
            How It Works
          </a>

          <button
            className="w-full mt-4 px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 rounded-xl font-medium transition-all"
            onClick={() => {
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
              closeMenu();
            }}
          >
            Open Fridge
          </button>
        </div>
      </div>
    </nav>
  );
}