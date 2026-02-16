"use client";

import { useState } from "react";

export default function Gallery() {
  const [foods, setFoods] = useState([
    "/foods/food1.jpg",
    "/foods/food2.jpg",
    "/foods/food3.jpg",
    "/foods/food4.jpg",
    "/foods/food5.jpg",
    "/foods/food6.jpg",
    "/foods/food7.jpg",
    "/foods/food8.jpg",
  ]);

  const [showAll, setShowAll] = useState(false);
  const [newImage, setNewImage] = useState("");

  const handleAddImage = () => {
    if (newImage.trim() !== "") {
      setFoods([...foods, newImage]);
      setNewImage("");
    }
  };

  const visibleFoods = showAll ? foods : foods.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        🍽️ Food Gallery
      </h1>

      {/* Add Image Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
        <input
          type="text"
          placeholder="Enter Image URL"
          className="input input-bordered w-full sm:w-96"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button
          onClick={handleAddImage}
          className="btn btn-primary"
        >
          Add Food
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleFoods.map((food, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={food}
              alt="Food"
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* See All Button */}
      {foods.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-outline"
          >
            {showAll ? "Show Less" : "See All Food"}
          </button>
        </div>
      )}
    </div>
  );
}
