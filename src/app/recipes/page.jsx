"use client";

import { useEffect, useState } from "react";

export default function Recipes() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recipes") || "[]");
    setRecipes(data);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">

      {recipes.length === 0 && (
        <p>No matching recipes found</p>
      )}

      {recipes.map(recipe => (
        <div key={recipe.id} className="card bg-base-100 shadow-xl">

          <figure>
            <img src={recipe.image} alt={recipe.name} />
          </figure>

          <div className="card-body">

            <h2 className="card-title">
              {recipe.name}
            </h2>

            <p>Cook Time: {recipe.cookTime}</p>

          </div>

        </div>
      ))}

    </div>
  );
}
