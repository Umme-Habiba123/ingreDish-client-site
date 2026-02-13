"use client";

import { useState, useEffect } from "react";
import { ChefHat, Plus, X, Zap } from "lucide-react";

const images = [
  "https://thumbs.dreamstime.com/b/capture-cinematic-mood-dimly-lit-kitchen-under-soft-glow-twilight-atmosphere-should-exude-sense-mystery-as-379836660.jpg",
  "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2024/03/dark-food-photography-100.jpg?fit=1500%2C1000&ssl=1",
  "https://thumbs.dreamstime.com/b/empty-dark-marble-kitchen-countertop-blurred-warm-background-352019696.jpg",
  "https://thumbs.dreamstime.com/b/rustic-kitchen-interior-design-wooden-table-countertop-shelves-soft-lighting-warm-cozy-atmosphere-home-decor-modern-minimalist-385588447.jpg",
];

const quickIngredients = ["Chicken", "Rice", "Tomato", "Eggs", "Onion", "Garlic", "Potato", "Pasta"];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ingredients, setIngredients] = useState(["Eggs", "Tomato", "Onion"]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // slower change for calmer feel
    return () => clearInterval(timer);
  }, []);

  const addIngredient = (item) => {
    const trimmed = (item || input).trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients([...ingredients, trimmed]);
      setInput("");
    }
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const clearAll = () => setIngredients([]);

  const suggestRecipes = () => {
    if (ingredients.length === 0) {
      alert("Add at least one ingredient to get suggestions.");
      return;
    }
    alert(`Searching recipes for: ${ingredients.join(", ")}\n\nMissing ingredients will be highlighted in results.`);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Darker slider with lower effective opacity via stronger overlay */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
            i === currentSlide ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Stronger dark overlay → makes bg images feel dim & moody */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65 z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <ChefHat className="w-11 h-11 text-gray-300" />
            <div>
              <p className="text-gray-400 font-medium tracking-widest text-sm uppercase">Smart Kitchen Helper</p>
              <h1 className="text-6xl md:text-7xl font-extrabold leading-none text-white">FridgeCheck</h1>
            </div>
          </div>

          <p className="text-4xl md:text-5xl font-light text-gray-200 mb-8">
            What can I cook today?
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-md mb-12 leading-relaxed">
            Add what’s in your fridge. Get instant recipe ideas — missing ingredients shown clearly.
          </p>

          {/* Glassmorphic card – subtle white/gray on dark */}
          <div className="card bg-black/40 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-3xl overflow-hidden">
            <div className="card-body p-8 md:p-10">
              <div className="join w-full">
                <input
                  type="text"
                  placeholder="Add ingredient (chicken, rice...)"
                  className="input join-item flex-1 bg-gray-900/60 border-gray-600 text-white placeholder:text-gray-500 focus:border-gray-400 focus:outline-none rounded-l-2xl"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addIngredient()}
                />
                <button
                  className="btn join-item bg-gray-800 hover:bg-gray-700 border-gray-600 text-white rounded-r-2xl"
                  onClick={() => addIngredient()}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Quick add chips – gray tones */}
              <div className="mt-7">
                <p className="text-xs text-gray-500 mb-3 flex items-center gap-2 uppercase tracking-wider">
                  <Zap className="w-4 h-4" /> Quick Add
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {quickIngredients.map((item) => (
                    <button
                      key={item}
                      onClick={() => addIngredient(item)}
                      className="btn btn-sm bg-gray-800/70 hover:bg-gray-700/90 border-gray-700 text-gray-200 text-xs rounded-full px-4"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ingredients list */}
              {ingredients.length > 0 && (
                <div className="mt-9">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-400">Your Ingredients</p>
                    <button onClick={clearAll} className="text-xs text-gray-500 hover:text-gray-300 transition">
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {ingredients.map((ing, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700 rounded-full px-6 py-2.5 text-gray-200 transition-all group"
                      >
                        <span>{ing}</span>
                        <button
                          onClick={() => removeIngredient(i)}
                          className="text-gray-500 group-hover:text-gray-300 transition"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={suggestRecipes}
                className="btn w-full mt-10 bg-gray-900 hover:bg-gray-800 text-white border-gray-700 text-base font-medium rounded-2xl py-6 shadow-inner"
              >
                Suggest Recipes
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            Practical. Efficient. Built for everyday cooking.
          </p>
        </div>
      </div>
    </section>
  );
}