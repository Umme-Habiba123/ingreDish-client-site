"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { findRecipes } from "@/utils/findRecipes";

export default function Home() {

  const [selected, setSelected] = useState([]);
  const router = useRouter();

  const ingredients = [
    "rice",
    "egg",
    "chicken",
    "onion",
    "turmeric",
    "oil",
    "salt"
  ];

  const toggleIngredient = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter(i => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleFind = () => {

    const matched = findRecipes(selected);

    localStorage.setItem("recipes", JSON.stringify(matched));

    router.push("/recipes");
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Select Ingredients
      </h1>

      <div className="flex flex-wrap gap-3">

        {ingredients.map(item => (
          <button
            key={item}
            onClick={() => toggleIngredient(item)}
            className={`btn btn-sm ${
              selected.includes(item)
                ? "btn-success"
                : "btn-outline"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      <button
        onClick={handleFind}
        className="btn btn-primary mt-4"
      >
        Find Recipe
      </button>

    </div>
  );
}
